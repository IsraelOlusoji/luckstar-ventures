"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";

const images = [
  {
    src: "/residential-estate.png",
    alt: "Modern residential estate",
    className: "rounded-2xl shadow-lg w-full h-48 object-cover",
    width: 400,
    height: 192,
  },
  {
    src: "/photo.avif",
    alt: "Modern Architecture",
    className: "rounded-2xl shadow-lg w-full h-64 object-cover",
    width: 400,
    height: 256,
  },
  {
    src: "/photo.avif",
    alt: "Property management",
    className: "rounded-2xl shadow-lg w-full h-64 object-cover",
    width: 400,
    height: 256,
  },
  {
    src: "/photo-2.avif",
    alt: "Technical maintenance",
    className: "rounded-2xl shadow-lg w-full h-48 object-cover",
    width: 400,
    height: 256,
  },
];

export function AboutSnapshot() {
  return (
    <Section id="about" variant="white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeader
              eyebrow="Who We Are"
              title={
                <>
                  Setting the Standard in{" "}
                  <span className="text-brand-orange">Facility Management</span>
                </>
              }
            />
            <div className="space-y-5 text-gray-600 text-base sm:text-lg leading-relaxed">
              <p>
                Luckstar Ventures Limited is a premier facility management
                company recognized for our effectiveness, reliability, and
                innovation. We understand that a well-maintained facility is the
                foundation of a successful business and a thriving community.
              </p>
              <p>
                Our comprehensive solutions are strategically tailored to meet
                both the property and complex technical service needs of our
                diverse clientele. From residential estates to large-scale
                industrial plants, we bring expertise and dedication to every
                square meter we manage.
              </p>
            </div>

            {/* CTA replaces duplicate stats */}
            <div className="mt-10 pt-8 border-t border-gray-100">
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 bg-brand-navy hover:bg-brand-dark text-white font-semibold rounded-lg transition-colors duration-300 shadow-md group"
              >
                Learn More About Us
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-4 sm:pt-12">
                {/* First image visible on all screens */}
                <div className="relative w-full h-48 rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src={images[0].src}
                    alt={images[0].alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 400px"
                  />
                </div>
                <div className="hidden sm:block relative w-full h-64 rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src={images[1].src}
                    alt={images[1].alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 400px"
                  />
                </div>
              </div>
              <div className="space-y-4">
                {/* Second column first image also visible on mobile */}
                <div className="relative w-full h-64 rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src={images[2].src}
                    alt={images[2].alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 400px"
                  />
                </div>
                <div className="hidden sm:block relative w-full h-48 rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src={images[3].src}
                    alt={images[3].alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 400px"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
