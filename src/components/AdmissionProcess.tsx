"use client";

import React from "react";
import { HiArrowRight } from "react-icons/hi";
import { ADMISSION_STEPS } from "@/lib/constants";
import SectionHeading from "./ui/SectionHeading";
import ScrollReveal from "./ui/ScrollReveal";
import Button from "./ui/Button";

export default function AdmissionProcess() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <SectionHeading
          title="How to Get Started"
          subtitle="Four simple steps to begin your learning journey with ASK Tutorials."
        />

        <ScrollReveal>
          <div className="grid md:grid-cols-4 gap-6 md:gap-4 mb-12">
            {ADMISSION_STEPS.map((step, index) => (
              <div key={step.step} className="relative flex flex-col items-center text-center group">
                {index < ADMISSION_STEPS.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[calc(50%+28px)] right-[calc(-50%+28px)] h-[2px] bg-gradient-to-r from-brand-blue-600/30 to-brand-blue-600/10" />
                )}

                <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-brand-blue-900 to-brand-blue-600 flex items-center justify-center text-white font-poppins font-bold text-xl mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300 z-10">
                  {step.step}
                </div>

                <h3 className="font-poppins text-heading-sm text-brand-blue-900 mb-2">
                  {step.title}
                </h3>

                <p className="text-body-sm text-gray-600 max-w-[200px]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="text-center">
            <Button href="#contact" variant="primary" size="lg">
              Start with Step 1
              <HiArrowRight className="ml-2" />
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
