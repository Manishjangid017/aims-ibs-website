"use client";

import Image from "next/image";
import { motion, MotionConfig } from "framer-motion";

const BATCHES = [
  {
    name: "Harvard Business Publishing Education",
    logo: "images/industry-relevant-certifications/image_39.webp",
  },
  {
    name: "Google",
    logo: "images/industry-relevant-certifications/image_60.webp",
  },
  {
    name: "Microsoft",
    logo: "images/industry-relevant-certifications/image_61.webp",
  },
  {
    name: "E-Cell & MakeIntern",
    logo: "images/industry-relevant-certifications/image_62.webp",
  },
  {
    name: "SAP",
    logo: "images/industry-relevant-certifications/image_63.webp",
  },
  {
    name: "Indian Institute of Materials Management",
    logo: "images/industry-relevant-certifications/image_64.webp",
  },
  {
    name: "NSE Academy (National Stock Exchange)",
    logo: "images/industry-relevant-certifications/image_65.webp",
  },
  {
    name: "National Institute of Securities Markets",
    logo: "images/industry-relevant-certifications/Container.webp",
  },
  {
    name: "Network for Information & Computer Technology",
    logo: "images/industry-relevant-certifications/image_66.webp",
  },
  {
    name: "IBM SkillsBuild",
    logo: "images/industry-relevant-certifications/image_67.webp",
  },
].map((b, i) => ({
  ...b,
  img: `images/batches/image_39${i === 0 ? "" : `-${i}`}.webp`,
}));

const CARD_BGS = [
  "images/industry-relevant-certifications/Container_.webp",
  "images/industry-relevant-certifications/Container-1.webp",
  "images/industry-relevant-certifications/Container-2.webp",
];

/* Desktop column count — used only for the left→right stagger inside a row */
const COLS = 3;

/* ─────────────────────────────────────────────
   Motion
───────────────────────────────────────────── */
const ease = [0.22, 1, 0.36, 1];

/* Each card reveals on its own as it enters the viewport */
const CARD_VIEWPORT = { once: true, amount: 0.2 };

/* Heading block */
const gridVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

/* Card (parent) — controls the stagger of everything inside it */
const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (col = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease,
      delay: col * 0.1, // left → right inside a row
      delayChildren: col * 0.1 + 0.2,
      staggerChildren: 0.12, // bg → photo → year → title → description
    },
  }),
};

const cardHover = {
  y: -8,
  transition: { duration: 0.35, ease },
};

/* Card background settles in (zoom-out) */
const bgVariants = {
  hidden: { scale: 1.15 },
  visible: { scale: 1, transition: { duration: 1.2, ease } },
};

/* Photo is revealed top → bottom */
const photoRevealVariants = {
  hidden: { clipPath: "inset(0 0 100% 0)" },
  visible: {
    clipPath: "inset(0 0 0% 0)",
    transition: { duration: 0.8, ease },
  },
};

/* Text lines inside card */
const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
};

/* Decorative corner squares */
const squareVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.45, ease: "backOut", delay: 0.3 },
  },
};

/* ─────────────────────────────────────────────
   Batch Card
───────────────────────────────────────────── */
function BatchCard({ batch, index }) {
  const { name, logo } = batch;
  const bg = CARD_BGS[index % CARD_BGS.length];

  return (
    <motion.article
      variants={cardVariants}
      custom={index % COLS}
      initial="hidden"
      whileInView="visible"
      viewport={CARD_VIEWPORT}
      whileHover={cardHover}
      className="group relative flex h-full flex-col overflow-hidden shadow-[0_4px_6px_-2px_rgba(66,77,87,0.10),0_12px_16px_-4px_rgba(66,77,87,0.15)]"
    >
      {/* Card background image */}
      <motion.div variants={bgVariants} className="absolute inset-0">
        <Image
          src={process.env.IMG_PATH + bg}
          alt=""
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover object-center"
          unoptimized
          aria-hidden="true"
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 flex flex-1 flex-col gap-[24px] md:gap-[38px] p-6 lg:p-[40px]">
        {/* Batch photo */}
        <motion.div
          variants={photoRevealVariants}
          className="relative aspect-[159/91] w-full overflow-hidden bg-white"
        >
          <motion.div
            className="absolute inset-0"
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.6, ease }}
          >
            <Image
              src={process.env.IMG_PATH + logo}
              alt={name}
              fill
              sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover object-center"
              unoptimized
            />
          </motion.div>
        </motion.div>

        <div>
          {/* Title */}
          <motion.h3
            variants={textVariants}
            className="mt-2 text-[18px] font-normal  leading-snug text-white md:text-[22px]"
          >
            {name}
          </motion.h3>
        </div>
      </div>
    </motion.article>
  );
}

export default function TrainingPartner() {
  return (
    <MotionConfig reducedMotion="user">
      <section className="relative w-full overflow-hidden bg-white">
        {/* Top-right — orange L-shape */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          aria-hidden="true"
          className="pointer-events-none absolute top-0 right-0 h-7 w-10 lg:h-[50px] lg:w-[100px]"
        >
          <motion.span
            variants={squareVariants}
            className="block h-full w-full origin-top-right bg-[#F04B1D]"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          aria-hidden="true"
          className="pointer-events-none absolute top-0 right-0 h-16 w-5 lg:h-[148px] lg:w-[50px]"
        >
          <motion.span
            variants={squareVariants}
            className="block h-full w-full origin-top-right bg-[#F04B1D]"
          />
        </motion.div>

        {/* Bottom-left — yellow square (pops in when you reach the bottom) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 right-0 h-6 w-6 lg:h-[40px] lg:w-[40px]"
        >
          <motion.span
            variants={squareVariants}
            className="block h-full w-full origin-bottom-left bg-[#F0C300]"
          />
        </motion.div>

        <div className="custom-container py-12 lg:py-16 xl:py-20">
          {/* Heading + intro */}
          <motion.div
            variants={gridVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="mb-8 lg:mb-10"
          >
            <motion.h2
              variants={fadeUp}
              className="text-[30px] leading-tight text-black text-center lg:text-[34px] xl:text-[48px]"
            >
              Training <span className="font-bold italic">Partner</span>
            </motion.h2>
          </motion.div>

          {/* Cards grid — plain div, every card animates on its own scroll trigger */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {BATCHES.map((batch, i) => (
              <BatchCard key={i} batch={batch} index={i} />
            ))}
          </div>
        </div>
      </section>
    </MotionConfig>
  );
}
