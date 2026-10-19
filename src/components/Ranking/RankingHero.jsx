'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Download } from 'lucide-react';
import { motion } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1];
const BackgroundImg = 'images/ranking/Hero_Section.webp';

/* ── Framer-motion variants ──────────────────────────────── */

// Hero image: subtle zoom-in on load
const imgVariants = {
  hidden: { scale: 1.06, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 1.4, ease: 'easeOut' } },
};

// White panel slides in from the right
const panelVariants = {
  hidden: { x: 60, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.9, ease: 'easeOut', delay: 0.25 } },
};

// Stagger wrapper for text children
const textContainerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14, delayChildren: 0.55 } },
};

// Each text child: fade + rise
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } },
};

// Decorative shape: slides in from bottom-right
const shapeVariants = {
  hidden: { opacity: 0, x: 50, y: 50 },
  visible: { opacity: 1, x: 0, y: 0, transition: { duration: 1, ease: 'easeOut', delay: 0.7 } },
};

export default function RankingHero() {
  return (
     <motion.section
      initial="hidden"
      animate="visible"
      className="relative min-h-screen w-full overflow-hidden bg-neutral-900 sm:min-h-[620px]"
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
 
      {/* ════════ SINGLE CARD — BOTTOM RIGHT ════════ */}
      <motion.div
        variants={panelVariants}
        className="absolute bottom-0 right-0 z-10 w-full overflow-hidden bg-white
                   px-6 py-8
                   sm:w-[60%] sm:px-10 sm:py-10
                   lg:w-[48%] lg:px-10 lg:py-12 xl:px-14"
      >
        {/* Decorative diamond grid (card ke bottom-right corner me) */}
        <motion.div
          variants={shapeVariants}
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 right-0 w-32 sm:w-40 lg:w-48 xl:w-56"
        >
          <img
            src={process.env.IMG_PATH + "images/home/cube-shap-2.webp"}
           alt=""
            width={500}
            height={500}
            className="h-auto w-full"
          />
        </motion.div>
 
        {/* Text content */}
        <motion.div variants={textContainerVariants} className="relative z-10">
          <motion.h1
            variants={fadeUp}
            className="text-[26px] leading-tight sm:text-[30px] lg:text-[34px] xl:text-[40px]"
          >
            <span className="block font-normal">Ranked. Respected.</span>
            <span className="block font-bold italic">Result-Oriented.</span>
          </motion.h1>
 
          <motion.p
            variants={fadeUp}
            className="mt-3  text-[14px] md:text-[16px] leading-relaxed text-black font-medium"
          >
            One of India&rsquo;s best B-Schools, with global links and
            real-world learning.
          </motion.p>
 
          <motion.div
            variants={fadeUp}
            className="my-4 md:my-6 flex flex-wrap items-center gap-3"
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
  );
}
