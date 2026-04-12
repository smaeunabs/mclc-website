"use client";

import { Heart, Star, Home } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="invite" id="testimonials">
      <div className="invite-bg" />
      <div className="shape" style={{ width: "100px", height: "100px", background: "var(--gold-light)", top: "5%", left: "-20px", opacity: 0.4, borderRadius: "40% 60% 60% 40%" }} />
      <div className="shape shape2" style={{ width: "70px", height: "70px", background: "var(--pink-light)", bottom: "8%", right: "-10px", opacity: 0.5 }} />
      <h2>Parents &amp; Kids Love MCLC <Heart size={20} style={{ display: "inline", verticalAlign: "middle", color: "#e05", fill: "#e05" }} /></h2>
      <p>Don&apos;t just take our word for it. Here&apos;s what families in our community are saying about life at Messiah Christian Learning Center.</p>
      <div className="invite-grid">
        <div className="icard">
          <div className="stars">
            {[...Array(5)].map((_, i) => <Star key={i} size={14} style={{ display: "inline", verticalAlign: "middle" }} fill="currentColor" />)}
          </div>
          <div className="irow">
            <div className="iico ig">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0B7A45" strokeWidth="1.5" strokeLinecap="round">
                <circle cx="12" cy="8" r="4" /><path d="M4 20v-2a8 8 0 0 1 16 0v2" />
              </svg>
            </div>
            <div>
              <div className="iname">Parent of a Nursery student</div>
              <div className="irole">Talisay City, Cebu</div>
            </div>
          </div>
          <p>&ldquo;My daughter used to cry every morning before school. After two weeks at MCLC, she was asking me to bring her early. That&apos;s when I knew we made the right choice.&rdquo;</p>
        </div>
        <div className="icard">
          <div className="stars">
            {[...Array(5)].map((_, i) => <Star key={i} size={14} style={{ display: "inline", verticalAlign: "middle" }} fill="currentColor" />)}
          </div>
          <div className="irow">
            <div className="iico ib">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1A5FA0" strokeWidth="1.5" strokeLinecap="round">
                <circle cx="12" cy="8" r="4" /><path d="M4 20v-2a8 8 0 0 1 16 0v2" />
              </svg>
            </div>
            <div>
              <div className="iname">Parent of a K1 student</div>
              <div className="irole">Talisay City, Cebu</div>
            </div>
          </div>
          <p>&ldquo;As a working mom, I was so worried about leaving my son. MCLC gives me daily updates and I can tell they truly care, not just as a student, but as a child.&rdquo;</p>
        </div>
        <div className="icard">
          <div className="stars">
            {[...Array(5)].map((_, i) => <Star key={i} size={14} style={{ display: "inline", verticalAlign: "middle" }} fill="currentColor" />)}
          </div>
          <div className="irow">
            <div className="iico ip">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#5B2FBB" strokeWidth="1.5" strokeLinecap="round">
                <circle cx="12" cy="8" r="4" /><path d="M4 20v-2a8 8 0 0 1 16 0v2" />
              </svg>
            </div>
            <div>
              <div className="iname">Parent of a Playgroup student</div>
              <div className="irole">Talisay City, Cebu</div>
            </div>
          </div>
          <p>&ldquo;I love that they don&apos;t just focus on academics. My child is learning to pray, to share, and to be kind. That&apos;s the education I&apos;ve always wanted for my family.&rdquo;</p>
        </div>
      </div>
      <a
        href="#enrollment"
        className="btn-primary"
        style={{ fontSize: "17px", padding: "16px 40px", position: "relative", zIndex: 2 }}
        onClick={e => { e.preventDefault(); document.getElementById("enrollment")?.scrollIntoView({ behavior: "smooth" }); }}
      >
        Join Our Family Today <Home size={16} style={{ display: "inline", verticalAlign: "middle", marginLeft: "4px" }} />
      </a>
    </section>
  );
}
