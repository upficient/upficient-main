"use client";

import { useState } from "react";
import "./NewsletterModal.scss";

const FORMS_API = "https://www.upficient.com/clickup-templates/wp-json/forminator-bridge/v1/forms";

interface NewsletterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const NewsletterModal = ({ isOpen, onClose }: NewsletterModalProps) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);

  if (!isOpen) return null;

  /** Submit the email to the form. */
  const submitToForm = async (formId: number, emailValue: string): Promise<void> => {
    const res = await fetch(`${FORMS_API}/2195/submit`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ "email-1": emailValue }),
    });
    if (!res.ok) {
      const body = await res.json().catch(() => ({}));
      throw new Error(body?.message ?? `Submission failed (${res.status})`);
    }
  };

  const handleSubscribe = async () => {
    // Client-side validation
    if (!email || !email.includes("@")) {
      setError(true);
      return;
    }

    setError(false);
    setApiError(null);
    setLoading(true);

    try {
      await submitToForm(2195, email);
      setSubscribed(true);
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "Something went wrong. Please try again.";
      setApiError(message);
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setEmail("");
    setError(false);
    setApiError(null);
    setSubscribed(false);
    onClose();
  };

  return (
    <div className="newsletter-overlay" onClick={handleClose}>
      <div
        className="newsletter-modal"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Subscribe to our newsletter"
      >
        <button
          className="newsletter-close"
          onClick={handleClose}
          aria-label="Close newsletter popup"
        >
          ✕
        </button>

        <div className="newsletter-header">
          <img src="https://www.upficient.com/clickup-templates/wp-content/uploads/2025/09/Newsletter-design-2.png" alt="Newsletter"></img>
        </div>

        <div className="newsletter-body">
          <h2>Subscribe to Our Newsletter</h2>
          <p>
            Want to join the Upficient insider club? Be the first to get special offers, fresh
            product drops, and pro tips to master ClickUp and{" "}
            <strong>receive 10% off your first order.</strong>
          </p>

          {subscribed ? (
            <div className="newsletter-success">
              You&re subscribed! Check your inbox for your 10% off code.
            </div>
          ) : (
            <>
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError(false);
                  setApiError(null);
                }}
                className={`newsletter-input${error ? " newsletter-input--error" : ""}`}
                aria-label="Email address"
                disabled={loading}
              />

              {error && (
                <span className="newsletter-error-msg">
                  Please enter a valid email address.
                </span>
              )}

              {apiError && (
                <span className="newsletter-error-msg">
                  {apiError}
                </span>
              )}

              <button
                className="newsletter-btn"
                onClick={handleSubscribe}
                disabled={loading}
              >
                {loading ? "Subscribing…" : "Subscribe"}
              </button>
            </>
          )}

          <p className="newsletter-legal">
            By subscribing you agree to receive promotional marketing emails from Upficient. You
            can unsubscribe anytime. We respect your privacy — read our{" "}
            <a href="/clickup-templates/privacy-policy/" target="_blank" rel="noopener noreferrer">
              Privacy Policy
            </a>{" "}
            for details.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsletterModal;