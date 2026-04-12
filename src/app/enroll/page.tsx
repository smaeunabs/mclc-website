"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useForm } from "@formspree/react";
import {
  Star,
  Smile,
  BookOpen,
  GraduationCap,
  User,
  Users,
  CreditCard,
  Smartphone,
  MapPin,
  CheckCircle,
  ChevronRight,
  ChevronLeft,
  Download,
  Mail,
  X,
} from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────

type Program = "playgroup" | "nursery" | "kinder1" | "";
type Sex = "male" | "female" | "";
type PaymentMethod = "gcash" | "in-person" | "";

interface FormFields {
  program: Program;
  childFirstName: string;
  childLastName: string;
  childMiddleName: string;
  childDOB: string;
  childSex: Sex;
  parentName: string;
  parentRelationship: string;
  parentContact: string;
  parentEmail: string;
  paymentMethod: PaymentMethod;
  hearAboutUs: string;
  additionalNotes: string;
}

interface DraftState {
  form: FormFields;
  currentStep: number;
  savedAt: number;
}

// ─── Tuition fees ─────────────────────────────────────────────────────────────

const TUITION = {
  playgroup: {
    name: "Playgroup",
    registration: "₱3,000",
    monthly: "₱3,000",
    annualTuition: "₱27,000",
    materialsLabel: "Learning Materials (Annual)",
    materials: "₱1,850",
    uniform: "₱1,900",
    idMisc: "₱650",
    enrollWithUniform: "₱7,400",
    enrollWithoutUniform: "₱5,500",
  },
  nursery: {
    name: "Nursery",
    registration: "₱3,500",
    monthly: "₱3,500",
    annualTuition: "₱31,500",
    materialsLabel: "Books & Materials (Annual)",
    materials: "₱2,250",
    uniform: "₱2,200",
    idMisc: "₱700",
    enrollWithUniform: "₱8,650",
    enrollWithoutUniform: "₱6,450",
  },
  kinder1: {
    name: "Kinder 1 (K1)",
    registration: "₱4,000",
    monthly: "₱4,000",
    annualTuition: "₱36,000",
    materialsLabel: "Books & Materials (Annual)",
    materials: "₱2,750",
    uniform: "₱2,500",
    idMisc: "₱800",
    enrollWithUniform: "₱10,050",
    enrollWithoutUniform: "₱7,550",
  },
} as const;

// ─── Label maps ───────────────────────────────────────────────────────────────

const PROGRAM_LABELS: Record<string, string> = {
  playgroup: "Playgroup",
  nursery: "Nursery",
  kinder1: "Kinder 1 (K1)",
};

const RELATIONSHIP_LABELS: Record<string, string> = {
  mother: "Mother",
  father: "Father",
  guardian: "Guardian",
  grandparent: "Grandparent",
};

const HEAR_ABOUT_LABELS: Record<string, string> = {
  facebook: "Facebook",
  "word-of-mouth": "Word of mouth / Referral",
  google: "Google Search",
  southscape: "Saw the school at Southscape",
  flyer: "Flyer or tarpaulin",
  other: "Other",
};

const PAYMENT_LABELS: Record<string, string> = {
  gcash: "GCash",
  "in-person": "Pay at Focuslab Front Desk",
};

// ─── Step config ──────────────────────────────────────────────────────────────

const STEPS = [
  { label: "Program", Icon: Star },
  { label: "Child",   Icon: User },
  { label: "Parent",  Icon: Users },
  { label: "Payment", Icon: CreditCard },
];

const STEP_TITLES = [
  "Choose a Program",
  "Child's Information",
  "Parent / Guardian",
  "Payment Method",
];

// ─── Defaults ─────────────────────────────────────────────────────────────────

const DEFAULT_FORM: FormFields = {
  program: "",
  childFirstName: "",
  childLastName: "",
  childMiddleName: "",
  childDOB: "",
  childSex: "",
  parentName: "",
  parentRelationship: "",
  parentContact: "",
  parentEmail: "",
  paymentMethod: "",
  hearAboutUs: "",
  additionalNotes: "",
};

// ─── Shared styles ────────────────────────────────────────────────────────────

const INPUT_STYLE: React.CSSProperties = {
  width: "100%",
  padding: "12px 16px",
  borderRadius: "12px",
  border: "2px solid #E0D8C0",
  background: "white",
  fontFamily: "'Nunito', sans-serif",
  fontSize: "15px",
  color: "#2D2A3E",
  outline: "none",
  transition: "border-color 0.2s",
  boxSizing: "border-box",
};

// ─── Sub-components ───────────────────────────────────────────────────────────

function InputField({
  label, required, optional, value, onChange, type = "text", placeholder,
}: {
  label: string; required?: boolean; optional?: boolean;
  value: string; onChange: (v: string) => void;
  type?: string; placeholder?: string;
}) {
  return (
    <div>
      <label style={{ display: "block", fontSize: "13px", fontWeight: 700, color: "#2D2A3E", marginBottom: "0.5rem" }}>
        {label}{" "}
        {required && <span style={{ color: "#FF6B3D" }}>*</span>}
        {optional && <span style={{ fontWeight: 400, color: "#B0A890" }}>(optional)</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        style={INPUT_STYLE}
        onFocus={(e) => (e.currentTarget.style.borderColor = "#F5A623")}
        onBlur={(e) => (e.currentTarget.style.borderColor = "#E0D8C0")}
      />
    </div>
  );
}

function TuitionFeeCard({ program }: { program: Program }) {
  if (!program || !(program in TUITION)) return null;
  const fees = TUITION[program as keyof typeof TUITION];
  const rows = [
    { label: "Registration Fee",            value: fees.registration },
    { label: "Monthly Tuition",             value: fees.monthly },
    { label: "Annual Tuition (10 months)",  value: fees.annualTuition },
    { label: fees.materialsLabel,           value: fees.materials },
    { label: "Uniform",                     value: fees.uniform },
    { label: "ID & Miscellaneous",          value: fees.idMisc },
  ];
  return (
    <div style={{ borderRadius: "18px", border: "2px solid #EDE8D8", overflow: "hidden", marginBottom: "1.5rem" }}>
      <div style={{ padding: "12px 18px", background: "linear-gradient(135deg, #FFF9EC, #FFE8CC)", borderBottom: "2px solid #EDE8D8" }}>
        <div style={{ fontSize: "10px", fontWeight: 800, color: "#FF6B3D", textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: "2px" }}>
          Tuition &amp; Fees &mdash; SY 2026&ndash;2027
        </div>
        <div style={{ fontFamily: "'Fredoka', cursive", fontWeight: 500, fontSize: "17px", color: "#2D2A3E" }}>
          {fees.name}
        </div>
      </div>
      {rows.map(({ label, value }) => (
        <div key={label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "9px 18px", borderBottom: "1px solid #F5EDD8" }}>
          <span style={{ fontSize: "13px", color: "#7B7490", fontWeight: 600 }}>{label}</span>
          <span style={{ fontSize: "13px", color: "#2D2A3E", fontWeight: 700 }}>{value}</span>
        </div>
      ))}
      <div style={{ padding: "14px 18px", background: "linear-gradient(135deg, #FFF9EC, #FFE8CC)", borderTop: "2px solid #EDE8D8" }}>
        <div style={{ fontSize: "10px", fontWeight: 800, color: "#FF6B3D", textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: "10px" }}>
          Due Upon Enrollment
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "6px" }}>
          <span style={{ fontSize: "13px", color: "#7B7490", fontWeight: 600 }}>With Uniform</span>
          <span style={{ fontFamily: "'Fredoka', cursive", fontSize: "20px", color: "#F5A623", fontWeight: 500 }}>{fees.enrollWithUniform}</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
          <span style={{ fontSize: "13px", color: "#7B7490", fontWeight: 600 }}>Without Uniform</span>
          <span style={{ fontFamily: "'Fredoka', cursive", fontSize: "20px", color: "#2D2A3E", fontWeight: 500 }}>{fees.enrollWithoutUniform}</span>
        </div>
        <div style={{ marginTop: "10px", paddingTop: "10px", borderTop: "1px dashed #E0D8C0", fontSize: "12px", color: "#B0A890", fontStyle: "italic" }}>
          After-School Care at &#8369;500 per hour
        </div>
      </div>
    </div>
  );
}

// ─── Hero & wave ──────────────────────────────────────────────────────────────

function HeroBanner() {
  return (
    <>
      <section style={{ background: "linear-gradient(160deg, #FFF9EC 0%, #FFF3D0 40%, #FFE8CC 100%)", paddingTop: "96px", paddingBottom: "0", paddingLeft: "5%", paddingRight: "5%", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden", zIndex: 0 }}>
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <circle cx="7%"  cy="25%" r="6"  fill="#F5A623" opacity="0.2"  />
            <circle cx="93%" cy="20%" r="9"  fill="#30C87A" opacity="0.18" />
            <circle cx="86%" cy="72%" r="6"  fill="#9B6FE8" opacity="0.15" />
            <circle cx="4%"  cy="78%" r="8"  fill="#FF6B3D" opacity="0.15" />
            <circle cx="50%" cy="8%"  r="5"  fill="#3D9BE9" opacity="0.15" />
            <circle cx="16%" cy="52%" r="4"  fill="#F06292" opacity="0.18" />
            <circle cx="78%" cy="44%" r="5"  fill="#F5A623" opacity="0.15" />
          </svg>
        </div>
        <div style={{ maxWidth: "720px", margin: "0 auto", textAlign: "center", position: "relative", zIndex: 2, padding: "2.5rem 0 3.5rem" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#CFFAE7", color: "#0B7A45", borderRadius: "50px", padding: "7px 16px", fontSize: "11px", fontWeight: 800, letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: "1.25rem", border: "2px solid #A8F0CC" }}>
            <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#30C87A", flexShrink: 0, display: "inline-block" }} />
            Now Enrolling &mdash; SY 2026&ndash;2027
          </div>
          <h1 style={{ fontFamily: "'Fredoka', cursive", fontWeight: 500, fontSize: "clamp(2rem, 4.5vw, 3.2rem)", lineHeight: 1.15, color: "#2D2A3E", marginBottom: "1rem" }}>
            Enroll Your Child at <span style={{ color: "#F5A623" }}>MCLC</span>
          </h1>
          <p style={{ fontSize: "17px", color: "#7B7490", lineHeight: 1.75, maxWidth: "520px", margin: "0 auto" }}>
            Join our Christ-centered learning community in Southscape, Talisay City, Cebu. Simple process. Warm welcome.
          </p>
        </div>
      </section>
      <div style={{ background: "#FFE8CC", overflow: "hidden", lineHeight: 0, display: "block", margin: 0, padding: 0 }}>
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" width="100%" height="80" xmlns="http://www.w3.org/2000/svg" style={{ display: "block" }}>
          <rect x="-2" y="0" width="1444" height="80" fill="#FFE8CC" />
          <path d="M-2,40 C180,80 360,0 540,40 C720,80 900,0 1080,40 C1260,80 1380,20 1442,40 L1442,80 L-2,80 Z" fill="#FFFFFF" />
        </svg>
      </div>
    </>
  );
}

// ─── Main page ────────────────────────────────────────────────────────────────

export default function EnrollPage() {
  const [state, handleFormspreeSubmit] = useForm("xzdypvrb");

  const [currentStep, setCurrentStep] = useState(1);
  const [consent, setConsent]         = useState(false);
  const [showDraftBanner, setShowDraftBanner] = useState(false);
  const [savedDraft, setSavedDraft]   = useState<DraftState | null>(null);
  const [form, setForm]               = useState<FormFields>(DEFAULT_FORM);

  const update = (field: keyof FormFields, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  // ── Check for saved draft on mount ──
  useEffect(() => {
    try {
      const raw = localStorage.getItem("mclc_enrollment_draft");
      if (!raw) return;
      const draft = JSON.parse(raw) as DraftState;
      if (draft?.form?.program) {
        setSavedDraft(draft);
        setShowDraftBanner(true);
      }
    } catch { /* ignore */ }
  }, []);

  // ── Persist draft on every change ──
  useEffect(() => {
    if (state.succeeded) return;
    try {
      const draft: DraftState = { form, currentStep, savedAt: Date.now() };
      localStorage.setItem("mclc_enrollment_draft", JSON.stringify(draft));
    } catch { /* ignore */ }
  }, [form, currentStep, state.succeeded]);

  // ── Clear draft on success ──
  useEffect(() => {
    if (state.succeeded) {
      try { localStorage.removeItem("mclc_enrollment_draft"); } catch { /* ignore */ }
    }
  }, [state.succeeded]);

  const handleContinueDraft = () => {
    if (!savedDraft) return;
    setForm(savedDraft.form);
    setCurrentStep(savedDraft.currentStep);
    setShowDraftBanner(false);
  };

  const handleStartOver = () => {
    try { localStorage.removeItem("mclc_enrollment_draft"); } catch { /* ignore */ }
    setForm(DEFAULT_FORM);
    setCurrentStep(1);
    setConsent(false);
    setShowDraftBanner(false);
    setSavedDraft(null);
  };

  const canContinue = (): boolean => {
    switch (currentStep) {
      case 1: return form.program !== "";
      case 2: return !!(form.childFirstName && form.childLastName && form.childDOB && form.childSex);
      case 3: return !!(form.parentName && form.parentRelationship && form.parentContact && form.parentEmail && form.hearAboutUs);
      case 4: return form.paymentMethod !== "" && consent;
      default: return false;
    }
  };

  const childFullName = [form.childFirstName, form.childMiddleName, form.childLastName].filter(Boolean).join(" ");
  const CurrentStepIcon = STEPS[currentStep - 1].Icon;
  const hasFormErrors = state.errors !== null;

  // ── Success state ──
  if (state.succeeded) {
    return (
      <>
        <Navbar />
        <HeroBanner />
        <section style={{ background: "#FFFFFF", padding: "0 5% 80px", marginTop: "-2px" }}>
          <div style={{ maxWidth: "672px", margin: "0 auto", paddingTop: "2.5rem" }}>

            {/* Success card */}
            <div style={{ textAlign: "center", padding: "3rem 2rem 2.5rem", background: "#F6FFF8", borderRadius: "28px", border: "2px solid #A8F0CC", boxShadow: "0 8px 32px rgba(0,0,0,0.07)", marginBottom: "1.75rem" }}>
              <div style={{ width: "80px", height: "80px", borderRadius: "50%", background: "linear-gradient(135deg, #30C87A, #0B7A45)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.5rem", boxShadow: "0 8px 24px rgba(48,200,122,0.35)" }}>
                <CheckCircle size={40} color="white" />
              </div>
              <h2 style={{ fontFamily: "'Fredoka', cursive", fontWeight: 500, fontSize: "clamp(1.6rem, 3vw, 2.1rem)", color: "#2D2A3E", marginBottom: "0.75rem" }}>
                Thank you! We received your inquiry.
              </h2>
              <p style={{ fontSize: "16px", color: "#7B7490", lineHeight: 1.75, maxWidth: "460px", margin: "0 auto" }}>
                We will reach out within 1 to 2 school days to confirm your enrollment slot.
              </p>
            </div>

            {/* Complete enrollment box */}
            <div style={{ borderRadius: "24px", background: "linear-gradient(135deg, #FFF9EC, #FFE8CC)", border: "2px solid #FFE49A", padding: "2rem", boxShadow: "0 4px 20px rgba(245,166,35,0.12)", marginBottom: "1.5rem" }}>
              <div style={{ fontFamily: "'Fredoka', cursive", fontWeight: 500, fontSize: "1.35rem", color: "#2D2A3E", marginBottom: "0.5rem" }}>
                Complete Your Enrollment
              </div>
              <p style={{ fontSize: "14px", color: "#7B7490", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                To officially enroll your child, please fill out and submit our complete MCLC Enrollment Form. You have two options:
              </p>

              {/* Option 1 — Email */}
              <div style={{ display: "flex", alignItems: "flex-start", gap: "14px", padding: "1.1rem", borderRadius: "16px", background: "white", border: "2px solid #EDE8D8", marginBottom: "1rem" }}>
                <div style={{ width: "40px", height: "40px", borderRadius: "12px", background: "#D8EEFF", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Mail size={18} color="#1A5FA0" />
                </div>
                <div style={{ fontSize: "14px", color: "#2D2A3E", lineHeight: 1.65 }}>
                  <span style={{ fontWeight: 700 }}>Option 1 — Email</span><br />
                  Print, fill out, and email the completed form to{" "}
                  <a href="mailto:support@mclc-cebu.com" style={{ color: "#F5A623", fontWeight: 700 }}>support@mclc-cebu.com</a>{" "}
                  with the subject: <em>Enrollment - [Your Child&apos;s Full Name]</em>
                </div>
              </div>

              {/* Option 2 — In Person */}
              <div style={{ display: "flex", alignItems: "flex-start", gap: "14px", padding: "1.1rem", borderRadius: "16px", background: "white", border: "2px solid #EDE8D8", marginBottom: "1.75rem" }}>
                <div style={{ width: "40px", height: "40px", borderRadius: "12px", background: "#FFE5DC", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <MapPin size={18} color="#7A2E00" />
                </div>
                <div style={{ fontSize: "14px", color: "#2D2A3E", lineHeight: 1.65 }}>
                  <span style={{ fontWeight: 700 }}>Option 2 — In Person</span><br />
                  Bring the completed form to Focuslab front desk officer, Unit No. B1-2-7, just across MCLC at Southscape Commercial Bldg., 2nd Floor, Lawaan 1, Talisay City, Cebu 6045. Don&apos;t forget to bring a photocopy of your child&apos;s PSA Birth Certificate.
                </div>
              </div>

              {/* Download button */}
              <a
                href="/MCLC_Enrollment_Form.pdf"
                download
                style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", padding: "14px 28px", borderRadius: "50px", background: "linear-gradient(135deg, #F5A623, #FF6B3D)", color: "white", fontFamily: "'Fredoka', cursive", fontWeight: 500, fontSize: "17px", textDecoration: "none", boxShadow: "0 6px 20px rgba(245,166,35,0.45)", marginBottom: "0", transition: "opacity 0.2s" }}
                onMouseOver={(e) => (e.currentTarget.style.opacity = "0.88")}
                onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
              >
                <Download size={20} />
                Download Official Enrollment Form
              </a>
            </div>

            {/* Back to home */}
            <div style={{ textAlign: "center" }}>
              <Link
                href="/"
                style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "12px 28px", borderRadius: "50px", border: "2px solid #2D2A3E", color: "#2D2A3E", fontFamily: "'Fredoka', cursive", fontWeight: 500, fontSize: "16px", textDecoration: "none", transition: "all 0.2s" }}
              >
                Back to Home
              </Link>
            </div>
          </div>
        </section>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <HeroBanner />

      {/* ── FORM SECTION ── */}
      <section style={{ background: "#FFFFFF", padding: "0 5% 80px", marginTop: "-2px" }}>
        <div style={{ maxWidth: "672px", margin: "0 auto", paddingTop: "2.5rem" }}>

          {/* ── DRAFT RESTORE BANNER ── */}
          {showDraftBanner && savedDraft && (
            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "1rem", padding: "14px 18px", borderRadius: "16px", background: "#FFF9EC", border: "2px solid #FFE49A", boxShadow: "0 4px 16px rgba(245,166,35,0.12)", marginBottom: "1.5rem" }}>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: "'Fredoka', cursive", fontWeight: 500, fontSize: "16px", color: "#2D2A3E", marginBottom: "4px" }}>
                  You have a saved draft.
                </div>
                <div style={{ fontSize: "13px", color: "#7B7490", marginBottom: "12px" }}>
                  Would you like to continue where you left off?
                </div>
                <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                  <button
                    type="button"
                    onClick={handleContinueDraft}
                    style={{ padding: "8px 18px", borderRadius: "50px", cursor: "pointer", background: "linear-gradient(135deg, #F5A623, #FF6B3D)", border: "none", fontFamily: "'Fredoka', cursive", fontWeight: 500, fontSize: "14px", color: "white", boxShadow: "0 3px 10px rgba(245,166,35,0.4)" }}
                  >
                    Continue Draft
                  </button>
                  <button
                    type="button"
                    onClick={handleStartOver}
                    style={{ padding: "8px 18px", borderRadius: "50px", cursor: "pointer", background: "white", border: "2px solid #E0D8C0", fontFamily: "'Nunito', sans-serif", fontWeight: 700, fontSize: "14px", color: "#7B7490" }}
                  >
                    Start Over
                  </button>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setShowDraftBanner(false)}
                aria-label="Dismiss"
                style={{ background: "none", border: "none", cursor: "pointer", color: "#B0A890", padding: "2px", flexShrink: 0 }}
              >
                <X size={18} />
              </button>
            </div>
          )}

          {/* ── STEP PROGRESS BAR ── */}
          <div style={{ marginBottom: "2.5rem" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
              {STEPS.map((step, index) => {
                const stepNum  = index + 1;
                const isCompleted = stepNum < currentStep;
                const isActive    = stepNum === currentStep;
                const StepIcon    = step.Icon;
                return (
                  <div key={stepNum} style={{ display: "flex", alignItems: "center" }}>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "5px" }}>
                      <div style={{ width: "40px", height: "40px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", background: isActive ? "linear-gradient(135deg, #F5A623, #FF6B3D)" : isCompleted ? "#F5A623" : "#F0EBD8", border: isActive ? "3px solid #FF6B3D" : isCompleted ? "3px solid #F5A623" : "3px solid #E0D8C0", boxShadow: isActive ? "0 4px 14px rgba(245,166,35,0.45)" : "none", transition: "all 0.3s", flexShrink: 0 }}>
                        {isCompleted
                          ? <CheckCircle size={17} color="white" />
                          : <StepIcon size={17} color={isActive ? "white" : "#B0A890"} />}
                      </div>
                      <span style={{ fontSize: "10px", fontWeight: 700, color: isActive ? "#FF6B3D" : isCompleted ? "#C07800" : "#B0A890", whiteSpace: "nowrap" }}>
                        {step.label}
                      </span>
                    </div>
                    {index < STEPS.length - 1 && (
                      <div style={{ height: "2px", width: "clamp(24px, 6vw, 80px)", background: stepNum < currentStep ? "#F5A623" : "#E0D8C0", marginBottom: "18px", flexShrink: 0, transition: "background 0.3s" }} />
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* ── FORM CARD ── */}
          <form onSubmit={(e) => { void handleFormspreeSubmit(e); }}>
            {/* ── HIDDEN FIELDS FOR FORMSPREE ── */}
            <input type="hidden" name="program"             value={PROGRAM_LABELS[form.program] ?? form.program} />
            <input type="hidden" name="child_name"          value={childFullName} />
            <input type="hidden" name="child_dob"           value={form.childDOB} />
            <input type="hidden" name="child_sex"           value={form.childSex === "male" ? "Male" : form.childSex === "female" ? "Female" : ""} />
            <input type="hidden" name="parent_name"         value={form.parentName} />
            <input type="hidden" name="email"               value={form.parentEmail} />
            <input type="hidden" name="parent_phone"        value={form.parentContact} />
            <input type="hidden" name="parent_relationship" value={RELATIONSHIP_LABELS[form.parentRelationship] ?? form.parentRelationship} />
            <input type="hidden" name="payment_method"      value={PAYMENT_LABELS[form.paymentMethod] ?? form.paymentMethod} />
            <input type="hidden" name="referral_source"     value={HEAR_ABOUT_LABELS[form.hearAboutUs] ?? form.hearAboutUs} />
            <input type="hidden" name="notes"               value={form.additionalNotes || "(none)"} />

            <div style={{ background: "white", borderRadius: "28px", border: "2px solid #EDE8D8", boxShadow: "0 8px 32px rgba(0,0,0,0.07)", overflow: "hidden" }}>
              {/* Card header */}
              <div style={{ background: "linear-gradient(135deg, #FFF9EC 0%, #FFE8CC 100%)", padding: "1.5rem 2rem", borderBottom: "2px solid #EDE8D8", display: "flex", alignItems: "center", gap: "14px" }}>
                <div style={{ width: "48px", height: "48px", borderRadius: "14px", background: "linear-gradient(135deg, #F5A623, #FF6B3D)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 14px rgba(245,166,35,0.4)", flexShrink: 0 }}>
                  <CurrentStepIcon size={22} color="white" />
                </div>
                <div>
                  <div style={{ fontSize: "11px", fontWeight: 800, color: "#FF6B3D", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "2px" }}>
                    Step {currentStep} of {STEPS.length}
                  </div>
                  <h2 style={{ fontFamily: "'Fredoka', cursive", fontWeight: 500, fontSize: "1.55rem", color: "#2D2A3E", lineHeight: 1.15 }}>
                    {STEP_TITLES[currentStep - 1]}
                  </h2>
                </div>
              </div>

              {/* Card body */}
              <div style={{ padding: "2rem" }}>

                {/* ── STEP 1: Program selection ── */}
                {currentStep === 1 && (
                  <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                    {([
                      { value: "playgroup", label: "Playgroup",     subtitle: "Ages 2 to 3", Icon: Smile,         bg: "#CFFAE7", borderBase: "#A8F0CC", iconBg: "#A8F0CC", iconColor: "#0B7A45" },
                      { value: "nursery",   label: "Nursery",       subtitle: "Ages 3 to 4", Icon: BookOpen,      bg: "#FFF9EC", borderBase: "#FFE49A", iconBg: "#FFE49A", iconColor: "#C07800" },
                      { value: "kinder1",   label: "Kinder 1 (K1)", subtitle: "Ages 4 to 5", Icon: GraduationCap, bg: "#FFE5DC", borderBase: "#FFB8A0", iconBg: "#FFB8A0", iconColor: "#7A2E00" },
                    ] as const).map(({ value, label, subtitle, Icon, bg, borderBase, iconBg, iconColor }) => {
                      const selected = form.program === value;
                      return (
                        <button
                          key={value}
                          type="button"
                          onClick={() => update("program", value)}
                          style={{ display: "flex", alignItems: "center", gap: "1rem", padding: "1.25rem 1.5rem", borderRadius: "18px", cursor: "pointer", textAlign: "left", background: selected ? bg : "white", border: `2px solid ${selected ? "#FF6B3D" : borderBase}`, boxShadow: selected ? "0 4px 16px rgba(255,107,61,0.18)" : "none", transition: "all 0.2s", width: "100%" }}
                        >
                          <div style={{ width: "50px", height: "50px", borderRadius: "14px", background: selected ? "linear-gradient(135deg, #F5A623, #FF6B3D)" : iconBg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, boxShadow: selected ? "0 4px 12px rgba(245,166,35,0.3)" : "none", transition: "all 0.2s" }}>
                            <Icon size={22} color={selected ? "white" : iconColor} />
                          </div>
                          <div style={{ flex: 1 }}>
                            <div style={{ fontFamily: "'Fredoka', cursive", fontWeight: 500, fontSize: "19px", color: "#2D2A3E", lineHeight: 1.2 }}>{label}</div>
                            <div style={{ fontSize: "13px", color: "#7B7490", fontWeight: 600, marginTop: "2px" }}>{subtitle}</div>
                          </div>
                          {selected && (
                            <div style={{ width: "24px", height: "24px", borderRadius: "50%", background: "linear-gradient(135deg, #F5A623, #FF6B3D)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                              <CheckCircle size={14} color="white" />
                            </div>
                          )}
                        </button>
                      );
                    })}
                  </div>
                )}

                {/* ── STEP 2: Child's basic information ── */}
                {currentStep === 2 && (
                  <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                      <InputField label="First Name" required value={form.childFirstName} onChange={(v) => update("childFirstName", v)} />
                      <InputField label="Last Name"  required value={form.childLastName}  onChange={(v) => update("childLastName", v)} />
                    </div>
                    <InputField label="Middle Name" optional value={form.childMiddleName} onChange={(v) => update("childMiddleName", v)} />
                    <InputField label="Date of Birth" required type="date" value={form.childDOB} onChange={(v) => update("childDOB", v)} />
                    <div>
                      <label style={{ display: "block", fontSize: "13px", fontWeight: 700, color: "#2D2A3E", marginBottom: "0.6rem" }}>
                        Sex <span style={{ color: "#FF6B3D" }}>*</span>
                      </label>
                      <div style={{ display: "flex", gap: "1rem" }}>
                        {(["male", "female"] as const).map((v) => {
                          const sel = form.childSex === v;
                          return (
                            <button
                              key={v}
                              type="button"
                              onClick={() => update("childSex", v)}
                              style={{ flex: 1, padding: "0.9rem", borderRadius: "14px", cursor: "pointer", background: sel ? "linear-gradient(135deg, #FFF9EC, #FFE8CC)" : "white", border: `2px solid ${sel ? "#FF6B3D" : "#E0D8C0"}`, fontFamily: "'Nunito', sans-serif", fontWeight: 700, fontSize: "15px", color: sel ? "#2D2A3E" : "#7B7490", transition: "all 0.2s", boxShadow: sel ? "0 2px 10px rgba(255,107,61,0.15)" : "none" }}
                            >
                              {v === "male" ? "Male" : "Female"}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}

                {/* ── STEP 3: Parent / Guardian contact ── */}
                {currentStep === 3 && (
                  <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                    <InputField label="Parent / Guardian Full Name" required value={form.parentName} onChange={(v) => update("parentName", v)} />
                    <div>
                      <label style={{ display: "block", fontSize: "13px", fontWeight: 700, color: "#2D2A3E", marginBottom: "0.5rem" }}>
                        Relationship to Child <span style={{ color: "#FF6B3D" }}>*</span>
                      </label>
                      <select
                        value={form.parentRelationship}
                        onChange={(e) => update("parentRelationship", e.target.value)}
                        style={INPUT_STYLE}
                        onFocus={(e) => (e.currentTarget.style.borderColor = "#F5A623")}
                        onBlur={(e)  => (e.currentTarget.style.borderColor = "#E0D8C0")}
                      >
                        <option value="">Select relationship</option>
                        <option value="mother">Mother</option>
                        <option value="father">Father</option>
                        <option value="guardian">Guardian</option>
                        <option value="grandparent">Grandparent</option>
                      </select>
                    </div>
                    <InputField label="Contact Number" required value={form.parentContact} onChange={(v) => update("parentContact", v)} placeholder="09XXXXXXXXX" />
                    <InputField label="Email Address"  required type="email" value={form.parentEmail} onChange={(v) => update("parentEmail", v)} />
                    <div>
                      <label style={{ display: "block", fontSize: "13px", fontWeight: 700, color: "#2D2A3E", marginBottom: "0.5rem" }}>
                        How did you hear about us? <span style={{ color: "#FF6B3D" }}>*</span>
                      </label>
                      <select
                        value={form.hearAboutUs}
                        onChange={(e) => update("hearAboutUs", e.target.value)}
                        style={INPUT_STYLE}
                        onFocus={(e) => (e.currentTarget.style.borderColor = "#F5A623")}
                        onBlur={(e)  => (e.currentTarget.style.borderColor = "#E0D8C0")}
                      >
                        <option value="">Select an option</option>
                        <option value="facebook">Facebook</option>
                        <option value="word-of-mouth">Word of mouth / Referral</option>
                        <option value="google">Google Search</option>
                        <option value="southscape">Saw the school at Southscape</option>
                        <option value="flyer">Flyer or tarpaulin</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label style={{ display: "block", fontSize: "13px", fontWeight: 700, color: "#2D2A3E", marginBottom: "0.5rem" }}>
                        Any questions or notes?{" "}
                        <span style={{ fontWeight: 400, color: "#B0A890" }}>(optional)</span>
                      </label>
                      <textarea
                        value={form.additionalNotes}
                        onChange={(e) => update("additionalNotes", e.target.value)}
                        placeholder="Anything you would like us to know before we get in touch?"
                        rows={4}
                        style={{ ...INPUT_STYLE, height: "auto", resize: "vertical" }}
                        onFocus={(e) => (e.currentTarget.style.borderColor = "#F5A623")}
                        onBlur={(e)  => (e.currentTarget.style.borderColor = "#E0D8C0")}
                      />
                    </div>
                  </div>
                )}

                {/* ── STEP 4: Payment method ── */}
                {currentStep === 4 && (
                  <div>
                    {/* Dynamic fee breakdown for selected program */}
                    <TuitionFeeCard program={form.program} />

                    {/* Payment option cards */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "1.5rem" }}>
                      {([
                        {
                          value: "gcash",
                          label: "GCash",
                          Icon: Smartphone,
                          description: "Send payment to our GCash number. Payment details will be sent to your email after confirmation.",
                          bg: "#EDE0FF", borderBase: "#C8AAFF", iconBg: "#C8AAFF", iconColor: "#5B2FBB",
                        },
                        {
                          value: "in-person",
                          label: "Pay at Focuslab",
                          Icon: MapPin,
                          description: "Visit Focuslab front desk officer, Unit No. B1-2-7, just across MCLC at Southscape, Talisay City.",
                          bg: "#D8EEFF", borderBase: "#A8D8FF", iconBg: "#A8D8FF", iconColor: "#1A5FA0",
                        },
                      ] as const).map(({ value, label, Icon, description, bg, borderBase, iconBg, iconColor }) => {
                        const selected = form.paymentMethod === value;
                        return (
                          <button
                            key={value}
                            type="button"
                            onClick={() => update("paymentMethod", value)}
                            style={{ display: "flex", alignItems: "flex-start", gap: "1rem", padding: "1.25rem 1.5rem", borderRadius: "18px", cursor: "pointer", textAlign: "left", background: selected ? bg : "white", border: `2px solid ${selected ? "#FF6B3D" : borderBase}`, boxShadow: selected ? "0 4px 16px rgba(255,107,61,0.18)" : "none", transition: "all 0.2s", width: "100%" }}
                          >
                            <div style={{ width: "50px", height: "50px", borderRadius: "14px", background: selected ? "linear-gradient(135deg, #F5A623, #FF6B3D)" : iconBg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, boxShadow: selected ? "0 4px 12px rgba(245,166,35,0.3)" : "none", transition: "all 0.2s" }}>
                              <Icon size={22} color={selected ? "white" : iconColor} />
                            </div>
                            <div style={{ flex: 1 }}>
                              <div style={{ fontFamily: "'Fredoka', cursive", fontWeight: 500, fontSize: "18px", color: "#2D2A3E", marginBottom: "4px" }}>{label}</div>
                              <div style={{ fontSize: "13px", color: "#7B7490", lineHeight: 1.65 }}>{description}</div>
                            </div>
                            {selected && (
                              <div style={{ width: "24px", height: "24px", borderRadius: "50%", background: "linear-gradient(135deg, #F5A623, #FF6B3D)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "2px" }}>
                                <CheckCircle size={14} color="white" />
                              </div>
                            )}
                          </button>
                        );
                      })}
                    </div>

                    {/* Consent checkbox */}
                    <label style={{ display: "flex", alignItems: "flex-start", gap: "12px", padding: "1.25rem", borderRadius: "14px", background: "#FFF9EC", border: "2px solid #FFE49A", cursor: "pointer", marginBottom: "1.25rem" }}>
                      <input
                        type="checkbox"
                        checked={consent}
                        onChange={(e) => setConsent(e.target.checked)}
                        style={{ marginTop: "3px", width: "18px", height: "18px", accentColor: "#FF6B3D", flexShrink: 0, cursor: "pointer" }}
                      />
                      <span style={{ fontSize: "14px", color: "#2D2A3E", lineHeight: 1.65, fontWeight: 600 }}>
                        I confirm the details above are correct and I agree to be contacted by MCLC regarding this enrollment inquiry.
                      </span>
                    </label>

                    {/* Formspree error */}
                    {hasFormErrors && (
                      <div style={{ padding: "1rem", borderRadius: "12px", background: "#FFF0EE", border: "2px solid #FFBCB0", color: "#B83220", fontSize: "14px", fontWeight: 600, marginBottom: "1rem" }}>
                        Something went wrong. Please check your details and try again.
                      </div>
                    )}
                  </div>
                )}

                {/* ── NAV BUTTONS ── */}
                <div style={{ display: "flex", gap: "1rem", marginTop: "2rem", justifyContent: currentStep === 1 ? "flex-end" : "space-between" }}>
                  {currentStep > 1 && (
                    <button
                      type="button"
                      onClick={() => setCurrentStep((s) => s - 1)}
                      style={{ display: "flex", alignItems: "center", gap: "6px", padding: "12px 24px", borderRadius: "50px", cursor: "pointer", background: "white", border: "2px solid #E0D8C0", fontFamily: "'Nunito', sans-serif", fontWeight: 700, fontSize: "15px", color: "#7B7490", transition: "all 0.2s" }}
                      onMouseOver={(e) => { e.currentTarget.style.borderColor = "#F5A623"; e.currentTarget.style.color = "#C07800"; }}
                      onMouseOut={(e)  => { e.currentTarget.style.borderColor = "#E0D8C0"; e.currentTarget.style.color = "#7B7490"; }}
                    >
                      <ChevronLeft size={16} /> Back
                    </button>
                  )}

                  {currentStep < STEPS.length ? (
                    <button
                      type="button"
                      onClick={() => { if (!canContinue()) return; setCurrentStep((s) => s + 1); }}
                      style={{ display: "flex", alignItems: "center", gap: "6px", padding: "12px 28px", borderRadius: "50px", cursor: canContinue() ? "pointer" : "not-allowed", background: canContinue() ? "linear-gradient(135deg, #F5A623, #FF6B3D)" : "#EDE8D8", border: "none", fontFamily: "'Fredoka', cursive", fontWeight: 500, fontSize: "16px", color: canContinue() ? "white" : "#B0A890", boxShadow: canContinue() ? "0 4px 14px rgba(245,166,35,0.4)" : "none", transition: "all 0.2s" }}
                    >
                      Continue <ChevronRight size={16} />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={!canContinue() || state.submitting}
                      style={{ flex: 1, padding: "14px 28px", borderRadius: "50px", cursor: canContinue() && !state.submitting ? "pointer" : "not-allowed", background: canContinue() && !state.submitting ? "linear-gradient(135deg, #F5A623, #FF6B3D)" : "#EDE8D8", border: "none", fontFamily: "'Fredoka', cursive", fontWeight: 500, fontSize: "17px", color: canContinue() && !state.submitting ? "white" : "#B0A890", boxShadow: canContinue() && !state.submitting ? "0 6px 20px rgba(245,166,35,0.45)" : "none", transition: "all 0.2s" }}
                    >
                      {state.submitting ? "Submitting..." : "Submit Enrollment Inquiry"}
                    </button>
                  )}
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>

      {/* ── PDF DOWNLOAD SECTION ── */}
      <div style={{ background: "#FFFFFF", overflow: "hidden", lineHeight: 0 }}>
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" width="100%" height="60" xmlns="http://www.w3.org/2000/svg" style={{ display: "block" }}>
          <rect x="-2" y="0" width="1444" height="60" fill="#FFFFFF" />
          <path d="M-2,30 C240,60 480,0 720,30 C960,60 1200,0 1442,30 L1442,60 L-2,60 Z" fill="#FFF9EC" />
        </svg>
      </div>
      <section style={{ background: "#FFF9EC", padding: "3rem 5% 4rem" }}>
        <div style={{ maxWidth: "640px", margin: "0 auto", textAlign: "center" }}>
          <div style={{ fontSize: "11px", fontWeight: 800, color: "#B0A890", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.75rem" }}>
            Have a printer?
          </div>
          <h2 style={{ fontFamily: "'Fredoka', cursive", fontWeight: 500, fontSize: "clamp(1.5rem, 3vw, 2rem)", color: "#2D2A3E", marginBottom: "1rem" }}>
            Download the Official Enrollment Form
          </h2>
          <p style={{ fontSize: "15px", color: "#7B7490", lineHeight: 1.75, maxWidth: "520px", margin: "0 auto 1.75rem" }}>
            Print, fill out, and email the completed form to{" "}
            <a href="mailto:support@mclc-cebu.com" style={{ color: "#F5A623", fontWeight: 700 }}>support@mclc-cebu.com</a>{" "}
            with the subject: <em>Enrollment - [Child&apos;s Full Name]</em>. Or bring it in person to Focuslab front desk officer, Unit No. B1-2-7, just across MCLC at Southscape, Talisay City.
          </p>
          <a
            href="/MCLC_Enrollment_Form.pdf"
            download
            style={{ display: "inline-flex", alignItems: "center", gap: "10px", padding: "13px 28px", borderRadius: "50px", border: "2px solid #2D2A3E", color: "#2D2A3E", background: "white", fontFamily: "'Fredoka', cursive", fontWeight: 500, fontSize: "16px", textDecoration: "none", transition: "all 0.2s", boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}
            onMouseOver={(e) => { e.currentTarget.style.background = "#2D2A3E"; e.currentTarget.style.color = "white"; }}
            onMouseOut={(e) => { e.currentTarget.style.background = "white"; e.currentTarget.style.color = "#2D2A3E"; }}
          >
            <Download size={18} />
            Download Enrollment Form (PDF)
          </a>
          <p style={{ fontSize: "12px", color: "#B0A890", marginTop: "1.25rem", lineHeight: 1.65, fontStyle: "italic" }}>
            The online form above is the fastest way to reserve your child&apos;s slot. The printable form is for completing your official enrollment.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
