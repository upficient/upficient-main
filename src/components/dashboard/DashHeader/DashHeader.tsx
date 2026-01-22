"use client";
import { getImagePath } from "@/services/common.service";
import { excludedPaths } from "@/utils/constants/index.constants";
import Image from "next/image";
import { usePathname } from "next/navigation";
import "./DashHeader.scss";

export default function DashHeader() {
  const pathname = usePathname();
  return (
    <>
      {!excludedPaths.some(path => pathname?.includes(path)) && (
        <div
          className="dash-header d-flex justify-space-between align-items-center"
          id="dash-header"
        >
          <div className="dash-logo">
            <Image
              src={getImagePath("logo.webp")}
              width={150}
              height={60}
              alt="Picture of the author"
              className="img-contain"
              loading="lazy"
            />
          </div>
          <div className="dash-head-menu">
            <div className="head-user-box d-flex align-items-center">
              <div className="user-img">
                <Image
                  src={getImagePath("dashimg/avtar.jpg")}
                  width={36}
                  height={36}
                  alt="Picture of the author"
                  className="img-contain"
                  loading="lazy"
                />
              </div>
              <div className="user-details">
                <h3>Chris</h3>
                <p>Admin</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
