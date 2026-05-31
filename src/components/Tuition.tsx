import React from "react";
import { Wallet } from "lucide-react";
import { tuitionPrograms, afterSchoolCareRate, type ProgramFee } from "@/data/tuition";

const orangeGradient = "linear-gradient(135deg, var(--gold), var(--orange))";

function FeeRow({ label, value, muted }: { label: string; value: string; muted?: boolean }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "baseline",
        gap: "1rem",
        fontSize: "14px",
        padding: "7px 0",
        borderBottom: "1px solid rgba(45,42,62,0.07)",
      }}
    >
      <span style={{ color: "var(--text-muted)" }}>{label}</span>
      <span style={{ fontWeight: 700, color: muted ? "var(--text-muted)" : "var(--charcoal)", whiteSpace: "nowrap" }}>
        {value}
      </span>
    </div>
  );
}

function ProgramCard({ program }: { program: ProgramFee }) {
  const { dueAtEnrollment: due, enrollSubtotal, yearTotal } = program;
  return (
    <div
      style={{
        background: "white",
        borderRadius: "22px",
        padding: "1.75rem",
        boxShadow: "0 12px 36px rgba(45,42,62,0.08)",
        border: "1px solid rgba(45,42,62,0.06)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "0.75rem" }}>
        <h3 style={{ fontFamily: "'Fredoka', cursive", fontWeight: 500, fontSize: "22px", color: "var(--charcoal)" }}>
          {program.name}
        </h3>
        <span
          style={{
            fontSize: "12px",
            fontWeight: 800,
            color: "var(--blue-deep)",
            background: "var(--blue-light)",
            border: "2px solid #A8D8FF",
            borderRadius: "50px",
            padding: "4px 12px",
            whiteSpace: "nowrap",
          }}
        >
          {program.ageRange}
        </span>
      </div>

      <div style={{ margin: "1.1rem 0 1.25rem" }}>
        <div
          style={{
            fontFamily: "'Fredoka', cursive",
            fontWeight: 600,
            fontSize: "40px",
            lineHeight: 1.1,
            background: orangeGradient,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          {program.monthly}
          <span style={{ fontSize: "16px", fontWeight: 600 }}> / month</span>
        </div>
        <div style={{ fontSize: "13px", color: "var(--text-muted)", marginTop: "4px" }}>
          or {program.annual} / year · 9 payments, none on the 10th month
        </div>
      </div>

      <div
        style={{
          fontSize: "11px",
          fontWeight: 800,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: "var(--text-muted)",
          marginBottom: "2px",
        }}
      >
        Due at enrollment
      </div>
      <div>
        <FeeRow label="Registration" value={due.registration} />
        <FeeRow label="Workbooks & Materials" value={due.materials} />
        <FeeRow label="School ID" value={due.schoolId} />
        <FeeRow label="Miscellaneous" value={due.miscellaneous} />
        {due.uniform === null ? (
          <FeeRow label="Uniform" value="Not required" muted />
        ) : (
          <FeeRow label="Uniform (optional)" value={due.uniform} />
        )}
      </div>

      <div
        style={{
          marginTop: "1rem",
          background: "var(--orange-light)",
          border: "2px solid #FFB8A0",
          borderRadius: "14px",
          padding: "12px 16px",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "0.75rem" }}>
          <span style={{ fontSize: "13px", fontWeight: 800, color: "#8A2A00", textTransform: "uppercase", letterSpacing: "0.04em" }}>
            Due upon enrollment
          </span>
          <span style={{ fontFamily: "'Fredoka', cursive", fontWeight: 600, fontSize: "20px", color: "#8A2A00" }}>
            {enrollSubtotal.withoutUniform}
          </span>
        </div>
        {enrollSubtotal.withUniform && (
          <div style={{ fontSize: "12px", color: "#A85A3A", textAlign: "right", marginTop: "2px" }}>
            {enrollSubtotal.withUniform} with uniform
          </div>
        )}
      </div>

      <div
        style={{
          marginTop: "0.85rem",
          background: "var(--charcoal)",
          borderRadius: "14px",
          padding: "14px 16px",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "0.75rem" }}>
          <span style={{ fontSize: "13px", fontWeight: 800, color: "rgba(255,255,255,0.75)", textTransform: "uppercase", letterSpacing: "0.04em" }}>
            Total for the year
          </span>
          <span style={{ fontFamily: "'Fredoka', cursive", fontWeight: 600, fontSize: "24px", color: "white" }}>
            {yearTotal.withoutUniform}
          </span>
        </div>
        {yearTotal.withUniform && (
          <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.6)", textAlign: "right", marginTop: "2px" }}>
            {yearTotal.withUniform} with uniform
          </div>
        )}
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
          gap: "1rem",
          fontSize: "13px",
          marginTop: "0.85rem",
        }}
      >
        <span style={{ color: "var(--text-muted)" }}>After-school care</span>
        <span style={{ fontWeight: 700, color: "var(--charcoal)", whiteSpace: "nowrap" }}>
          {afterSchoolCareRate} / hour
        </span>
      </div>

      <p style={{ fontSize: "11.5px", color: "var(--text-muted)", lineHeight: 1.55, marginTop: "1.1rem" }}>
        Enrollment fees are deductible from your total tuition. Monthly tuition is billed after your slot is confirmed.
      </p>
    </div>
  );
}

export default function Tuition() {
  return (
    <section
      id="tuition"
      style={{ background: "white", padding: "80px 5%", position: "relative", overflow: "hidden" }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative", zIndex: 2 }}>
        <div style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <span className="fun-tag orange"><Wallet size={13} />Tuition &amp; Fees · SY 2026-2027</span>
          <h2 className="stitle">Clear, complete pricing for every family</h2>
          <p className="ssub" style={{ marginBottom: "3rem" }}>
            Every fee below is deductible from your total tuition — no hidden charges, just one clear number for the whole school year.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5rem",
            alignItems: "start",
          }}
        >
          {tuitionPrograms.map((program) => (
            <ProgramCard key={program.id} program={program} />
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "2.75rem" }}>
          <p style={{ fontSize: "15px", color: "var(--text-muted)", maxWidth: "560px", margin: "0 auto 1.5rem", lineHeight: 1.7 }}>
            Your total for the year already includes all enrollment fees — what you see is what you pay.
          </p>
          <a href="/enroll" className="btn-primary" style={{ fontSize: "17px", padding: "16px 40px" }}>
            Reserve a Slot
          </a>
        </div>
      </div>
    </section>
  );
}
