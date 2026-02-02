"use client";
import { useState } from "react";
import type { NavItem } from "@/types/navigation";
import DropDown from "@/components/common/DropDown";

interface NavLinkProps {
  item: NavItem;
}

const NavLink = ({ item }: NavLinkProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasChildren = !!item.children?.length;

  return (
    <div
      className="group relative"
      onMouseEnter={() => hasChildren && setIsOpen(true)}
      onMouseLeave={() => hasChildren && setIsOpen(false)}
    >
      <a
        href={item.path}
        className={`
          flex px-2 py-2 text-tx-theme in-[.dropdown-item]:hover:bg-emerald-100 
          in-[.dropdown-item]:px-4 ${hasChildren ? "cursor-default" : ""}
        `}
        onClick={(e) => hasChildren && e.preventDefault()}
      >
        {item.title}
        {hasChildren && <DropDown />}
      </a>

      {hasChildren && isOpen && (
        <div
          className="
            absolute left-0 top-full z-50 min-w-60 bg-white shadow-lg rounded-md 
            border border-gray-200  pt-2 pb-3 animate-fade-in dropdown-item"
        >
          {item.children!.map((child) => (
            <NavLink key={child.title} item={child} />
          ))}
        </div>
      )}
    </div>
  );
};

export default NavLink;
