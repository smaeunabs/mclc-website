import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Messiah Christian Learning Center — Where Kids Grow, Play & Shine!",
  description:
    "Messiah Christian Learning Center (MCLC) in Talisay City, Cebu. A faith-based preschool offering Nursery/K1, Playgroup, and Daycare programs for ages 1–4.",
  keywords: "MCLC, Messiah Christian Learning Center, preschool Cebu, daycare Talisay, kindergarten Cebu, Christian school",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fredoka:wght@300;400;500;600&family=Nunito:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
