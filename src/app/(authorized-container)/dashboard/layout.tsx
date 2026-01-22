import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Suspense } from "react";
import type { Metadata } from "next";
import DashSider from "@/components/dashboard/DashSider/DashSider";
import { menuData } from "@/app/_actions";
import DashHeader from "@/components/dashboard/DashHeader/DashHeader";
import "./page.scss";

config.autoAddCss = false;

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Dashboard layout for admin routes",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense>
      <main className="dashboard-main">
        <div className="dash-container">
          {/* Dash Header */}
          <DashHeader />
          <div className="dash-main d-flex">
            {/* Sidebar */}
            <DashSider menuData={menuData} />
            <div className="main-content">{children}</div>
          </div>
        </div>
      </main>
    </Suspense>
  );
}
