"use client";
import ArrowheadLeftOutline from "@/components/Icons/ArrowheadLeftOutline";
import ArrowheadRightOutline from "@/components/Icons/ArrowheadRightOutline";
import EditOutline from "@/components/Icons/EditOutline";
import Trash2Outline from "@/components/Icons/Trash2Outline";
import LoaderComponent from "@/components/miscellaneous/LoaderComponent/LoaderComponent";
import { deleteUser, getUsers } from "@/services/user.service";
import Link from "next/link";
import { useEffect, useState } from "react";
import "./page.scss";

export default function UsersPage() {
  const [data, setData] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const itemsPerPage = 10;

  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Fetch users
  const fetchUsers = async () => {
    setLoading(true);
    try {
      setData(await getUsers());
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const deleteItem = async (id?: string) => {
    if (id) {
      try {
        await deleteUser(id);
        fetchUsers(); // Refresh data after deletion
      } catch (error) {
        console.error("Error deleting user:", error);
      }
    }
  };

  // Calculate the starting and ending indices for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = data.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="main-user-wrapper">
      <div
        className="d-flex justify-content-end"
        style={{ marginBottom: "20px" }}
      >
        <Link href="users/add">
          <button className="btn-dash">Add New User</button>
        </Link>
      </div>
      <div className="bg-white bdr-15 p15">
        <div className="pagetitle">
          <h2>All Users</h2>
        </div>
        {loading ? (
          <LoaderComponent/>
        ) : (
          <>
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
                <div className="role">
                  <h3>Role</h3>
                </div>
                <div className="action">
                  <h3>Actions</h3>
                </div>
              </div>
              <div className="list-content">
                {currentData.map((item) => (
                  <div key={item._id} className="list-content-inner d-flex">
                    <div className="first-name">
                      <h3>{item.firstName || "--"}</h3>
                    </div>
                    <div className="last-name">
                      <h3>{item.lastName || "--"}</h3>
                    </div>
                    <div className="email">
                      <h3>{item.email || "--"}</h3>
                    </div>
                    <div className="phone">
                      <h3>{item.phone || "--"}</h3>
                    </div>
                    <div className="role">
                      <h3>{item.role || "--"}</h3>
                    </div>
                    <div className="action d-flex">
                      <div className="edit">
                        <Link href={`users/${item._id}`}>
                          <EditOutline />
                        </Link>
                      </div>
                      <div
                        className="delete"
                        onClick={() => deleteItem(item._id)}
                      >
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
          </>
        )}
      </div>
    </div>
  );
}
