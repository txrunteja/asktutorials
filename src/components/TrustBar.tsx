"use client";

import React from "react";
import {
  FaChalkboardTeacher,
  FaUsers,
  FaUserCheck,
  FaBookOpen,
  FaClipboardCheck,
} from "react-icons/fa";
import ScrollReveal from "./ui/ScrollReveal";
import { TRUST_BADGES } from "@/lib/constants";

const iconMap: Record<string, React.ReactNode> = {
  FaChalkboardTeacher: <FaChalkboardTeacher className="text-2xl text-brand-blue-600" />,
  FaUsers: <FaUsers className="text-2xl text-brand-blue-600" />,
  FaUserCheck: <FaUserCheck className="text-2xl text-brand-blue-600" />,
  FaBookOpen: <FaBookOpen className="text-2xl text-brand-blue-600" />,
  FaClipboardCheck: <FaClipboardCheck className="text-2xl text-brand-blue-600" />,
};

export default function TrustBar() {
  return (
    <section className="bg-gray-50 py-8 md:py-12 -mt-1">
      <div className="container-custom">
        <ScrollReveal>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8">
            {TRUST_BADGES.map((badge, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-white rounded-xl px-5 py-3 shadow-card hover:shadow-card-hover transition-shadow duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-brand-blue-900/5 flex items-center justify-center flex-shrink-0">
                  {iconMap[badge.icon]}
                </div>
                <span className="font-inter font-medium text-body-sm text-gray-700 whitespace-nowrap">
                  {badge.label}
                </span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
