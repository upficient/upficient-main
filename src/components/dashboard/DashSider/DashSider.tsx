"use client";
import { deleteCookie } from "@/app/lib";
import ChevronDownOutline from "@/components/Icons/ChevronDownOutline";
import { excludedPaths } from "@/utils/constants/index.constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import "./DashSider.scss";

interface SubMenuItem {
  name: string;
  link: string;
  icon: React.ReactNode; // Accepts React components as icons
}

interface MenuItem {
  name: string;
  link?: string; // Make link optional for parent menus with submenus
  icon: React.ReactNode;
  subMenu?: SubMenuItem[]; // Optional property for submenus
}

interface DashSiderProps {
  menuData: MenuItem[];
}

export default function DashSider({ menuData }: DashSiderProps) {
  const pathname = usePathname(); // Hook to get the current path
  const [openMenuIndex, setOpenMenuIndex] = useState<number | null>(null);
  const [activeMenuIndex, setActiveMenuIndex] = useState<number | null>(null); // Track the active menu
  const submenuRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Automatically open the parent menu if the current path is a subpage
    menuData.forEach((menu, index) => {
      if (menu.subMenu) {
        menu.subMenu.forEach((subMenuItem) => {
          if (pathname?.startsWith(subMenuItem.link)) {
            setOpenMenuIndex(index);
            setActiveMenuIndex(index); // Set active index for the parent menu
          }
        });
      } else if (pathname === menu.link) {
        setActiveMenuIndex(index); // Set active index for the top-level menu
      }
    });
  }, [pathname, menuData]);

  const handleMenuToggle = (index: number): void => {
    setOpenMenuIndex(openMenuIndex === index ? null : index);
    // Set the clicked menu as active
    setActiveMenuIndex(openMenuIndex === index ? null : index);
  };

  return (
    <>
      {!excludedPaths.some(path => pathname?.includes(path)) && (
        <div className="dash-sidebar">
          {menuData.map((menu, index) => (
            <div
              key={index}
              className={`list-item ${menu.subMenu ? "has-child" : ""} ${
                pathname === menu.link || activeMenuIndex === index
                  ? "active"
                  : ""
              }`}
            >
              {menu.subMenu ? (
                <>
                  <div
                    className="menu-toggle d-flex align-items-center"
                    onClick={() => handleMenuToggle(index)}
                  >
                    {menu.icon}
                    {menu.name}
                    <div
                      className="d-flex"
                      style={{
                        transform:
                          openMenuIndex === index
                            ? "rotate(180deg)"
                            : "rotate(0deg)",
                        transition: "transform 0.3s ease",
                      }}
                    >
                      <ChevronDownOutline />
                    </div>
                  </div>
                  <div
                    className="sub-menu"
                    style={{
                      height:
                        openMenuIndex === index
                          ? `${submenuRefs.current[index]?.scrollHeight || 0}px`
                          : "0px",
                      overflow: "hidden",
                      transition: "height 0.3s ease",
                    }}
                    ref={(el) => {
                      submenuRefs.current[index] = el;
                    }}
                  >
                    {menu.subMenu.map((subMenuItem, subIndex) => (
                      <div
                        key={subIndex}
                        className={`list-item ${
                          pathname === subMenuItem.link ? "active" : ""
                        }`}
                      >
                        <Link
                          href={subMenuItem.link}
                          className="d-flex align-items-center"
                          onClick={() => {
                            setActiveMenuIndex(index); // Set active menu index when a sub-item is clicked
                          }}
                        >
                          {subMenuItem.icon}
                          {subMenuItem.name}
                        </Link>
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <Link
                  href={menu.link || "#"}
                  className={`d-flex align-items-center ${
                    pathname === menu.link ? "active" : ""
                  }`}
                  onClick={async () => {
                    if (menu.link !== "/login") setActiveMenuIndex(index);
                    // Set active index for top-level menu
                    else {
                      // "use server";
                      await deleteCookie();
                    }
                  }}
                >
                  {menu.icon}
                  {menu.name}
                </Link>
              )}
            </div>
          ))}
        </div>
      )}
    </>
  );
}
