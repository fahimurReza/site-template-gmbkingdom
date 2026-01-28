import type { NavItem } from "@/types/navigation";

export const navItems: NavItem[] = [
  {
    label: "Services",
    href: "/#",
    children: [
      { label: "Concrete Patio", href: "/services/concrete-patio" },
      { label: "Concrete Driveway", href: "/services/concrete-driveway" },
      { label: "Concrete Sidewalk", href: "/services/concrete-sidewalk" },
      { label: "Stamped Concrete", href: "/services/stamped-concrete" },
      {
        label: "Foundation Construction",
        href: "/services/foundation-construction",
      },
      { label: "Concrete Resurfacing", href: "/services/concrete-resurfacing" },
    ],
  },
  {
    label: "Locations",
    href: "/#",
    children: [
      { label: "Frisco, TX", href: "/locations/frisco-tx" },
      { label: "Plano, TX", href: "/locations/plano-tx" },
      { label: "Richardson, TX", href: "/locations/richardson-tx" },
      { label: "Addison, TX", href: "/locations/addison-tx" },
      { label: "Garland, TX", href: "/locations/garland-tx" },
      { label: "Murphy, TX", href: "/locations/murphy-tx" },
      { label: "Dallas, TX", href: "/locations/dallas-tx" },
      { label: "Rowlett, TX", href: "/locations/rowlett-tx" },
    ],
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Projects",
    href: "/projects",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];
