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
        {/* Nursery / K1 */}
        <div className="pcard">
          <div className="ptop pt1">
            <div className="ptop-dots">
              <svg width="100%" height="100%">
                <circle cx="15%" cy="30%" r="8" fill="#C07800" />
                <circle cx="80%" cy="70%" r="6" fill="#C07800" />
                <circle cx="50%" cy="15%" r="5" fill="#C07800" />
              </svg>
            </div>
            <svg width="60" height="56" viewBox="0 0 64 60" fill="none" style={{ position: "relative", zIndex: 1 }} className="icon-pulse">
              <rect x="29" y="4" width="6" height="20" rx="3" fill="#C07800" opacity="0.5" />
              <rect x="20" y="11" width="24" height="6" rx="3" fill="#C07800" opacity="0.5" />
              <circle cx="32" cy="40" r="14" fill="#C07800" opacity="0.3" />
              <circle cx="32" cy="38" r="10" fill="#C07800" opacity="0.5" />
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

        {/* Playgroup */}
        <div className="pcard">
          <div className="ptop pt2">
            <div className="ptop-dots">
              <svg width="100%" height="100%">
                <circle cx="20%" cy="60%" r="8" fill="#0B7A45" />
                <circle cx="75%" cy="25%" r="6" fill="#0B7A45" />
                <circle cx="45%" cy="80%" r="4" fill="#0B7A45" />
              </svg>
            </div>
            <svg width="60" height="56" viewBox="0 0 64 60" fill="none" style={{ position: "relative", zIndex: 1 }} className="icon-sway">
              <circle cx="22" cy="28" r="12" fill="#0B7A45" opacity="0.3" />
              <path d="M10 52 Q10 38 22 38 Q34 38 34 52Z" fill="#0B7A45" opacity="0.3" />
              <circle cx="42" cy="28" r="12" fill="#0B7A45" opacity="0.5" />
              <path d="M30 52 Q30 38 42 38 Q54 38 54 52Z" fill="#0B7A45" opacity="0.5" />
              <path d="M20 20 Q32 12 44 20" stroke="#0B7A45" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.5" />
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

        {/* Daycare */}
        <div className="pcard">
          <div className="ptop pt3">
            <div className="ptop-dots">
              <svg width="100%" height="100%">
                <circle cx="25%" cy="40%" r="7" fill="#7A2E00" />
                <circle cx="70%" cy="65%" r="5" fill="#7A2E00" />
                <circle cx="55%" cy="20%" r="6" fill="#7A2E00" />
              </svg>
            </div>
            <svg width="60" height="56" viewBox="0 0 64 60" fill="none" style={{ position: "relative", zIndex: 1 }} className="icon-glow">
              <path d="M10 44 L10 28 L32 14 L54 28 L54 44" stroke="#7A2E00" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.5" />
              <rect x="24" y="32" width="16" height="18" rx="3" fill="#7A2E00" opacity="0.4" />
              <rect x="12" y="28" width="12" height="10" rx="2" fill="#7A2E00" opacity="0.3" />
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
