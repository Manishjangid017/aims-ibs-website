"use client";

import Image from "next/image";
import { motion } from "framer-motion";

/* ── Motion variants ─────────────────────────────────────── */
const ease = [0.22, 1, 0.36, 1];

const sectionVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

// Student photo: rises up + fades in
const photoVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease } },
};

// Right content block: slides in from right
const contentVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.85,
      ease,
      delay: 0.2,
      when: "beforeChildren",
      staggerChildren: 0.13,
    },
  },
};

// Each text child: fade + rise
const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// Logo circle: scale in
const logoVariants = {
  hidden: { opacity: 0, scale: 0.7 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.65, ease: "backOut", delay: 0.35 },
  },
};

// Dot grid shape
const shapeVariants = {
  hidden: { opacity: 0, scale: 0.6 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "backOut", delay: 0.45 },
  },
};

// Stacked squares — slide in from left, staggered
const squareVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: "easeOut", delay: 0.4 + i * 0.08 },
  }),
};

/* ── Component ───────────────────────────────────────────── */
export default function AcademicExcellence() {
  return (
    /* ── OUTER: white background with padding ── */
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      className="bg-[#43358F] py-[60px] md:py-[80px] relative overflow-hidden"
    >
      {/* ── Top-right orange dot grid ── */}
      <motion.div
        variants={shapeVariants}
        aria-hidden="true"
        className="pointer-events-none absolute right-5 top-5
                       w-[48px] h-[35px]
                       sm:right-8 sm:top-7 sm:w-[65px]
                       lg:right-12 lg:top-8 lg:w-[82px] "
      >
        <Image
          src={process.env.IMG_PATH + "images/ranking/Group_157.webp"}
          alt=""
          fill
          className="object-contain"
          unoptimized
        />
      </motion.div>

      {/* ── Bottom-left stacked purple squares (step pattern) ── */}
      <motion.span
        variants={squareVariants}
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 h-10 w-6 bg-[#9080EE]
                          lg:h-[100px] lg:w-[50px]"
      />
      <motion.span
        variants={squareVariants}
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 h-5 w-12 bg-[#9080EE]
                          lg:h-[50px] lg:w-[100px]"
      />

      {/* ── Inner layout: photo left + content right — capped at 1280px ── */}
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col lg:flex-row flex items-center justify-center">
          {/* LEFT — student photo, overflows upward on desktop */}
          <motion.div
            variants={photoVariants}
            className="relative w-[90%] md:w-[48%] flex items-center justify-center 
              "
          >
            <div className="w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px] md:px-4 xl:px-0 overflow-hidden flex items-center justify-center">
              <img
                src={
                  process.env.IMG_PATH +
                  "images/accreditations/Rectangle_3466939.webp"
                }
                alt="AIMS IBS students on campus steps"
                sizes="500px"
                className="object-cover object-center"
              />
            </div>
          </motion.div>

          {/* RIGHT — text content */}
          <motion.div
            variants={contentVariants}
            className="
                relative z-10 flex-1
                px-6 py-8 sm:py-10
                lg:py-14 xl:py-16
              "
          >
            {/* Circular university logo */}
            <motion.div
              variants={logoVariants}
              className="
                  relative overflow-hidden rounded-full h-[80px] w-[80px] lg:h-[120px] lg:w-[120px]
                "
            >
              <Image
                src={
                  process.env.IMG_PATH +
                  "images/accreditations/Ellipse_827.webp"
                }
                alt="Bangalore University emblem"
                fill
                sizes="120px"
                className="object-contain"
                quality={100}
                unoptimized
              />
            </motion.div>

            {/* Heading */}
            <motion.h2
              variants={fadeUp}
              className="
                  text-[24px] leading-tight text-white
                  sm:text-[28px]
                  lg:text-[32px]
                  xl:text-[38px]
                "
            >
              <span className="block">Academic Excellence with</span>
              <span className="block font-bold italic">
                Bangalore University
              </span>
            </motion.h2>

            {/* Paragraph 1 */}
            <motion.p
              variants={fadeUp}
              className="
                  mt-5 max-w-[700px] text-[14px] leading-[1.8] text-white
                  sm:text-[15px]
                  lg:text-[16px]
                "
            >
              Our academic journey is enriched through our proud affiliation
              with Bangalore University, one of India&rsquo;s most reputed and
              multidisciplinary public universities. Recognised for its academic
              rigour, research-driven environment, and a legacy of excellence,
              Bangalore University sets the benchmark for quality education.
            </motion.p>

            {/* Paragraph 2 */}
            <motion.p
              variants={fadeUp}
              className="
                  mt-4 max-w-[700px] text-[14px] leading-[1.8] text-white
                  sm:text-[15px]
                  lg:text-[16px]
                "
            >
              This affiliation reinforces our commitment to offering globally
              relevant programs that are grounded in strong academic values and
              hold national recognition.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
