"use client";

import { useState } from "react";

const HEAR_OPTIONS = ["Google Search", "Referral / Friend", "Social Media", "Podcast / Interview", "Other"];
const GENRES = ["Memoir", "Fiction", "Business", "Self-Help", "Thriller", "Other"];
const SERVICES = [
  "Full Ghostwriting (Idea \u2192 Manuscript)",
  "Ghostwriting (Partial / From Notes)",
  "Editing & Proofreading",
  "Book Cover Design",
  "Publishing Guidance",
  "Book Marketing",
  "Not Sure Yet \u2014 Need Advice",
];
const BUDGETS = ["Under $5,000", "$5,000 \u2013 $10,000", "$10,000 \u2013 $20,000", "$20,000 \u2013 $40,000", "$40,000+", "Not Sure / Flexible"];

export default function MultiStepContactForm() {
  const [step, setStep] = useState(1); // 1, 2, or 3 (success)
  const [values, setValues] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    hear: "",
    genre: "",
    service: "",
    budget: "",
    message: "",
  });
  const [error, setError] = useState("");

  function update(field, value) {
    setValues((v) => ({ ...v, [field]: value }));
  }

  function goToStep2() {
    if (!values.fname.trim() || !values.email.trim()) {
      setError("Please fill in your first name and email address to continue.");
      return;
    }
    setError("");
    setStep(2);
  }

  function submit() {
    if (!values.genre || !values.service || !values.message.trim()) {
      setError("Please select a genre, a service, and describe your book idea.");
      return;
    }
    setError("");
    setStep(3);
  }

  return (
    <div className="form-card">
      <h2>Tell Us About Your Project</h2>
      <p className="lede">
        Fill in the details below and a senior writer consultant will reach out to schedule your free consultation.
      </p>

      <div aria-label="Form progress" className="form-steps">
        <div className={`form-step form-step--${step === 1 ? "active" : "done"}`}>
          <div className="form-step__dot">1</div>
          <span>Your Details</span>
        </div>
        <div className="form-step-sep"></div>
        <div className={`form-step form-step--${step === 2 ? "active" : step > 2 ? "done" : "inactive"}`}>
          <div className="form-step__dot">2</div>
          <span>Book Info</span>
        </div>
        <div className="form-step-sep"></div>
        <div className={`form-step form-step--${step === 3 ? "active" : "inactive"}`}>
          <div className="form-step__dot">3</div>
          <span>Done</span>
        </div>
      </div>

      {step === 1 && (
        <div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="fname">
                First Name <span className="req">*</span>
              </label>
              <input
                autoComplete="given-name"
                className="form-input"
                id="fname"
                name="fname"
                onChange={(e) => update("fname", e.target.value)}
                placeholder="Jane"
                required
                type="text"
                value={values.fname}
              />
            </div>
            <div className="form-group">
              <label htmlFor="lname">Last Name</label>
              <input
                autoComplete="family-name"
                className="form-input"
                id="lname"
                name="lname"
                onChange={(e) => update("lname", e.target.value)}
                placeholder="Smith"
                type="text"
                value={values.lname}
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="email">
              Email Address <span className="req">*</span>
            </label>
            <input
              autoComplete="email"
              className="form-input"
              id="email"
              name="email"
              onChange={(e) => update("email", e.target.value)}
              placeholder="jane@example.com"
              required
              type="email"
              value={values.email}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              autoComplete="tel"
              className="form-input"
              id="phone"
              name="phone"
              onChange={(e) => update("phone", e.target.value)}
              placeholder="+1 (555) 000-0000"
              type="tel"
              value={values.phone}
            />
          </div>
          <div className="form-group">
            <label htmlFor="hear">How Did You Hear About Us?</label>
            <select
              className="form-input"
              id="hear"
              name="hear"
              onChange={(e) => update("hear", e.target.value)}
              value={values.hear}
            >
              <option disabled value="">
                Select an option
              </option>
              {HEAR_OPTIONS.map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </select>
          </div>
          {error && (
            <p className="field-error" role="alert" style={{ display: "block", marginBottom: ".8rem" }}>
              {error}
            </p>
          )}
          <button
            className="btn btn--primary"
            onClick={goToStep2}
            style={{ width: "100%", justifyContent: "center" }}
            type="button"
          >
            Continue{" "}
            <svg>
              <use href="#i-arrow-right"></use>
            </svg>
          </button>
        </div>
      )}

      {step === 2 && (
        <div>
          <div className="form-group">
            <label>
              Book Genre <span className="req">*</span>
            </label>
            <div className="genre-grid">
              {GENRES.map((g) => (
                <div className="genre-chip" key={g}>
                  <input
                    checked={values.genre === g}
                    id={`g-${g.toLowerCase()}`}
                    name="genre"
                    onChange={() => update("genre", g)}
                    type="radio"
                    value={g}
                  />
                  <label htmlFor={`g-${g.toLowerCase()}`}>{g}</label>
                </div>
              ))}
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="service">
              Service Needed <span className="req">*</span>
            </label>
            <select
              className="form-input"
              id="service"
              name="service"
              onChange={(e) => update("service", e.target.value)}
              value={values.service}
            >
              <option disabled value="">
                What do you need?
              </option>
              {SERVICES.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="budget">Approximate Budget</label>
            <select
              className="form-input"
              id="budget"
              name="budget"
              onChange={(e) => update("budget", e.target.value)}
              value={values.budget}
            >
              <option disabled value="">
                Select a range
              </option>
              {BUDGETS.map((b) => (
                <option key={b} value={b}>
                  {b}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="message">
              Tell Us About Your Book Idea <span className="req">*</span>
            </label>
            <textarea
              className="form-input"
              id="message"
              name="message"
              onChange={(e) => update("message", e.target.value)}
              placeholder="Give us a brief summary of your idea, how far along you are, and what you're hoping to achieve with this book..."
              required
              value={values.message}
            />
            <span className="form-hint">The more detail you share, the better we can match you with the right writer.</span>
          </div>
          {error && (
            <p className="field-error" role="alert" style={{ display: "block", marginBottom: ".8rem" }}>
              {error}
            </p>
          )}
          <div className="form-submit-row">
            <button className="btn btn--primary" onClick={submit} style={{ flex: "1", justifyContent: "center" }} type="button">
              Send My Enquiry{" "}
              <svg>
                <use href="#i-arrow-right"></use>
              </svg>
            </button>
          </div>
          <div className="form-privacy" style={{ marginTop: ".9rem" }}>
            <svg>
              <use href="#i-lock"></use>
            </svg>
            <span>Your information is 100% confidential. We will never share your details with third parties. An NDA is available on request.</span>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="form-success" style={{ display: "flex" }}>
          <div className="form-success__icon">
            <svg>
              <use href="#i-check"></use>
            </svg>
          </div>
          <h3>We&apos;ve Got Your Message!</h3>
          <p>Thank you for reaching out. A senior consultant will contact you within 24 hours to schedule your free consultation.</p>
        </div>
      )}
    </div>
  );
}
