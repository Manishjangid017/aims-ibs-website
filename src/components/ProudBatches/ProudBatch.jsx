"use client";

import Image from "next/image";
import { motion, MotionConfig } from "framer-motion";

const BATCHES = [
  {
    year: 2013,
    title: "The Originators",
    description:
      "The ones who laid the foundation with fresh ideas and a pioneering spirit.",
  },
  {
    year: 2014,
    title: "Game changers",
    description:
      "This batch brought transformative thinking that reshaped norms and introduced new possibilities.",
  },
  {
    year: 2015,
    title: "Gladiators",
    description:
      "They demonstrated strength, resilience, and determination in every challenge they faced.",
  },
  {
    year: 2016,
    title: "Titans",
    description:
      "A batch known for its exceptional power, influence, and commanding presence in all endeavors.",
  },
  {
    year: 2017,
    title: "Pathbreakers",
    description:
      "The Batch boldly forged new routes where none existed, setting directions for others to follow.",
  },
  {
    year: 2018,
    title: "Crusaders",
    description:
      "Driven by purpose and conviction, Batch pursued their goals with unwavering dedication.",
  },
  {
    year: 2019,
    title: "Trendsetters",
    description:
      "This batch consistently introduced fresh perspectives and set standards that others admired.",
  },
  {
    year: 2020,
    title: "Dream chasers",
    description:
      "They pursued their aspirations with courage, creativity, and unshakable ambition.",
  },
  {
    year: 2021,
    title: "Galvanizers",
    description:
      "A group that inspired, energized, and motivated those around them to achieve more.",
  },
  {
    year: 2022,
    title: "Bellwethers",
    description:
      "Recognized as natural leaders, they guided others through their foresight and influence.",
  },
  {
    year: 2023,
    title: "Trailblazers",
    description:
      "They led the way with innovative ideas and fearless initiatives in every sphere.",
  },
  {
    year: 2024,
    title: "Prodigies",
    description:
      "A batch marked by exceptional talent, intelligence, and remarkable potential at an early stage.",
  },
].map((b, i) => ({
  ...b,
  img: `images/batches/image_39${i === 0 ? "" : `-${i}`}.webp`,
}));

const INTRO =
  "AIMS IBS's each Graduating Batch represents a distinguished chapter in the enduring legacy of our institution. Here, presenting our Batches with pride, we acknowledge our students' accomplishments, academic excellence, and exemplary behavior. As testaments to the values and commitment to learning we uphold at AIMS IBS, These Batches will inspire future cohorts to strive for excellence with integrity and purpose.";

const CARD_BGS = [
  "images/batches/Container.webp",
  "images/batches/Container-1.webp",
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
  const { year, title, description, img } = batch;
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
      <div className="relative z-10 flex flex-1 flex-col gap-[24px] md:gap-[38px] p-8 lg:p-[40px]">
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
              src={process.env.IMG_PATH + img}
              alt={`${title} - Batch of ${year}`}
              fill
              sizes="(min-width: 1024px) 20vw, (min-width: 640px) 40vw, 90vw"
              className="object-cover object-center"
              unoptimized
            />
          </motion.div>
        </motion.div>

        <div>
          {/* Year badge */}
          <motion.span
            variants={textVariants}
            className="inline-block w-fit bg-white px-2 py-[2px] text-[16px] font-light leading-tight text-black md:text-[20px] tracking-[-0.4px] lg:tracking-[-0.8px]"
          >
            {year}
          </motion.span>

          {/* Title */}
          <motion.h3
            variants={textVariants}
            className="mt-2 text-[20px] font-medium leading-snug text-white md:text-[24px]"
          >
            {title}
          </motion.h3>

          {/* Description */}
          <motion.p
            variants={textVariants}
            className="mt-1 text-[14px] text-white md:text-[16px]"
          >
            {description}
          </motion.p>
        </div>
      </div>
    </motion.article>
  );
}

/* ─────────────────────────────────────────────
   Main Component
───────────────────────────────────────────── */
export default function ProudBatch() {
  return (
    // reducedMotion="user" → animations are skipped for users who prefer reduced motion
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
          className="pointer-events-none absolute bottom-0 left-0 h-6 w-6 lg:h-[40px] lg:w-[40px]"
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
              className="text-[30px] leading-tight text-black lg:text-[34px] xl:text-[48px]"
            >
              Proud <span className="font-bold italic">Batches</span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-3 text-[14px] text-black md:text-[14px] lg:text-[16px]"
            >
              {INTRO}
            </motion.p>
          </motion.div>

          {/* Cards grid — plain div, every card animates on its own scroll trigger */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {BATCHES.map((batch, i) => (
              <BatchCard key={batch.year} batch={batch} index={i} />
            ))}
          </div>
        </div>
      </section>
    </MotionConfig>
  );
}
