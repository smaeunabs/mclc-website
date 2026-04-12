"use client";

import { Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="hero" id="home">
      <div className="dots-bg">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <circle cx="8%" cy="20%" r="6" fill="#F5A623" opacity="0.2" />
          <circle cx="92%" cy="15%" r="9" fill="#30C87A" opacity="0.18" />
          <circle cx="85%" cy="75%" r="6" fill="#9B6FE8" opacity="0.15" />
          <circle cx="5%" cy="80%" r="8" fill="#FF6B3D" opacity="0.15" />
          <circle cx="50%" cy="10%" r="5" fill="#3D9BE9" opacity="0.15" />
          <circle cx="15%" cy="50%" r="4" fill="#F06292" opacity="0.18" />
          <circle cx="78%" cy="45%" r="5" fill="#F5A623" opacity="0.15" />
          <rect x="88%" y="60%" width="14" height="14" rx="4" fill="#30C87A" opacity="0.12" transform="rotate(20 88 60)" />
          <rect x="3%" y="35%" width="12" height="12" rx="3" fill="#9B6FE8" opacity="0.12" transform="rotate(-15 3 35)" />
          <polygon points="60,30 66,44 52,44" fill="#F5A623" opacity="0.12" transform="translate(200,80)" />
        </svg>
      </div>
      <div className="hero-inner">
        <div>
          <div className="hero-badge">
            <span className="bdot" />
            Now Enrolling &mdash; SY 2026&ndash;2027
          </div>
          <h1>
            Where Little Hearts<br />
            <span className="hg">Grow Big</span> &amp;<br />
            <span className="ho">Shine Bright!</span>
            <span className="sr-only"> — Christ-Centered Preschool in Talisay City, Cebu</span>
          </h1>
          <p className="hero-sub">
            At MCLC in <strong>Southscape, Talisay City, Cebu</strong>, your child doesn&apos;t
            just learn. They discover, laugh, grow in faith, and build a foundation that lasts a
            lifetime. Come join our family!
          </p>
          <div className="trust-row">
            <div className="trust-item">
              <span className="tdot" style={{ background: "var(--green)" }} />
              Christ-centered
            </div>
            <div className="trust-item">
              <span className="tdot" style={{ background: "var(--blue)" }} />
              International Standard
            </div>
            <div className="trust-item">
              <span className="tdot" style={{ background: "var(--orange)" }} />
              Safe &amp; Loving
            </div>
          </div>
          <div className="hero-btns">
            <a href="#enrollment" className="btn-primary"
              onClick={e => { e.preventDefault(); document.getElementById("enrollment")?.scrollIntoView({ behavior: "smooth" }); }}>
              Reserve Your Child&apos;s Spot <Sparkles size={14} style={{ display: "inline", verticalAlign: "middle", marginLeft: "4px" }} />
            </a>
            <a href="#programs" className="btn-outline"
              onClick={e => { e.preventDefault(); document.getElementById("programs")?.scrollIntoView({ behavior: "smooth" }); }}>
              See Our Programs
            </a>
          </div>
          <p className="hero-area">
            Serving families in Talisay, Minglanilla, and South Cebu
          </p>
        </div>
        <div className="hero-visual">
          <div className="fcrd top">
            <div className="fcrd-num">2025</div>
            <div className="fcrd-lbl">Founded with love</div>
          </div>
          <div className="hero-card">
            <div className="hero-img">
              <svg width="150" height="120" viewBox="0 0 160 130" fill="none">
                <rect x="74" y="8" width="12" height="28" rx="4" fill="#F5A623" opacity="0.5" />
                <rect x="62" y="18" width="36" height="12" rx="4" fill="#F5A623" opacity="0.5" />
                <circle cx="38" cy="68" r="16" fill="#FFD060" />
                <path d="M18 115 Q18 90 38 90 Q58 90 58 115Z" fill="#FFD060" />
                <circle cx="80" cy="62" r="18" fill="#F5A623" />
                <path d="M58 115 Q58 86 80 86 Q102 86 102 115Z" fill="#F5A623" />
                <circle cx="122" cy="68" r="16" fill="#FF6B3D" opacity="0.8" />
                <path d="M102 115 Q102 90 122 90 Q142 90 142 115Z" fill="#FF6B3D" opacity="0.8" />
                <circle cx="20" cy="40" r="5" fill="#30C87A" opacity="0.5" />
                <circle cx="145" cy="36" r="4" fill="#9B6FE8" opacity="0.5" />
                <circle cx="60" cy="28" r="3" fill="#3D9BE9" opacity="0.6" />
                <circle cx="105" cy="46" r="3.5" fill="#F06292" opacity="0.4" />
              </svg>
            </div>
            <h3>A School That Feels Like Home</h3>
            <p>Academics · Faith · Character · Fun</p>
            <div className="hero-pill">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
              Talisay City, Cebu
            </div>
          </div>
          <div className="fcrd bot">
            <div className="fcrd-num" style={{ color: "var(--green)" }}>3</div>
            <div className="fcrd-lbl">Programs available</div>
          </div>
        </div>
      </div>
    </section>
  );
}
