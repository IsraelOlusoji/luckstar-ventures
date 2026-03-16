"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Instagram, Linkedin, Facebook } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function ContactSection() {
  return (
    <Section id="contact" variant="white" className="relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 md:mb-16">
          <SectionHeader
            eyebrow="Get In Touch"
            title="Ready to Optimize Your Facility?"
            subtitle="Contact our expert team today for a comprehensive consultation tailored to your unique requirements."
            centered
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl border border-gray-100"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition-all outline-none bg-gray-50 focus:bg-white"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition-all outline-none bg-gray-50 focus:bg-white"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition-all outline-none bg-gray-50 focus:bg-white"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition-all outline-none bg-gray-50 focus:bg-white"
                    placeholder="+234 XXX XXXX"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">How can we help you?</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition-all outline-none bg-gray-50 focus:bg-white resize-none"
                  placeholder="Describe your facility management needs..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 px-6 bg-brand-orange hover:bg-orange-600 text-white font-bold rounded-lg transition-colors duration-300 shadow-md"
              >
                Send Request
              </button>
            </form>
          </motion.div>

          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <div className="space-y-6 sm:space-y-10">
              <div className="flex bg-brand-light p-5 sm:p-6 rounded-2xl">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm">
                    <MapPin className="w-6 h-6 text-brand-orange" />
                  </div>
                </div>
                <div className="ml-4 sm:ml-6">
                  <h3 className="text-lg sm:text-xl font-bold text-brand-navy mb-2">Head Office</h3>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    42 Durban Street<br />
                    Wuse II, Abuja<br />
                    Nigeria
                  </p>
                </div>
              </div>

              <div className="flex bg-brand-light p-5 sm:p-6 rounded-2xl">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm">
                    <Phone className="w-6 h-6 text-brand-orange" />
                  </div>
                </div>
                <div className="ml-4 sm:ml-6">
                  <h3 className="text-lg sm:text-xl font-bold text-brand-navy mb-2">Phone Lines</h3>
                  <a href="tel:+2349166090168" className="text-gray-600 hover:text-brand-orange transition-colors block mb-1">
                    +234 916 609 0168
                  </a>
                  <p className="text-sm text-gray-500">Mon-Fri from 8am to 5pm</p>
                </div>
              </div>

              <div className="flex bg-brand-light p-5 sm:p-6 rounded-2xl">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm">
                    <Mail className="w-6 h-6 text-brand-orange" />
                  </div>
                </div>
                <div className="ml-4 sm:ml-6">
                  <h3 className="text-lg sm:text-xl font-bold text-brand-navy mb-2">Email Us</h3>
                  <a href="mailto:info@luckstarventures.com" className="text-gray-600 hover:text-brand-orange transition-colors block">
                    info@luckstarventures.com
                  </a>
                  <p className="text-sm text-gray-500 mt-1">We typically reply within 24 hours.</p>
                </div>
              </div>
            </div>

            <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-100">
              <h4 className="text-sm font-bold text-brand-navy uppercase tracking-wider mb-4 sm:mb-6">Follow Us</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-brand-orange hover:text-white transition-all" aria-label="Instagram">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-brand-orange hover:text-white transition-all" aria-label="LinkedIn">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-brand-orange hover:text-white transition-all" aria-label="Facebook">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/2349166090168"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#128C7E] hover:-translate-y-1 transition-all duration-300 group flex items-center justify-center"
        aria-label="Chat on WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 16 16">
          <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
        </svg>
        <span className="absolute right-full mr-4 bg-white text-gray-800 text-sm font-semibold px-4 py-2 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Chat with us
        </span>
      </a>
    </Section>
  );
}
