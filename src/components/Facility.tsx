"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { Camera, X } from "lucide-react";

const photos = [
  {
    src: "/images/exterior.jpg",
    alt: "MCLC school storefront and facade in Talisay City, Cebu",
    caption: "Our welcoming school entrance in Southscape, Talisay City, Cebu",
  },
  {
    src: "/images/classroom-1.jpg",
    alt: "Wide view of the MCLC classroom interior",
    caption: "A bright, nurturing classroom designed for young learners",
  },
  {
    src: "/images/classroom-2.jpg",
    alt: "Indoor play area with slide inside the MCLC classroom",
    caption: "A safe and fun indoor play area that sparks creativity",
  },
  {
    src: "/images/classroom-3.jpg",
    alt: "Toy shelves stocked with learning materials at MCLC",
    caption: "Hands-on learning materials that make every lesson exciting",
  },
  {
    src: "/images/classroom-4.jpg",
    alt: "Study carrels in the Kinder 1 learning area at MCLC",
    caption: "A cozy space designed for focused, individual learning",
  },
  {
    src: "/images/reading-corner.jpg",
    alt: "Reading corner with alphabet charts and books at MCLC",
    caption: "A dedicated learning space where little minds do big things",
  },
];

export default function Facility() {
  const [active, setActive] = useState<(typeof photos)[number] | null>(null);

  const close = useCallback(() => setActive(null), []);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, close]);

  return (
    <>
      <section className="facility" id="facility">
        <div className="facility-inner">
          <span className="fun-tag gold">
            <Camera size={13} />
            Our Facility
          </span>
          <h2 className="stitle">A Space Built for Little Learners</h2>
          <p className="ssub">
            Every corner of MCLC is thoughtfully designed — safe, colorful, and
            full of wonder. Take a peek inside!
          </p>
          <div className="facility-grid">
            {photos.map((photo) => (
              <button
                key={photo.src}
                className="facility-photo"
                onClick={() => setActive(photo)}
                aria-label={`View full screen: ${photo.caption}`}
              >
                <div className="facility-img-wrap">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    style={{ objectFit: "cover" }}
                  />
                  <div className="facility-zoom-hint">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                    </svg>
                  </div>
                </div>
                <div className="facility-caption">{photo.caption}</div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {active && (
        <div
          className="lb-overlay"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={active.caption}
        >
          <button
            className="lb-close"
            onClick={close}
            aria-label="Close"
          >
            <X size={22} />
          </button>
          <div
            className="lb-img-wrap"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={active.src}
              alt={active.alt}
              fill
              sizes="100vw"
              style={{ objectFit: "contain" }}
              priority
            />
          </div>
          <p className="lb-caption" onClick={(e) => e.stopPropagation()}>
            {active.caption}
          </p>
        </div>
      )}
    </>
  );
}
