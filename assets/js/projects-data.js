/**
 * EMPIRE CONSTRUCTION AND INFRASTRUCTURE
 * Projects & Portfolio Data Source
 * 
 * NOTE TO ADMINISTRATOR:
 * All entries below are illustrative layout samples designed to demonstrate the portfolio structure.
 * Replace or append genuine project records with your actual company projects as they are commissioned.
 */

const PROJECTS_DATA = [
  {
    id: "proj-1",
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
      "assets/images/services/highway-construction.svg",
      "assets/images/machinery/motor-grader.svg"
    ],
    shortDesc: "Major carriageway geometric improvement, formation widening, sub-grade stabilization, and heavy retaining wall construction along mountain transit corridors.",
    fullDesc: "This project represents a comprehensive highway infrastructure package focusing on two-lane to four-lane configuration upgrades. The civil engineering scope includes high-reach rock excavation, stabilization of slope cuts via gabion and reinforced concrete breast walls, dense bituminous macadam (DBM) base laying, and installation of modern highway safety barrier systems.",
    keyComponents: [
      "Geometric corridor realignment & mountain slope stabilization",
      "Heavy earthwork, cutting, and sub-base compaction",
      "Reinforced concrete retaining and breast walls",
      "Dense Bituminous Macadam (DBM) and Bituminous Concrete (BC) surfacing",
      "W-Beam metal crash barriers and solar-reflective traffic signage"
    ],
    isSample: true
  },
  {
    id: "proj-2",
    title: "Arterial Road & Stormwater Drainage Network",
    category: "ongoing",
    categoryLabel: "Road Construction",
    location: "Jammu & Kashmir, India",
    status: "Ongoing",
    statusCode: "ongoing",
    completionDate: "In Execution",
    image: "assets/images/projects/proj-arterial-road.svg",
    gallery: [
      "assets/images/projects/proj-arterial-road.svg",
      "assets/images/services/road-construction.svg",
      "assets/images/machinery/road-roller.svg"
    ],
    shortDesc: "Development of dual-carriageway arterial roadway with integrated precast concrete storm drainage channels, sub-surface conduits, and paved shoulders.",
    fullDesc: "Executing strategic road connectivity works designed to withstand high precipitation and freeze-thaw cycles. The engineering specification includes deep sub-surface longitudinal drains, Granular Sub-Base (GSB) laying using heavy vibratory rollers, Wet Mix Macadam (WMM), and precision sensor paver bituminous paving.",
    keyComponents: [
      "Precast concrete storm drainage channels and catch basins",
      "Heavy sub-grade preparation and soil stabilization",
      "Dual-layer bituminous surfacing using mechanical sensor paver",
      "Utility ducting and road shoulder paving",
      "Thermo-plastic road markings and illuminated street safety standards"
    ],
    isSample: true
  },
  {
    id: "proj-3",
    title: "Pre-Stressed Concrete Girder Bridge Span",
    category: "recent",
    categoryLabel: "Bridge Construction",
    location: "Jammu & Kashmir, India",
    status: "Recent",
    statusCode: "recent",
    completionDate: "Recently Completed",
    image: "assets/images/projects/proj-concrete-bridge.svg",
    gallery: [
      "assets/images/projects/proj-concrete-bridge.svg",
      "assets/images/services/bridge-construction.svg",
      "assets/images/machinery/excavator.svg"
    ],
    shortDesc: "Multi-span pre-stressed concrete (PSC) girder bridge spanning natural river drainage, connecting remote regional transport corridors.",
    fullDesc: "Structural civil engineering project executing deep pile foundations, reinforced concrete pier shafts, elastomeric bearing assemblies, and pre-cast post-tensioned PSC bridge girders. Delivered with comprehensive scour protection works and concrete crash barriers to ensure uninterrupted year-round connectivity.",
    keyComponents: [
      "Heavy circular reinforced concrete piers and abutments",
      "Post-tensioned PSC I-girders and cast-in-place deck slab",
      "Heavy rip-rap and boulder gabion river scour protection",
      "Approach embankments with reinforced earth (RE) walls",
      "Bridge deck expansion joints and anti-skid wearing coat"
    ],
    isSample: true
  },
  {
    id: "proj-4",
    title: "Institutional & Administrative Civil Complex",
    category: "recent",
    categoryLabel: "Building Construction",
    location: "Jammu & Kashmir, India",
    status: "Recent",
    statusCode: "recent",
    completionDate: "Recently Completed",
    image: "assets/images/projects/proj-civic-complex.svg",
    gallery: [
      "assets/images/projects/proj-civic-complex.svg",
      "assets/images/services/building-construction.svg",
      "assets/images/machinery/dump-truck.svg"
    ],
    shortDesc: "Multi-storey framed civil structure designed for institutional and civic operations, featuring reinforced concrete framework and civil site works.",
    fullDesc: "Execution of complete structural civil works including excavation, deep raft foundations, seismic-resistant reinforced concrete frames, masonry enclosures, thermal insulation waterproofing, and external campus road and parking infrastructure.",
    keyComponents: [
      "Earthwork excavation and raft foundation engineering",
      "Seismic Zone compliant RCC framed structure",
      "High-grade thermal envelope, waterproofing and exterior screeds",
      "Internal concrete utilities and stormwater percolation systems",
      "Perimeter security walls and engineered internal circulation roadways"
    ],
    isSample: true
  },
  {
    id: "proj-5",
    title: "Rural Hill Road Infrastructure Package",
    category: "completed",
    categoryLabel: "Government Infrastructure Projects",
    location: "Jammu & Kashmir, India",
    status: "Completed",
    statusCode: "completed",
    completionDate: "Portfolio Completed",
    image: "assets/images/projects/proj-hill-connectivity.svg",
    gallery: [
      "assets/images/projects/proj-hill-connectivity.svg",
      "assets/images/services/govt-infrastructure.svg",
      "assets/images/machinery/soil-compactor.svg"
    ],
    shortDesc: "All-weather hill road connectivity package delivering hill cutting, stone masonry culverts, cross-drainage, and durable bituminous black-topping.",
    fullDesc: "Constructed to provide vital regional accessibility across steep topography. Scope included hill side-slope formation, stone masonry retaining structures, pipe culverts, cross drainage works, and mechanized bituminous premix carpeting with seal coat.",
    keyComponents: [
      "Mechanized hill cutting and hillside stabilization",
      "Stone masonry breast walls and wire-crate gabions",
      "Multiple Hume pipe culverts and slab cross-drainage bridges",
      "Water Bound Macadam (WBM) sub-base construction",
      "Bituminous surface dressing with crushed aggregates"
    ],
    isSample: true
  },
  {
    id: "proj-6",
    title: "Bituminous Surface Overlay & Strengthening",
    category: "completed",
    categoryLabel: "Civil Engineering & Contracting",
    location: "Jammu & Kashmir, India",
    status: "Completed",
    statusCode: "completed",
    completionDate: "Portfolio Completed",
    image: "assets/images/projects/proj-surface-overlay.svg",
    gallery: [
      "assets/images/projects/proj-surface-overlay.svg",
      "assets/images/services/civil-contracting.svg",
      "assets/images/machinery/asphalt-paver.svg"
    ],
    shortDesc: "Pavement rehabilitation, profiling, cold milling of deteriorated layers, and high-performance asphalt concrete resurfacing for regional roadways.",
    fullDesc: "Civil contracting assignment executing surface profile correction, tack coat application, and high-density bituminous concrete paving. Mobilized dedicated asphalt paver units, tandem rollers, and pneumatic tire rollers to achieve international roughness index (IRI) specifications.",
    keyComponents: [
      "Cold milling of distressed asphalt surface layers",
      "Profile correction and crack relief interlayer installation",
      "High-output hot mix asphalt laying via sensor paver",
      "Precision vibratory and pneumatic compaction",
      "Reflective road marking and raised pavement markers (cat's eyes)"
    ],
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
