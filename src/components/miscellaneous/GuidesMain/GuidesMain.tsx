"use client";
import ArrowheadRightOutline from "@/components/Icons/ArrowheadRightOutline";
import LoaderComponent from "@/components/miscellaneous/LoaderComponent/LoaderComponent";
import { getImagePath } from "@/services/common.service";
import { getAllPages } from "@/services/pages.service";
import Image from "next/image";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function GuidesMain(type: any) {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const handleSearch = (e: any) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      router.push(`/search?query=${encodeURIComponent(searchTerm)}`);
    }
  };

  const fetchPages = async () => {
    setLoading(true);
    try {
      const pagesData = await getAllPages(type.type, true);
      setData(pagesData);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPages();
  }, [type?.type]);

  const navigateToBlog = (url: string) => {
    redirect(`/${url}`);
  };

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const paginatedData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <>
      {loading ? (
        <LoaderComponent />
      ) : (
        <section className="allBlogs">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-8">
                <div className="mainBlogBoxes d-flex flexwrap">
                  {paginatedData.map((item: any) => {
                    const pageTitle =
                      item.fields.find(
                        (field: any) => field.key === "pageTitle"
                      )?.value || "Untitled";
                    const slug =
                      item.fields.find((field: any) => field.key === "slug")
                        ?.value || "#";
                    const featureImage = item.fields.find(
                      (field: any) => field.key === "featureImage"
                    )?.value;
                    const metaDescription =
                      item.fields.find(
                        (field: any) => field.key === "metaDescription"
                      )?.value || "";

                    return (
                      <div className="blogBox relative" key={item._id}>
                        <Link href={`/${slug}`}>
                          <div className="blogDate">
                            {item.publishDate ? (
                              <>
                                <h4>{new Date(item.publishDate).getDate()}</h4>
                                <p>
                                  {new Date(item.publishDate).toLocaleString(
                                    "en-US",
                                    { month: "short" }
                                  )}
                                </p>
                              </>
                            ) : (
                              <>
                                <h4>--</h4>
                                <p>---</p>
                              </>
                            )}
                          </div>

                          <div className="blogImg">
                            <Image
                              src={getImagePath(
                                "hero_front.webp",
                                featureImage
                              )}
                              alt={pageTitle}
                              width={400}
                              height={400}
                              className="img-cover"
                              loading="lazy"
                            />
                          </div>
                          <div className="blogName">
                            <h4>{pageTitle}</h4>
                          </div>
                          <div className="blogBtns d-flex align-items-center">
                            <p>
                              Read More{" "}
                              <span>
                                <ArrowheadRightOutline />
                              </span>
                            </p>
                          </div>
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="col-lg-4 col-md-4">
                <div className="sidebar">
                  <div className="search">
                    <div className="searchInput">
                      <div className="search-bar d-flex">
                        <input
                          type="text"
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          placeholder="Search..."
                        />
                        <button onClick={handleSearch}>Search</button>
                      </div>
                    </div>
                  </div>
                  <div className="recentPosts">
                    <h4>Recent Posts</h4>
                    <div className="postLists">
                      {data.slice(0, 3).map((post: any) => {
                        const recentTitle =
                          post.fields.find(
                            (field: any) => field.key === "pageTitle"
                          )?.value || "Untitled";
                        const recentSlug =
                          post.fields.find((field: any) => field.key === "slug")
                            ?.value || "#";
                        return (
                          <p
                            key={recentSlug}
                            onClick={() => navigateToBlog(recentSlug)}
                          >
                            {recentTitle}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Pagination */}
            <div className="pagination d-flex justify-content-end">
              {totalPages > 1 && (
                <>
                  {currentPage > 1 && (
                    <button onClick={() => handlePageChange(currentPage - 1)}>
                      Prev
                    </button>
                  )}
                  <span>
                    Page {currentPage} of {totalPages}
                  </span>
                  {currentPage < totalPages && (
                    <button onClick={() => handlePageChange(currentPage + 1)}>
                      Next
                    </button>
                  )}
                </>
              )}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default GuidesMain;
