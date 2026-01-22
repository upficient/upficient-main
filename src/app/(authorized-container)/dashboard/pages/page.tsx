"use client";
import ArrowheadLeftOutline from "@/components/Icons/ArrowheadLeftOutline";
import ArrowheadRightOutline from "@/components/Icons/ArrowheadRightOutline";
import EditOutline from "@/components/Icons/EditOutline";
import Trash2Outline from "@/components/Icons/Trash2Outline";
import LoaderComponent from "@/components/miscellaneous/LoaderComponent/LoaderComponent";
import { deletePage, getAllPages } from "@/services/pages.service";
import Link from "next/link";
import { useEffect, useState } from "react";
import "./page.scss";

export default function Pages() {
  const [data, setData] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const itemsPerPage = 10;

  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Fetch users
  const fetchPages = async () => {
    setLoading(true);
    try {
      const data = await getAllPages('page');
      setData(data);
    } catch (error) {
      console.error("Error fetching Pages:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPages();
  }, []);

  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const deleteItem = async (id?: string) => {
    if (id) {
      try {
        await deletePage(id);
        fetchPages();
      } catch (error) {
        console.error("Error deleting page:", error);
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
        <Link href="pages/add">
          <button className="btn-dash">Add New Page</button>
        </Link>
      </div>
      <div className="bg-white bdr-15 p15">
        <div className="pagetitle">
          <h2>All Pages</h2>
        </div>
        {loading ? (
           <LoaderComponent/>
        ) : (
          <>
            <div className="listbox">
              <div className="list-head d-flex">
                <div className="page-title">
                  <h3>Page Title</h3>
                </div>
                <div className="slug">
                  <h3>Slug</h3>
                </div>
                <div className="created-at">
                  <h3>Created At</h3>
                </div>
                <div className="action">
                  <h3>Actions</h3>
                </div>
              </div>
              <div className="list-content">
                {currentData.map((item) => {
                  const pageTitleField = item.fields.find((field: any) => field.key === "pageTitle");
                  const slugField = item.fields.find((field: any) => field.key === "slug");

                  return (
                    <div key={item._id} className="list-content-inner d-flex">
                      <div className="page-title">
                        <h3>{pageTitleField?.value || "--"}</h3>
                      </div>
                      <div className="slug">
                        {slugField?.value ? (
                          <a
                            href={`/${slugField.value}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {slugField.value}
                          </a>
                        ) : (
                          <h3>--</h3>
                        )}
                      </div>
                      <div className="created-at">
                        <h3>{new Date(item.createdAt).toLocaleString() || "--"}</h3>
                      </div>
                      <div className="action d-flex">
                        <div className="edit">
                          <Link href={`pages/${item._id}`}>
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
                  );
                })}
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
