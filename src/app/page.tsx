import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhyMCLC from "@/components/WhyMCLC";
import Programs from "@/components/Programs";
import Facility from "@/components/Facility";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Benefits from "@/components/Benefits";
import Enrollment from "@/components/Enrollment";
import FaithBanner from "@/components/FaithBanner";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />

      {/* WAVE: Hero (#FFFFFF) → Why (#FFFFFF) */}
      <div style={{ background: "#FFFFFF", lineHeight: 0, display: "block", margin: 0, padding: 0, overflow: "hidden", marginTop: "-2px" }}>
        <svg width="100%" height="60" viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "block" }}>
          <rect x="0" y="0" width="1440" height="60" fill="#FFFFFF" />
          <path d="M-2,30 C180,60 360,0 540,30 C720,60 900,0 1080,30 C1260,60 1380,15 1442,30 L1442,60 L-2,60 Z" fill="#FFFFFF" />
        </svg>
      </div>

      <WhyMCLC />

      {/* WAVE: Why (#FFFFFF) → Programs (#FFFBF0) */}
      <div style={{ background: "#FFFFFF", lineHeight: 0, display: "block", margin: 0, padding: 0, overflow: "hidden", marginTop: "-2px" }}>
        <svg width="100%" height="70" viewBox="0 0 1440 70" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "block" }}>
          <rect x="0" y="0" width="1440" height="70" fill="#FFFFFF" />
          <path d="M-2,35 C360,70 720,0 1080,35 C1260,52 1380,20 1442,35 L1442,70 L-2,70 Z" fill="#FFFBF0" />
        </svg>
      </div>

      <Programs />

      {/* WAVE: Programs (#FFFBF0) → Facility (#FFFFFF) */}
      <div style={{ background: "#FFFBF0", lineHeight: 0, display: "block", margin: 0, padding: 0, overflow: "hidden", marginTop: "-2px" }}>
        <svg width="100%" height="60" viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "block" }}>
          <rect x="0" y="0" width="1440" height="60" fill="#FFFBF0" />
          <path d="M-2,30 C240,60 480,0 720,30 C960,60 1200,0 1442,30 L1442,60 L-2,60 Z" fill="#FFFFFF" />
        </svg>
      </div>

      <Facility />

      {/* WAVE: Facility (#FFFFFF) → About (#2D2A3E) */}
      <div style={{ background: "#FFFFFF", lineHeight: 0, display: "block", margin: 0, padding: 0, overflow: "hidden", marginTop: "-2px" }}>
        <svg width="100%" height="60" viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "block" }}>
          <rect x="0" y="0" width="1440" height="60" fill="#FFFFFF" />
          <path d="M-2,20 C180,50 360,0 540,30 C720,60 900,10 1080,30 C1260,50 1380,15 1442,25 L1442,60 L-2,60 Z" fill="#2D2A3E" />
        </svg>
      </div>

      <About />

      {/* WAVE: About (#2D2A3E) → Testimonials (#FFF9EC) */}
      <div style={{ background: "#2D2A3E", lineHeight: 0, display: "block", margin: 0, padding: 0, overflow: "hidden", marginTop: "-2px" }}>
        <svg width="100%" height="60" viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "block" }}>
          <rect x="0" y="0" width="1440" height="60" fill="#2D2A3E" />
          <path d="M-2,40 C240,10 480,55 720,30 C960,5 1200,50 1442,25 L1442,60 L-2,60 Z" fill="#FFF9EC" />
        </svg>
      </div>

      <Testimonials />

      {/* WAVE: Testimonials (#FFF9EC) → Benefits (#FFFBF0) */}
      <div style={{ background: "#FFF9EC", lineHeight: 0, display: "block", margin: 0, padding: 0, overflow: "hidden", marginTop: "-2px" }}>
        <svg width="100%" height="80" viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "block" }}>
          <rect x="0" y="0" width="1440" height="80" fill="#FFF9EC" />
          <path d="M-2,40 C180,80 360,0 540,40 C720,80 900,0 1080,40 C1260,80 1380,20 1442,40 L1442,80 L-2,80 Z" fill="#FFFBF0" />
        </svg>
      </div>

      <Benefits />

      {/* WAVE: Benefits (#FFFBF0) → Enrollment (#FFFFFF) */}
      <div style={{ background: "#FFFBF0", lineHeight: 0, display: "block", margin: 0, padding: 0, overflow: "hidden", marginTop: "-2px" }}>
        <svg width="100%" height="60" viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "block" }}>
          <rect x="0" y="0" width="1440" height="60" fill="#FFFBF0" />
          <path d="M-2,30 C240,60 480,0 720,30 C960,60 1200,0 1442,30 L1442,60 L-2,60 Z" fill="#FFFFFF" />
        </svg>
      </div>

      <Enrollment />

      <FaithBanner />
      <Footer />
    </>
  );
}
