"use client";
import "./page.scss";

import BuilderForm from "@/components/dashboard/BuilderForm/BuilderForm";
import { usePathname } from "next/navigation";

function Page() {
  const pathname = usePathname();
  const pageId = pathname.split("/").pop();
  return (
    <div className="bg-white">
      <div className="userform">
        <BuilderForm pageId={!pageId || pageId === "add" ? null : pageId} />
      </div>
    </div>
  );
}

export default Page;
