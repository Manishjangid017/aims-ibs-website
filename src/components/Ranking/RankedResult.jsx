'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

/* ─────────────────────────────────────────────
   Motion variants
───────────────────────────────────────────── */
const sectionVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

// Stagger children inside left block
const textContainerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13, delayChildren: 0.2 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } },
};

// Right image: zoom-in + fade
const imgVariants = {
  hidden: { opacity: 0, scale: 1.06, x: 40 },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.15 },
  },
};

// Decorative shapes
const shapeVariants = {
  hidden: { opacity: 0, scale: 0.6 },
  visible: (delay) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.55, ease: 'backOut', delay },
  }),
};

const squareVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.45, ease: 'backOut', delay: 0.5 } },
};

/* ─────────────────────────────────────────────
   Component
───────────────────────────────────────────── */
export default function RankedResult() {
  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      className="relative overflow-hidden bg-[#43358F]"
    >
      {/* ══════════════════════════════════
          Decorative shapes
      ══════════════════════════════════ */}

      {/* Top-left — orange dot grid */}
      <motion.div
        custom={0.1}
        variants={shapeVariants}
        aria-hidden="true"
        className="pointer-events-none absolute left-4 top-4 h-14 w-14
                   sm:left-6 sm:top-6 sm:h-16 sm:w-16
                   lg:left-8 lg:top-8 lg:h-20 lg:w-20"
      >
        <Image
          src={process.env.IMG_PATH + 'images/ranking/Group_159.webp'}
          alt=""
          fill
          className="object-contain"
          unoptimized
        />
      </motion.div>

      {/* Top-right — violet/light dot grid (reuse same asset, tinted via mix-blend) */}
      <motion.div
        custom={0.15}
        variants={shapeVariants}
        aria-hidden="true"
        className="pointer-events-none absolute right-4 top-4 h-14 w-14
                   sm:right-6 sm:top-6 sm:h-16 sm:w-16  lg:right-8 lg:top-8 lg:h-20 lg:w-20"
      >
        <Image
          src={process.env.IMG_PATH + 'images/ranking/Group_157.webp'}
          alt=""
          fill
          className="object-contain"
          unoptimized
        />
      </motion.div>

      {/* Bottom-right — solid orange square */}
      <motion.span
        variants={squareVariants}
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 h-10 w-7 bg-brand-orange
                   lg:h-[90px] lg:w-[60px]"
      />
      <motion.span
        variants={squareVariants}
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 h-5 w-16 bg-brand-orange
                   lg:h-[50px] lg:w-[150px]"
      />
      {/* ══════════════════════════════════
          Main two-column layout
      ══════════════════════════════════ */}
      <div className="custom-container relative z-10 py-20 xl:py-24">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-14 xl:gap-20">
          {/* ── LEFT: Text content ── */}
          <motion.div variants={textContainerVariants} className="flex-1 lg:max-w-[52%]">
            {/* Heading */}
            <motion.h2
              variants={fadeUp}
              className=" leading-tight text-white
                         text-[30px] lg:text-[34px] xl:text-[48px] "
            >
              <span className="block font-light">Ranked. Respected.</span>
              <span className="block font-bold italic">Result-Oriented.</span>
            </motion.h2>

            {/* Sub-heading */}
            <motion.p
              variants={fadeUp}
              className="mt-2 md:mt-4 text-[13px] leading-relaxed text-white
                         sm:text-[15px] xl:text-[16px] font-general-sans"
            >
              One of India&rsquo;s best B-Schools, with global links and real-world learning.
            </motion.p>

            {/* Body copy */}
            <motion.p
              variants={fadeUp}
              className="mt-3 md:mt-5 text-[13px] leading-[1.8] text-white
                         sm:text-[15px] xl:text-[16px] font-general-sans"
            >
              At AIMS IBS, over 6000 of our students are now building careers across 27 cities and 15 countries. Our
              campus has been ranked among the top B-Schools in South India, and companies trust us, with 4300+
              recruiters hiring our talent. The best part? These numbers aren&rsquo;t just stats.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className=" text-[13px] leading-[1.8] text-white 
                         sm:text-[15px] xl:text-[16px] font-general-sans"
            >
              They&rsquo;re proof that when you choose AIMS IBS, you&rsquo;re choosing a future that&rsquo;s already
              been built, and it&rsquo;s waiting for you to walk into it.
            </motion.p>
          </motion.div>

          {/* ── RIGHT: Campus / Students photo ── */}
          <motion.div variants={imgVariants} className="w-full overflow-hidden lg:flex-1">
            <div className="relative w-full overflow-hidden aspect-square">
              <Image
                src={process.env.IMG_PATH + 'images/ranking/Rectangle_3466939.webp'}
                alt="AIMS IBS students sitting on campus steps"
                fill
                sizes="(min-width: 1024px) 48vw, 100vw"
                className="object-cover object-center"
                quality={100}
                unoptimized
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
