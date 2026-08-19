"use client";
import { getContacts } from "@/services/user.service";
import { useEffect, useState } from "react";
import ArrowheadLeftOutline from "@/components/Icons/ArrowheadLeftOutline";
import ArrowheadRightOutline from "@/components/Icons/ArrowheadRightOutline";
import EyeOutline from "@/components/Icons/EditOutline";
import LoaderComponent from "@/components/miscellaneous/LoaderComponent/LoaderComponent";
import "./page.scss";

export default function ContactsPage() {
  const [data, setData] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [selectedContact, setSelectedContact] = useState<any | null>(null);
  const itemsPerPage = 10;

  const totalPages = Math.ceil(data.length / itemsPerPage);

  
  const fetchContacts = async () => {
    setLoading(true);
    try {
      setData(await getContacts());
    } catch (error) {
      console.error("Error fetching contacts:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const openModal = (contact: any) => setSelectedContact(contact);
  const closeModal = () => setSelectedContact(null);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = data.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="main-user-wrapper">
      <div className="bg-white bdr-15 p15">
        <div className="pagetitle">
          <h2>All Contacts</h2>
        </div>
        {loading ? (
          <LoaderComponent />
        ) : (
          <>
            <div className="listbox">
              <div className="list-head d-flex">
                <div className="first-name">
                  <h3>Name</h3>
                </div>
                <div className="email">
                  <h3>Email</h3>
                </div>
                <div className="phone">
                  <h3>Subject</h3>
                </div>
                <div className="role">
                  <h3>Date</h3>
                </div>
                <div className="action">
                  <h3>Actions</h3>
                </div>
              </div>
              <div className="list-content">
                {currentData.map((item) => (
                  <div key={item._id} className="list-content-inner d-flex">
                    <div className="first-name">
                      <h3>{item.name || "--"}</h3>
                    </div>
                    <div className="email">
                      <h3>{item.email || "--"}</h3>
                    </div>
                    <div className="phone">
                      <h3>{item.subject || "--"}</h3>
                    </div>
                    <div className="role">
                      <h3>
                        {item.createdAt
                          ? new Date(item.createdAt).toLocaleDateString()
                          : "--"}
                      </h3>
                    </div>
                    <div className="action d-flex">
                      <div className="edit" onClick={() => openModal(item)}>
                        <EyeOutline />
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

      {selectedContact && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Contact Details</h2>
              <span className="modal-close" onClick={closeModal}>
                &times;
              </span>
            </div>
            <div className="modal-body">
              <div className="detail-row">
                <label>Name</label>
                <p>{selectedContact.name || "--"}</p>
              </div>
              <div className="detail-row">
                <label>Email</label>
                <p>{selectedContact.email || "--"}</p>
              </div>
              <div className="detail-row">
                <label>Subject</label>
                <p>{selectedContact.subject || "--"}</p>
              </div>
              <div className="detail-row">
                <label>About</label>
                <p>{selectedContact.about || "--"}</p>
              </div>
              <div className="detail-row">
                <label>Received</label>
                <p>
                  {selectedContact.createdAt
                    ? new Date(selectedContact.createdAt).toLocaleString()
                    : "--"}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
