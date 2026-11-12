/**
 * EMPIRE CONSTRUCTION AND INFRASTRUCTURE
 * Main JavaScript Controller
 * Pure Vanilla JavaScript - No dependencies
 */

document.addEventListener("DOMContentLoaded", () => {
  initHeader();
  initMobileNav();
  initScrollAnimations();
  initProjects();
  initContactForm();
  initCurrentYear();
});

/* -------------------------------------------------------------
 * 1. HEADER & STICKY NAVIGATION
 * ----------------------------------------------------------- */
function initHeader() {
  const header = document.querySelector(".site-header");
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 20) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();
}

/* -------------------------------------------------------------
 * 2. MOBILE NAVIGATION DRAWER
 * ----------------------------------------------------------- */
function initMobileNav() {
  const toggleBtn = document.querySelector(".mobile-nav-toggle");
  const mobileNav = document.querySelector(".mobile-nav");
  const backdrop = document.querySelector(".mobile-nav-backdrop");

  if (!toggleBtn || !mobileNav || !backdrop) return;

  function toggleMenu() {
    const isOpen = mobileNav.classList.contains("open");
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  function openMenu() {
    toggleBtn.classList.add("open");
    mobileNav.classList.add("open");
    backdrop.classList.add("open");
    document.body.style.overflow = "hidden";
    toggleBtn.setAttribute("aria-expanded", "true");
  }

  function closeMenu() {
    toggleBtn.classList.remove("open");
    mobileNav.classList.remove("open");
    backdrop.classList.remove("open");
    document.body.style.overflow = "";
    toggleBtn.setAttribute("aria-expanded", "false");
  }

  toggleBtn.addEventListener("click", toggleMenu);
  backdrop.addEventListener("click", closeMenu);

  // Close when clicking any nav link inside mobile drawer
  const mobileLinks = mobileNav.querySelectorAll(".mobile-nav-link, a");
  mobileLinks.forEach(link => {
    link.addEventListener("click", () => {
      closeMenu();
    });
  });

  // Close on ESC key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && mobileNav.classList.contains("open")) {
      closeMenu();
    }
  });
}

/* -------------------------------------------------------------
 * 3. SCROLL REVEAL ANIMATIONS
 * ----------------------------------------------------------- */
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll(".fade-in-up");
  if (!animatedElements.length) return;

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          obs.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: "0px 0px -50px 0px",
      threshold: 0.1
    });

    animatedElements.forEach(el => observer.observe(el));
  } else {
    // Fallback for browsers without IntersectionObserver
    animatedElements.forEach(el => el.classList.add("visible"));
  }
}

/* -------------------------------------------------------------
 * 4. PROJECTS RENDERING, FILTERING & MODAL LIGHTBOX
 * ----------------------------------------------------------- */
function initProjects() {
  const projectsGrid = document.querySelector("#projectsGrid");
  const homeProjectsGrid = document.querySelector("#homeProjectsGrid");
  const filterButtons = document.querySelectorAll(".filter-btn");

  // A. Render Full Projects Grid (on projects.html)
  if (projectsGrid && typeof PROJECTS_DATA !== "undefined") {
    renderProjectCards(projectsGrid, PROJECTS_DATA);

    // Filter Button Clicks
    filterButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        filterButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        const filter = btn.getAttribute("data-filter") || "all";
        const filteredProjects = getProjects(filter);
        renderProjectCards(projectsGrid, filteredProjects);
      });
    });
  }

  // B. Render Featured Projects (on index.html)
  if (homeProjectsGrid && typeof PROJECTS_DATA !== "undefined") {
    // Show the 3 genuine company projects with authentic site photos
    const featured = [
      PROJECTS_DATA[0], // Laroo-Munad Road (Road Construction, Ongoing, Kulgam)
      PROJECTS_DATA[1], // Damjan Bridge (Bridge Construction, Ongoing, Qazigund)
      PROJECTS_DATA[2]  // Migrant Colony Chowgam (Building & Civil, Completed, Kulgam)
    ];
    renderProjectCards(homeProjectsGrid, featured);
  }

  // C. Setup Project Modal Elements
  setupProjectModal();
}

function renderProjectCards(container, items) {
  if (!container) return;

  if (!items || items.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 48px; background: #fff; border-radius: 12px; border: 1px solid #E2E8F0;">
        <p style="font-size: 1.1rem; color: #64748B;">No projects match the selected category filter.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = items.map(proj => {
    let statusClass = "status-completed";
    if (proj.statusCode === "ongoing") statusClass = "status-ongoing";
    if (proj.statusCode === "recent") statusClass = "status-recent";

    const badgeHtml = proj.isVerified
      ? `<span class="badge-verified"><i class="fa-solid fa-circle-check"></i> Company Project</span>`
      : `<span class="sample-badge"><i class="fa-solid fa-layer-group"></i> Illustrative Template</span>`;

    return `
      <article class="project-card fade-in-up visible" data-id="${proj.id}" role="button" tabindex="0" aria-label="View details for ${proj.title}">
        <div class="project-card-media">
          <img src="${proj.image}" alt="${proj.title}" loading="lazy" />
          <span class="project-status-pill ${statusClass}">${proj.status}</span>
          ${badgeHtml}
        </div>
        <div class="project-card-body">
          <div class="project-card-meta">
            <span class="project-card-location"><i class="fa-solid fa-location-dot"></i> ${proj.location}</span>
            <span>${proj.categoryLabel}</span>
          </div>
          <h3 class="project-card-title">${proj.title}</h3>
          <p class="project-card-desc">${proj.shortDesc}</p>
          <div class="project-card-footer">
            <span style="font-size: 0.8rem; color: #64748B;"><i class="fa-regular fa-calendar-check"></i> ${proj.completionDate}</span>
            <span class="project-view-btn">View Gallery &amp; Scope <i class="fa-solid fa-arrow-right"></i></span>
          </div>
        </div>
      </article>
    `;
  }).join("");

  // Attach click & enter listeners to new cards
  const cards = container.querySelectorAll(".project-card");
  cards.forEach(card => {
    const id = card.getAttribute("data-id");
    card.addEventListener("click", () => openProjectModal(id));
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openProjectModal(id);
      }
    });
  });
}

function setupProjectModal() {
  const modalOverlay = document.querySelector("#projectModal");
  if (!modalOverlay) return;

  const closeBtn = modalOverlay.querySelector(".modal-close-btn");
  if (closeBtn) {
    closeBtn.addEventListener("click", closeProjectModal);
  }

  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) {
      closeProjectModal();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalOverlay.classList.contains("open")) {
      closeProjectModal();
    }
  });
}

function openProjectModal(projectId) {
  const modalOverlay = document.querySelector("#projectModal");
  if (!modalOverlay || typeof getProjectById !== "function") return;

  const proj = getProjectById(projectId);
  if (!proj) return;

  let statusClass = "status-completed";
  if (proj.statusCode === "ongoing") statusClass = "status-ongoing";
  if (proj.statusCode === "recent") statusClass = "status-recent";

  const componentsHtml = proj.keyComponents
    ? proj.keyComponents.map(c => `<li><i class="fa-solid fa-circle-check" style="color: #F28C28; margin-right: 8px;"></i>${c}</li>`).join("")
    : "";

  const badgeOnPhoto = proj.isVerified
    ? `<span class="badge-verified" style="position: absolute; bottom: 20px; left: 20px;"><i class="fa-solid fa-circle-check"></i> Verified Company Project Record</span>`
    : `<span class="sample-badge" style="position: absolute; bottom: 20px; left: 20px;"><i class="fa-solid fa-layer-group"></i> Illustrative Project Template</span>`;

  const galleryHtml = (proj.gallery && proj.gallery.length > 1) ? `
    <div class="modal-gallery-strip">
      <div class="modal-gallery-title"><i class="fa-solid fa-images"></i> Project Photographs (${proj.gallery.length} Images — Click any to view):</div>
      <div class="modal-gallery-thumbs">
        ${proj.gallery.map((imgUrl, idx) => `
          <button type="button" class="modal-thumb-btn ${idx === 0 ? 'active' : ''}" data-src="${imgUrl}" aria-label="View photograph ${idx + 1}">
            <img src="${imgUrl}" alt="${proj.title} photo ${idx + 1}" loading="lazy" />
          </button>
        `).join("")}
      </div>
    </div>
  ` : "";

  modalOverlay.innerHTML = `
    <div class="modal-container" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
      <button class="modal-close-btn" aria-label="Close project modal">&times;</button>
      <div class="modal-media">
        <img id="modalMainImg" src="${proj.image}" alt="${proj.title}" style="transition: opacity 0.2s ease;" />
        <span class="project-status-pill ${statusClass}" style="position: absolute; top: 20px; right: 20px;">${proj.status}</span>
        ${badgeOnPhoto}
      </div>
      <div class="modal-body">
        <div class="modal-header-meta">
          <span class="badge-tag">${proj.categoryLabel}</span>
          <span style="font-size: 0.88rem; color: #64748B; font-weight: 600;">
            <i class="fa-solid fa-location-dot" style="color: #F28C28; margin-right: 5px;"></i>${proj.location}
          </span>
          <span style="font-size: 0.88rem; color: #64748B; font-weight: 600;">
            <i class="fa-regular fa-clock" style="color: #F28C28; margin-right: 5px;"></i>${proj.completionDate}
          </span>
        </div>
        <h2 id="modalTitle" class="modal-title">${proj.title}</h2>
        
        ${galleryHtml}

        <p class="modal-desc">${proj.fullDesc}</p>
        
        <h4 style="font-size: 1.1rem; color: #10243A; margin-bottom: 12px; font-weight: 700;">Key Project Details &amp; Specifications:</h4>
        <ul style="display: flex; flex-direction: column; gap: 8px; margin-bottom: 28px; font-size: 0.95rem; color: #334155;">
          ${componentsHtml}
        </ul>

        <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 14px; border-top: 1px solid #E2E8F0; padding-top: 20px;">
          <a href="contact.html?subject=${encodeURIComponent('Inquiry regarding ' + proj.title)}" class="btn btn-primary btn-sm">
            <i class="fa-solid fa-envelope"></i> Inquire About Similar Projects
          </a>
          <button class="btn btn-outline-navy btn-sm" onclick="closeProjectModal()">Close Details</button>
        </div>
      </div>
    </div>
  `;

  // Attach close listener to new button
  const newCloseBtn = modalOverlay.querySelector(".modal-close-btn");
  if (newCloseBtn) newCloseBtn.addEventListener("click", closeProjectModal);

  // Attach click listener to gallery thumbnails
  const thumbBtns = modalOverlay.querySelectorAll(".modal-thumb-btn");
  const mainImg = modalOverlay.querySelector("#modalMainImg");
  thumbBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      thumbBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const targetSrc = btn.getAttribute("data-src");
      if (mainImg && targetSrc) {
        mainImg.style.opacity = "0.3";
        setTimeout(() => {
          mainImg.src = targetSrc;
          mainImg.style.opacity = "1";
        }, 120);
      }
    });
  });

  modalOverlay.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeProjectModal() {
  const modalOverlay = document.querySelector("#projectModal");
  if (!modalOverlay) return;
  modalOverlay.classList.remove("open");
  document.body.style.overflow = "";
}

/* -------------------------------------------------------------
 * 5. CONTACT FORM VALIDATION & INTERACTIVE MAILING
 * ----------------------------------------------------------- */
function initContactForm() {
  const form = document.querySelector("#contactForm");
  if (!form) return;

  const feedback = document.querySelector("#formFeedback");
  const submitBtn = document.querySelector("#contactSubmitBtn");
  const copyEmailBtn = document.querySelector("#copyEmailBtn");

  // A. Pre-fill subject from URL query string if present (e.g. from project modal link)
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const subjectParam = urlParams.get("subject");
    if (subjectParam) {
      const subjectInput = form.querySelector("#contactSubject");
      if (subjectInput) {
        subjectInput.value = subjectParam;
      }
    }
  } catch (e) {
    // ignore
  }

  // B. 1-Click Copy Email Address handler
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener("click", () => {
      const email = "sarmad@empireinfra.in";
      navigator.clipboard.writeText(email).then(() => {
        const originalHtml = copyEmailBtn.innerHTML;
        copyEmailBtn.innerHTML = '<i class="fa-solid fa-check"></i> Copied!';
        copyEmailBtn.style.color = "#10B981";
        setTimeout(() => {
          copyEmailBtn.innerHTML = originalHtml;
          copyEmailBtn.style.color = "";
        }, 2500);
      }).catch(() => {
        prompt("Copy email address:", email);
      });
    });
  }

  // C. Form Submission Handling with multi-channel direct delivery
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = form.querySelector("#contactName") ? form.querySelector("#contactName").value.trim() : "";
    const email = form.querySelector("#contactEmail") ? form.querySelector("#contactEmail").value.trim() : "";
    const phone = form.querySelector("#contactPhone") ? form.querySelector("#contactPhone").value.trim() : "";
    const organization = form.querySelector("#contactOrg") ? form.querySelector("#contactOrg").value.trim() : "";
    const inquiryType = form.querySelector("#contactType") ? form.querySelector("#contactType").value : "General Inquiry";
    const subject = form.querySelector("#contactSubject") ? form.querySelector("#contactSubject").value.trim() : `Inquiry from ${name}`;
    const message = form.querySelector("#contactMessage") ? form.querySelector("#contactMessage").value.trim() : "";

    // Validation
    if (!name || !email || !message) {
      if (feedback) {
        feedback.className = "form-feedback error visible";
        feedback.innerHTML = '<i class="fa-solid fa-circle-exclamation"></i> Please fill in all required fields (Name, Email, and Project Details).';
        feedback.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      if (feedback) {
        feedback.className = "form-feedback error visible";
        feedback.innerHTML = '<i class="fa-solid fa-circle-exclamation"></i> Please enter a valid email address.';
        feedback.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
      return;
    }

    // Set button loading state
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Transmitting Inquiry to sarmad@empireinfra.in...';
    }

    const emailTo = "sarmad@empireinfra.in";
    const fullSubject = `[Website Inquiry] ${inquiryType}: ${subject || name} (${organization || "Direct"})`;

    const textBody =
      `Empire Construction and Infrastructure — Official Web Inquiry\n` +
      `============================================================\n\n` +
      `CLIENT / CONTACT DETAILS:\n` +
      `• Full Name: ${name}\n` +
      `• Organization: ${organization || "N/A"}\n` +
      `• Email: ${email}\n` +
      `• Phone Number: ${phone || "N/A"}\n` +
      `• Inquiry Category: ${inquiryType}\n\n` +
      `PROJECT SCOPE / MESSAGE:\n` +
      `${message}\n\n` +
      `============================================================\n` +
      `Dispatched via www.empireinfra.in | Head Office: 1st floor, Main chowk Mirbazar, 192101`;

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(emailTo)}&su=${encodeURIComponent(fullSubject)}&body=${encodeURIComponent(textBody)}`;
    const mailtoUrl = `mailto:${emailTo}?subject=${encodeURIComponent(fullSubject)}&body=${encodeURIComponent(textBody)}`;

    const payload = {
      name: name,
      email: email,
      phone: phone || "Not provided",
      organization: organization || "Not provided",
      inquiry_category: inquiryType,
      subject: subject || "Direct Inquiry",
      message: message,
      _subject: fullSubject,
      _replyto: email,
      _template: "table",
      _captcha: "false"
    };

    let transmissionSuccess = false;
    let activationNotice = false;

    try {
      const response = await fetch("https://formsubmit.co/ajax/sarmad@empireinfra.in", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(payload)
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok && (data.success === "true" || data.success === true)) {
        transmissionSuccess = true;
      } else if (data.message && data.message.includes("Activation")) {
        transmissionSuccess = true;
        activationNotice = true;
      } else {
        transmissionSuccess = false;
      }
    } catch (err) {
      console.warn("AJAX transmission fallback:", err);
      transmissionSuccess = false;
    }

    const escapeHtml = (str) => {
      const div = document.createElement("div");
      div.textContent = str;
      return div.innerHTML;
    };

    if (feedback) {
      feedback.className = "form-feedback visible " + (transmissionSuccess ? "success" : "info");

      let headerIcon = '<i class="fa-solid fa-circle-check" style="font-size: 1.4rem; color: #10B981;"></i>';
      let headerTitle = "Inquiry Successfully Transmitted!";
      let noteText = `Your project inquiry has been dispatched directly to <strong>${emailTo}</strong>. Our engineering and contracts team will review your scope and respond promptly.`;

      if (activationNotice) {
        headerIcon = '<i class="fa-solid fa-envelope-circle-check" style="font-size: 1.4rem; color: #0284C7;"></i>';
        headerTitle = "Inquiry Formulated &amp; Transmitted!";
        noteText = `Your inquiry details have been forwarded to <strong>${emailTo}</strong>. <em>(Initial system notification sent to verify administrator mailbox)</em>.`;
      } else if (!transmissionSuccess) {
        headerIcon = '<i class="fa-solid fa-paper-plane" style="font-size: 1.4rem; color: var(--accent);"></i>';
        headerTitle = "Inquiry Formatted &amp; Ready for Direct Transmission!";
        noteText = `Your message has been compiled for <strong>${emailTo}</strong>. Choose your preferred direct delivery method below:`;
      }

      feedback.innerHTML = `
        <div style="display: flex; flex-direction: column; gap: 12px;">
          <div style="display: flex; align-items: center; gap: 10px;">
            ${headerIcon}
            <strong style="font-size: 1.1rem; color: #10243A;">${headerTitle}</strong>
          </div>
          <p style="margin: 0; font-size: 0.92rem; color: #334155; line-height: 1.6;">
            ${noteText}
          </p>
          <div style="background: rgba(255, 255, 255, 0.7); border-radius: 8px; padding: 12px; font-size: 0.86rem; color: #475569; border: 1px solid rgba(0, 0, 0, 0.08);">
            <strong>Summary:</strong> ${escapeHtml(name)} (${escapeHtml(organization || "Individual")}) &bull; ${escapeHtml(inquiryType)} &bull; ${escapeHtml(email)}
          </div>
          <div class="inquiry-fallback-actions">
            <a href="${gmailUrl}" target="_blank" rel="noopener" class="btn btn-primary btn-sm">
              <i class="fa-brands fa-google"></i> Open in Gmail
            </a>
            <a href="${mailtoUrl}" class="btn btn-outline-navy btn-sm">
              <i class="fa-solid fa-envelope"></i> Open in Mail Client
            </a>
            <button type="button" class="btn btn-outline-navy btn-sm" id="copyDetailsBtn">
              <i class="fa-regular fa-copy"></i> Copy Inquiry Details
            </button>
          </div>
        </div>
      `;

      const copyBtn = feedback.querySelector("#copyDetailsBtn");
      if (copyBtn) {
        copyBtn.addEventListener("click", () => {
          navigator.clipboard.writeText(textBody).then(() => {
            const orig = copyBtn.innerHTML;
            copyBtn.innerHTML = '<i class="fa-solid fa-check"></i> Details Copied!';
            copyBtn.style.borderColor = "#10B981";
            copyBtn.style.color = "#10B981";
            setTimeout(() => {
              copyBtn.innerHTML = orig;
              copyBtn.style.borderColor = "";
              copyBtn.style.color = "";
            }, 2500);
          }).catch(() => {
            prompt("Copy inquiry details:", textBody);
          });
        });
      }

      feedback.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }

    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.innerHTML = '<i class="fa-solid fa-check"></i> Inquiry Submitted — Send Another?';
    }

    if (transmissionSuccess) {
      form.reset();
    }
  });
}

function initCurrentYear() {
  const yearEls = document.querySelectorAll(".current-year");
  const year = new Date().getFullYear();
  yearEls.forEach(el => {
    el.textContent = year;
  });
}
