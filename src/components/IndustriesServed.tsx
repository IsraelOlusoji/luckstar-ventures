"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";

const industries = [
  {
    title: "Corporate Offices",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop",
    description:
      "Maintaining professional, productive environments for modern enterprises.",
  },
  {
    title: "Residential Estates",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop",
    description:
      "Creating safe, beautiful, and functional living communities.",
  },
  {
    title: "Industrial Facilities",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop",
    description:
      "Robust technical support for plants, warehouses, and factories.",
  },
  {
    title: "Commercial Buildings",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200&auto=format&fit=crop",
    description:
      "Optimizing operations for retail and mixed-use complexes.",
  },
];

export function IndustriesServed() {
  return (
    <Section id="industries" variant="navy" className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
          <SectionHeader
            eyebrow="Sectors We Serve"
            title="Tailored Expertise Across Diverse Industries"
            theme="dark"
          />
          <p className="text-gray-400 max-w-md md:text-right text-base">
            We adapt our facility management and technical engineering services
            to meet the specific compliance, safety, and operational demands of
            your sector.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative h-72 sm:h-80 rounded-2xl overflow-hidden cursor-pointer"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${industry.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/95 via-brand-navy/70 to-transparent" />

              <div className="absolute inset-0 p-5 sm:p-6 flex flex-col justify-end">
                <h3 className="text-xl sm:text-2xl font-bold mb-2 group-hover:text-brand-orange transition-colors duration-300">
                  {industry.title}
                </h3>
                <p className="text-gray-300 text-sm md:opacity-0 md:translate-y-2 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-300">
                  {industry.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Section CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 md:mt-14 text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center text-brand-orange hover:text-orange-400 font-semibold text-base transition-colors group"
          >
            Discuss Your Sector Needs
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>

      {/* Smooth transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-linear-to-t from-brand-light to-transparent pointer-events-none" />
    </Section>
  );
}
