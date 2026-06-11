"use client";

import { useState } from "react";
import NewsletterModal from "./NewsLetterModal";

const FooterClient = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <button
        className="newsletter-trigger-link"
        onClick={() => setModalOpen(true)}
        aria-label="Open newsletter signup"
      >
        Newsletter Signup
      </button>
      <NewsletterModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
};

export default FooterClient;