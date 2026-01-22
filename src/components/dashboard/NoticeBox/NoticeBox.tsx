import React from "react";
import "./NoticeBox.scss";

interface NoticeItem {
  orderTitle: string; // Title of the order
  orderDate: string; // Date of the order
  billingName: string; // Billing name
  billingAddress: string; // Billing address
}

interface NoticeBoxProps {
  noticeData: NoticeItem[]; // Array of notices
}

export default function NoticeBox({ noticeData }: NoticeBoxProps) {
  return (
    <>
      {noticeData.map((notice, index) => (
        <div key={index} className="order-notice-main">
          <div className="orderbox">
            <div className="order-head d-flex align-items-center justify-space-between">
              <div className="order-title">
                <h4>{notice.orderTitle}</h4>
              </div>
              <div className="order-date">
                <p>{notice.orderDate}</p>
              </div>
            </div>
            <div className="order-notes">
              <p>
                <strong>Billing Name:</strong> {notice.billingName}
              </p>
              <p>
                <strong>Billing Address:</strong> {notice.billingAddress}
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
