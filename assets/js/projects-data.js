/**
 * EMPIRE CONSTRUCTION AND INFRASTRUCTURE
 * Projects & Portfolio Data Source
 * 
 * Verified Company Projects (from supplied company records):
 * 1. Laroo–Munad Road (Ongoing, Kulgam)
 * 2. Damjan Bridge (Ongoing, Qazigund)
 * 3. Migrant Colony, Chowgam (Completed, Kulgam)
 */

const PROJECTS_DATA = [
  {
    id: "laroo-munad-road",
    title: "Laroo–Munad Road Construction",
    category: "ongoing",
    categoryLabel: "Road Construction",
    location: "Kulgam, Jammu & Kashmir",
    status: "Ongoing",
    statusCode: "ongoing",
    completionDate: "Under Execution",
    image: "assets/images/projects/ongoing/laroo-munad-road/01-featured-road-site.jpg",
    gallery: [
      "assets/images/projects/ongoing/laroo-munad-road/01-featured-road-site.jpg",
      "assets/images/projects/ongoing/laroo-munad-road/02-site-inspection.jpg",
      "assets/images/projects/ongoing/laroo-munad-road/03-machinery-at-work.jpg",
      "assets/images/projects/ongoing/laroo-munad-road/04-road-roller-work.jpg"
    ],
    shortDesc: "Construction of 3.0 km roadway across hilly terrain in Kulgam, comprising Granular Sub-Base (GSB), Wet Mix Macadam (WMM), and Bituminous Concrete (BC) to deliver improved regional connectivity.",
    fullDesc: "The Laroo–Munad Road is an active road infrastructure project situated in Kulgam, Jammu & Kashmir. Spanning 3.0 km across hilly terrain, the project scope comprises comprehensive roadway formation, execution of Granular Sub-Base (GSB), Wet Mix Macadam (WMM), and high-durability Bituminous Concrete (BC) surfacing to provide all-weather regional connectivity.",
    keyComponents: [
      "Stated Length: 3.0 km road construction",
      "Pavement Scope: Granular Sub-Base (GSB), Wet Mix Macadam (WMM) & Bituminous Concrete (BC)",
      "Terrain: Hilly topographical execution",
      "Project Impact: Improved regional connectivity in Kulgam",
      "Machinery Deployed: Vibratory road rollers, earthmovers, and material haulers"
    ],
    isVerified: true,
    isSample: false
  },
  {
    id: "damjan-bridge",
    title: "Damjan Bridge Construction",
    category: "ongoing",
    categoryLabel: "Bridge Construction",
    location: "Qazigund, Jammu & Kashmir",
    status: "Ongoing",
    statusCode: "ongoing",
    completionDate: "Under Execution",
    image: "assets/images/projects/ongoing/damjan-bridge/01-featured-bridge.jpg",
    gallery: [
      "assets/images/projects/ongoing/damjan-bridge/01-featured-bridge.jpg",
      "assets/images/projects/ongoing/damjan-bridge/02-bridge-structure-a.jpg",
      "assets/images/projects/ongoing/damjan-bridge/03-bridge-structure-b.jpg",
      "assets/images/projects/ongoing/damjan-bridge/04-bridge-construction-site.jpg"
    ],
    shortDesc: "Construction of a 90-meter steel truss bridge with composite deck over 3 spans, featuring a two-lane carriageway to facilitate robust transport connectivity in Qazigund.",
    fullDesc: "The Damjan Bridge project in Qazigund, Jammu & Kashmir, is a major structural connectivity development. Featuring a 90-meter steel truss configuration with composite deck, the bridge spans 3 structural bays with a two-lane carriageway engineered to provide reliable, year-round river crossing and regional accessibility.",
    keyComponents: [
      "Structure: 90 m steel truss bridge with composite deck",
      "Structural Spans: 3 spans",
      "Carriageway: Two-lane configuration",
      "Location: Qazigund, Jammu & Kashmir",
      "Status: Ongoing execution with bridge substructure and superstructure erection"
    ],
    isVerified: true,
    isSample: false
  },
  {
    id: "migrant-colony-chowgam",
    title: "Migrant Colony, Chowgam Infrastructure",
    category: "completed",
    categoryLabel: "Building & Civil Infrastructure",
    location: "Kulgam, Jammu & Kashmir",
    status: "Completed",
    statusCode: "completed",
    completionDate: "Completed Project",
    image: "assets/images/projects/completed/migrant-colony-chowgam/01-building-construction-featured.jpg",
    gallery: [
      "assets/images/projects/completed/migrant-colony-chowgam/01-building-construction-featured.jpg",
      "assets/images/projects/completed/migrant-colony-chowgam/02-road-works-roller.jpg",
      "assets/images/projects/completed/migrant-colony-chowgam/03-excavation-and-material-transport.jpg",
      "assets/images/projects/completed/migrant-colony-chowgam/04-building-exterior-work.jpg",
      "assets/images/projects/completed/migrant-colony-chowgam/05-boundary-wall-and-staircase.jpg",
      "assets/images/projects/completed/migrant-colony-chowgam/06-boundary-wall.jpg",
      "assets/images/projects/completed/migrant-colony-chowgam/07-masonry-and-building-work.jpg",
      "assets/images/projects/completed/migrant-colony-chowgam/08-road-roller-and-road-works.jpg"
    ],
    shortDesc: "Completed civil infrastructure package in Chowgam, Kulgam, encompassing building construction, internal road works, boundary wall development, and site civil works.",
    fullDesc: "A successfully completed multi-disciplinary civil infrastructure development in Chowgam, Kulgam. The project scope integrated multi-unit building construction, comprehensive internal road works with vibratory roller compaction, perimeter boundary wall enclosures, and site civil excavation.",
    keyComponents: [
      "Building Construction: Multi-unit civil residential & infrastructure works",
      "Road Works: Sub-base compaction and internal roadway surfacing",
      "Boundary Wall: Masonry perimeter enclosures and staircase access",
      "Earthwork: Excavation, site grading, and material transport",
      "Status: Successfully completed civil infrastructure package"
    ],
    isVerified: true,
    isSample: false
  },
  {
    id: "highway-corridor-widening",
    title: "Highway Widening & Realignment Corridor",
    category: "ongoing",
    categoryLabel: "Highway Construction",
    location: "Jammu & Kashmir, India",
    status: "Ongoing",
    statusCode: "ongoing",
    completionDate: "Targeted Completion",
    image: "assets/images/projects/proj-highway-widening.svg",
    gallery: [
      "assets/images/projects/proj-highway-widening.svg",
      "assets/images/projects/ongoing/laroo-munad-road/01-featured-road-site.jpg",
      "assets/images/services/highway-construction.svg"
    ],
    shortDesc: "Major carriageway geometric improvement, formation widening, sub-grade stabilization, and heavy retaining wall construction along mountain transit corridors.",
    fullDesc: "Comprehensive highway infrastructure package focusing on two-lane to four-lane configuration upgrades. Scope includes high-reach rock excavation, stabilization of slope cuts via reinforced concrete breast walls, dense bituminous macadam base laying, and metal crash barrier installation.",
    keyComponents: [
      "Geometric corridor realignment & mountain slope stabilization",
      "Heavy earthwork, cutting, and sub-base compaction",
      "Reinforced concrete retaining and breast walls",
      "Dense Bituminous Macadam (DBM) and Bituminous Concrete (BC) surfacing"
    ],
    isVerified: false,
    isSample: true
  },
  {
    id: "concrete-girder-bridge",
    title: "Pre-Stressed Concrete Girder Bridge Span",
    category: "recent",
    categoryLabel: "Bridge Construction",
    location: "Jammu & Kashmir, India",
    status: "Recent",
    statusCode: "recent",
    completionDate: "Recently Completed",
    image: "assets/images/projects/ongoing/damjan-bridge/01-featured-bridge.jpg",
    gallery: [
      "assets/images/projects/ongoing/damjan-bridge/01-featured-bridge.jpg",
      "assets/images/projects/ongoing/damjan-bridge/02-bridge-structure-a.jpg",
      "assets/images/projects/proj-concrete-bridge.svg"
    ],
    shortDesc: "Multi-span bridge construction spanning natural drainage channels, connecting regional transport networks across Jammu & Kashmir.",
    fullDesc: "Structural civil engineering project executing reinforced concrete piers, elastomeric bearings, and post-tensioned bridge girders with heavy scour protection to ensure uninterrupted year-round connectivity.",
    keyComponents: [
      "Reinforced concrete piers and abutments",
      "Post-tensioned girders and cast-in-place deck slab",
      "Heavy boulder gabion river scour protection",
      "Approach embankments with reinforced earth walls"
    ],
    isVerified: false,
    isSample: true
  },
  {
    id: "bituminous-surface-overlay",
    title: "Bituminous Surface Overlay & Strengthening",
    category: "completed",
    categoryLabel: "Civil Engineering & Contracting",
    location: "Jammu & Kashmir, India",
    status: "Completed",
    statusCode: "completed",
    completionDate: "Portfolio Completed",
    image: "assets/images/projects/completed/migrant-colony-chowgam/02-road-works-roller.jpg",
    gallery: [
      "assets/images/projects/completed/migrant-colony-chowgam/02-road-works-roller.jpg",
      "assets/images/projects/completed/migrant-colony-chowgam/08-road-roller-and-road-works.jpg",
      "assets/images/projects/proj-surface-overlay.svg"
    ],
    shortDesc: "Pavement rehabilitation, profiling, cold milling of deteriorated layers, and high-performance asphalt concrete resurfacing for regional roadways.",
    fullDesc: "Civil contracting assignment executing surface profile correction, tack coat application, and high-density bituminous concrete paving. Mobilized dedicated asphalt paver units, tandem rollers, and pneumatic tire rollers.",
    keyComponents: [
      "Profile correction and crack relief interlayer installation",
      "High-output hot mix asphalt laying via sensor paver",
      "Precision vibratory compaction and density verification",
      "Reflective road marking and raised pavement markers"
    ],
    isVerified: false,
    isSample: true
  }
];

// Helper to get projects by category filter
function getProjects(filter = "all") {
  if (!filter || filter === "all") {
    return PROJECTS_DATA;
  }
  return PROJECTS_DATA.filter(p => p.category.toLowerCase() === filter.toLowerCase());
}

// Helper to get single project by ID
function getProjectById(id) {
  return PROJECTS_DATA.find(p => p.id === id);
}
