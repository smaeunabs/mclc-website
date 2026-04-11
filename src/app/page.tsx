import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhyMCLC from "@/components/WhyMCLC";
import Programs from "@/components/Programs";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Benefits from "@/components/Benefits";
import Enrollment from "@/components/Enrollment";
import FaithBanner from "@/components/FaithBanner";
import Footer from "@/components/Footer";

// Color constants matching CSS variables exactly
const CREAM = "#FFFBF0";
const WHITE = "#FFFFFF";
const CHARCOAL = "#2D2A3E";
const HERO_BG = "#FFF9EC"; // matches hero gradient start

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />

      {/* WAVE: Hero (#FFF9EC) → Why (white) */}
      <div className="wave-divider" style={{ background: HERO_BG, marginTop: "-2px", lineHeight: 0 }}>
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,30 C240,60 480,0 720,30 C960,60 1200,0 1440,30 L1440,60 L0,60 Z" fill={WHITE} />
        </svg>
      </div>

      <WhyMCLC />

      {/* WAVE: Why (white) → Programs (cream #FFFBF0) */}
      <div className="wave-divider" style={{ background: WHITE, marginTop: "-2px", lineHeight: 0 }}>
        <svg viewBox="0 0 1440 70" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,35 C360,70 720,0 1080,35 C1260,52 1380,20 1440,35 L1440,70 L0,70 Z" fill={CREAM} />
        </svg>
      </div>

      <Programs />

      {/* WAVE: Programs (cream #FFFBF0) → About (charcoal #2D2A3E) */}
      <div className="wave-divider" style={{ background: CREAM, marginTop: "-2px", lineHeight: 0 }}>
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,20 C180,50 360,0 540,30 C720,60 900,10 1080,30 C1260,50 1380,15 1440,25 L1440,60 L0,60 Z" fill={CHARCOAL} />
        </svg>
      </div>

      <About />

      {/* WAVE: About (charcoal #2D2A3E) → Testimonials (white) */}
      <div className="wave-divider" style={{ background: CHARCOAL, marginTop: "-2px", lineHeight: 0 }}>
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,40 C240,10 480,55 720,30 C960,5 1200,50 1440,25 L1440,60 L0,60 Z" fill={WHITE} />
        </svg>
      </div>

      <Testimonials />

      {/* WAVE: Testimonials (white) → Benefits (cream #FFFBF0) */}
      <div className="wave-divider" style={{ background: WHITE, marginTop: "-2px", lineHeight: 0 }}>
        <svg viewBox="0 0 1440 55" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,10 C360,50 720,0 1080,30 C1260,45 1380,15 1440,20 L1440,55 L0,55 Z" fill={CREAM} />
        </svg>
      </div>

      <Benefits />

      {/* WAVE: Benefits (cream #FFFBF0) → Enrollment (white) */}
      <div className="wave-divider" style={{ background: CREAM, marginTop: "-2px", lineHeight: 0 }}>
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,30 C240,60 480,0 720,30 C960,60 1200,0 1440,30 L1440,60 L0,60 Z" fill={WHITE} />
        </svg>
      </div>

      <Enrollment />

      <FaithBanner />
      <Footer />
    </>
  );
}
