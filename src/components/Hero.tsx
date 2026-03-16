"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center pt-20 overflow-hidden bg-brand-navy">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2940&auto=format&fit=crop")',
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/95 via-brand-navy/80 to-transparent" />
        <div className="absolute inset-0 bg-brand-orange/5 mix-blend-overlay" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full mb-6 border border-white/20">
              <span className="flex h-2 w-2 rounded-full bg-brand-orange animate-pulse" />
              <span className="text-xs font-semibold tracking-wide text-brand-light uppercase">
                Facility Management Experts
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15]">
              Your Property,{" "}
              <span className="text-brand-orange">Our Expertise</span>
            </h1>

            <p className="mt-5 text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl font-light">
              We help Nigerian businesses and estate owners protect asset value,
              ensure uptime, and deliver safer, more comfortable environments
              — from corporate offices to residential estates.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href="#contact"
                className="inline-flex justify-center items-center px-7 py-3.5 sm:px-8 sm:py-4 border border-transparent text-base font-bold rounded-md text-white bg-brand-orange hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-brand-orange/25 group"
              >
                Request Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#services"
                className="inline-flex justify-center items-center px-6 py-3 sm:px-6 sm:py-3 border-2 border-white/30 bg-white/10 text-sm font-semibold rounded-md text-white hover:bg-white/20 hover:border-white transition-all duration-300"
              >
                View Services
              </a>
            </div>

            <p className="mt-4 text-sm text-gray-400">
              Or call us:{" "}
              <a href="tel:+2349166090168" className="text-brand-orange hover:underline font-medium">
                +234 916 609 0168
              </a>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-wrap gap-4 sm:gap-8 text-sm text-gray-300"
          >
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 shrink-0 text-brand-orange" />
              <span>Certified Engineers</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 shrink-0 text-brand-orange" />
              <span>24/7 Technical Support</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 shrink-0 text-brand-orange" />
              <span>Comprehensive Coverage</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-1"
      >
        <ChevronDown className="h-5 w-5 text-white/60 animate-bounce" />
      </motion.div>

      {/* Subtle bottom transition */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white/80 to-transparent pointer-events-none" />
    </section>
  );
}
