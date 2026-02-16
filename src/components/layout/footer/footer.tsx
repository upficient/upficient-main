import ClutchIcon from "@/components/Icons/ClutchIcon";
import InstagramIcon from "@/components/Icons/InstagramIcon";
import LinkdinIcon from "@/components/Icons/LinkdinIcon";
import ListItems from "@/components/miscellaneous/listItems/ListItems";
import { getImagePath } from "@/services/common.service";
import Image from "next/image";
import Link from "next/link";
import "./footer.scss";
import LazyMap from "@/components/miscellaneous/LazyMap/LazyMap";
const Footer = async () => {
  const menuItems = [
    { name: "ClickUp Onboarding", href: "/clickup-onboarding-service" },
    { name: "Workspace Optimization", href: "/clickup-workspace-optimization" },
    { name: "Integrations & Automation", href: "/clickup-integrations" },
    { name: "Management & Maintenance", href: "/management-maintenance" },
    { name: "ClickUp Consulting", href: "/clickup-consultants" },
  ];
  const menuItemsCompare = [
    { name: "ClickUp vs. Asana", href: "/clickup-guides/clickup-vs-asana" },
    {
      name: "ClickUp vs. Monday.com",
      href: "/clickup-guides/clickup-vs-monday",
    },
    { name: "ClickUp vs. Trello", href: "/clickup-guides/clickup-vs-trello" },
    { name: "ClickUp vs. Notion", href: "/clickup-guides/clickup-vs-notion" },
  ];
  const menuItemsConnect = [
    { name: "Contact Us", href: "/contact" },
    {
      name: "Free Consultation",
      href: "https://calendly.com/upficient-consultation/30min-free-consultation?month=2025-01",
    },
  ];
  const menuItemsLegal = [
    { name: "Privacy Policy", href: "/clickup-templates/privacy-policy/" },
    {
      name: "Terms & Conditions",
      href: "/clickup-templates/terms-conditions-of-purchase/",
    },
  ];
  const menuItemsLearn = [
    { name: "About Us", href: "/about-upficient-experts" },
    { name: "Guides", href: "/clickup-guides" },
    { name: "Case Studies", href: "/case-study" },
    {
      name: "ClickUp in 2025: The Ultimate Guide",
      href: "/clickup-guides/clickup-in-2025-the-ultimate-guide",
    },
    {
      name: "How to Use ClickUp: Full  ClickUp Tutorial",
      href: "/clickup-guides/how-to-use-clickup-full-clickup-tutorial",
    },
  ];
  return (
    <>
      <footer className="footer">
        <div className="container-fluid">
          <div className="row">
            <div className="column column-40">
              <div className="logo">
                <Image
                  src={getImagePath("logomain.webp")}
                  width={500}
                  height={500}
                  alt="Picture of the author"
                  className="img-contain"
                  loading="lazy"
                />
              </div>
              <div className="para">
                <p>
                  Solutions architecture agency specialising in ClickUp
                  workspace building, ClickUp optimization and workflow
                  automation.
                </p>
              </div>
              <div className="footerText">
                <h4>Our Networks</h4>
              </div>
              <div className="socialIcons d-flex">
                <Link
                  href="https://www.instagram.com/upficient/"
                  target="_blank"
                  aria-label="Instagram link"
                >
                  <InstagramIcon />
                </Link>
                <Link
                  href="http://www.linkedin.com/company/upficient"
                  target="_blank"
                  aria-label="Linkedin link"
                >
                  <LinkdinIcon />
                </Link>
                <Link
                  href="https://clutch.co/profile/upficient"
                  target="_blank"
                  aria-label="clucth link"
                >
                  <ClutchIcon />
                </Link>
              </div>
            </div>
            <div className="column column-20">
              <div className="listbox">
                <h3>Services</h3>
                <ListItems items={menuItems} />
              </div>
            </div>
            <div className="column column-20">
              <div className="listbox">
                <h3>Compare</h3>
                <ListItems items={menuItemsCompare} />
              </div>
              <div className="listbox">
                <h3>connect</h3>
                <ListItems items={menuItemsConnect} />
              </div>
              <div className="listbox">
                <h3>LEGAL</h3>
                <ListItems items={menuItemsLegal} />
              </div>
            </div>
            <div className="column column-20">
              <div className="listbox">
                <h3>Learn</h3>
                <ListItems items={menuItemsLearn} />
              </div>
              <div className="col text-center footerlogos">
                <Image
                  src={getImagePath("verified-Ambassador-v3-3.png")}
                  width={500}
                  height={500}
                  alt="Picture of the author"
                  className="img-contain"
                  loading="lazy"
                />
                <Image
                  src={getImagePath("verifieldclickup.png")}
                  width={500}
                  height={500}
                  alt="Picture of the author"
                  className="img-contain"
                  loading="lazy"
                />
                <Image
                  src={getImagePath(
                    "certificate-wt34kk2dgmun-1753795545-1-1-1.png",
                  )}
                  width={500}
                  height={500}
                  alt="Picture of the author"
                  className="img-contain"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
