import { Gift } from "lucide-react";

type BenefitItem = { type: "item"; label: string; subtitle?: string } | { type: "heading"; text: string };

const benefits: BenefitItem[] = [
  { type: "heading", text: "Academic & Teaching" },
  { type: "item", label: "Professional Licensed Teacher", subtitle: "Childhood Specialist" },
  { type: "item", label: "Progress report cards" },
  { type: "item", label: "Daily communication book" },
  { type: "item", label: "Values formation" },
  { type: "item", label: "Guidance & counseling", subtitle: "for students / parents / guardian" },
  { type: "item", label: "Foundation Day / Family Day" },

  { type: "heading", text: "Facilities & Amenities" },
  { type: "item", label: "Air-conditioned rooms" },
  { type: "item", label: "MCLC Exclusive Powder Room" },
  { type: "item", label: "MCLC Lounge Cafeteria" },
  { type: "item", label: "MCLC Adonai Music Room" },

  { type: "heading", text: "Convenience & Access" },
  { type: "item", label: "MCLC Exclusive drop-off & pick-up area" },
  { type: "item", label: "MCLC Free parking space" },
  { type: "item", label: "Accessible & central location", subtitle: "Southscape, Talisay City" },
  { type: "item", label: "Near shops, food, & essential services" },

  { type: "heading", text: "Safety & Security" },
  { type: "item", label: "MCLC / Southscape Security Guard 24/7" },
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
          {benefits.map((entry) =>
            entry.type === "heading" ? (
              <div className="bcat" key={entry.text}>{entry.text}</div>
            ) : (
              <div className="bitem" key={entry.label}>
                <div className="bchk">✓</div>
                <div>
                  {entry.label}
                  {entry.subtitle && (
                    <div className="bitem-sub">{entry.subtitle}</div>
                  )}
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
