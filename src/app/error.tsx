"use client";

import { getImagePath } from "@/services/common.service";
// import { FrontendRoutes } from "@/utils/constants/index.constants";
import Image from "next/image";
import Link from "next/link";

export default function Error({}: { error: Error; reset: () => void }) {
  return (
    <html lang="en">
      <body>
        <main className="page-not-found">
          <div className="error-page">
            <h1>
              <Image
                src={getImagePath("error.svg")}
                width={440}
                height={170}
                alt="404"
                loading="lazy"
              />
            </h1>
            <div className="content-error">
              <h5>Something Went Wrong</h5>
              <p>
                Sorry, We can&apos;t seem to find the page you&apos;re looking
                for.
              </p>
              <label>Here are some helpful links:</label>
              <ul>
                <li>
                  {/* <Link href={FrontendRoutes.SERVICES}>SERVICES</Link> */}
                </li>
              </ul>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
