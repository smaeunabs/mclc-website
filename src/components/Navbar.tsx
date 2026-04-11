"use client";

import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav className="mclc-nav">
        <div className="nav-logo">
          <Image src="/mclc_logo.png" alt="MCLC Logo" width={44} height={44} style={{ borderRadius: '50%', objectFit: 'cover' }} />
          <div>
            <div className="school-name">Messiah Christian Learning Center</div>
            <div className="school-abbr">MCLC · Talisay City, Cebu</div>
          </div>
        </div>
        <ul className="nav-links">
          <li><a href="#why" onClick={e => { e.preventDefault(); scrollTo("why"); }}>Why MCLC</a></li>
          <li><a href="#programs" onClick={e => { e.preventDefault(); scrollTo("programs"); }}>Programs</a></li>
          <li><a href="#about" onClick={e => { e.preventDefault(); scrollTo("about"); }}>About</a></li>
          <li><a href="#enrollment" onClick={e => { e.preventDefault(); scrollTo("enrollment"); }}>Enroll</a></li>
        </ul>
        <button className="nav-cta" onClick={() => scrollTo("enrollment")}>Enroll Now ✦</button>
        <button className="hamburger" onClick={() => setOpen(!open)} aria-label="Menu">
          <span />
          <span />
          <span />
        </button>
      </nav>

      <div className={`mobile-menu${open ? " open" : ""}`} id="mobileMenu">
        <a href="#why" onClick={e => { e.preventDefault(); scrollTo("why"); }}>Why MCLC</a>
        <a href="#programs" onClick={e => { e.preventDefault(); scrollTo("programs"); }}>Programs</a>
        <a href="#about" onClick={e => { e.preventDefault(); scrollTo("about"); }}>About Us</a>
        <a href="#inclusion" onClick={e => { e.preventDefault(); scrollTo("inclusion"); }}>Benefits</a>
        <a href="#enrollment" onClick={e => { e.preventDefault(); scrollTo("enrollment"); }}>Enroll Now</a>
      </div>
    </>
  );
}
