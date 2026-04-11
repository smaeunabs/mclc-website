import { Sparkles } from "lucide-react";

export default function WhyMCLC() {
  return (
    <section className="why" id="why">
      <div className="shape" style={{ width: "80px", height: "80px", background: "var(--gold-light)", top: "10%", left: "-20px", opacity: 0.5 }} />
      <div className="shape shape2" style={{ width: "60px", height: "60px", background: "var(--green-light)", bottom: "10%", right: "-15px", opacity: 0.5 }} />
      <div className="why-inner">
        <span className="fun-tag orange"><Sparkles size={13} />Why Choose MCLC?</span>
        <h2 className="stitle">Everything Your Child Deserves</h2>
        <p className="ssub">We created a place where every child feels seen, loved, and excited to come to school every single day.</p>
        <div className="why-grid">
          <div className="wcard w1">
            <div className="wcard-blob" />
            <div className="wicon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#B07D00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            </div>
            <h3>Faith-Centered Learning</h3>
            <p>Every lesson is woven with God&apos;s love. We nurture both the mind and the spirit, helping children grow in faith and character.</p>
          </div>
          <div className="wcard w2">
            <div className="wcard-blob" />
            <div className="wicon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0B7A45" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" />
              </svg>
            </div>
            <h3>International Standard</h3>
            <p>Top-quality curriculum that prepares your child to be globally competitive, right here in Talisay City, Cebu.</p>
          </div>
          <div className="wcard w3">
            <div className="wcard-blob" />
            <div className="wicon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1A5FA0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </div>
            <h3>Safe &amp; Loving Space</h3>
            <p>Fully air-conditioned, clean, and secure. Your child will feel comfortable and genuinely happy to be here every morning.</p>
          </div>
          <div className="wcard w4">
            <div className="wcard-blob" />
            <div className="wicon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#5B2FBB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <h3>We Partner With Parents</h3>
            <p>Parents are our partners, not just customers. We keep you updated daily and work together to bring out the best in your child.</p>
          </div>
          <div className="wcard w5">
            <div className="wcard-blob" />
            <div className="wicon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8A2A00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
              </svg>
            </div>
            <h3>Whole-Child Growth</h3>
            <p>Academics, character, and spiritual growth. We develop all three, because a smart, kind, God-fearing child is truly successful.</p>
          </div>
          <div className="wcard w6">
            <div className="wcard-blob" />
            <div className="wicon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#A0184A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </div>
            <h3>Kids Will Love It Here</h3>
            <p>From field trips to family days to honor roll treats, we make sure your little one wakes up excited every single morning!</p>
          </div>
        </div>
      </div>
    </section>
  );
}
