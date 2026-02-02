import type { NavItem } from "@/types/navigation";

export const navItems: NavItem[] = [
  {
    title: "Services",
    path: "/#",
    children: [
      { title: "Concrete Patio", path: "/services/patio" },
      { title: "Concrete Driveway", path: "/services/driveway" },
      { title: "Concrete Sidewalk", path: "/services/sidewalk" },
      { title: "Stamped Concrete", path: "/services/concrete" },
      {
        title: "Foundation Construction",
        path: "/services/foundation",
      },
      { title: "Concrete Resurfacing", path: "/services/resurfacing" },
    ],
  },
  {
    title: "Locations",
    path: "/#",
    children: [
      { title: "Frisco, TX", path: "/locations/frisco-tx" },
      { title: "Plano, TX", path: "/locations/plano-tx" },
      { title: "Richardson, TX", path: "/locations/richardson-tx" },
      { title: "Addison, TX", path: "/locations/addison-tx" },
      { title: "Garland, TX", path: "/locations/garland-tx" },
      { title: "Murphy, TX", path: "/locations/murphy-tx" },
      { title: "Dallas, TX", path: "/locations/dallas-tx" },
      { title: "Rowlett, TX", path: "/locations/rowlett-tx" },
    ],
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Projects",
    path: "/projects",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];
