"use client";

import Image from "next/image";
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
          <div className="hero-photo">
            <Image
              src="/images/mclc_kids.png"
              alt="Happy children at Messiah Christian Learning Center"
              fill
              sizes="(max-width: 640px) 100vw, 50vw"
              style={{ objectFit: "cover", objectPosition: "center top" }}
              priority
            />
            <div className="hero-photo-badge">
              <div className="hero-photo-badge-num">3 Programs</div>
              <div className="hero-photo-badge-names">Playgroup · Nursery · K1</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
