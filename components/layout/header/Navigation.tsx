import { navItems } from "@/data";
import NavLink from "./NavLink";
import clsx from "clsx";

interface NavigationProps {
  mobile?: boolean;
  onClose?: () => void;
}

const Navigation = ({ mobile = false, onClose }: NavigationProps) => {
  return (
    <nav
      className={clsx(
        mobile
          ? "flex flex-col"
          : "mr-4 flex items-center space-x-4 text-sm font-medium",
      )}
    >
      {navItems.map((item) => (
        <NavLink
          key={item.title}
          item={item}
          mobile={mobile}
          onClose={onClose}
        />
      ))}
    </nav>
  );
};

export default Navigation;
