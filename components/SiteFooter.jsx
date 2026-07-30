import Link from "next/link";

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <div className="footer-brand">
          <Link
            aria-label="Connect with Writer — home"
            className="brand"
            href="/"
          >
            <svg className="brand__mark" style={{ color: "var(--orange)" }}>
              <use href="#i-book-mark"></use>
            </svg>
            <span className="brand__word">
              <b>Connect</b>
              <span>with Writer</span>
            </span>
          </Link>
          <p>
            Turning ideas into books worth reading — one manuscript at a time.
          </p>
          <Link className="footer-cta" href="/signup">
            Start Writing Free
            <svg>
              <use href="#i-arrow-right"></use>
            </svg>
          </Link>
          <div className="social-row">
            <a
              aria-label="Facebook"
              href="https://www.facebook.com/connectwithwriter"
            >
              <svg>
                <use href="#i-facebook"></use>
              </svg>
            </a>
            <a
              aria-label="Instagram"
              href="https://www.instagram.com/connectwithwriter"
            >
              <svg>
                <use href="#i-instagram"></use>
              </svg>
            </a>
            <a
              aria-label="LinkedIn"
              href="https://www.linkedin.com/company/connectwithwriter"
            >
              <svg>
                <use href="#i-linkedin"></use>
              </svg>
            </a>
            <a
              aria-label="Pinterest"
              href="https://www.pinterest.com/connectwithwriter"
            >
              <svg>
                <use href="#i-pinterest"></use>
              </svg>
            </a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about-us">About Us</Link>
            </li>
            <li>
              <Link href="/case-studies">Case Studies</Link>
            </li>
            <li>
              <Link href="/services">Our Services</Link>
            </li>
            <li>
              <Link href="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Our Services</h4>
          <ul>
            <li>
              <Link href="/book-writing">Book Writing</Link>
            </li>
            <li>
              <Link href="/book-editing">Book Editing</Link>
            </li>
            <li>
              <Link href="/proofreading">Proofreading</Link>
            </li>
            <li>
              <Link href="/book-publishing">Book Publishing</Link>
            </li>
            <li>
              <Link href="/childrens-book-publication">
                Children&apos;s Book Publication
              </Link>
            </li>
            <li>
              <Link href="/childrens-book-illustration">
                Children&apos;s Book Illustration
              </Link>
            </li>
            <li>
              <Link href="/book-cover-design">Book Cover Design</Link>
            </li>
            <li>
              <Link href="/book-marketing">Book Marketing</Link>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact Us</h4>
          <ul>
            <li className="contact-line">
              <svg>
                <use href="#i-phone"></use>
              </svg>
              <a href="tel:+18558886875">(855) 888-6875</a>
            </li>
            <li className="contact-line">
              <svg>
                <use href="#i-mail"></use>
              </svg>
              <a href="mailto:hello@connectwithwriter.com">
                hello@connectwithwriter.com
              </a>
            </li>
            <li className="contact-line">
              <svg>
                <use href="#i-pin"></use>
              </svg>
              <span>123 Author Lane, Suite 200, New York, NY 10001</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container trust-strip">
        <div>
          <svg>
            <use href="#i-shield"></use>
          </svg>
          100% Confidential
        </div>
        <div>
          <svg>
            <use href="#i-check"></use>
          </svg>
          Unlimited Revisions
        </div>
        <div>
          <svg>
            <use href="#i-clock"></use>
          </svg>
          On-Time Delivery
        </div>
        <div>
          <svg>
            <use href="#i-users"></use>
          </svg>
          US-Based Writers
        </div>
      </div>

      <div className="container footer-bottom">
        <span>
          © <span>{year}</span> Connect with Writer. All rights reserved.
        </span>
        <div className="legal-links">
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms-of-service">Terms of Service</Link>
          <Link href="/sitemap">Sitemap</Link>
        </div>
      </div>
    </footer>
  );
}
