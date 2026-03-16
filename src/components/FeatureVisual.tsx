"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

const valuePoints = [
  "Proactive maintenance that extends asset lifecycle",
  "Compliance, safety, and operational excellence",
  "Dedicated support for Nigerian estates and businesses",
];

export function FeatureVisual() {
  return (
    <section className="relative py-24 sm:py-28 md:py-36 bg-brand-navy overflow-hidden">
      {/* Background: no bg-fixed on mobile for performance */}
      <div
        className="absolute inset-0 opacity-30 md:opacity-40 mix-blend-luminosity bg-cover bg-center md:bg-fixed"
        style={{
          backgroundImage: 'url("/facility-interior.png")',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/90 to-brand-navy/80" />
      <div className="absolute inset-0 bg-brand-orange/5 mix-blend-overlay pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-16 sm:w-20 h-1 bg-brand-orange mx-auto mb-6 sm:mb-8 rounded-full" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            Maintaining property value and supporting premium investments
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-8 font-light">
            We don&apos;t just solve immediate problems; we implement proactive
            strategies that extend the lifecycle of your assets and enhance the
            comfort of your occupants.
          </p>
          <ul className="flex flex-col items-center gap-3 mb-10 text-left max-w-md mx-auto text-gray-300">
            {valuePoints.map((point, i) => (
              <li key={i} className="flex items-center gap-3">
                <Check className="h-5 w-5 shrink-0 text-brand-orange" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-7 py-3.5 sm:px-8 sm:py-4 bg-brand-orange hover:bg-orange-600 text-white font-bold rounded-md transition-all duration-300 shadow-lg hover:shadow-brand-orange/25 group"
          >
            Request a Quote Today
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
