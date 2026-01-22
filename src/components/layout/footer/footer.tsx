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
    { name: "Home", href: "/" },
    { name: "Services", href: "/our-services/" },
    { name: "Case Studies", href: "/case-study" },
    { name: "Guides", href: "/guides" },
    { name: "Contact", href: "/contact" },
  ];
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-4">
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
            <div className="col-lg-3 col-md-4">
              <div className="footer-menu">
                <ListItems items={menuItems} />
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="footerText">
                <h4>Where are we?</h4>
              </div>
              <div className="map">
                <LazyMap />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
