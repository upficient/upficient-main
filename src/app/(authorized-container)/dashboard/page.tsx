import React from "react";
import "./page.scss";
import VerticalBarChart from "@/components/charts/VerticalBarChart";
import AnalyticBox from "@/components/dashboard/AnalyticBox/AnalyticBox";
import NoticeBox from "@/components/dashboard/NoticeBox/NoticeBox";
import { analyticData, noticeData } from "@/app/_actions";

const Dashboard: React.FC = () => {
  return (
    <div className="admin-area d-flex">
      <div className="main-analytic ">
        <div className="anabox-main d-flex align-item-center">
          <AnalyticBox analyticData={analyticData} />
        </div>
        {/* chart */}
        <div
          className="chart"
          style={{
            background: "#fff",
            padding: "15px",
            borderRadius: "20px",
            marginTop: "20px",
          }}
        >
          <VerticalBarChart />
        </div>
      </div>
      <div className="notice-main">
        <div className="order-status">
          <div className="order-notice-head">
            <h3>Latest Orders</h3>
          </div>
          {/* notice box */}
          <NoticeBox noticeData={noticeData} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
