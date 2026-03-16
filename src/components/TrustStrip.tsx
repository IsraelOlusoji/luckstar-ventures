"use client";

import React from "react";
import { motion } from "framer-motion";

const metrics = [
  { value: "10+", label: "Years of Excellence" },
  { value: "50+", label: "Managed Assets" },
  { value: "99%", label: "Uptime on Critical Systems" },
  { value: "100%", label: "Client Commitment" },
];

export function TrustStrip() {
  return (
    <section className="py-8 sm:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="relative bg-white rounded-2xl shadow-md border border-gray-100 p-8 sm:p-10 overflow-hidden"
        >
          {/* Top orange accent bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-orange via-brand-orange/80 to-brand-orange/40" />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {metrics.map((item, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl sm:text-4xl font-bold text-brand-orange mb-1">
                  {item.value}
                </p>
                <p className="text-sm font-medium text-gray-600">{item.label}</p>
              </div>
            ))}
          </div>

          <p className="mt-6 text-center text-sm text-gray-500 font-medium">
            Trusted by leading estates and businesses across Nigeria
          </p>
        </motion.div>
      </div>
    </section>
  );
}
