"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { motion } from "framer-motion";
import ProudBatch from "./ProudBatch";

const ease = [0.22, 1, 0.36, 1];
const BackgroundImg = "images/batches/Hero_Section.webp";

/* ── Framer-motion variants ──────────────────────────────── */

// Hero image: subtle zoom-in on load
const imgVariants = {
  hidden: { scale: 1.06, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 1.4, ease: "easeOut" },
  },
};

// White panel slides in from the left now
const panelVariants = {
  hidden: { x: -60, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.9, ease: "easeOut", delay: 0.25 },
  },
};

// Stagger wrapper for text children
const textContainerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14, delayChildren: 0.55 } },
};

// Each text child: fade + rise
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

// Decorative shape: slides in from bottom-right
const shapeVariants = {
  hidden: { opacity: 0, x: 50, y: 50 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 1, ease: "easeOut", delay: 0.7 },
  },
};

export default function MainBatch() {
  return (
    <div>
      <motion.section
        initial="hidden"
        animate="visible"
        className="relative min-h-screen w-full overflow-hidden bg-neutral-900 sm:min-h-[640px]"
      >
        {/* ════════ FULL BACKGROUND IMAGE ════════ */}
        <motion.div variants={imgVariants} className="absolute inset-0">
          <Image
            src={BackgroundImg}
            alt="AIMS IBS campus building surrounded by trees"
            fill
            priority
            quality={100}
            unoptimized
            className="object-cover object-center"
          />
        </motion.div>

        {/* ════════ SINGLE CARD — BOTTOM LEFT ════════ */}
        <motion.div
          variants={panelVariants}
          className="absolute bottom-0 left-0 z-10 w-full overflow-hidden bg-white sm:w-[60%] lg:w-[45%]  px-6 py-8 sm:px-10 sm:py-10 lg:py-12 lg:px-20"
        >
          <motion.div
            variants={shapeVariants}
            aria-hidden="true"
            className="pointer-events-none absolute -left-[20px] -bottom-[120px] w-[200px] lg:-bottom-[250px] lg:-left-[100px] lg:w-[400px]"
          >
            <img
              src={process.env.IMG_PATH + "images/home/grident-cube-img.webp"}
              alt=""
              className="h-auto w-full object-cover"
            />
          </motion.div>

          {/* Text content - shifted to the right end using ml-auto and max-w */}
          <motion.div
            variants={textContainerVariants}
            className="relative z-10 md:ml-auto md:max-w-[70%] flex flex-col items-start"
          >
            <motion.h1
              variants={fadeUp}
              className="leading-tight text-[30px] lg:text-[34px] xl:text-[40px] "
            >
              <span className="font-normal">Proud </span>
              <span className="font-bold italic"> Batches.</span>
            </motion.h1>

            <motion.div
              variants={fadeUp}
              className="my-4 md:my-6 flex items-center justify-end gap-3"
            >
              {/* Primary — orange */}
              <Link
                href="/apply-now"
                className="inline-flex items-center gap-2 border-2 border-brand-orange bg-brand-orange
                         px-5 py-[10px] font-general-sans text-[11px] font-medium uppercase
                         tracking-widest text-white transition-colors
                         hover:border-[#d63f14] hover:bg-[#d63f14]"
              >
                Join Today
                <ArrowRight className="size-3" />
              </Link>

              {/* Secondary — outline */}
              <a
                href="/handbook.pdf"
                download
                className="inline-flex items-center gap-2 border border-black/30 bg-white
                         px-5 py-[10px] font-general-sans text-[11px] font-medium uppercase
                         tracking-widest text-black transition-colors
                         hover:border-black hover:bg-black hover:text-white"
              >
                Download Handbook
                <Download className="size-3" />
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>
      <ProudBatch />
    </div>
  );
}
