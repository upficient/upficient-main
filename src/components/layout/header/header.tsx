"use client";
import { getImagePath } from "@/services/common.service";
import { faBars, faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import "./header.scss";

const Header = () => {
  useEffect(() => {
    const hamburger = document.querySelector(".hamburger-menu");
    const headerMenu = document.querySelector(".headerMenu");
    const closeMenu = document.querySelector(".close-menu");

    const openMenu = () => headerMenu?.classList.add("active");
    const closeMenuHandler = () => headerMenu?.classList.remove("active");

    hamburger?.addEventListener("click", openMenu);
    closeMenu?.addEventListener("click", closeMenuHandler);

    // Cleanup event listeners on component unmount
    return () => {
      hamburger?.removeEventListener("click", openMenu);
      closeMenu?.removeEventListener("click", closeMenuHandler);
    };
  }, []);
  const menuItems = [
    {
      name: "Services",
      href: "/our-services/",
      hasMegaMenu: true,
      megaMenu: {
        columns: [
          {
            icon: "Kick-off-Icon.png",
            title: "ClickUp Onboarding",
            description: "Level-up your business with a new workspace!",
            href: "/clickup-onboarding-service/",
          },
          {
            icon: "Optimization-Icon.png",
            title: "Workspace Optimization",
            description: "Supercharge your existing ClickUp workspace!",
            href: "/clickup-workspace-optimization/",
          },
          {
            icon: "effi1.webp",
            title: "ClickUp Integrations",
            description: "Your ultimate solution to optimize your workflows!",
            href: "/clickup-integrations/",
          },
          {
            icon: "manage.png",
            title: "Management & Maintenance",
            description: "Your ongoing ClickUp journey with Upficient!",
            href: "/management-maintenance/",
          },
          {
            icon: "chat.png",
            title: "ClickUp Consulting",
            description:
              "Integrate with other tools to streamline your workflow",
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
    { name: "Case Studies", href: "/case-study" },
    {
      name: "Guides",
      href: "/clickup-guides",
      hasMegaMenu: true,
      megaMenu: {
        columns: [
          {
            icon: "Kick-off-Icon.png",
            title: "ClickUp in 2025: The Ultimate Guide",
            description:
              "Everything you need to know about ClickUp before diving in",
            href: "/clickup-guides/clickup-in-2025-the-ultimate-guide",
          },
          {
            icon: "Optimization-Icon.png",
            title: "How to Use ClickUp: Full ClickUp Tutorial",
            description: "A crash-course in ClickUp for new ClickUp users",
            href: "/clickup-guides/how-to-use-clickup-full-clickup-tutorial",
          },
          {
            icon: "effi1.webp",
            title: "More guides",
            description:
              "Learn more about ClickUp, from software comparisons to ClickUp features",
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
    { name: "About Us", href: "/about-upficient-experts" },
    { name: "FAQ", href: "/faq" },
  ];

  const renderMegaMenu = (megaMenu: any) => {
    return (
      <div className="mega-menu">
        <div className="mega-column megaFlexMenu d-flex">
          {megaMenu.columns.map((column: any, index: number) => (
            <div className="underMega d-flex" key={index}>
              <Link href={column.href} className="d-flex">
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
                  <p>{column.description}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className="mega-column outcomes">
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
      </div>
    );
  };

  return (
    <>
      <header id="header">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4 col-md-4 col-sm-8">
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
            <div className="col-lg-8 col-md-8 col-sm-4">
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
                        className={`dropdown ${
                          item.hasMegaMenu ? "has-mega-menu" : ""
                        }`}
                        key={index}
                      >
                        <Link href={item.href}>{item.name}</Link>
                        {item.hasMegaMenu && renderMegaMenu(item.megaMenu)}
                      </li>
                    ))}
                  </ul>
                </nav>
                <div className="headerBtn">
                  <div className="btn">
                    <Link href="https://calendly.com/upficient-consultation/30min-free-consultation?month=2025-01">
                      Free Consultation
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
