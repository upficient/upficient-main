"use client";

import BuilderFormBlog from "@/components/dashboard/BuilderFormBlog/BuilderForm";
import { usePathname } from "next/navigation";
import "./page.scss";
function Page() {
  const pathname = usePathname();
  const pageId = pathname.split("/").pop();
  return (
    <div className="bg-white">
      <div className="userform">
        <BuilderFormBlog pageId={!pageId || pageId === "add" ? null : pageId} pageType="caseStudy" />
      </div>
    </div>
  );
}

export default Page;
