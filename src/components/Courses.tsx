"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { HiArrowRight, HiClock, HiTag } from "react-icons/hi";
import { COURSES, COURSE_CATEGORIES } from "@/lib/constants";
import SectionHeading from "./ui/SectionHeading";
import ScrollReveal from "./ui/ScrollReveal";

export default function Courses() {
  const [activeTab, setActiveTab] = useState<"school" | "board" | "competitive">("school");
  const shouldReduceMotion = useReducedMotion();

  const filteredCourses = COURSES.filter((c) => c.category === activeTab);

  const scrollToContact = (courseName: string) => {
    const courseSelect = document.getElementById("course-interest") as HTMLSelectElement | null;
    if (courseSelect) {
      const options = Array.from(courseSelect.options);
      const match = options.find((opt) =>
        opt.text.toLowerCase().includes(courseName.toLowerCase().slice(0, 10))
      );
      if (match) {
        courseSelect.value = match.value;
        const event = new Event("change", { bubbles: true });
        courseSelect.dispatchEvent(event);
      }
    }
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="courses" className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeading
          title="Courses & Programs"
          subtitle="From foundational learning to competitive exam mastery — find the right program for every academic goal."
        />

        <ScrollReveal>
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {COURSE_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`relative px-5 py-2.5 rounded-full font-inter font-medium text-body-sm transition-all duration-300 min-h-[44px] ${
                  activeTab === cat.id
                    ? "text-white"
                    : "text-gray-600 hover:text-brand-blue-900 bg-gray-100 hover:bg-gray-200"
                }`}
              >
                {activeTab === cat.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-brand-blue-900 rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat.label}</span>
              </button>
            ))}
          </div>
        </ScrollReveal>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? {} : { opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="group bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-card-hover hover:border-brand-blue-600/20 transition-all duration-300 flex flex-col"
              >
                <span className="inline-flex text-label uppercase tracking-wider text-brand-blue-600 bg-brand-blue-600/5 px-3 py-1 rounded-full w-fit mb-4 font-inter">
                  {course.categoryLabel}
                </span>

                <h3 className="font-poppins text-heading-sm text-brand-blue-900 mb-3 group-hover:text-brand-blue-600 transition-colors">
                  {course.name}
                </h3>

                <p className="text-body-sm text-gray-600 mb-4 flex-grow">
                  {course.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {course.subjects.map((subj) => (
                    <span
                      key={subj}
                      className="inline-flex items-center gap-1 text-xs font-medium text-gray-600 bg-gray-100 px-2.5 py-1 rounded-lg"
                    >
                      <HiTag className="text-gray-400 text-[10px]" />
                      {subj}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-1.5 text-body-sm text-gray-500 mb-5">
                  <HiClock className="text-gray-400" />
                  {course.duration}
                </div>

                <button
                  onClick={() => scrollToContact(course.name)}
                  className="inline-flex items-center gap-2 font-inter font-semibold text-body-sm text-brand-orange-500 hover:text-brand-orange-400 transition-colors group/btn mt-auto"
                >
                  Know More
                  <HiArrowRight className="transition-transform group-hover/btn:translate-x-1" />
                </button>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
