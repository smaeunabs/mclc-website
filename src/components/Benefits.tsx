import { Gift } from "lucide-react";

type BenefitItem = { label: string; subtitle?: string };
type BenefitGroup = { heading: string; color: string; items: BenefitItem[] };

const groups: BenefitGroup[] = [
  {
    heading: "Academic & Teaching",
    color: "#F97316",
    items: [
      { label: "Professional Licensed Teacher", subtitle: "Childhood Specialist" },
      { label: "Progress report cards" },
      { label: "Daily communication book" },
      { label: "Values formation" },
      { label: "Guidance & counseling", subtitle: "for students / parents / guardian" },
      { label: "Foundation Day / Family Day" },
    ],
  },
  {
    heading: "Facilities & Amenities",
    color: "#0F9B6E",
    items: [
      { label: "Air-conditioned rooms" },
      { label: "MCLC Exclusive Powder Room" },
      { label: "MCLC Lounge Cafeteria" },
      { label: "MCLC Adonai Music Room" },
    ],
  },
  {
    heading: "Convenience & Access",
    color: "#1A7FD4",
    items: [
      { label: "MCLC Exclusive drop-off & pick-up area" },
      { label: "MCLC Free parking space" },
      { label: "Accessible & central location", subtitle: "Southscape, Talisay City" },
      { label: "Near shops, food, & essential services" },
    ],
  },
  {
    heading: "Safety & Security",
    color: "#D85A30",
    items: [
      { label: "MCLC / Southscape Security Guard 24/7" },
    ],
  },
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
          {groups.map((group) => (
            <>
              <div className="bcat" key={group.heading} style={{ color: group.color, borderBottomColor: `${group.color}33` }}>
                {group.heading}
              </div>
              {group.items.map((item) => (
                <div
                  className="bitem"
                  key={item.label}
                  style={{ "--cat-color": group.color } as React.CSSProperties}
                >
                  <div className="bchk" style={{ background: `linear-gradient(135deg, ${group.color}cc, ${group.color})` }}>✓</div>
                  <div>
                    {item.label}
                    {item.subtitle && (
                      <div className="bitem-sub">{item.subtitle}</div>
                    )}
                  </div>
                </div>
              ))}
            </>
          ))}
        </div>
      </div>
    </section>
  );
}
