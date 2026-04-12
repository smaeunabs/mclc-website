import { Rocket } from "lucide-react";

export default function Enrollment() {
  return (
    <section className="enrollment" id="enrollment">
      <div className="shape shape2" style={{ width: "80px", height: "80px", background: "var(--purple-light)", top: "12%", left: "1%", opacity: 0.5, borderRadius: "60% 40% 50% 50%" }} />
      <div className="ewrap">
        <span className="fun-tag purple"><Rocket size={13} />How to Enroll</span>
        <h2 className="stitle">Ready to Get Started?</h2>
        <p className="ssub" style={{ marginBottom: "2.5rem" }}>
          Enrolling is easy! Follow these 4 simple steps and your child&apos;s bright future begins.
        </p>
        <div className="egrid">
          <div className="steps">
            <div className="step">
              <div className="snum">1</div>
              <div>
                <h4>Contact us to enroll</h4>
                <p>Email us or call +63 898-018-4081. It&apos;s friendly and there&apos;s absolutely no pressure!</p>
              </div>
            </div>
            <div className="step">
              <div className="snum">2</div>
              <div>
                <h4>Meet with our team</h4>
                <p>We&apos;ll walk you through the enrollment process and answer every question you have. No pressure, just genuine care for your child.</p>
              </div>
            </div>
            <div className="step">
              <div className="snum">3</div>
              <div>
                <h4>Submit requirements</h4>
                <p>Bring or send a photocopy of your child&apos;s <strong>PSA Birth Certificate</strong> — online or onsite, whichever is more convenient for your family.</p>
              </div>
            </div>
            <div className="step">
              <div className="snum">4</div>
              <div>
                <h4>Pay &amp; secure your spot!</h4>
                <p>Complete enrollment and your child is officially part of the MCLC family. Welcome home! We can&apos;t wait to meet them!</p>
              </div>
            </div>
          </div>

          <div className="ccard">
            <h3>Come Visit Us!</h3>
            <div className="citem">
              <div className="cion">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#B07D00" strokeWidth="2" strokeLinecap="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <div className="clbl">Address</div>
                <div className="cval">Southscape Commercial Bldg., 2nd Floor Unit B1-2-5, Lawaan 1, Talisay City, Cebu 6045</div>
              </div>
            </div>
            <div className="citem">
              <div className="cion">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#B07D00" strokeWidth="2" strokeLinecap="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.37 2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.68 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6.09 6.09l1.14-1.14a2 2 0 0 1 2.11-.45c.91.32 1.85.55 2.81.68A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div>
                <div className="clbl">Mobile / Call or Text</div>
                <div className="cval"><a href="tel:+639898018408">(+63) 898-018-4081</a></div>
              </div>
            </div>
            <div className="citem">
              <div className="cion">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#B07D00" strokeWidth="2" strokeLinecap="round">
                  <rect x="5" y="2" width="14" height="20" rx="2" /><line x1="12" y1="18" x2="12" y2="18.01" />
                </svg>
              </div>
              <div>
                <div className="clbl">PLDT Landline</div>
                <div className="cval"><a href="tel:0323434775">(032) 343-4775</a></div>
              </div>
            </div>
            <div className="citem">
              <div className="cion">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#B07D00" strokeWidth="2" strokeLinecap="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div>
                <div className="clbl">Email</div>
                <div className="cval"><a href="mailto:support@mclc-cebu.com">support@mclc-cebu.com</a></div>
              </div>
            </div>
            <div className="cta-box">
              <p>We&apos;d love to hear from you!<br />Reach out anytime. We&apos;re happy to answer all your questions.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
