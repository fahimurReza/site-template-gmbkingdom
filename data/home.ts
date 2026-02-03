import type { Methodology, Price, Factor, Service, BestCard } from "@/types";
import ShareIcon from "@/components/icons/ShareIcon";
import PermitIcon from "@/components/icons/PermitIcon";
import Professional from "@/components/icons/Professional";
import CompleteIcon from "@/components/icons/CompleteIcon";
import PatioIcon from "@/components/icons/PatioIcon";
import DrivewayIcon from "@/components/icons/DrivewayIcon";
import SidewalkIcon from "@/components/icons/SidewalkIcon";
import StampedIcon from "@/components/icons/StampedIcon";
import FoundationIcon from "@/components/icons/FoundationIcon";
import ResurfacingIcon from "@/components/icons/ResurfacingIcon";

export const methodologies: Methodology[] = [
  {
    title: "Share your scope",
    description:
      "Send us your plans, specs, or scope description. We review everything and deliver a complete proposal with realistic timelines - no surprises.",
    icon: ShareIcon,
    numberBadge: "01",
    containerClassName: "",
  },
  {
    title: "We handle permitting",
    description:
      "Our team manages all city permits, inspections, engineering coordination, and utility requirements. You have one point of contact.",
    icon: PermitIcon,
    numberBadge: "02",
    containerClassName: "",
  },
  {
    title: "Professional execution",
    description:
      "ACI-certified crews deliver your concrete scope with precision. Daily updates keep you informed without micromanaging.",
    icon: Professional,
    numberBadge: "03",
    containerClassName: "",
  },
  {
    title: "Complete documentation",
    description:
      "Testing reports, inspection records, and as-built documentation delivered at project closeout. Full transparency from start to finish.",
    icon: CompleteIcon,
    numberBadge: "04",
    containerClassName: "",
  },
];

export const prices: Price[] = [
  {
    type: "Basic Broom Finish Driveway",
    price: "$6.50 – $9.00",
    includes: "4″ depth, #3 rebar grid, light demolition.",
  },
  {
    type: "Stamped / Decorative Patio",
    price: "$12.00 – $18.00+",
    includes: "Integral color, release agent, stamping, sealing.",
  },
  {
    type: "Exposed Aggregate",
    price: "$9.00 – $13.00",
    includes: "Surface retarder application, wash off, gloss seal.",
  },
  {
    type: "Resurfacing (Overlay)",
    price: "$5.00 – $8.00",
    includes: "Surface prep, bonding agent, overlay, sealant.",
  },
  {
    type: "Stained Concrete (Interior)",
    price: "$4.00 – $7.00",
    includes: "Cleaning, acid/water stain, wax or sealer.",
  },
];

export const factors: Factor[] = [
  {
    factor: "Factor: Excavation",
    description:
      "Removing old, reinforced concrete is labor-intensive. Thick driveways or wire mesh increase demolition costs.",
  },
  {
    factor: "Factor: Access",
    description:
      "Can a truck reach the pour site? If we need to wheelbarrow concrete or rent a boom pump, this adds to the total.",
  },
  {
    factor: "Factor: PSI Strength",
    description:
      "We recommend 3500-4000 PSI for Frisco driveways. Higher strength mixes cost marginally more but last longer.",
  },
];

export const services: Service[] = [
  {
    icon: PatioIcon,
    title: "Patio Construction",
    path: "/services/patio",
    description:
      "Engineered foundations for commercial and industrial structures across North Texas.",
    features: [
      "Mat, spread, and pier-supported systems",
      "Laser layout and precision anchor placement",
      "Thermal control plans for large placements",
    ],
    className: "",
  },
  {
    icon: DrivewayIcon,
    title: "Concrete Driveway",
    path: "/services/driveway",
    description:
      "Engineered foundations for commercial and industrial structures across North Texas.",
    features: [
      "Mat, spread, and pier-supported systems",
      "Laser layout and precision anchor placement",
      "Thermal control plans for large placements",
    ],
    className: "",
  },
  {
    icon: SidewalkIcon,
    title: "Concrete Sidewalk",
    path: "/services/sidewalk",
    description:
      "Engineered foundations for commercial and industrial structures across North Texas.",
    features: [
      "Mat, spread, and pier-supported systems",
      "Laser layout and precision anchor placement",
      "Thermal control plans for large placements",
    ],
    className: "",
  },
  {
    icon: StampedIcon,
    title: "Stamped Concrete",
    path: "/services/stamped",
    description:
      "Engineered foundations for commercial and industrial structures across North Texas.",
    features: [
      "Mat, spread, and pier-supported systems",
      "Laser layout and precision anchor placement",
      "Thermal control plans for large placements",
    ],
    className: "",
  },
  {
    icon: FoundationIcon,
    title: "Foundation Construction",
    path: "/services/foundation",
    description:
      "Engineered foundations for commercial and industrial structures across North Texas.",
    features: [
      "Mat, spread, and pier-supported systems",
      "Laser layout and precision anchor placement",
      "Thermal control plans for large placements",
    ],
    className: "",
  },
  {
    icon: ResurfacingIcon,
    title: "Concrete Resurfacing",
    path: "/services/resurfacing",
    description:
      "Engineered foundations for commercial and industrial structures across North Texas.",
    features: [
      "Mat, spread, and pier-supported systems",
      "Laser layout and precision anchor placement",
      "Thermal control plans for large placements",
    ],
    className: "",
  },
];

export const bestcards: BestCard[] = [
  {
    title: "The “Sub-Grade First” Philosophy",
    description:
      "A driveway is only as strong as the ground beneath it. Unlike many concrete contractors Frisco homeowners hire, we never pour directly onto native clay. We excavate deeper to install a 4-inch compacted flex-base cushion. This absorptive layer acts as a shock absorber, protecting your slab from the inevitable heaving of the earth.",
  },
  {
    title: "Unmatched Structural Integrity",
    description:
      "We strictly forbid the use of flimsy wire mesh, which often sinks to the bottom of the pour and becomes useless. We exclusively use #3 steel rebar grids (16″ on center) and high-strength 4000 PSI concrete mixes. This ensures your patio, sidewalk, or foundation has the tensile strength required to resist cracking year after year.",
  },
  {
    title: "Hyper-Local HOA Expertise",
    description:
      "We aren’t a generic Dallas crew; we live in 75034. We know the specific architectural requirements of neighborhoods like Starwood, Newman Village, and Stonebriar. We handle the HOA paperwork, ensure compliance with City of Frisco setback rules, and keep your project legal and stress-free.",
  },
];
