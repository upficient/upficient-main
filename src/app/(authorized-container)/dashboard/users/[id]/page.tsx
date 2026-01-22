"use client";

import UserForm from "@/components/dashboard/UserForm/UserForm";
import { usePathname } from "next/navigation";

function Page() {
  const pathname = usePathname();
  const userId = pathname.split("/").pop();
  return (
    <div className="bg-white bdr-15 p15">
      <div className="pagetitle">
        <h2>{userId === "add"  ? 'Add' : 'Edit'} Users</h2>
        <div className="userform" style={{ marginTop: "26px" }}>
          <UserForm userId={!userId || userId === "add" ? null : userId} />
        </div>
      </div>
    </div>
  );
}

export default Page;
