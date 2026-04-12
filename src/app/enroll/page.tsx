"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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
  MessageSquare,
  CheckCircle,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────

type Program = "playgroup" | "nursery" | "kinder1" | "";
type Sex = "male" | "female" | "";
type PaymentMethod = "gcash" | "in-person" | "";

interface FormData {
  program: Program;
  childFirstName: string;
  childLastName: string;
  childMiddleName: string;
  childDOB: string;
  childSex: Sex;
  childNickname: string;
  parentName: string;
  parentRelationship: string;
  parentContact: string;
  parentEmail: string;
  parentAddress: string;
  paymentMethod: PaymentMethod;
  hearAboutUs: string;
  additionalNotes: string;
}

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
  "word-of-mouth": "Word of mouth / referral",
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
  { label: "Program",  Icon: Star },
  { label: "Child",    Icon: User },
  { label: "Parent",   Icon: Users },
  { label: "Payment",  Icon: CreditCard },
  { label: "Details",  Icon: MessageSquare },
  { label: "Review",   Icon: CheckCircle },
];

const STEP_TITLES = [
  "Choose a Program",
  "Child's Information",
  "Parent / Guardian",
  "Payment Method",
  "A Few More Details",
  "Review Your Details",
];

// ─── Shared style objects ─────────────────────────────────────────────────────

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

const SELECT_STYLE: React.CSSProperties = {
  ...INPUT_STYLE,
};

// ─── Sub-components ───────────────────────────────────────────────────────────

function InputField({
  label,
  required,
  optional,
  value,
  onChange,
  type = "text",
  placeholder,
}: {
  label: string;
  required?: boolean;
  optional?: boolean;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label
        style={{
          display: "block",
          fontSize: "13px",
          fontWeight: 700,
          color: "#2D2A3E",
          marginBottom: "0.5rem",
        }}
      >
        {label}{" "}
        {required && <span style={{ color: "#FF6B3D" }}>*</span>}
        {optional && (
          <span style={{ fontWeight: 400, color: "#B0A890" }}>(optional)</span>
        )}
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

function ReviewGroup({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        borderRadius: "16px",
        border: "2px solid #EDE8D8",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          padding: "10px 16px",
          background: "linear-gradient(135deg, #FFF9EC, #FFE8CC)",
          borderBottom: "2px solid #EDE8D8",
          fontFamily: "'Fredoka', cursive",
          fontWeight: 500,
          fontSize: "15px",
          color: "#2D2A3E",
        }}
      >
        {title}
      </div>
      <div style={{ padding: "4px 0" }}>{children}</div>
    </div>
  );
}

function ReviewRow({ label, value }: { label: string; value: string }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        padding: "8px 16px",
        gap: "1rem",
        borderBottom: "1px solid #F5EDD8",
      }}
    >
      <span
        style={{ fontSize: "13px", color: "#7B7490", fontWeight: 600, flexShrink: 0 }}
      >
        {label}
      </span>
      <span
        style={{
          fontSize: "13px",
          color: "#2D2A3E",
          fontWeight: 700,
          textAlign: "right",
        }}
      >
        {value}
      </span>
    </div>
  );
}

// ─── Main page ────────────────────────────────────────────────────────────────

export default function EnrollPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [consent, setConsent] = useState(false);

  const [form, setForm] = useState<FormData>({
    program: "",
    childFirstName: "",
    childLastName: "",
    childMiddleName: "",
    childDOB: "",
    childSex: "",
    childNickname: "",
    parentName: "",
    parentRelationship: "",
    parentContact: "",
    parentEmail: "",
    parentAddress: "",
    paymentMethod: "",
    hearAboutUs: "",
    additionalNotes: "",
  });

  const update = (field: keyof FormData, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const canContinue = (): boolean => {
    switch (currentStep) {
      case 1:
        return form.program !== "";
      case 2:
        return !!(
          form.childFirstName &&
          form.childLastName &&
          form.childDOB &&
          form.childSex
        );
      case 3:
        return !!(
          form.parentName &&
          form.parentRelationship &&
          form.parentContact &&
          form.parentEmail
        );
      case 4:
        return form.paymentMethod !== "";
      case 5:
        return form.hearAboutUs !== "";
      case 6:
        return consent;
      default:
        return false;
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setSubmitError("");
    try {
      const res = await fetch("https://formspree.io/f/REPLACE_WITH_FORMSPREE_ID", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Program: PROGRAM_LABELS[form.program] ?? form.program,
          "Child First Name": form.childFirstName,
          "Child Last Name": form.childLastName,
          "Child Middle Name": form.childMiddleName || "(not provided)",
          "Child Date of Birth": form.childDOB,
          "Child Sex": form.childSex === "male" ? "Male" : "Female",
          "Child Nickname": form.childNickname || "(not provided)",
          "Parent / Guardian Name": form.parentName,
          "Relationship to Child":
            RELATIONSHIP_LABELS[form.parentRelationship] ?? form.parentRelationship,
          "Contact Number": form.parentContact,
          "Email Address": form.parentEmail,
          "Home Address / City": form.parentAddress || "(not provided)",
          "Payment Method":
            PAYMENT_LABELS[form.paymentMethod] ?? form.paymentMethod,
          "How They Heard About Us":
            HEAR_ABOUT_LABELS[form.hearAboutUs] ?? form.hearAboutUs,
          "Additional Notes": form.additionalNotes || "(none)",
        }),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        const data = await res.json().catch(() => ({}));
        setSubmitError(
          (data as { error?: string }).error ||
            "Something went wrong. Please try again."
        );
      }
    } catch {
      setSubmitError(
        "Network error. Please check your connection and try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const CurrentStepIcon = STEPS[currentStep - 1].Icon;

  return (
    <>
      <Navbar />

      {/* ── HERO ── */}
      <section
        style={{
          background:
            "linear-gradient(160deg, #FFF9EC 0%, #FFF3D0 40%, #FFE8CC 100%)",
          paddingTop: "96px",
          paddingBottom: "0",
          paddingLeft: "5%",
          paddingRight: "5%",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative dots */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            overflow: "hidden",
            zIndex: 0,
          }}
        >
          <svg
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="7%" cy="25%" r="6" fill="#F5A623" opacity="0.2" />
            <circle cx="93%" cy="20%" r="9" fill="#30C87A" opacity="0.18" />
            <circle cx="86%" cy="72%" r="6" fill="#9B6FE8" opacity="0.15" />
            <circle cx="4%" cy="78%" r="8" fill="#FF6B3D" opacity="0.15" />
            <circle cx="50%" cy="8%" r="5" fill="#3D9BE9" opacity="0.15" />
            <circle cx="16%" cy="52%" r="4" fill="#F06292" opacity="0.18" />
            <circle cx="78%" cy="44%" r="5" fill="#F5A623" opacity="0.15" />
          </svg>
        </div>

        <div
          style={{
            maxWidth: "720px",
            margin: "0 auto",
            textAlign: "center",
            position: "relative",
            zIndex: 2,
            padding: "2.5rem 0 3.5rem",
          }}
        >
          {/* Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "#CFFAE7",
              color: "#0B7A45",
              borderRadius: "50px",
              padding: "7px 16px",
              fontSize: "11px",
              fontWeight: 800,
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              marginBottom: "1.25rem",
              border: "2px solid #A8F0CC",
            }}
          >
            <span
              style={{
                width: "7px",
                height: "7px",
                borderRadius: "50%",
                background: "#30C87A",
                flexShrink: 0,
                display: "inline-block",
              }}
            />
            Now Enrolling &mdash; SY 2026&ndash;2027
          </div>

          <h1
            style={{
              fontFamily: "'Fredoka', cursive",
              fontWeight: 500,
              fontSize: "clamp(2rem, 4.5vw, 3.2rem)",
              lineHeight: 1.15,
              color: "#2D2A3E",
              marginBottom: "1rem",
            }}
          >
            Enroll Your Child at{" "}
            <span style={{ color: "#F5A623" }}>MCLC</span>
          </h1>

          <p
            style={{
              fontSize: "17px",
              color: "#7B7490",
              lineHeight: 1.75,
              maxWidth: "520px",
              margin: "0 auto",
            }}
          >
            Join our Christ-centered learning community in Southscape, Talisay
            City, Cebu. Simple process. Warm welcome.
          </p>
        </div>
      </section>

      {/* ── WAVE: hero (#FFE8CC) → form (#FFFFFF) ── */}
      <div
        style={{
          background: "#FFE8CC",
          overflow: "hidden",
          lineHeight: 0,
          display: "block",
          margin: 0,
          padding: 0,
        }}
      >
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          width="100%"
          height="80"
          xmlns="http://www.w3.org/2000/svg"
          style={{ display: "block" }}
        >
          <rect x="-2" y="0" width="1444" height="80" fill="#FFE8CC" />
          <path
            d="M-2,40 C180,80 360,0 540,40 C720,80 900,0 1080,40 C1260,80 1380,20 1442,40 L1442,80 L-2,80 Z"
            fill="#FFFFFF"
          />
        </svg>
      </div>

      {/* ── FORM SECTION ── */}
      <section
        style={{
          background: "#FFFFFF",
          padding: "0 5% 80px",
          marginTop: "-2px",
        }}
      >
        <div
          style={{
            maxWidth: "672px",
            margin: "0 auto",
            paddingTop: "2.5rem",
          }}
        >
          {submitted ? (
            // ── SUCCESS STATE ──
            <div
              style={{
                textAlign: "center",
                padding: "3rem 2rem",
                background: "#FFFBF0",
                borderRadius: "28px",
                border: "2px solid #FFE49A",
                boxShadow: "0 8px 32px rgba(0,0,0,0.07)",
              }}
            >
              <div
                style={{
                  width: "72px",
                  height: "72px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #F5A623, #FF6B3D)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 1.5rem",
                  boxShadow: "0 8px 24px rgba(245,166,35,0.4)",
                }}
              >
                <CheckCircle size={36} color="white" />
              </div>
              <h2
                style={{
                  fontFamily: "'Fredoka', cursive",
                  fontWeight: 500,
                  fontSize: "clamp(1.6rem, 3vw, 2.1rem)",
                  color: "#2D2A3E",
                  marginBottom: "0.75rem",
                }}
              >
                Thank you! We received your inquiry.
              </h2>
              <p
                style={{
                  fontSize: "16px",
                  color: "#7B7490",
                  lineHeight: 1.75,
                  marginBottom: "2rem",
                  maxWidth: "460px",
                  margin: "0 auto 2rem",
                }}
              >
                We will reach out within 1 to 2 school days to confirm your
                enrollment slot. For urgent questions, call us at{" "}
                <a
                  href="tel:+639898018408"
                  style={{ color: "#F5A623", fontWeight: 700 }}
                >
                  (+63) 898-018-4081
                </a>{" "}
                or email{" "}
                <a
                  href="mailto:support@mclc-cebu.com"
                  style={{ color: "#F5A623", fontWeight: 700 }}
                >
                  support@mclc-cebu.com
                </a>
                .
              </p>
              <Link href="/" className="btn-primary">
                Back to Home
              </Link>
            </div>
          ) : (
            <>
              {/* ── STEP PROGRESS BAR ── */}
              <div style={{ marginBottom: "2.5rem" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {STEPS.map((step, index) => {
                    const stepNum = index + 1;
                    const isCompleted = stepNum < currentStep;
                    const isActive = stepNum === currentStep;
                    const StepIcon = step.Icon;
                    return (
                      <div
                        key={stepNum}
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            gap: "5px",
                          }}
                        >
                          <div
                            style={{
                              width: "40px",
                              height: "40px",
                              borderRadius: "50%",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              background: isActive
                                ? "linear-gradient(135deg, #F5A623, #FF6B3D)"
                                : isCompleted
                                ? "#F5A623"
                                : "#F0EBD8",
                              border: isActive
                                ? "3px solid #FF6B3D"
                                : isCompleted
                                ? "3px solid #F5A623"
                                : "3px solid #E0D8C0",
                              boxShadow: isActive
                                ? "0 4px 14px rgba(245,166,35,0.45)"
                                : "none",
                              transition: "all 0.3s",
                              flexShrink: 0,
                            }}
                          >
                            {isCompleted ? (
                              <CheckCircle size={17} color="white" />
                            ) : (
                              <StepIcon
                                size={17}
                                color={isActive ? "white" : "#B0A890"}
                              />
                            )}
                          </div>
                          <span
                            style={{
                              fontSize: "10px",
                              fontWeight: 700,
                              color: isActive
                                ? "#FF6B3D"
                                : isCompleted
                                ? "#C07800"
                                : "#B0A890",
                              whiteSpace: "nowrap",
                            }}
                          >
                            {step.label}
                          </span>
                        </div>
                        {index < STEPS.length - 1 && (
                          <div
                            style={{
                              height: "2px",
                              width: "clamp(16px, 3.5vw, 44px)",
                              background:
                                stepNum < currentStep ? "#F5A623" : "#E0D8C0",
                              marginBottom: "18px",
                              flexShrink: 0,
                              transition: "background 0.3s",
                            }}
                          />
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* ── FORM CARD ── */}
              <div
                style={{
                  background: "white",
                  borderRadius: "28px",
                  border: "2px solid #EDE8D8",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.07)",
                  overflow: "hidden",
                }}
              >
                {/* Card header */}
                <div
                  style={{
                    background:
                      "linear-gradient(135deg, #FFF9EC 0%, #FFE8CC 100%)",
                    padding: "1.5rem 2rem",
                    borderBottom: "2px solid #EDE8D8",
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                  }}
                >
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "14px",
                      background:
                        "linear-gradient(135deg, #F5A623, #FF6B3D)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 4px 14px rgba(245,166,35,0.4)",
                      flexShrink: 0,
                    }}
                  >
                    <CurrentStepIcon size={22} color="white" />
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: "11px",
                        fontWeight: 800,
                        color: "#FF6B3D",
                        textTransform: "uppercase",
                        letterSpacing: "0.06em",
                        marginBottom: "2px",
                      }}
                    >
                      Step {currentStep} of {STEPS.length}
                    </div>
                    <h2
                      style={{
                        fontFamily: "'Fredoka', cursive",
                        fontWeight: 500,
                        fontSize: "1.55rem",
                        color: "#2D2A3E",
                        lineHeight: 1.15,
                      }}
                    >
                      {STEP_TITLES[currentStep - 1]}
                    </h2>
                  </div>
                </div>

                {/* Card body */}
                <div style={{ padding: "2rem" }}>

                  {/* ── STEP 1: Program selection ── */}
                  {currentStep === 1 && (
                    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                      {(
                        [
                          {
                            value: "playgroup",
                            label: "Playgroup",
                            subtitle: "Ages 2 to 3",
                            Icon: Smile,
                            bg: "#CFFAE7",
                            borderBase: "#A8F0CC",
                            iconBg: "#A8F0CC",
                            iconColor: "#0B7A45",
                          },
                          {
                            value: "nursery",
                            label: "Nursery",
                            subtitle: "Ages 3 to 4",
                            Icon: BookOpen,
                            bg: "#FFF9EC",
                            borderBase: "#FFE49A",
                            iconBg: "#FFE49A",
                            iconColor: "#C07800",
                          },
                          {
                            value: "kinder1",
                            label: "Kinder 1 (K1)",
                            subtitle: "Ages 4 to 5",
                            Icon: GraduationCap,
                            bg: "#FFE5DC",
                            borderBase: "#FFB8A0",
                            iconBg: "#FFB8A0",
                            iconColor: "#7A2E00",
                          },
                        ] as const
                      ).map(({ value, label, subtitle, Icon, bg, borderBase, iconBg, iconColor }) => {
                        const selected = form.program === value;
                        return (
                          <button
                            key={value}
                            type="button"
                            onClick={() => update("program", value)}
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "1rem",
                              padding: "1.25rem 1.5rem",
                              borderRadius: "18px",
                              cursor: "pointer",
                              textAlign: "left",
                              background: selected ? bg : "white",
                              border: `2px solid ${selected ? "#FF6B3D" : borderBase}`,
                              boxShadow: selected
                                ? "0 4px 16px rgba(255,107,61,0.18)"
                                : "none",
                              transition: "all 0.2s",
                              width: "100%",
                            }}
                          >
                            <div
                              style={{
                                width: "50px",
                                height: "50px",
                                borderRadius: "14px",
                                background: selected
                                  ? "linear-gradient(135deg, #F5A623, #FF6B3D)"
                                  : iconBg,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                flexShrink: 0,
                                boxShadow: selected
                                  ? "0 4px 12px rgba(245,166,35,0.3)"
                                  : "none",
                                transition: "all 0.2s",
                              }}
                            >
                              <Icon size={22} color={selected ? "white" : iconColor} />
                            </div>
                            <div style={{ flex: 1 }}>
                              <div
                                style={{
                                  fontFamily: "'Fredoka', cursive",
                                  fontWeight: 500,
                                  fontSize: "19px",
                                  color: "#2D2A3E",
                                  lineHeight: 1.2,
                                }}
                              >
                                {label}
                              </div>
                              <div
                                style={{
                                  fontSize: "13px",
                                  color: "#7B7490",
                                  fontWeight: 600,
                                  marginTop: "2px",
                                }}
                              >
                                {subtitle}
                              </div>
                            </div>
                            {selected && (
                              <div
                                style={{
                                  width: "24px",
                                  height: "24px",
                                  borderRadius: "50%",
                                  background:
                                    "linear-gradient(135deg, #F5A623, #FF6B3D)",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  flexShrink: 0,
                                }}
                              >
                                <CheckCircle size={14} color="white" />
                              </div>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  )}

                  {/* ── STEP 2: Child's information ── */}
                  {currentStep === 2 && (
                    <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns: "1fr 1fr",
                          gap: "1rem",
                        }}
                      >
                        <InputField
                          label="First Name"
                          required
                          value={form.childFirstName}
                          onChange={(v) => update("childFirstName", v)}
                        />
                        <InputField
                          label="Last Name"
                          required
                          value={form.childLastName}
                          onChange={(v) => update("childLastName", v)}
                        />
                      </div>
                      <InputField
                        label="Middle Name"
                        optional
                        value={form.childMiddleName}
                        onChange={(v) => update("childMiddleName", v)}
                      />
                      <InputField
                        label="Date of Birth"
                        required
                        type="date"
                        value={form.childDOB}
                        onChange={(v) => update("childDOB", v)}
                      />
                      <div>
                        <label
                          style={{
                            display: "block",
                            fontSize: "13px",
                            fontWeight: 700,
                            color: "#2D2A3E",
                            marginBottom: "0.6rem",
                          }}
                        >
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
                                style={{
                                  flex: 1,
                                  padding: "0.9rem",
                                  borderRadius: "14px",
                                  cursor: "pointer",
                                  background: sel
                                    ? "linear-gradient(135deg, #FFF9EC, #FFE8CC)"
                                    : "white",
                                  border: `2px solid ${sel ? "#FF6B3D" : "#E0D8C0"}`,
                                  fontFamily: "'Nunito', sans-serif",
                                  fontWeight: 700,
                                  fontSize: "15px",
                                  color: sel ? "#2D2A3E" : "#7B7490",
                                  transition: "all 0.2s",
                                  boxShadow: sel
                                    ? "0 2px 10px rgba(255,107,61,0.15)"
                                    : "none",
                                }}
                              >
                                {v === "male" ? "Male" : "Female"}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                      <InputField
                        label="Nickname"
                        optional
                        value={form.childNickname}
                        onChange={(v) => update("childNickname", v)}
                        placeholder="What do you call them at home?"
                      />
                    </div>
                  )}

                  {/* ── STEP 3: Parent / Guardian ── */}
                  {currentStep === 3 && (
                    <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                      <InputField
                        label="Full Name"
                        required
                        value={form.parentName}
                        onChange={(v) => update("parentName", v)}
                      />
                      <div>
                        <label
                          style={{
                            display: "block",
                            fontSize: "13px",
                            fontWeight: 700,
                            color: "#2D2A3E",
                            marginBottom: "0.5rem",
                          }}
                        >
                          Relationship to Child{" "}
                          <span style={{ color: "#FF6B3D" }}>*</span>
                        </label>
                        <select
                          value={form.parentRelationship}
                          onChange={(e) =>
                            update("parentRelationship", e.target.value)
                          }
                          style={SELECT_STYLE}
                          onFocus={(e) =>
                            (e.currentTarget.style.borderColor = "#F5A623")
                          }
                          onBlur={(e) =>
                            (e.currentTarget.style.borderColor = "#E0D8C0")
                          }
                        >
                          <option value="">Select relationship</option>
                          <option value="mother">Mother</option>
                          <option value="father">Father</option>
                          <option value="guardian">Guardian</option>
                          <option value="grandparent">Grandparent</option>
                        </select>
                      </div>
                      <InputField
                        label="Contact Number"
                        required
                        value={form.parentContact}
                        onChange={(v) => update("parentContact", v)}
                        placeholder="09XXXXXXXXX"
                      />
                      <InputField
                        label="Email Address"
                        required
                        type="email"
                        value={form.parentEmail}
                        onChange={(v) => update("parentEmail", v)}
                      />
                      <InputField
                        label="Home Address / City"
                        optional
                        value={form.parentAddress}
                        onChange={(v) => update("parentAddress", v)}
                        placeholder="e.g. Talisay City or Minglanilla"
                      />
                    </div>
                  )}

                  {/* ── STEP 4: Payment method ── */}
                  {currentStep === 4 && (
                    <div>
                      <p
                        style={{
                          fontSize: "14px",
                          color: "#7B7490",
                          lineHeight: 1.7,
                          marginBottom: "1.5rem",
                        }}
                      >
                        Enrollment fee payment can be made via GCash or in
                        person at Focuslab Coworking Space.
                      </p>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "1rem",
                          marginBottom: "1.5rem",
                        }}
                      >
                        {(
                          [
                            {
                              value: "gcash",
                              label: "Pay via GCash",
                              Icon: Smartphone,
                              description:
                                "Send payment to our GCash number. You will receive instructions after submission.",
                              bg: "#EDE0FF",
                              borderBase: "#C8AAFF",
                              iconBg: "#C8AAFF",
                              iconColor: "#5B2FBB",
                            },
                            {
                              value: "in-person",
                              label: "Pay at Focuslab Front Desk",
                              Icon: MapPin,
                              description:
                                "Visit Focuslab Coworking Space front desk, Unit No. B1-2-7, just across MCLC at Southscape, Talisay City.",
                              bg: "#D8EEFF",
                              borderBase: "#A8D8FF",
                              iconBg: "#A8D8FF",
                              iconColor: "#1A5FA0",
                            },
                          ] as const
                        ).map(
                          ({
                            value,
                            label,
                            Icon,
                            description,
                            bg,
                            borderBase,
                            iconBg,
                            iconColor,
                          }) => {
                            const selected = form.paymentMethod === value;
                            return (
                              <button
                                key={value}
                                type="button"
                                onClick={() => update("paymentMethod", value)}
                                style={{
                                  display: "flex",
                                  alignItems: "flex-start",
                                  gap: "1rem",
                                  padding: "1.25rem 1.5rem",
                                  borderRadius: "18px",
                                  cursor: "pointer",
                                  textAlign: "left",
                                  background: selected ? bg : "white",
                                  border: `2px solid ${
                                    selected ? "#FF6B3D" : borderBase
                                  }`,
                                  boxShadow: selected
                                    ? "0 4px 16px rgba(255,107,61,0.18)"
                                    : "none",
                                  transition: "all 0.2s",
                                  width: "100%",
                                }}
                              >
                                <div
                                  style={{
                                    width: "50px",
                                    height: "50px",
                                    borderRadius: "14px",
                                    background: selected
                                      ? "linear-gradient(135deg, #F5A623, #FF6B3D)"
                                      : iconBg,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    flexShrink: 0,
                                    boxShadow: selected
                                      ? "0 4px 12px rgba(245,166,35,0.3)"
                                      : "none",
                                    transition: "all 0.2s",
                                  }}
                                >
                                  <Icon
                                    size={22}
                                    color={selected ? "white" : iconColor}
                                  />
                                </div>
                                <div style={{ flex: 1 }}>
                                  <div
                                    style={{
                                      fontFamily: "'Fredoka', cursive",
                                      fontWeight: 500,
                                      fontSize: "18px",
                                      color: "#2D2A3E",
                                      marginBottom: "4px",
                                    }}
                                  >
                                    {label}
                                  </div>
                                  <div
                                    style={{
                                      fontSize: "13px",
                                      color: "#7B7490",
                                      lineHeight: 1.65,
                                    }}
                                  >
                                    {description}
                                  </div>
                                </div>
                                {selected && (
                                  <div
                                    style={{
                                      width: "24px",
                                      height: "24px",
                                      borderRadius: "50%",
                                      background:
                                        "linear-gradient(135deg, #F5A623, #FF6B3D)",
                                      display: "flex",
                                      alignItems: "center",
                                      justifyContent: "center",
                                      flexShrink: 0,
                                      marginTop: "2px",
                                    }}
                                  >
                                    <CheckCircle size={14} color="white" />
                                  </div>
                                )}
                              </button>
                            );
                          }
                        )}
                      </div>
                      <p
                        style={{
                          fontSize: "13px",
                          color: "#B0A890",
                          lineHeight: 1.65,
                          fontStyle: "italic",
                        }}
                      >
                        Payment details and confirmation will be sent to your
                        email after we process your inquiry.
                      </p>
                    </div>
                  )}

                  {/* ── STEP 5: Additional information ── */}
                  {currentStep === 5 && (
                    <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                      <div>
                        <label
                          style={{
                            display: "block",
                            fontSize: "13px",
                            fontWeight: 700,
                            color: "#2D2A3E",
                            marginBottom: "0.5rem",
                          }}
                        >
                          How did you hear about us?{" "}
                          <span style={{ color: "#FF6B3D" }}>*</span>
                        </label>
                        <select
                          value={form.hearAboutUs}
                          onChange={(e) => update("hearAboutUs", e.target.value)}
                          style={SELECT_STYLE}
                          onFocus={(e) =>
                            (e.currentTarget.style.borderColor = "#F5A623")
                          }
                          onBlur={(e) =>
                            (e.currentTarget.style.borderColor = "#E0D8C0")
                          }
                        >
                          <option value="">Select an option</option>
                          <option value="facebook">Facebook</option>
                          <option value="word-of-mouth">
                            Word of mouth / referral
                          </option>
                          <option value="google">Google Search</option>
                          <option value="southscape">
                            Saw the school at Southscape
                          </option>
                          <option value="flyer">Flyer or tarpaulin</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label
                          style={{
                            display: "block",
                            fontSize: "13px",
                            fontWeight: 700,
                            color: "#2D2A3E",
                            marginBottom: "0.5rem",
                          }}
                        >
                          Any additional notes or questions?{" "}
                          <span style={{ fontWeight: 400, color: "#B0A890" }}>
                            (optional)
                          </span>
                        </label>
                        <textarea
                          value={form.additionalNotes}
                          onChange={(e) =>
                            update("additionalNotes", e.target.value)
                          }
                          placeholder="Anything you would like us to know before we get in touch?"
                          rows={4}
                          style={{
                            ...INPUT_STYLE,
                            height: "auto",
                            resize: "vertical",
                          }}
                          onFocus={(e) =>
                            (e.currentTarget.style.borderColor = "#F5A623")
                          }
                          onBlur={(e) =>
                            (e.currentTarget.style.borderColor = "#E0D8C0")
                          }
                        />
                      </div>
                    </div>
                  )}

                  {/* ── STEP 6: Review ── */}
                  {currentStep === 6 && (
                    <div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "1rem",
                          marginBottom: "1.75rem",
                        }}
                      >
                        <ReviewGroup title="Program">
                          <ReviewRow
                            label="Selected Program"
                            value={PROGRAM_LABELS[form.program] ?? form.program}
                          />
                        </ReviewGroup>

                        <ReviewGroup title="Child's Information">
                          <ReviewRow
                            label="Name"
                            value={[
                              form.childFirstName,
                              form.childMiddleName,
                              form.childLastName,
                            ]
                              .filter(Boolean)
                              .join(" ")}
                          />
                          <ReviewRow
                            label="Date of Birth"
                            value={form.childDOB}
                          />
                          <ReviewRow
                            label="Sex"
                            value={
                              form.childSex === "male" ? "Male" : "Female"
                            }
                          />
                          {form.childNickname && (
                            <ReviewRow
                              label="Nickname"
                              value={form.childNickname}
                            />
                          )}
                        </ReviewGroup>

                        <ReviewGroup title="Parent / Guardian">
                          <ReviewRow
                            label="Name"
                            value={form.parentName}
                          />
                          <ReviewRow
                            label="Relationship"
                            value={
                              RELATIONSHIP_LABELS[form.parentRelationship] ??
                              form.parentRelationship
                            }
                          />
                          <ReviewRow
                            label="Contact Number"
                            value={form.parentContact}
                          />
                          <ReviewRow
                            label="Email"
                            value={form.parentEmail}
                          />
                          {form.parentAddress && (
                            <ReviewRow
                              label="Address / City"
                              value={form.parentAddress}
                            />
                          )}
                        </ReviewGroup>

                        <ReviewGroup title="Payment Method">
                          <ReviewRow
                            label="Method"
                            value={
                              PAYMENT_LABELS[form.paymentMethod] ??
                              form.paymentMethod
                            }
                          />
                        </ReviewGroup>

                        <ReviewGroup title="Additional Information">
                          <ReviewRow
                            label="How They Heard About Us"
                            value={
                              HEAR_ABOUT_LABELS[form.hearAboutUs] ??
                              form.hearAboutUs
                            }
                          />
                          {form.additionalNotes && (
                            <ReviewRow
                              label="Notes"
                              value={form.additionalNotes}
                            />
                          )}
                        </ReviewGroup>
                      </div>

                      {/* Consent checkbox */}
                      <label
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "12px",
                          padding: "1.25rem",
                          borderRadius: "14px",
                          background: "#FFF9EC",
                          border: "2px solid #FFE49A",
                          cursor: "pointer",
                          marginBottom: "1.5rem",
                        }}
                      >
                        <input
                          type="checkbox"
                          checked={consent}
                          onChange={(e) => setConsent(e.target.checked)}
                          style={{
                            marginTop: "3px",
                            width: "18px",
                            height: "18px",
                            accentColor: "#FF6B3D",
                            flexShrink: 0,
                            cursor: "pointer",
                          }}
                        />
                        <span
                          style={{
                            fontSize: "14px",
                            color: "#2D2A3E",
                            lineHeight: 1.65,
                            fontWeight: 600,
                          }}
                        >
                          I confirm the details above are correct and I agree to
                          be contacted by MCLC regarding this enrollment
                          inquiry.
                        </span>
                      </label>

                      {/* Error message */}
                      {submitError && (
                        <div
                          style={{
                            padding: "1rem",
                            borderRadius: "12px",
                            background: "#FFF0EE",
                            border: "2px solid #FFBCB0",
                            color: "#B83220",
                            fontSize: "14px",
                            fontWeight: 600,
                            marginBottom: "1rem",
                          }}
                        >
                          {submitError}
                        </div>
                      )}
                    </div>
                  )}

                  {/* ── NAV BUTTONS ── */}
                  <div
                    style={{
                      display: "flex",
                      gap: "1rem",
                      marginTop: "2rem",
                      justifyContent:
                        currentStep === 1 ? "flex-end" : "space-between",
                    }}
                  >
                    {currentStep > 1 && (
                      <button
                        type="button"
                        onClick={() => setCurrentStep((s) => s - 1)}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "6px",
                          padding: "12px 24px",
                          borderRadius: "50px",
                          cursor: "pointer",
                          background: "white",
                          border: "2px solid #E0D8C0",
                          fontFamily: "'Nunito', sans-serif",
                          fontWeight: 700,
                          fontSize: "15px",
                          color: "#7B7490",
                          transition: "all 0.2s",
                        }}
                        onMouseOver={(e) => {
                          e.currentTarget.style.borderColor = "#F5A623";
                          e.currentTarget.style.color = "#C07800";
                        }}
                        onMouseOut={(e) => {
                          e.currentTarget.style.borderColor = "#E0D8C0";
                          e.currentTarget.style.color = "#7B7490";
                        }}
                      >
                        <ChevronLeft size={16} />
                        Back
                      </button>
                    )}

                    {currentStep < 6 ? (
                      <button
                        type="button"
                        onClick={() => setCurrentStep((s) => s + 1)}
                        disabled={!canContinue()}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "6px",
                          padding: "12px 28px",
                          borderRadius: "50px",
                          cursor: canContinue() ? "pointer" : "not-allowed",
                          background: canContinue()
                            ? "linear-gradient(135deg, #F5A623, #FF6B3D)"
                            : "#EDE8D8",
                          border: "none",
                          fontFamily: "'Fredoka', cursive",
                          fontWeight: 500,
                          fontSize: "16px",
                          color: canContinue() ? "white" : "#B0A890",
                          boxShadow: canContinue()
                            ? "0 4px 14px rgba(245,166,35,0.4)"
                            : "none",
                          transition: "all 0.2s",
                        }}
                      >
                        Continue
                        <ChevronRight size={16} />
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={handleSubmit}
                        disabled={!consent || isSubmitting}
                        style={{
                          flex: 1,
                          padding: "14px 28px",
                          borderRadius: "50px",
                          cursor:
                            consent && !isSubmitting
                              ? "pointer"
                              : "not-allowed",
                          background:
                            consent && !isSubmitting
                              ? "linear-gradient(135deg, #F5A623, #FF6B3D)"
                              : "#EDE8D8",
                          border: "none",
                          fontFamily: "'Fredoka', cursive",
                          fontWeight: 500,
                          fontSize: "17px",
                          color:
                            consent && !isSubmitting ? "white" : "#B0A890",
                          boxShadow:
                            consent && !isSubmitting
                              ? "0 6px 20px rgba(245,166,35,0.45)"
                              : "none",
                          transition: "all 0.2s",
                        }}
                      >
                        {isSubmitting
                          ? "Submitting..."
                          : "Submit Enrollment Inquiry"}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}
