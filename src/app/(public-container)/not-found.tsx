import { getImagePath } from "@/services/common.service";
import Image from "next/image";
import "./404.scss";
import Link from "next/link";

export default async function NotFound() {
  // notFound();
  return (
    <>
      {/* test */}
      <div className="container">
        <div className="row">
          <Link href={getImagePath("Page-not-found.webp")}>
            <Image
              src={getImagePath("Page-not-found.webp")}
              width={1024}
              height={580}
              alt="404"
              loading="lazy"
              className="pageimga"
            />
          </Link>
        </div>
      </div>
    </>
  );
}
