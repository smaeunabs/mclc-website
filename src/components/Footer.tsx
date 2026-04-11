import Image from "next/image";

export default function Footer() {
  return (
    <footer className="mclc-footer">
      <div className="footer-blob" />
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '12px' }}>
        <Image src="/mclc_logo.png" alt="MCLC Logo" width={60} height={60} style={{ borderRadius: '50%', objectFit: 'cover' }} />
      </div>
      <div className="flogo">Messiah Christian Learning Center</div>
      <div className="footer-dots">
        <div className="footer-dot" style={{ background: "var(--gold)" }} />
        <div className="footer-dot" style={{ background: "var(--green)" }} />
        <div className="footer-dot" style={{ background: "var(--orange)" }} />
        <div className="footer-dot" style={{ background: "var(--blue)" }} />
        <div className="footer-dot" style={{ background: "var(--purple)" }} />
      </div>
      <p>Southscape Commercial Bldg., 2nd Floor Unit B1-2-5, Lawaan 1, Talisay City, Cebu 6045</p>
      <p style={{ marginTop: "6px" }}>
        <a href="mailto:support@mclc-cebu.com">support@mclc-cebu.com</a>
        &nbsp;&middot;&nbsp;
        <a href="tel:+639898018408">(+63) 898-018-4081</a>
        &nbsp;&middot;&nbsp;
        <a href="tel:0323434775">(032) 343-4775</a>
      </p>
      <p style={{ marginTop: "14px", fontSize: "12px", opacity: 0.5 }}>
        &copy; 2025 Messiah Christian Learning Center (MCLC) &middot; Independent Christian Learning Institution &middot; All rights reserved.
      </p>
    </footer>
  );
}
