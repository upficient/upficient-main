"use client";
import { getImagePath } from "@/services/common.service";
import { faBars, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import "./header.scss";

const ChevronDownIcon = ({ className = "" }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="12"
    viewBox="0 0 128 128"
    className={`mega-menu-arrow ${className}`}
    aria-hidden="true"
  >
    <path
      d="M64 88a3.988 3.988 0 0 1-2.828-1.172l-40-40c-1.563-1.563-1.563-4.094 0-5.656s4.094-1.563 5.656 0L64 78.344l37.172-37.172c1.563-1.563 4.094-1.563 5.656 0s1.563 4.094 0 5.656l-40 40A3.988 3.988 0 0 1 64 88z"
      fill="currentColor"
    />
  </svg>
);

const ChevronDownIcon2 = ({ className = "" }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="12"
    viewBox="0 0 512 512"
    aria-hidden="true"
    className={className}
  >
    <g>
      <path
        d="m98 190.06 139.78 163.12a24 24 0 0 0 36.44 0L414 190.06c13.34-15.57 2.28-39.62-18.22-39.62h-279.6c-20.5 0-31.56 24.05-18.18 39.62z"
        fill="currentColor"
      />
    </g>
  </svg>
);

const Header = () => {
  const [accountOpen, setAccountOpen] = useState(false);
  const accountRef = useRef<HTMLDivElement>(null);
  const accountRef2 = useRef<HTMLDivElement>(null);

  // ── Hamburger / overlay / mobile accordion ──────────────────
  useEffect(() => {
    // 1. Create overlay element once and append to body
    let overlay = document.querySelector(".menu-overlay") as HTMLElement | null;
    if (!overlay) {
      overlay = document.createElement("div");
      overlay.className = "menu-overlay";
      document.body.appendChild(overlay);
    }

    const hamburger = document.querySelector(".hamburger-menu");
    const headerMenu = document.querySelector(".headerMenu") as HTMLElement | null;
    const closeMenuBtn = document.querySelector(".close-menu");

    const openMenu = () => {
      if (overlay) {
        overlay.style.display = "block";
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            overlay!.classList.add("visible");
            headerMenu?.classList.add("active");
          });
        });
      }
      document.body.style.overflow = "hidden";
    };

    const closeMenu = () => {
      headerMenu?.classList.remove("active");
      overlay?.classList.remove("visible");
      document.body.style.overflow = "";
    };

    hamburger?.addEventListener("click", openMenu);
    closeMenuBtn?.addEventListener("click", closeMenu);
    overlay?.addEventListener("click", closeMenu);

    // 2. Mobile accordion — toggle .mobile-open on dropdown <li>
    const dropdowns = document.querySelectorAll<HTMLElement>(".has-mega-menu");

    const handleDropdownClick = (e: Event) => {
      if (window.innerWidth > 992) return;

      const link = (e.target as HTMLElement).closest("a.menu-link");
      if (!link) return;

      e.preventDefault();
      const li = link.closest<HTMLElement>("li.dropdown");
      if (!li) return;

      const isOpen = li.classList.contains("mobile-open");
      dropdowns.forEach((d) => d.classList.remove("mobile-open"));
      if (!isOpen) li.classList.add("mobile-open");
    };

    dropdowns.forEach((dropdown) => {
      dropdown.addEventListener("click", handleDropdownClick as EventListener);
    });

    return () => {
      hamburger?.removeEventListener("click", openMenu);
      closeMenuBtn?.removeEventListener("click", closeMenu);
      overlay?.removeEventListener("click", closeMenu);
      dropdowns.forEach((dropdown) => {
        dropdown.removeEventListener("click", handleDropdownClick as EventListener);
      });
      document.body.style.overflow = "";
    };
  }, []);

  // ── Close account dropdown on outside click ─────────────────
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      // Check if the click was anywhere inside ANY .account-dropdown-wrapper
      // This covers both mobile and desktop instances + their open dropdown lists
      const clickedInsideAnyDropdown = !!(e.target as HTMLElement)?.closest(
        ".account-dropdown-wrapper"
      );
      if (!clickedInsideAnyDropdown) {
        setAccountOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const menuItems = [
    {
      name: "About Us",
      href: "#",
      hasMegaMenu: true,
      megaMenu: {
        columns: [
          {
            icon: "Our-Agency.webp",
            title: "Our Agency",
            description: "What makes Upficient unique",
            href: "/about-upficient-experts",
          },
          {
            icon: "Case-Studies.webp",
            title: "Case Studies",
            description: "",
            href: "/case-study",
            singleColumn: true,
            subItems: [
              { label: "Digifist", href: "/digifist" },
              { label: "Lento Agency", href: "/lento-agency" },
              { label: "Moms for Liberty", href: "/moms-for-liberty" },
              { label: "The Company Films", href: "/the-company-films" },
              { label: "The Ola Agency", href: "/the-ola-agency" },
            ],
          },
          {
            icon: "FAQs.webp",
            title: "FAQs",
            description: "Answers to your questions",
            href: "/faq",
          },
        ],
        outcomes: [
          "Pro-level, plug-and-play workspaces in minutes",
          "Tested by real teams & aligned with proven frameworks",
          "Optimized for clarity, speed & visibility",
          "Smarter automations for fewer clicks and smoother workflows",
          "Aligned, consistent processes across teams",
          "Scalable systems that grow and evolve with your business",
        ],
      },
    },
    {
      name: "ClickUp Guides",
      href: "/clickup-guides",
      hasMegaMenu: true,
      megaMenu: {
        columns: [
          {
            icon: "ClickUp-in-2025_-The-Ultimate-Guide.webp",
            title: "ClickUp in 2025: The Ultimate Guide",
            description: "Everything you need to know about ClickUp before diving in",
            href: "/clickup-guides/clickup-in-2025-the-ultimate-guide",
          },
          {
            icon: "How-to-use-ClickUp_-Full-ClickUp-Tutorial.webp",
            title: "How to Use ClickUp: Full ClickUp Tutorial",
            description: "A crash-course in ClickUp for new ClickUp users",
            href: "/clickup-guides/how-to-use-clickup-full-clickup-tutorial",
          },
          {
            icon: "Case-Studies.webp",
            title: "More guides",
            description: "Learn more about ClickUp, from software comparisons to ClickUp features",
            href: "/clickup-guides",
          },
        ],
        outcomes: [
          "Understanding ClickUp",
          "Software comparisons",
          "ClickUp AI",
          "2025 feature releases",
          "ClickUp integrations",
          "Workspace architecture",
          "Advanced tips & tricks",
        ],
      },
    },
    {
      name: "ClickUp Templates",
      href: "/clickup-templates/",
      hasMegaMenu: true,
      megaMenu: {
        columns: [
          {
            icon: "Store-Homepage.webp",
            title: "Store Homepage",
            description: "",
            href: "/clickup-templates/",
            isFirstRow: true,
          },
          {
            icon: "Organizations.webp",
            title: "Organizations",
            description: "",
            href: "/clickup-templates/product-category/organizations/",
            subItems: [
              { label: "Creative Agencies", href: "/clickup-templates/product-category/organizations/creative-agencies/" },
              { label: "Recruitment & Staffing Firms", href: "/clickup-templates/product-category/organizations/recruitment-staffing/" },
              { label: "Healthcare Services", href: "/clickup-templates/product-category/organizations/healthcare-services/" },
              { label: "Professional Services", href: "/clickup-templates/product-category/organizations/professional-services/" },
              { label: "Marketing Agencies", href: "/clickup-templates/product-category/organizations/marketing-agencies/" },
              { label: "Startups & Tech Teams", href: "/clickup-templates/product-category/organizations/startups-tech-teams/" },
            ],
          },
          {
            icon: "Case-Studies.webp",
            title: "Functions",
            description: "",
            href: "/clickup-templates/product-category/function/",
            subItems: [
              { label: "Client Fulfilment", href: "/clickup-templates/product-category/categories/client-fulfilment/" },
              { label: "Marketing", href: "/clickup-templates/product-category/categories/marketing/" },
              { label: "Creative & Design", href: "/clickup-templates/product-category/categories/creative-design/" },
              { label: "Operations", href: "/clickup-templates/product-category/categories/operations/" },
              { label: "Engineering & Product", href: "/clickup-templates/product-category/categories/engineering-product/" },
              { label: "Project Management", href: "/clickup-templates/product-category/categories/project-management/" },
              { label: "Support", href: "#" },
            ],
          },
          {
            icon: "Operating-Systems.webp",
            title: "Operating Systems",
            description: "",
            href: "/clickup-templates/product-category/operating-systems/",
            subItems: [
              { label: "Objectives and Key Results (Advanced)", href: "/clickup-templates/product/objectives-and-key-results-advanced/" },
              { label: "Objectives and Key Results (Simple)", href: "/clickup-templates/product/objectives-key-results-simple/" },
              { label: "Lean Startup Methodology", href: "/clickup-templates/product/lean-startup-methodology/" },
              { label: "Scaling Up (Rockefeller Method 2.0)", href: "/clickup-templates/product/scaling-up-rockefeller-method-2-0/" },
            ],
          },
          {
            icon: "Annual-Subscriptions.webp",
            title: "Annual Subscriptions",
            description: "",
            href: "/clickup-templates/subscriber/",
            singleColumn: true,
            subItems: [
              { label: "Premium", labelClass: "label-premium", href: "/clickup-templates/subscriber/", badge: "unlimited access to all ClickUp templates in our store" },
              { label: "Premium Plus", labelClass: "label-premium-plus", href: "/clickup-templates/subscriber/", badge: "everything in Premium + operational systems + more" },
            ],
          },
        ],
        outcomes: [
          "Pro-level, plug-and-play workspaces in minutes",
          "Tested by real teams & aligned with proven frameworks",
          "Optimized for clarity, speed & visibility",
          "Smarter automations for fewer clicks and smoother workflows",
          "Aligned, consistent processes across teams",
          "Scalable systems that grow and evolve with your business",
        ],
      },
    },
    {
      name: "Our Services",
      href: "/our-services/",
      hasMegaMenu: true,
      megaMenu: {
        columns: [
          {
            icon: "Services-Homepage-1.webp",
            title: "Services Homepage",
            description: "",
            href: "/our-services/",
            isFirstRow: true,
          },
          {
            icon: "ClickUp-Onboarding.webp",
            title: "ClickUp Onboarding",
            description: "Level-up your business with a new workspace!",
            href: "/clickup-onboarding-service/",
          },
          {
            icon: "Workspace-Optimization.webp",
            title: "Workspace Optimization",
            description: "Supercharge your existing ClickUp workspace!",
            href: "/clickup-workspace-optimization/",
          },
          {
            icon: "Integrations-Automation.webp",
            title: "ClickUp Integrations",
            description: "Your ultimate solution to optimize your workflows!",
            href: "/clickup-integrations/",
          },
          {
            icon: "ClickUp-Consulting.webp",
            title: "ClickUp Consulting",
            description: "Integrate with other tools to streamline your workflow",
            href: "/clickup-consultants/",
          },
        ],
        outcomes: [
          "Optimized workspace",
          "Dashboard-first project",
          "Feature-rich ecosystem",
          "ClickUp AI implementation",
          "Accurate workload",
          "Streamlined operations",
          "Workflow automation",
        ],
      },
    },
  ];

  // ── Reusable column renderer ────────────────────────────────
  const renderColumn = (column: any, index: number) => (
    <div
      className={`underMega d-flex ${column.subItems ? "has-sub-items" : ""} ${column.isFirstRow ? "underMega--full" : ""}`}
      key={index}
    >
      <Link href={column.href} className="d-flex mega-col-header">
        <div className="icon">
          <Image
            className="img-contain"
            src={getImagePath(column.icon)}
            width={500}
            height={500}
            loading="lazy"
            alt="mega menu icon"
            unoptimized
          />
        </div>
        <div className="content">
          <h3>{column.title}</h3>
          {column.description && <p>{column.description}</p>}
          {column.subItems && column.subItems.length > 0 && (
            <ul className={`mega-sub-items list-none${column.singleColumn ? " single-col" : ""}`}>
              {column.subItems.map((sub: any, subIndex: number) => (
                <li key={subIndex}>
                  <Link href={sub.href} className={`mega-sub-link${sub.labelClass ? ` ${sub.labelClass}` : ""}`}>
                    {sub.label}
                    {sub.badge && (
                      <span className="sub-badge"> : {sub.badge}</span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </Link>
    </div>
  );

  const renderMegaMenu = (megaMenu: any) => {
    // Split: first-row columns vs rest
    const firstRowColumns = megaMenu.columns.filter((c: any) => c.isFirstRow);
    const restColumns = megaMenu.columns.filter((c: any) => !c.isFirstRow);

    return (
      <div className="mega-menu">
        <div className="mega-column megaFlexMenu d-flex">
          {/* Full-width first row items */}
          {firstRowColumns.length > 0 && (
            <div className="mega-first-row">
              {firstRowColumns.map((column: any, index: number) =>
                renderColumn(column, index)
              )}
            </div>
          )}

          {/* Regular grid items */}
          {restColumns.map((column: any, index: number) =>
            renderColumn(column, index + firstRowColumns.length)
          )}
        </div>

        <div className="mega-column outcomes">
          <div>
            <h3>Your Outcomes</h3>
            <ul>
              {megaMenu.outcomes.map((outcome: string, index: number) => (
                <li key={index}>
                  <span>
                    <svg
                      aria-hidden="true"
                      className="e-font-icon-svg e-fas-check"
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                        fill="#7ddb0080"
                      ></path>
                    </svg>
                  </span>
                  {outcome}
                </li>
              ))}
            </ul>
          </div>
          <div className="mega-menu-btm-img">
              <img
                className="img-contain"
                src="https://www.upficient.com/clickup-templates/wp-content/uploads/2025/06/Asset-102-27-1024x284.png"
                alt="Globe"
              />
          </div>
        </div>
      </div>
    );
  };

  // ── Shared account dropdown markup ──────────────────────────
  const AccountDropdown = ({ refProp }: { refProp: React.RefObject<HTMLDivElement> }) => (
    <div
      className={`account account-dropdown-wrapper ${accountOpen ? "open" : ""}`}
      ref={refProp}
    >
      <button
        className="account-btn"
        onClick={() => setAccountOpen((prev) => !prev)}
        aria-expanded={accountOpen}
        aria-haspopup="true"
      >
        <span className="account-icon">
          <FontAwesomeIcon icon={faUser} />
        </span>
        Account
        <ChevronDownIcon2 className={accountOpen ? "rotated" : ""} />
      </button>

      {accountOpen && (
        <ul className="account-dropdown list-none">
          <li>
            <Link
              href="https://www.upficient.com/clickup-templates/login/"
              onClick={() => setAccountOpen(false)}
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              href="https://www.upficient.com/clickup-templates/register/"
              onClick={() => setAccountOpen(false)}
            >
              Sign Up
            </Link>
          </li>
        </ul>
      )}
    </div>
  );

  return (
    <>
      {/* Mobile-only top bar (Book a Call + Account) */}
      <div className="mobile-headerBtn headerBtn">
        <div className="book-a-call">
          <Link href="https://calendly.com/upficient_christopher-day/intro">
            Book a Call
          </Link>
        </div>
        <AccountDropdown refProp={accountRef2} />
      </div>

      <header id="header">
        <div className="header-wrapper">
          {/* Logo */}
          <div className="header-col1">
            <div className="headerLogo">
              <Link href={"/"}>
                <Image
                  src={getImagePath("logomain.webp")}
                  width={154}
                  height={41}
                  alt="Logo"
                  className="img-contain"
                  loading="lazy"
                  unoptimized
                />
              </Link>
            </div>
          </div>

          {/* Nav */}
          <div className="header-col2">
            <button className="hamburger-menu" aria-label="Open menu">
              <FontAwesomeIcon icon={faBars} />
            </button>
            <div className="headerMenu align-items-center">
              <button className="close-menu" aria-label="Close menu">
                X
              </button>
              <nav>
                <ul className="menu list-none d-flex">
                  {menuItems.map((item, index) => (
                    <li
                      className={`dropdown ${item.hasMegaMenu ? "has-mega-menu" : ""}`}
                      key={index}
                    >
                      <Link href={item.href} className="menu-link">
                        {item.name}
                        {item.hasMegaMenu && <ChevronDownIcon />}
                      </Link>
                      {item.hasMegaMenu && renderMegaMenu(item.megaMenu)}
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>

          {/* Desktop CTA buttons */}
          <div className="header-col3 headerBtn">
            <div className="book-a-call">
              <Link href="https://calendly.com/upficient_christopher-day/intro">
              Book a Call
              </Link>
            </div>
            <AccountDropdown refProp={accountRef} />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
