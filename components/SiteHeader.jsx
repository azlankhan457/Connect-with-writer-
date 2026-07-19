"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SERVICE_LINKS = [
  { href: "/book-writing", icon: "i-pen", label: "Book Writing" },
  { href: "/book-editing", icon: "i-edit", label: "Book Editing" },
  { href: "/proofreading", icon: "i-search", label: "Proofreading" },
  { href: "/book-publishing", icon: "i-rocket", label: "Book Publishing" },
  {
    href: "/childrens-book-publication",
    icon: "i-book-open",
    label: "Children's Book Publication",
  },
  {
    href: "/childrens-book-illustration",
    icon: "i-palette",
    label: "Children's Book Illustration",
  },
  { href: "/book-cover-design", icon: "i-layout", label: "Book Cover Design" },
  { href: "/book-marketing", icon: "i-megaphone", label: "Book Marketing" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const navRef = useRef(null);

  // Close mobile nav / dropdown whenever the route changes.
  // Adjusting state during render (React's recommended pattern for this)
  // instead of in an effect, so it happens in the same commit as the
  // navigation rather than causing an extra render pass.
  const [lastPathname, setLastPathname] = useState(pathname);
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setIsNavOpen(false);
    setIsServicesOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the services dropdown on outside click or Escape (mobile tap-to-open behavior)
  useEffect(() => {
    function onDocClick(e) {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setIsServicesOpen(false);
      }
    }
    function onKeyDown(e) {
      if (e.key === "Escape") setIsServicesOpen(false);
    }
    document.addEventListener("click", onDocClick);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("click", onDocClick);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  const isServicesActive =
    pathname === "/services" || SERVICE_LINKS.some((s) => s.href === pathname);

  return (
    <header className={`site-header${isScrolled ? " is-scrolled" : ""}`}>
      <div className="container header-inner">
        <Link
          aria-label="Connect with Writer — home"
          className="brand"
          href="/"
        >
          <svg className="brand__mark">
            <use href="#i-book-mark"></use>
          </svg>
          <span className="brand__word">
            <b>Connect</b>
            <span>with Writer</span>
          </span>
        </Link>

        <nav
          aria-label="Primary"
          className={`nav-pill${isNavOpen ? " is-open" : ""}`}
        >
          <Link aria-current={pathname === "/" ? "page" : undefined} href="/">
            Home
          </Link>
          <Link
            aria-current={pathname === "/about-us" ? "page" : undefined}
            href="/about-us"
          >
            About Us
          </Link>

          <div
            className={`nav-item${isServicesOpen ? " is-open" : ""}`}
            ref={navRef}
          >
            <Link
              aria-current={isServicesActive ? "page" : undefined}
              href="/services"
              onClick={(e) => {
                if (window.innerWidth <= 920) {
                  e.preventDefault();
                  setIsServicesOpen((v) => !v);
                }
              }}
            >
              Services
              <svg className="nav-caret">
                <use href="#i-chevron-down"></use>
              </svg>
            </Link>
            <div className="nav-dropdown">
              {SERVICE_LINKS.map((s) => (
                <Link
                  aria-current={pathname === s.href ? "page" : undefined}
                  href={s.href}
                  key={s.href}
                >
                  <svg>
                    <use href={`#${s.icon}`}></use>
                  </svg>
                  {s.label}
                </Link>
              ))}
            </div>
          </div>

          <Link
            aria-current={pathname === "/case-studies" ? "page" : undefined}
            href="/case-studies"
          >
            Case Studies
          </Link>
          <Link href={pathname === "/" ? "#blog" : "/#blog"}>Blog</Link>
          <Link
            aria-current={pathname === "/contact" ? "page" : undefined}
            href="/contact"
          >
            Contact Us
          </Link>
        </nav>

        <div className="header-cta">
          <button
            aria-expanded={isNavOpen}
            aria-label="Toggle navigation menu"
            className="nav-toggle"
            onClick={() => setIsNavOpen((v) => !v)}
          >
            <svg className="icon-menu">
              <use href="#i-menu"></use>
            </svg>
            <svg className="icon-close">
              <use href="#i-close"></use>
            </svg>
          </button>
          <Link className="header-login" href="/login">
            Log In
          </Link>
          <Link className="header-call" href="/signup">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}
