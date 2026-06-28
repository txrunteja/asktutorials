import React from "react";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ASK Tutorials | Expert Coaching for Class 6–12 & Competitive Exams",
  description:
    "ASK Tutorials offers expert coaching with small batches, personalized attention, and proven results for Classes 6–12, CBSE, State Board, Olympiads, and competitive exam preparation.",
  keywords: [
    "coaching institute",
    "tuition classes",
    "CBSE coaching",
    "board exam preparation",
    "competitive exam coaching",
    "Olympiad preparation",
    "small batch tuition",
    "Class 6 to 12 coaching",
    "ASK Tutorials",
  ],
  authors: [{ name: "ASK Tutorials" }],
  openGraph: {
    title: "ASK Tutorials | Expert Coaching for Class 6–12 & Competitive Exams",
    description:
      "Expert guidance, small batches, and proven results — from Class 6 to competitive exams. Join 500+ successful students.",
    url: "https://asktutorials.com",
    siteName: "ASK Tutorials",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "ASK Tutorials | Expert Coaching for Class 6–12 & Competitive Exams",
    description:
      "Expert guidance, small batches, and proven results — from Class 6 to competitive exams.",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Google Analytics 4 — TODO: REPLACE with your GA4 Measurement ID */}
        {/* 
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX');
            `,
          }}
        />
        */}
      </head>
      <body className="font-inter antialiased text-gray-600 bg-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
