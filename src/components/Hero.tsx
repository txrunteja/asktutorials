"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { HiAcademicCap, HiArrowRight } from "react-icons/hi";
import { HERO_STATS } from "@/lib/constants";
import Button from "./ui/Button";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = shouldReduceMotion
    ? {}
    : {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.15, delayChildren: 0.2 },
        },
      };

  const itemVariants = shouldReduceMotion
    ? {}
    : {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
      };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-brand-blue-900 via-brand-blue-800 to-brand-blue-600" />

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-brand-orange-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -left-20 w-60 h-60 bg-brand-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-40 h-40 bg-brand-orange-400/10 rounded-full blur-2xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container-custom relative z-10 pt-20 md:pt-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <HiAcademicCap className="text-brand-orange-400 text-lg" />
              <span className="text-white/90 text-body-sm font-medium">
                Trusted by 500+ Students & Parents
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="font-poppins font-bold text-4xl md:text-5xl lg:text-display-lg text-white leading-tight mb-6"
            >
              Empowering Minds.{" "}
              <span className="text-brand-orange-400">Shaping Futures.</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-body-lg text-white/80 mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Expert guidance, small batches, and proven results — from Class 6
              to competitive exams.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button href="#contact" variant="primary" size="lg">
                Book a Free Demo Class
                <HiArrowRight className="ml-2 text-lg" />
              </Button>
              <Button href="#courses" variant="outline" size="lg" className="border-white/30 text-white hover:bg-white hover:text-brand-blue-900 border-2">
                Explore Courses
              </Button>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12"
            >
              {HERO_STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3 text-center"
                >
                  <div className="font-poppins font-bold text-xl md:text-2xl text-white">
                    {stat.value}
                  </div>
                  <div className="text-white/70 text-body-sm mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.9 }}
            animate={shouldReduceMotion ? {} : { opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="hidden lg:flex items-center justify-center relative"
          >
            <div className="relative w-full max-w-lg">
              <div className="relative bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm border border-white/20 rounded-3xl p-8 aspect-[4/3] flex items-center justify-center overflow-hidden">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-brand-orange-500/30 to-brand-orange-400/20 rounded-full flex items-center justify-center">
                    <HiAcademicCap className="text-6xl text-white" />
                  </div>
                  <p className="text-white/60 text-body-sm font-medium">
                    Building Tomorrow&apos;s Leaders
                  </p>
                </div>
                <div className="absolute top-6 right-6 w-16 h-16 bg-brand-orange-500/20 rounded-2xl rotate-12 flex items-center justify-center">
                  <span className="text-2xl">📚</span>
                </div>
                <div className="absolute bottom-8 left-6 w-14 h-14 bg-blue-400/20 rounded-2xl -rotate-6 flex items-center justify-center">
                  <span className="text-2xl">🎯</span>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-card p-4 max-w-[200px]">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex text-brand-orange-500 text-sm">
                    {"★★★★★"}
                  </div>
                </div>
                <p className="text-gray-600 text-xs leading-relaxed">
                  &quot;Best coaching for board exams!&quot;
                </p>
                <p className="text-brand-blue-900 text-xs font-semibold mt-1">
                  — Class 10 Parent
                </p>
              </div>

              <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-card p-4">
                <div className="text-brand-orange-500 font-poppins font-bold text-2xl">
                  95%
                </div>
                <div className="text-gray-500 text-xs">Success Rate</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0 50C240 90 480 100 720 80C960 60 1200 30 1440 50V100H0V50Z"
            fill="#F9FAFB"
          />
        </svg>
      </div>
    </section>
  );
}
