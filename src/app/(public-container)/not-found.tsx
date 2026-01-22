import { getImagePath } from "@/services/common.service";
import Image from "next/image";
import "./404.scss";

export default async function NotFound() {
  // notFound();
  return (
    <>
    {/* test */}
      <div className="container">
        <div className="row">
          <Image
            src={getImagePath("Page-not-found.webp")}
            width={1024}
            height={580}
            alt="404"
            loading="lazy"
            className="pageimga"
          />
        </div>
      </div>
    </>
  );
}
