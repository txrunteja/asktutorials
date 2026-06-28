import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Courses from "@/components/Courses";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import AdmissionProcess from "@/components/AdmissionProcess";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Courses />
        <WhyChooseUs />
        <Testimonials />
        <AdmissionProcess />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
