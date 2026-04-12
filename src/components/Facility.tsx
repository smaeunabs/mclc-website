import Image from "next/image";
import { Camera } from "lucide-react";

const photos = [
  {
    src: "/images/exterior.jpg",
    alt: "MCLC school storefront and facade in Talisay City, Cebu",
    caption: "Our School",
  },
  {
    src: "/images/classroom-1.jpg",
    alt: "Wide view of the MCLC classroom interior",
    caption: "Main Classroom",
  },
  {
    src: "/images/classroom-2.jpg",
    alt: "Indoor play area with slide inside the MCLC classroom",
    caption: "Play Area",
  },
  {
    src: "/images/classroom-3.jpg",
    alt: "Toy shelves stocked with learning materials at MCLC",
    caption: "Learning Materials",
  },
  {
    src: "/images/classroom-4.jpg",
    alt: "Study carrels in the Kinder 1 learning area at MCLC",
    caption: "K1 Area",
  },
  {
    src: "/images/reading-corner.jpg",
    alt: "Reading corner with alphabet charts and books at MCLC",
    caption: "Reading Corner",
  },
];

export default function Facility() {
  return (
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
            <div key={photo.src} className="facility-photo">
              <div className="facility-img-wrap">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="facility-caption">{photo.caption}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
