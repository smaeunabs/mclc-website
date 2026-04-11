import { Gift } from "lucide-react";

const benefits = [
  "School insurance",
  "Honor roll treats",
  "Progress report cards",
  "Daily communication book",
  "Guidance & counseling",
  "Values formation",
  "Merit scores",
  "Air-conditioned rooms",
  "Field trips",
  "Tech voc skills",
  "Sports Fest / Family Day",
  "Academic Day Projection",
];

export default function Benefits() {
  return (
    <section className="benefits" id="inclusion">
      <div className="shape" style={{ width: "90px", height: "90px", background: "var(--blue-light)", top: "8%", right: "2%", opacity: 0.5, borderRadius: "50% 50% 30% 70%" }} />
      <div className="binner">
        <span className="fun-tag blue"><Gift size={13} />What&apos;s Included</span>
        <h2 className="stitle">Everything in One Complete Package</h2>
        <p className="ssub">No hidden surprises. Every MCLC student gets a rich, full school experience from day one.</p>
        <div className="bgrid">
          {benefits.map((item) => (
            <div className="bitem" key={item}>
              <div className="bchk">✓</div>
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
