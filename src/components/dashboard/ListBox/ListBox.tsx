"use client";
import ArrowheadLeftOutline from "@/components/Icons/ArrowheadLeftOutline";
import ArrowheadRightOutline from "@/components/Icons/ArrowheadRightOutline";
import EditOutline from "@/components/Icons/EditOutline";
import Trash2Outline from "@/components/Icons/Trash2Outline";
import { deleteUser } from "@/services/user.service";
import Link from "next/link";
import { useState } from "react";
import "./ListBox.scss";

interface ListBoxProps {
  data: any[];
  itemsPerPage: number;
}

export default function ListBox({ data, itemsPerPage }: ListBoxProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const deleteItem = async (id?: string) => {
    if (id) {
      deleteUser(id);
    }
  };

  // Calculate the starting and ending indices for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = data.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="listbox">
      <div className="list-head d-flex">
        <div className="first-name">
          <h3>First Name</h3>
        </div>
        <div className="last-name">
          <h3>Last Name</h3>
        </div>
        <div className="email">
          <h3>Email</h3>
        </div>
        <div className="phone">
          <h3>Phone</h3>
        </div>
        <div className="Role">
          <h3>role</h3>
        </div>
        <div className="action">
          <h3>Actions</h3>
        </div>
      </div>
      <div className="list-content">
        {currentData.map((item) => (
          <div key={item._id} className="list-content-inner d-flex">
            <div className="first-name">
              <h3>{item.firstName || '--'}</h3>
            </div>
            <div className="last-name">
              <h3>{item.lastName || '--'}</h3>
            </div>
            <div className="email">
              <h3>{item.email || '--'}</h3>
            </div>
            <div className="phone">
              <h3>{item.phone || '--'}</h3>
            </div>
            <div className="role">
              <h3>{item.role || '--'}</h3>
            </div>
            <div className="action d-flex">
              <div className="edit">
                <Link href={`users/${item._id}`}>
                  <EditOutline />
                </Link>
              </div>
              <div className="delete" onClick={() => deleteItem(item._id)}>
                <span className="icon">
                  <Trash2Outline />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination d-flex justify-content-end">
        {totalPages > 1 && (
          <>
            {currentPage > 1 && (
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                <ArrowheadLeftOutline />
              </button>
            )}
            <span>
              {" "}
              Page {currentPage} of {totalPages}{" "}
            </span>
            {currentPage < totalPages && (
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                <ArrowheadRightOutline />
              </button>
            )}
          </>
        )}
        {totalPages <= 1 && <span> Page 1 of 1 </span>}
      </div>
    </div>
  );
}
