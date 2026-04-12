import { Gift } from "lucide-react";

const benefits: { label: string; subtitle?: string }[] = [
  { label: "Professional Licensed Teacher", subtitle: "Childhood Specialist" },
  { label: "Guidance & counseling", subtitle: "for students / parents / guardian" },
  { label: "Values formation" },
  { label: "Progress report cards" },
  { label: "Daily communication book" },
  { label: "Air-conditioned rooms" },
  { label: "MCLC Exclusive Powder Room" },
  { label: "MCLC Lounge Cafeteria" },
  { label: "MCLC Adonai Music Room" },
  { label: "MCLC Exclusive drop-off & pick-up area" },
  { label: "MCLC Free parking space" },
  { label: "Accessible & central location", subtitle: "Southscape, Talisay City" },
  { label: "Foundation Day / Family Day" },
  { label: "Near shops, food, & essential services" },
  { label: "MCLC / Southscape Security Guard 24/7" },
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
            <div className="bitem" key={item.label}>
              <div className="bchk">✓</div>
              <div>
                {item.label}
                {item.subtitle && (
                  <div className="bitem-sub">{item.subtitle}</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
