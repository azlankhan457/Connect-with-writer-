import Link from "next/link";

export default function Page() {
  return (
    <>
<section className="section" style={{paddingTop: "clamp(48px,7vw,72px)"}}>
  <div className="container" style={{maxWidth: "760px"}}>
    <p className="eyebrow">Site Navigation</p>
    <h1 style={{marginBottom: "1.5rem"}}>Sitemap</h1>
    <div className="body-copy"><ul style={{listStyle: "disc", paddingLeft: "1.4rem", display: "flex", flexDirection: "column", gap: ".6rem"}}><li><Link href="/">Home</Link></li><li><Link href="/about-us">About Us</Link></li><li><Link href="/services">Our Services</Link></li><li><Link href="/book-writing">Book Writing</Link></li><li><Link href="/book-editing">Book Editing</Link></li><li><Link href="/proofreading">Proofreading</Link></li><li><Link href="/book-publishing">Book Publishing</Link></li><li><Link href="/childrens-book-publication">Children&apos;s Book Publication</Link></li><li><Link href="/childrens-book-illustration">Children&apos;s Book Illustration</Link></li><li><Link href="/book-cover-design">Book Cover Design</Link></li><li><Link href="/book-marketing">Book Marketing</Link></li><li><Link href="/case-studies">Case Studies</Link></li><li><Link href="/contact">Contact Us</Link></li><li><Link href="/privacy-policy">Privacy Policy</Link></li><li><Link href="/terms-of-service">Terms of Service</Link></li></ul></div>
  </div>
</section>
    </>
  );
}
