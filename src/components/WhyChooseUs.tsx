"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Users2, ShieldCheck, Wrench, HeartHandshake } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";

const reasons = [
  {
    icon: Users2,
    title: "Experienced Team",
    description:
      "Our team of certified professionals brings decades of combined experience in facility management and engineering.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable Service Delivery",
    description:
      "We pride ourselves on prompt, dependable service that keeps your operations running smoothly without interruption.",
  },
  {
    icon: Wrench,
    title: "Modern Technical Expertise",
    description:
      "Equipped with the latest tools, training, and methodologies for advanced technical troubleshooting and maintenance.",
  },
  {
    icon: HeartHandshake,
    title: "Client-Focused Approach",
    description:
      "We believe in building long-term partnerships through transparent communication and customized solutions.",
  },
];

export function WhyChooseUs() {
  return (
    <Section variant="lightOrange" className="relative overflow-hidden">
      {/* Subtle decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-brand-orange/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-brand-orange/5 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeader
              eyebrow="Our Value Proposition"
              title="Why Choose Luckstar Ventures?"
            />
            <div className="space-y-6 md:space-y-8">
              {reasons.map((reason, index) => {
                const Icon = reason.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0 mt-1">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-sm border border-brand-orange/20 text-brand-orange">
                        <Icon className="w-6 h-6" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-brand-navy mb-2">
                        {reason.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                        {reason.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl relative aspect-[4/5] md:aspect-[3/4]">
              <Image
                src="/team-inspection.png"
                alt="Luckstar team inspecting a commercial building"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-brand-orange/5 mix-blend-overlay z-10" />
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 z-20 bg-white/95 backdrop-blur-sm p-4 sm:p-6 rounded-2xl shadow-lg border border-white/20">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-2xl sm:text-3xl font-bold text-brand-navy mb-1">
                      100%
                    </p>
                    <p className="text-brand-orange font-medium text-sm sm:text-base">
                      Client Satisfaction
                    </p>
                  </div>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-brand-light rounded-full flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-brand-orange" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
