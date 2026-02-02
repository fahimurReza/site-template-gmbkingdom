import { navItems } from "@/data/navItems";
import NavLink from "./NavLink";

const Navigation = () => {
  return (
    <nav className="flex items-center space-x-2 text-sm font-medium">
      {navItems.map((item) => (
        <NavLink key={item.title} item={item} />
      ))}
    </nav>
  );
};

export default Navigation;
