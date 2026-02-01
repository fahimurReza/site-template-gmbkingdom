import { Price, Factor } from "@/types";

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
