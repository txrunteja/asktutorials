"use client";

import React from "react";
import {
  FaChalkboardTeacher,
  FaUsers,
  FaClipboardList,
  FaEdit,
  FaChartBar,
  FaComments,
  FaBullseye,
  FaMobileAlt,
} from "react-icons/fa";
import { FEATURES } from "@/lib/constants";
import SectionHeading from "./ui/SectionHeading";
import ScrollReveal from "./ui/ScrollReveal";

const iconMap: Record<string, React.ReactNode> = {
  FaChalkboardTeacher: <FaChalkboardTeacher className="text-2xl" />,
  FaUsers: <FaUsers className="text-2xl" />,
  FaClipboardList: <FaClipboardList className="text-2xl" />,
  FaEdit: <FaEdit className="text-2xl" />,
  FaChartBar: <FaChartBar className="text-2xl" />,
  FaComments: <FaComments className="text-2xl" />,
  FaBullseye: <FaBullseye className="text-2xl" />,
  FaMobileAlt: <FaMobileAlt className="text-2xl" />,
};

export default function WhyChooseUs() {
  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container-custom">
        <SectionHeading
          title="Why Choose ASK Tutorials"
          subtitle="We don't just teach — we build confidence, habits, and a love for learning that lasts a lifetime."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {FEATURES.map((feature, index) => (
            <ScrollReveal key={feature.title} delay={index * 0.05}>
              <div className="group bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 h-full border border-transparent hover:border-brand-orange-500/20">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-blue-900 to-brand-blue-600 flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                  {iconMap[feature.icon]}
                </div>

                <h3 className="font-poppins text-heading-sm text-brand-blue-900 mb-2">
                  {feature.title}
                </h3>

                <p className="text-body-sm text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
