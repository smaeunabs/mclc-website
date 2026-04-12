import { PenLine } from "lucide-react";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-blob" />
      <div className="about-blob2" />
      <div className="about-inner">
        <div className="about-top">
          <div>
            <span className="fun-tag gold"><PenLine size={13} />About MCLC</span>
            <h2>
              Built on <span className="ahl">Faith</span>,<br />
              Driven by Love,<br />
              Growing Together
            </h2>
            <p className="lead">
              Founded in 2025, Messiah Christian Learning Center is an independent Christian institution
              in the heart of Talisay City, Cebu. Created by people who genuinely believe every child
              deserves a great start in life.
            </p>
            <p className="lead">
              We are not just a school. We are a community of families, teachers, and faith, walking
              together on the journey of raising the next generation of God-fearing, globally-ready individuals.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <div style={{ background: "rgba(255,255,255,0.07)", border: "2px solid rgba(245,166,35,0.22)", borderRadius: "20px", padding: "1.5rem" }}>
              <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.65)", lineHeight: 1.75, fontStyle: "italic" }}>
                &ldquo;Every child that walks through our doors is a gift from God. We take that seriously,
                nurturing each one with patience, love, and purpose.&rdquo;
              </p>
              <p style={{ fontSize: "13px", color: "var(--gold)", fontWeight: 700, marginTop: "10px" }}>
                The MCLC Founding Team
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              <div style={{ background: "rgba(255,255,255,0.06)", border: "2px solid rgba(245,166,35,0.2)", borderRadius: "16px", padding: "1rem 1.25rem", textAlign: "center" }}>
                <div style={{ fontFamily: "'Fredoka', cursive", fontWeight: 600, fontSize: "2.2rem", color: "var(--gold)" }}>3</div>
                <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.6)", fontWeight: 700 }}>Programs Offered</div>
              </div>
              <div style={{ background: "rgba(255,255,255,0.06)", border: "2px solid rgba(245,166,35,0.2)", borderRadius: "16px", padding: "1rem 1.25rem", textAlign: "center" }}>
                <div style={{ fontFamily: "'Fredoka', cursive", fontWeight: 600, fontSize: "2.2rem", color: "var(--green)" }}>2025</div>
                <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.6)", fontWeight: 700 }}>Year Founded</div>
              </div>
            </div>
          </div>
        </div>

        <div className="stag" style={{ color: "var(--gold-light)", textAlign: "center", marginBottom: "1.5rem", fontSize: "13px" }}>
          Our Vision, Mission &amp; Faith Statement
        </div>
        <div className="vmf-grid">
          <div className="vmf-card">
            <div className="vmf-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F5A623" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="3" />
                <line x1="12" y1="2" x2="12" y2="4" /><line x1="12" y1="20" x2="12" y2="22" />
                <line x1="2" y1="12" x2="4" y2="12" /><line x1="20" y1="12" x2="22" y2="12" />
              </svg>
            </div>
            <h3>Vision</h3>
            <p>
              MCLC envisions a community where every child grows up in a safe, caring, and resourceful environment,
              one that strengthens their love for God, deepens their academic knowledge, and shapes them into godly
              individuals who positively impact the world around them.
            </p>
            <p style={{ marginTop: "0.75rem", fontSize: "14px", color: "rgba(255,255,255,0.65)", lineHeight: 1.75 }}>
              We aim to guide our students to create godly lives in Christ that inspire and uplift others,
              at home, in school, and in their communities.
            </p>
          </div>
          <div className="vmf-card">
            <div className="vmf-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F5A623" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            </div>
            <h3>Mission</h3>
            <p>
              MCLC is a Christ-centered partner with families, committed to promoting transformation physically,
              spiritually, morally, and socially through biblical truth, quality teaching, and an engaged school community.
            </p>
            <p style={{ marginTop: "0.75rem", fontSize: "14px", color: "rgba(255,255,255,0.65)", lineHeight: 1.75 }}>
              We prepare our students to reach their fullest potential, guiding them on how to live, learn,
              and treat others with dignity and love in a diverse and multicultural world.
            </p>
          </div>
          <div className="vmf-card">
            <div className="vmf-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F5A623" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="9" y="2" width="6" height="14" rx="2" />
                <rect x="2" y="8" width="20" height="6" rx="2" />
                <line x1="12" y1="16" x2="12" y2="22" />
              </svg>
            </div>
            <h3>Faith Statement</h3>
            <p>
              At MCLC, we believe in one God, the Creator of all things, who exists as the Father, the Son,
              and the Holy Spirit. We believe the Bible is His true and living Word, and that Jesus Christ is
              our Messiah, Lord, and Savior who gives us forgiveness, hope, and new life.
            </p>
            <p style={{ marginTop: "0.75rem", fontSize: "14px", color: "rgba(255,255,255,0.65)", lineHeight: 1.75 }}>
              We commit to teaching our students to grow in faith, character, and wisdom, to love God and to
              love one another, and to live according to biblical values in every area of their lives.
            </p>
            <p className="verse">Based on Matthew 22:37&ndash;39 &amp; John 3:16</p>
          </div>
        <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
          <a
            href="/enroll"
            style={{
              display: "inline-block",
              fontSize: "17px",
              padding: "16px 40px",
              background: "rgba(255,255,255,0.12)",
              color: "#fff",
              border: "2px solid rgba(245,166,35,0.6)",
              borderRadius: "50px",
              fontFamily: "'Fredoka', cursive",
              fontWeight: 600,
              letterSpacing: "0.02em",
              textDecoration: "none",
              transition: "background 0.2s, border-color 0.2s",
            }}
          >
            Join Our Community
          </a>
        </div>
      </div>
    </section>
  );
}
