import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Messiah Christian Learning Center | Preschool in Southscape, Talisay City, Cebu",
  description:
    "Enroll your child at MCLC — a Christ-centered preschool in Southscape, Talisay City, Cebu serving Minglanilla and nearby communities. Offering Playgroup, Nursery, and Kinder 1 programs.",
  keywords:
    "preschool in Talisay Cebu, preschool in Minglanilla Cebu, Christian school Talisay Cebu, Christian preschool Cebu, Southscape Talisay school, nursery school Talisay, kinder school Talisay Cebu, playgroup Talisay Cebu, early childhood education Talisay, best preschool south Cebu, MCLC Talisay, Messiah Christian Learning Center",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/favicon.png",
  },
  alternates: {
    canonical: "https://www.mclc-cebu.com",
  },
  openGraph: {
    title: "Messiah Christian Learning Center | Preschool in Southscape, Talisay City, Cebu",
    description:
      "Enroll your child at MCLC — a Christ-centered preschool in Southscape, Talisay City, Cebu serving Minglanilla and nearby communities. Offering Playgroup, Nursery, and Kinder 1 programs.",
    type: "website",
    url: "https://www.mclc-cebu.com",
    images: [{ url: "https://www.mclc-cebu.com/mclc_logo.png", width: 512, height: 512, alt: "Messiah Christian Learning Center — Preschool in Talisay City, Cebu" }],
    siteName: "Messiah Christian Learning Center",
    locale: "en_PH",
  },
  twitter: {
    card: "summary",
    title: "Messiah Christian Learning Center | Preschool in Southscape, Talisay City, Cebu",
    description:
      "Enroll your child at MCLC — a Christ-centered preschool in Southscape, Talisay City, Cebu serving Minglanilla and nearby communities. Offering Playgroup, Nursery, and Kinder 1 programs.",
    images: ["https://www.mclc-cebu.com/mclc_logo.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["EducationalOrganization", "LocalBusiness"],
      "@id": "https://www.mclc-cebu.com",
      name: "Messiah Christian Learning Center",
      alternateName: "MCLC",
      url: "https://www.mclc-cebu.com",
      description:
        "Christ-centered preschool in Southscape, Talisay City, Cebu offering Playgroup, Nursery, and Kinder 1 programs for children ages 2–5.",
      foundingDate: "2025",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Southscape Commercial Bldg., 2nd Floor Unit B1-2-5, Lawaan 1",
        addressLocality: "Talisay City",
        addressRegion: "Cebu",
        postalCode: "6045",
        addressCountry: "PH",
      },
      areaServed: [
        { "@type": "City", name: "Talisay City" },
        { "@type": "City", name: "Minglanilla" },
        { "@type": "AdministrativeArea", name: "South Cebu" },
      ],
      educationalLevel: ["Playgroup", "Nursery", "Kinder 1"],
      telephone: "+639898018408",
      email: "support@mclc-cebu.com",
      logo: "https://www.mclc-cebu.com/mclc_logo.png",
      image: "https://www.mclc-cebu.com/mclc_logo.png",
    },
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <script dangerouslySetInnerHTML={{ __html: 'history.scrollRestoration = "manual"; window.scrollTo(0, 0);' }} />
        {children}
      </body>
    </html>
  );
}
