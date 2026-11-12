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
    // Show 3 balanced representative projects (1 ongoing, 1 recent, 1 completed)
    const featured = [
      PROJECTS_DATA[0], // Highway Widening (ongoing)
      PROJECTS_DATA[2], // Bridge (recent)
      PROJECTS_DATA[4]  // Hill Road (completed)
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

    return `
      <article class="project-card fade-in-up visible" data-id="${proj.id}" role="button" tabindex="0" aria-label="View details for ${proj.title}">
        <div class="project-card-media">
          <img src="${proj.image}" alt="${proj.title}" loading="lazy" />
          <span class="project-status-pill ${statusClass}">${proj.status}</span>
          <span class="sample-badge"><i class="fa-solid fa-layer-group"></i> Illustrative Sample</span>
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
            <span class="project-view-btn">View Scope <i class="fa-solid fa-arrow-right"></i></span>
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

  modalOverlay.innerHTML = `
    <div class="modal-container" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
      <button class="modal-close-btn" aria-label="Close project modal">&times;</button>
      <div class="modal-media">
        <img id="modalMainImg" src="${proj.image}" alt="${proj.title}" />
        <span class="project-status-pill ${statusClass}" style="position: absolute; top: 20px; right: 20px;">${proj.status}</span>
        <span class="sample-badge" style="position: absolute; bottom: 20px; left: 20px;">
          <i class="fa-solid fa-circle-info"></i> Sample Entry for Portfolio Demonstration
        </span>
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
        <p class="modal-desc">${proj.fullDesc}</p>
        
        <h4 style="font-size: 1.1rem; color: #10243A; margin-bottom: 12px; font-weight: 700;">Key Civil Engineering Components:</h4>
        <ul style="display: flex; flex-direction: column; gap: 8px; margin-bottom: 28px; font-size: 0.95rem; color: #334155;">
          ${componentsHtml}
        </ul>

        <div style="background: #FFFBEB; border-left: 4px solid #F59E0B; padding: 14px 18px; border-radius: 6px; font-size: 0.85rem; color: #92400E; margin-bottom: 24px;">
          <strong>Portfolio Note:</strong> This card represents an illustrative sample entry demonstrating the project presentation layout. Genuine project details, client authorizations, and completed works can be configured dynamically.
        </div>

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

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = form.querySelector("#contactName").value.trim();
    const email = form.querySelector("#contactEmail").value.trim();
    const phone = form.querySelector("#contactPhone") ? form.querySelector("#contactPhone").value.trim() : "";
    const organization = form.querySelector("#contactOrg") ? form.querySelector("#contactOrg").value.trim() : "";
    const inquiryType = form.querySelector("#contactType") ? form.querySelector("#contactType").value : "General Inquiry";
    const subject = form.querySelector("#contactSubject") ? form.querySelector("#contactSubject").value.trim() : `Inquiry from ${name}`;
    const message = form.querySelector("#contactMessage").value.trim();

    if (!name || !email || !message) {
      if (feedback) {
        feedback.className = "form-feedback error";
        feedback.innerHTML = '<i class="fa-solid fa-circle-exclamation"></i> Please fill in all required fields (Name, Email, and Message).';
      }
      return;
    }

    // Construct professional email mailto body
    const emailTo = "sarmad@empireinfra.in";
    const mailSubject = encodeURIComponent(`[Website Inquiry] ${inquiryType}: ${subject || name}`);
    const mailBody = encodeURIComponent(
      `Official Inquiry for Empire Construction and Infrastructure\n` +
      `------------------------------------------------------------\n` +
      `Name: ${name}\n` +
      `Organization: ${organization || "N/A"}\n` +
      `Email: ${email}\n` +
      `Phone: ${phone || "N/A"}\n` +
      `Inquiry Category: ${inquiryType}\n\n` +
      `Project Scope / Message:\n${message}\n\n` +
      `------------------------------------------------------------\n` +
      `Submitted via www.empireinfra.in contact portal.`
    );

    const mailtoUrl = `mailto:${emailTo}?subject=${mailSubject}&body=${mailBody}`;

    // Provide friendly in-page feedback
    if (feedback) {
      feedback.className = "form-feedback success";
      feedback.innerHTML = `
        <div style="display: flex; align-items: flex-start; gap: 10px;">
          <i class="fa-solid fa-circle-check" style="font-size: 1.3rem; margin-top: 2px;"></i>
          <div>
            <strong>Thank you, ${name}!</strong><br>
            Your inquiry has been formulated. Opening your default mail client to transmit directly to <strong>${emailTo}</strong>.<br>
            <span style="font-size: 0.85rem; color: #065F46;">If your mail app did not open automatically, <a href="${mailtoUrl}" style="text-decoration: underline; font-weight: 700; color: #047857;">click here to send the email</a>.</span>
          </div>
        </div>
      `;
    }

    // Open user's email client
    window.location.href = mailtoUrl;

    // Reset form after brief pause
    setTimeout(() => {
      form.reset();
    }, 2000);
  });
}

/* -------------------------------------------------------------
 * 6. DYNAMIC CURRENT YEAR
 * ----------------------------------------------------------- */
function initCurrentYear() {
  const yearEls = document.querySelectorAll(".current-year");
  const year = new Date().getFullYear();
  yearEls.forEach(el => {
    el.textContent = year;
  });
}
