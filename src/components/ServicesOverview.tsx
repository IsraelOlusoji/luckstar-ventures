"use client";

import React from "react";
import { motion } from "framer-motion";
import { Settings, Building2, Home, Briefcase, ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";

const services = [
  {
    id: 1,
    title: "Facility Management",
    description:
      "Complete management solutions for residential, commercial, and industrial properties ensuring optimal daily operations and tenant satisfaction.",
    icon: Building2,
    core: true,
  },
  {
    id: 2,
    title: "Technical Engineering",
    description:
      "Expert installation and maintenance of MEP (Mechanical/Electrical/Plant), HVAC systems, elevators, and advanced fire safety systems.",
    icon: Settings,
    core: true,
  },
  {
    id: 3,
    title: "Property & Estate Support",
    description:
      "Beautiful landscape design, routine maintenance, gardening, and comprehensive pest control management for all property types.",
    icon: Home,
    core: false,
  },
  {
    id: 4,
    title: "Real Estate Advisory",
    description:
      "Strategic consulting and advisory services to help maximize property value, optimize space usage, and improve asset lifecycle.",
    icon: Briefcase,
    core: false,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function ServicesOverview() {
  return (
    <Section id="services" variant="gray" padding="default">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 md:mb-16">
          <SectionHeader
            eyebrow="Our Solutions"
            title="Comprehensive Management Services"
            subtitle="Tailored to meet your property and technical service needs with uncompromising quality and reliability."
            centered
          />
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                className={`bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-300 border group translate-y-0 hover:-translate-y-2 relative overflow-hidden ${
                  service.core
                    ? "border-brand-orange/20"
                    : "border-gray-100"
                }`}
              >
                {/* Core service accent */}
                {service.core && (
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-brand-orange" />
                )}
                <div className="w-14 h-14 rounded-xl bg-brand-light flex items-center justify-center mb-6 group-hover:bg-brand-orange transition-colors duration-300">
                  <Icon className="h-7 w-7 text-brand-orange group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Section CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 md:mt-14 text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center text-brand-orange hover:text-orange-600 font-semibold text-base transition-colors group"
          >
            Explore Our Full Capabilities
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </Section>
  );
}
