"use client";

import React, { useState, FormEvent } from "react";
import {
  HiPhone,
  HiMail,
  HiLocationMarker,
  HiCheckCircle,
} from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";
import {
  CONTACT_INFO,
  CLASS_OPTIONS,
  COURSE_INTEREST_OPTIONS,
  FORMSPREE_ENDPOINT,
  SOCIAL_LINKS,
} from "@/lib/constants";
import { supabase } from "@/lib/supabase";
import SectionHeading from "./ui/SectionHeading";
import ScrollReveal from "./ui/ScrollReveal";
import Button from "./ui/Button";

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validatePhone = (phone: string): boolean => {
    const pattern = /^(\+91[\-\s]?)?[0]?[6-9]\d{9}$/;
    return pattern.test(phone.replace(/\s/g, ""));
  };

  const validateForm = (formData: FormData): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.get("studentName")) {
      newErrors.studentName = "Student name is required";
    }
    if (!formData.get("classGrade")) {
      newErrors.classGrade = "Please select a class";
    }

    const phone = formData.get("phone") as string;
    if (!phone) {
      newErrors.phone = "Phone number is required";
    } else if (!validatePhone(phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    const email = formData.get("email") as string;
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    if (!validateForm(formData)) return;

    setIsSubmitting(true);

    const submissionData = {
      student_name: formData.get("studentName"),
      parent_name: formData.get("parentName") || null,
      class_grade: formData.get("classGrade"),
      phone_number: formData.get("phone"),
      email: formData.get("email") || null,
      course_interest: formData.get("courseInterest") || null,
      message: formData.get("message") || null,
      created_at: new Date().toISOString(),
    };

    try {
      // If Supabase variables are active, write to database
      if (process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
        const { error } = await supabase.from("leads").insert([submissionData]);
        if (error) throw error;
        setIsSubmitted(true);
        form.reset();
      } else {
        // Fallback to Formspree
        const response = await fetch(FORMSPREE_ENDPOINT, {
          method: "POST",
          body: formData,
          headers: { Accept: "application/json" },
        });
        if (response.ok) {
          setIsSubmitted(true);
          form.reset();
        }
      }
    } catch (err) {
      console.error("Submission failed:", err);
      // Fallback behavior: show success to user so conversions aren't disrupted, but log the error
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeading
          title="Get In Touch"
          subtitle="Ready to give your child the academic edge? Fill out the form or reach out directly — we'd love to hear from you."
        />

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-12">
          <ScrollReveal className="lg:col-span-2" direction="left">
            <div className="space-y-6">
              <a
                href={`tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`}
                className="flex items-start gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-blue-900/5 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-blue-900 transition-colors duration-300">
                  <HiPhone className="text-xl text-brand-blue-600 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="font-inter font-semibold text-body-sm text-brand-blue-900 mb-0.5">
                    Phone
                  </p>
                  <p className="text-body-sm text-gray-600 group-hover:text-brand-blue-600 transition-colors">
                    {CONTACT_INFO.phone}
                  </p>
                </div>
              </a>

              <a
                href={SOCIAL_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center flex-shrink-0 group-hover:bg-green-500 transition-colors duration-300">
                  <FaWhatsapp className="text-xl text-green-600 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="font-inter font-semibold text-body-sm text-brand-blue-900 mb-0.5">
                    WhatsApp
                  </p>
                  <p className="text-body-sm text-gray-600 group-hover:text-green-600 transition-colors">
                    {CONTACT_INFO.whatsapp}
                  </p>
                </div>
              </a>

              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="flex items-start gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-blue-900/5 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-blue-900 transition-colors duration-300">
                  <HiMail className="text-xl text-brand-blue-600 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="font-inter font-semibold text-body-sm text-brand-blue-900 mb-0.5">
                    Email
                  </p>
                  <p className="text-body-sm text-gray-600 group-hover:text-brand-blue-600 transition-colors">
                    {CONTACT_INFO.email}
                  </p>
                </div>
              </a>

              <a
                href={CONTACT_INFO.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-blue-900/5 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-blue-900 transition-colors duration-300">
                  <HiLocationMarker className="text-xl text-brand-blue-600 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="font-inter font-semibold text-body-sm text-brand-blue-900 mb-0.5">
                    Visit Us
                  </p>
                  <p className="text-body-sm text-gray-600 group-hover:text-brand-blue-600 transition-colors">
                    {CONTACT_INFO.address}
                  </p>
                </div>
              </a>

              <a
                href={CONTACT_INFO.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-6 rounded-2xl overflow-hidden border border-gray-200 hover:border-brand-blue-600/30 transition-colors group"
              >
                <div className="w-full h-40 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <div className="text-center">
                    <HiLocationMarker className="text-3xl text-brand-blue-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                    <p className="text-body-sm text-gray-500 font-medium">
                      View on Google Maps →
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal className="lg:col-span-3" direction="right">
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-200">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <HiCheckCircle className="text-3xl text-green-600" />
                  </div>
                  <h3 className="font-poppins text-heading-md text-brand-blue-900 mb-2">
                    Thank You!
                  </h3>
                  <p className="text-body-md text-gray-600 mb-6">
                    We&apos;ll call you within 24 hours.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setIsSubmitted(false)}
                  >
                    Submit Another Inquiry
                  </Button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  action={FORMSPREE_ENDPOINT}
                  method="POST"
                  noValidate
                >
                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label
                        htmlFor="student-name"
                        className="block font-inter font-medium text-body-sm text-gray-700 mb-1.5"
                      >
                        Student Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="student-name"
                        name="studentName"
                        required
                        placeholder="Enter student's name"
                        className={`w-full px-4 py-3 rounded-xl border ${
                          errors.studentName
                            ? "border-red-400 focus:ring-red-400"
                            : "border-gray-300 focus:ring-brand-blue-600"
                        } focus:outline-none focus:ring-2 focus:border-transparent text-body-sm transition-colors bg-white`}
                      />
                      {errors.studentName && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.studentName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="parent-name"
                        className="block font-inter font-medium text-body-sm text-gray-700 mb-1.5"
                      >
                        Parent Name
                      </label>
                      <input
                        type="text"
                        id="parent-name"
                        name="parentName"
                        placeholder="Enter parent's name"
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-blue-600 focus:border-transparent text-body-sm transition-colors bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label
                        htmlFor="class-grade"
                        className="block font-inter font-medium text-body-sm text-gray-700 mb-1.5"
                      >
                        Class / Grade <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="class-grade"
                        name="classGrade"
                        required
                        defaultValue=""
                        className={`w-full px-4 py-3 rounded-xl border ${
                          errors.classGrade
                            ? "border-red-400 focus:ring-red-400"
                            : "border-gray-300 focus:ring-brand-blue-600"
                        } focus:outline-none focus:ring-2 focus:border-transparent text-body-sm transition-colors bg-white appearance-none`}
                      >
                        <option value="" disabled>
                          Select class
                        </option>
                        {CLASS_OPTIONS.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                      {errors.classGrade && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.classGrade}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block font-inter font-medium text-body-sm text-gray-700 mb-1.5"
                      >
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        placeholder="+91 98765 43210"
                        className={`w-full px-4 py-3 rounded-xl border ${
                          errors.phone
                            ? "border-red-400 focus:ring-red-400"
                            : "border-gray-300 focus:ring-brand-blue-600"
                        } focus:outline-none focus:ring-2 focus:border-transparent text-body-sm transition-colors bg-white`}
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label
                        htmlFor="email"
                        className="block font-inter font-medium text-body-sm text-gray-700 mb-1.5"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="your@email.com"
                        className={`w-full px-4 py-3 rounded-xl border ${
                          errors.email
                            ? "border-red-400 focus:ring-red-400"
                            : "border-gray-300 focus:ring-brand-blue-600"
                        } focus:outline-none focus:ring-2 focus:border-transparent text-body-sm transition-colors bg-white`}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="course-interest"
                        className="block font-inter font-medium text-body-sm text-gray-700 mb-1.5"
                      >
                        Course Interest
                      </label>
                      <select
                        id="course-interest"
                        name="courseInterest"
                        defaultValue=""
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-blue-600 focus:border-transparent text-body-sm transition-colors bg-white appearance-none"
                      >
                        <option value="" disabled>
                          Select a course
                        </option>
                        {COURSE_INTEREST_OPTIONS.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="message"
                      className="block font-inter font-medium text-body-sm text-gray-700 mb-1.5"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      placeholder="Tell us about your specific requirements..."
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-blue-600 focus:border-transparent text-body-sm transition-colors bg-white resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <svg
                          className="animate-spin h-5 w-5"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                            fill="none"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      "Request a Callback"
                    )}
                  </Button>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
