// components/Menu.tsx
import React from "react";
import Link from "next/link";

interface MenuItem {
  name: string;
  href: string;
  newTab?: boolean;
}

interface MenuProps {
  items: MenuItem[];
  classes?: string;
}

const ListItems: React.FC<MenuProps> = ({ items, classes = "" }) => {
  return (
    <ul className={`${classes} list-none`}>
      {items.map((item, index) => (
        <li key={index} className={item.name === "Services" ? "dropdown" : ""}>
          <Link href={item.href} target={item.newTab ? "_blank" : "_self"}>
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ListItems;
