"use client";

import { useState } from "react";
import Link from "next/link";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactForm({ heading = "Tell Us About Your Book", blurb }) {
  const [values, setValues] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
  }

  function validate() {
    const nextErrors = {};
    if (!values.name.trim()) nextErrors.name = "Please enter your name.";
    if (!values.email.trim() || !EMAIL_RE.test(values.email.trim())) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!values.message.trim() || values.message.trim().length < 10) {
      nextErrors.message = "Tell us a little more about your book (10+ characters).";
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Matches the original site's simulated-send delay; swap for a real API call later.
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setValues({ name: "", email: "", phone: "", message: "" });
      setErrors({});
    }, 600);
  }

  return (
    <>
      <h3>{heading}</h3>
      <p>{blurb || "Share a few details and a member of our team will reach out within one business day."}</p>
      <form noValidate onSubmit={handleSubmit}>
        <div className={`field${errors.name ? " has-error" : ""}`}>
          <label htmlFor="bf-name">Full Name</label>
          <input
            autoComplete="name"
            id="bf-name"
            name="name"
            onChange={handleChange}
            required
            type="text"
            value={values.name}
          />
          <span className="field-error" role="alert">
            {errors.name}
          </span>
        </div>
        <div className={`field${errors.email ? " has-error" : ""}`}>
          <label htmlFor="bf-email">Email Address</label>
          <input
            autoComplete="email"
            id="bf-email"
            name="email"
            onChange={handleChange}
            required
            type="email"
            value={values.email}
          />
          <span className="field-error" role="alert">
            {errors.email}
          </span>
        </div>
        <div className="field">
          <label htmlFor="bf-phone">Phone Number (optional)</label>
          <input
            autoComplete="tel"
            id="bf-phone"
            name="phone"
            onChange={handleChange}
            type="tel"
            value={values.phone}
          />
        </div>
        <div className={`field${errors.message ? " has-error" : ""}`}>
          <label htmlFor="bf-message">Tell Us About Your Book</label>
          <textarea
            id="bf-message"
            name="message"
            onChange={handleChange}
            required
            rows="4"
            value={values.message}
          />
          <span className="field-error" role="alert">
            {errors.message}
          </span>
        </div>
        <div className="form-foot">
          <p className="privacy-note">
            By submitting this form, you agree to our <Link href="/privacy-policy">Privacy Policy</Link>. We&apos;ll
            never share your information.
          </p>
          <button className="btn btn--primary btn--block" disabled={isSubmitting} style={{ maxWidth: "160px" }} type="submit">
            {isSubmitting ? "Sending…" : "Submit"}
          </button>
        </div>
        <div className={`form-success${isSubmitted ? " is-visible" : ""}`} role="status">
          <svg>
            <use href="#i-check-circle"></use>
          </svg>
          <span>
            <strong>Thanks — we&apos;ve got it!</strong>
            <span>A member of our team will reach out within one business day to talk through your project.</span>
          </span>
        </div>
      </form>
    </>
  );
}
