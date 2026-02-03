import type { NavItem } from "@/types/navigation";

export const navItems: NavItem[] = [
  {
    title: "Services",
    path: "/#",
    children: [
      { title: "Concrete Patio", path: "/services/patio" },
      { title: "Concrete Driveway", path: "/services/driveway" },
      { title: "Concrete Sidewalk", path: "/services/sidewalk" },
      { title: "Stamped Concrete", path: "/services/stamped" },
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
      { title: "Frisco, TX", path: "/locations/frisco" },
      { title: "Plano, TX", path: "/locations/plano" },
      { title: "Richardson, TX", path: "/locations/richardson" },
      { title: "Addison, TX", path: "/locations/addison" },
      { title: "Garland, TX", path: "/locations/garland" },
      { title: "Murphy, TX", path: "/locations/murphy" },
      { title: "Dallas, TX", path: "/locations/dallas" },
      { title: "Rowlett, TX", path: "/locations/rowlett" },
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
