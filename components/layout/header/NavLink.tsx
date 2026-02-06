"use client";

import { useState } from "react";
import type { NavItem } from "@/types";
import DropDown from "@/components/common/DropDown";
import clsx from "clsx";

interface NavLinkProps {
  item: NavItem;
  mobile?: boolean;
  onClose?: () => void;
}

const NavLink = ({ item, mobile = false, onClose }: NavLinkProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasChildren = !!item.children?.length;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (hasChildren) {
      e.preventDefault();
      if (mobile) {
        setIsOpen(!isOpen);
      }
    } else if (mobile) {
      onClose?.();
    }
  };

  return (
    <div
      className={clsx("group relative", mobile ? "w-full" : "")}
      onMouseEnter={() => !mobile && hasChildren && setIsOpen(true)}
      onMouseLeave={() => !mobile && hasChildren && setIsOpen(false)}
    >
      <a
        href={item.path}
        className={clsx(
          "flex items-center text-brand-teal-light hover:text-brand-orange transition-colors",
          mobile
            ? "py-4 px-4 border-b border-gray-100 font-semibold justify-between"
            : "px-2 py-2",
        )}
        onClick={handleClick}
      >
        {item.title}

        {hasChildren && <DropDown isOpen={isOpen} mobile={mobile} />}
      </a>

      {hasChildren && isOpen && (
        <div
          className={clsx(
            mobile
              ? "pl-6 mt-2 bg-teal-50 rounded-md p-3"
              : "absolute left-0 top-full z-50 min-w-60 bg-white shadow-lg rounded-lg border",
            "border-gray-200 pt-2 pb-3 pl-2 animate-fade-in",
          )}
        >
          {item.children!.map((child) => (
            <NavLink
              key={child.title}
              item={child}
              mobile={mobile}
              onClose={onClose}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default NavLink;
