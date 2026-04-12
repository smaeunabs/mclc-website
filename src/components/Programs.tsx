import { Star } from "lucide-react";

export default function Programs() {
  return (
    <section className="programs" id="programs">
      <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative", zIndex: 2 }}>
        <div className="shape shape3" style={{ width: "70px", height: "70px", background: "var(--orange-light)", top: "5%", right: 0, opacity: 0.6, borderRadius: "30% 70% 70% 30%" }} />
        <span className="fun-tag green"><Star size={13} />Our Programs</span>
        <h2 className="stitle">A Perfect Fit for Every Little One</h2>
        <p className="ssub">Whether your child is just starting out or ready for more structured learning, we have a program made just for them.</p>
      </div>
      <div className="prog-grid">
        {/* Playgroup — two children running toward each other */}
        <div className="pcard">
          <div className="ptop pt2">
            <svg
              viewBox="0 0 300 120"
              preserveAspectRatio="xMidYMid meet"
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", display: "block" }}
            >
              {/* Ground */}
              <rect x="40" y="102" width="220" height="5" rx="2.5" fill="#0B7A45" opacity="0.15" />

              {/* Heart in the middle — appears when they meet */}
              <g className="sc-pg-h" style={{ transformBox: "fill-box", transformOrigin: "center" }}>
                <path d="M150 68 C150 64 145 58 140 62 C135 66 135 74 150 82 C165 74 165 66 160 62 C155 58 150 64 150 68Z" fill="#0B7A45" opacity="0.7" />
              </g>

              {/* Left child — runs right */}
              <g className="sc-pg-l">
                {/* Head */}
                <circle cx="72" cy="62" r="10" fill="#0B7A45" opacity="0.7" />
                {/* Body */}
                <line x1="72" y1="72" x2="72" y2="93" stroke="#0B7A45" strokeWidth="3.5" strokeLinecap="round" opacity="0.7" />
                {/* Arms swinging */}
                <line x1="72" y1="78" x2="84" y2="70" stroke="#0B7A45" strokeWidth="3" strokeLinecap="round" opacity="0.7" />
                <line x1="72" y1="78" x2="60" y2="86" stroke="#0B7A45" strokeWidth="3" strokeLinecap="round" opacity="0.7" />
                {/* Legs mid-stride */}
                <line x1="72" y1="93" x2="80" y2="106" stroke="#0B7A45" strokeWidth="3" strokeLinecap="round" opacity="0.7" />
                <line x1="72" y1="93" x2="62" y2="104" stroke="#0B7A45" strokeWidth="3" strokeLinecap="round" opacity="0.7" />
              </g>

              {/* Right child — runs left */}
              <g className="sc-pg-r">
                {/* Head */}
                <circle cx="228" cy="62" r="10" fill="#0B7A45" opacity="0.55" />
                {/* Body */}
                <line x1="228" y1="72" x2="228" y2="93" stroke="#0B7A45" strokeWidth="3.5" strokeLinecap="round" opacity="0.55" />
                {/* Arms swinging */}
                <line x1="228" y1="78" x2="216" y2="70" stroke="#0B7A45" strokeWidth="3" strokeLinecap="round" opacity="0.55" />
                <line x1="228" y1="78" x2="240" y2="86" stroke="#0B7A45" strokeWidth="3" strokeLinecap="round" opacity="0.55" />
                {/* Legs mid-stride */}
                <line x1="228" y1="93" x2="220" y2="106" stroke="#0B7A45" strokeWidth="3" strokeLinecap="round" opacity="0.55" />
                <line x1="228" y1="93" x2="238" y2="104" stroke="#0B7A45" strokeWidth="3" strokeLinecap="round" opacity="0.55" />
              </g>
            </svg>
          </div>
          <div className="pbody">
            <h3>Playgroup</h3>
            <span className="atag at2">Ages 2&ndash;3</span>
            <p>The gentlest first step into school life! Helps your toddler build confidence, make friends, and discover the joy of learning through guided play.</p>
            <ul className="pfeat">
              <li><span className="fck gr">✓</span>Social &amp; emotional skills</li>
              <li><span className="fck gr">✓</span>Sensory &amp; motor activities</li>
              <li><span className="fck gr">✓</span>Gentle routine building</li>
            </ul>
          </div>
        </div>

        {/* Nursery — child stacking blocks */}
        <div className="pcard">
          <div className="ptop pt1">
            <svg
              viewBox="0 0 300 120"
              preserveAspectRatio="xMidYMid meet"
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", display: "block" }}
            >
              {/* Ground */}
              <rect x="60" y="100" width="180" height="6" rx="3" fill="#C07800" opacity="0.15" />

              {/* Block 1 (bottom, appears first) */}
              <g className="sc-nb1">
                <rect x="118" y="78" width="34" height="22" rx="4" fill="#F5A623" opacity="0.9" />
                <rect x="121" y="81" width="10" height="6" rx="2" fill="#fff" opacity="0.4" />
              </g>

              {/* Block 2 (middle, appears second) */}
              <g className="sc-nb2">
                <rect x="124" y="56" width="28" height="22" rx="4" fill="#E8622A" opacity="0.9" />
                <rect x="127" y="59" width="8" height="5" rx="2" fill="#fff" opacity="0.4" />
              </g>

              {/* Block 3 (top, appears third) */}
              <g className="sc-nb3">
                <rect x="128" y="37" width="22" height="19" rx="4" fill="#C07800" opacity="0.9" />
                <rect x="130" y="40" width="7" height="4" rx="2" fill="#fff" opacity="0.4" />
              </g>

              {/* Child figure — simple stick figure, bobs gently */}
              <g className="sc-nc">
                {/* Head */}
                <circle cx="174" cy="66" r="10" fill="#C07800" opacity="0.7" />
                {/* Body */}
                <line x1="174" y1="76" x2="174" y2="97" stroke="#C07800" strokeWidth="3.5" strokeLinecap="round" opacity="0.7" />
                {/* Arms — reaching toward stack */}
                <line x1="174" y1="82" x2="157" y2="74" stroke="#C07800" strokeWidth="3" strokeLinecap="round" opacity="0.7" />
                <line x1="174" y1="82" x2="186" y2="88" stroke="#C07800" strokeWidth="3" strokeLinecap="round" opacity="0.7" />
                {/* Legs */}
                <line x1="174" y1="97" x2="165" y2="108" stroke="#C07800" strokeWidth="3" strokeLinecap="round" opacity="0.7" />
                <line x1="174" y1="97" x2="183" y2="108" stroke="#C07800" strokeWidth="3" strokeLinecap="round" opacity="0.7" />
              </g>
            </svg>
          </div>
          <div className="pbody">
            <h3>Nursery</h3>
            <span className="atag at1">Ages 3&ndash;4</span>
            <p>Your child&apos;s first big adventure! Structured learning through play, songs, stories, and Christian values in a warm and loving classroom.</p>
            <ul className="pfeat">
              <li><span className="fck g">✓</span>Reading &amp; number readiness</li>
              <li><span className="fck g">✓</span>Arts, music &amp; creative play</li>
              <li><span className="fck g">✓</span>Bible stories &amp; prayer time</li>
            </ul>
          </div>
        </div>

        {/* Kinder 1 — child holding up a star */}
        <div className="pcard">
          <div className="ptop pt3">
            <svg
              viewBox="0 0 300 120"
              preserveAspectRatio="xMidYMid meet"
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", display: "block" }}
            >
              {/* Ground */}
              <rect x="80" y="105" width="140" height="5" rx="2.5" fill="#7A2E00" opacity="0.15" />

              {/* Star held up — twinkles */}
              <g className="sc-k1-star" style={{ transformBox: "fill-box", transformOrigin: "center" }}>
                <polygon
                  points="163,26 166,37 177,37 168,44 171,55 163,48 155,55 158,44 149,37 160,37"
                  fill="#E8622A" opacity="0.85"
                />
              </g>

              {/* Child figure — proud stance, arm raised */}
              <g className="sc-k1-child" style={{ transformBox: "fill-box", transformOrigin: "bottom center" }}>
                {/* Head */}
                <circle cx="150" cy="60" r="11" fill="#7A2E00" opacity="0.65" />
                {/* Body */}
                <line x1="150" y1="71" x2="150" y2="94" stroke="#7A2E00" strokeWidth="3.5" strokeLinecap="round" opacity="0.65" />
                {/* Right arm raised — holding star */}
                <line x1="150" y1="78" x2="163" y2="55" stroke="#7A2E00" strokeWidth="3" strokeLinecap="round" opacity="0.65" />
                {/* Left arm out */}
                <line x1="150" y1="78" x2="133" y2="87" stroke="#7A2E00" strokeWidth="3" strokeLinecap="round" opacity="0.65" />
                {/* Legs */}
                <line x1="150" y1="94" x2="141" y2="107" stroke="#7A2E00" strokeWidth="3" strokeLinecap="round" opacity="0.65" />
                <line x1="150" y1="94" x2="159" y2="107" stroke="#7A2E00" strokeWidth="3" strokeLinecap="round" opacity="0.65" />
              </g>
            </svg>
          </div>
          <div className="pbody">
            <h3>Kinder 1 (K1)</h3>
            <span className="atag at3">Ages 4&ndash;5</span>
            <p>Ready to shine! A more structured classroom experience that builds pre-reading, writing, and numeracy skills rooted in faith and creativity.</p>
            <ul className="pfeat">
              <li><span className="fck or">✓</span>Pre-reading &amp; writing skills</li>
              <li><span className="fck or">✓</span>Numbers &amp; early math concepts</li>
              <li><span className="fck or">✓</span>Bible study &amp; Christian values</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
