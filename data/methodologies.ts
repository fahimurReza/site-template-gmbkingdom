import type { Methodology } from "@/types/methodology";
import ShareIcon from "@/components/icons/ShareIcon";
import PermitIcon from "@/components/icons/PermitIcon";
import Professional from "@/components/icons/Professional";
import CompleteIcon from "@/components/icons/CompleteIcon";

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
