"use client";

import Image from "next/image";
import { motion } from "framer-motion";

/* ─────────────────────────────────────────────
   Data — 9 university partner cards
───────────────────────────────────────────── */
const PARTNERS = [
  {
    id: 1,
    name: "IAE Bordeaux, France",
    src: "images/accreditations/image.webp",
  },
  {
    id: 2,
    name: "Staffordshire University, UK",
    src: "images/accreditations/image-3.webp",
  },
  {
    id: 3,
    name: "IAE France",
    src: "images/accreditations/image-6.webp",
  },
  {
    id: 4,
    name: "SIM University, Singapore",
    src: "images/accreditations/image-1.webp",
  },
  {
    id: 5,
    name: "Harvard Business Publishing Education",
    src: "images/accreditations/image-4.webp",
  },
  {
    id: 6,
    name: "SHRI – Singapore Human Resources Institute",
    src: "images/accreditations/image-7.webp",
  },
  {
    id: 7,
    name: "Putra Business School, Malaysia",
    src: "images/accreditations/image-2.webp",
  },
  {
    id: 8,
    name: "University of Stirling, UK",
    src: "images/accreditations/image-5.webp",
  },
  {
    id: 9,
    name: "James Cook University, Singapore",
    src: "images/accreditations/image-8.webp",
  },
];

/* ─────────────────────────────────────────────
   Motion variants
───────────────────────────────────────────── */
const ease = [0.22, 1, 0.36, 1];

const sectionVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const headingVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 36, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease },
  },
};

const dotVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: (delay) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.45, ease: "backOut", delay },
  }),
};

/* ─────────────────────────────────────────────
   University Card
───────────────────────────────────────────── */
function PartnerCard({ name, src }) {
  return (
    <motion.div variants={cardVariants} className="group flex flex-col">
      {/* Image wrapper — clips the scale-up */}
      <div className="relative w-full overflow-hidden aspect-[16/10]">
        <Image
          src={process.env.IMG_PATH + src}
          alt={name}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="
            object-cover object-center
            transition-transform duration-700 ease-out
            group-hover:scale-110
          "
          quality={100}
          unoptimized
        />
        {/* Subtle purple overlay on hover */}
        <span
          aria-hidden="true"
          className="
            pointer-events-none absolute inset-0
            bg-brand-purple/0
            transition-colors duration-500
            group-hover:bg-brand-purple/20
          "
        />
      </div>

      {/* Name label */}
      <p
        className="
          mt-2.5 text-[14px] font-bold leading-snug text-black
          transition-colors duration-300
          group-hover:text-brand-orange  lg:text-[16px]
        "
      >
        {name}
      </p>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   Main Component
───────────────────────────────────────────── */
export default function GlobalInternational() {
  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className="relative overflow-hidden bg-white py-14 lg:py-20 xl:py-24"
    >
      {/* ── Dot / grid background ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/accreditations/Placement_No.webp')",
        }}
      />

      {/* ── Bottom-left yellow box ── */}
      <motion.span
        custom={0.3}
        variants={dotVariants}
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 h-6 w-6 bg-[#F0C300] lg:h-8 lg:w-10"
      />

      {/* ── Content ── */}
      <div className="custom-container relative z-10">
        {/* Heading */}
        <motion.h2
          variants={headingVariants}
          className="text-[28px] lg:text-[34px] xl:text-[48px] "
        >
          <span>Global Collaborations &amp; </span>
          <span className="font-bold italic">International Associations</span>
        </motion.h2>

        {/* Sub-description */}
        <motion.p
          variants={headingVariants}
          className="mt-3 max-w-[900px] text-[13px] leading-relaxed text-[#212121] sm:text-[16px] lg:text-[18px]"
        >
          Our students also gain international insights through academic
          exchange, foreign internships, and cross-border learning frameworks,
          thanks to our affiliations with:
        </motion.p>

        {/* ── 3-column grid of partner cards ── */}
        <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:mt-10 lg:grid-cols-3 lg:gap-x-7 lg:gap-y-10 xl:gap-x-8">
          {PARTNERS.map((partner) => (
            <PartnerCard key={partner.id} {...partner} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
