export default function Programs() {
  return (
    <section className="programs" id="programs">
      <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative", zIndex: 2 }}>
        <div className="shape shape3" style={{ width: "70px", height: "70px", background: "var(--orange-light)", top: "5%", right: 0, opacity: 0.6, borderRadius: "30% 70% 70% 30%" }} />
        <span className="fun-tag green">🌟 Our Programs</span>
        <h2 className="stitle">A Perfect Fit for Every Little One</h2>
        <p className="ssub">Whether your child is just starting out or ready for more structured learning, we have a program made just for them.</p>
      </div>
      <div className="prog-grid">
        {/* Nursery / K1 — child stacking blocks */}
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
            <h3>Nursery / K1</h3>
            <span className="atag at1">Ages 3&ndash;4</span>
            <p>Your child&apos;s first big adventure! Structured learning through play, songs, stories, and Christian values in a warm and loving classroom.</p>
            <ul className="pfeat">
              <li><span className="fck g">✓</span>Reading &amp; number readiness</li>
              <li><span className="fck g">✓</span>Arts, music &amp; creative play</li>
              <li><span className="fck g">✓</span>Bible stories &amp; prayer time</li>
            </ul>
          </div>
        </div>

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

        {/* Daycare — sleeping child with floating ZZZs */}
        <div className="pcard">
          <div className="ptop pt3">
            <svg
              viewBox="0 0 300 120"
              preserveAspectRatio="xMidYMid meet"
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", display: "block" }}
            >
              {/* Bed frame */}
              <rect x="60" y="88" width="180" height="14" rx="5" fill="#7A2E00" opacity="0.25" />
              {/* Pillow */}
              <rect x="66" y="80" width="38" height="18" rx="8" fill="#7A2E00" opacity="0.2" />

              {/* Child body under blanket — breathes */}
              <g className="sc-breathe" style={{ transformBox: "fill-box", transformOrigin: "top center" }}>
                <rect x="96" y="76" width="140" height="26" rx="10" fill="#7A2E00" opacity="0.35" />
                {/* Blanket folds */}
                <path d="M100 88 Q140 80 180 88 Q220 96 236 88" stroke="#7A2E00" strokeWidth="1.5" fill="none" opacity="0.3" />
              </g>

              {/* Head on pillow */}
              <circle cx="85" cy="80" r="13" fill="#7A2E00" opacity="0.55" />
              {/* Closed eyes */}
              <path d="M79 79 Q82 77 85 79" stroke="#fff" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.8" />
              <path d="M85 79 Q88 77 91 79" stroke="#fff" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.8" />

              {/* ZZZ 1 */}
              <g className="sc-z1">
                <text x="168" y="74" fontSize="13" fontWeight="700" fill="#7A2E00" opacity="0.7" fontFamily="sans-serif">z</text>
              </g>
              {/* ZZZ 2 */}
              <g className="sc-z2">
                <text x="180" y="60" fontSize="16" fontWeight="700" fill="#7A2E00" opacity="0.7" fontFamily="sans-serif">z</text>
              </g>
              {/* ZZZ 3 */}
              <g className="sc-z3">
                <text x="194" y="44" fontSize="20" fontWeight="700" fill="#7A2E00" opacity="0.7" fontFamily="sans-serif">Z</text>
              </g>
            </svg>
          </div>
          <div className="pbody">
            <h3>Daycare</h3>
            <span className="atag at3">Ages 1&ndash;3</span>
            <p>Full-day loving care for your little one while you&apos;re at work. Safe, stimulated, and happy so you can focus knowing they&apos;re in great hands.</p>
            <ul className="pfeat">
              <li><span className="fck or">✓</span>Full-day supervised care</li>
              <li><span className="fck or">✓</span>Age-appropriate activities</li>
              <li><span className="fck or">✓</span>Daily parent updates</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
