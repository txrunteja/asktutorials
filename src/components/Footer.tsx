import React from "react";
import { FaWhatsapp, FaInstagram, FaFacebookF } from "react-icons/fa";
import {
  NAV_LINKS,
  COURSE_CATEGORIES,
  CONTACT_INFO,
  SOCIAL_LINKS,
} from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-brand-blue-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-1 mb-4 h-12">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo.webp"
                alt="ASK Tutorials Logo"
                className="h-10 w-auto object-contain brightness-0 invert"
              />
            </div>
            <p className="text-white/70 text-body-sm leading-relaxed mb-6">
              Empowering students with expert guidance, small batches, and
              personalized attention since 2014.
            </p>
            <div className="flex gap-3">
              <a
                href={SOCIAL_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-green-500 transition-colors duration-300"
              >
                <FaWhatsapp className="text-lg" />
              </a>
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-gradient-to-tr hover:from-yellow-500 hover:via-pink-500 hover:to-purple-500 transition-all duration-300"
              >
                <FaInstagram className="text-lg" />
              </a>
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
              >
                <FaFacebookF className="text-lg" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-poppins font-semibold text-heading-sm text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[{ label: "Home", href: "#hero" }, ...NAV_LINKS].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/70 text-body-sm hover:text-brand-orange-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-poppins font-semibold text-heading-sm text-white mb-4">
              Programs
            </h4>
            <ul className="space-y-3">
              {COURSE_CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <a
                    href="#courses"
                    className="text-white/70 text-body-sm hover:text-brand-orange-400 transition-colors"
                  >
                    {cat.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-poppins font-semibold text-heading-sm text-white mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`}
                  className="text-white/70 text-body-sm hover:text-brand-orange-400 transition-colors"
                >
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-white/70 text-body-sm hover:text-brand-orange-400 transition-colors"
                >
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li>
                <p className="text-white/70 text-body-sm">
                  {CONTACT_INFO.address}
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <p className="text-center text-white/50 text-body-sm">
            © 2025 ASK Tutorials. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
