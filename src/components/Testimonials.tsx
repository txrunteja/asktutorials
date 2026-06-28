"use client";

import React from "react";
import { FaStar } from "react-icons/fa";
import { TESTIMONIALS } from "@/lib/constants";
import SectionHeading from "./ui/SectionHeading";
import ScrollReveal from "./ui/ScrollReveal";

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeading
          title="What Students & Parents Say"
          subtitle="Don't just take our word for it — hear from families who've experienced the ASK Tutorials difference."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((testimonial, index) => (
            <ScrollReveal key={testimonial.id} delay={index * 0.08}>
              <div className="bg-white border border-gray-200 rounded-2xl p-6 h-full flex flex-col hover:shadow-card-hover hover:border-brand-blue-600/20 transition-all duration-300 relative">
                <div className="absolute -top-3 left-6 text-4xl text-brand-orange-500/20 font-serif">
                  &ldquo;
                </div>

                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <FaStar
                      key={i}
                      className={`text-sm ${
                        i < testimonial.rating
                          ? "text-brand-orange-500"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>

                <p className="text-body-sm text-gray-600 leading-relaxed flex-grow mb-5 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                <div className="flex items-center gap-3 mt-auto pt-4 border-t border-gray-100">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-blue-900 to-brand-blue-600 flex items-center justify-center text-white font-poppins font-semibold text-sm flex-shrink-0">
                    {testimonial.initials}
                  </div>
                  <div>
                    <p className="font-inter font-semibold text-body-sm text-brand-blue-900">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
