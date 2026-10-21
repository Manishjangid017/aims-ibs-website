'use client';

import { motion } from 'framer-motion'; 
/* ─────────────────────────────────────────────
   Data
───────────────────────────────────────────── */
const ROW_1 = [
  {
    id: 'r1-1',
    rank: '#20',
    badge: 'Ranked among the',
    logo:'images/ranking/20.webp',
    title: 'Top 20 B-Schools in South India',
  },
  {
    id: 'r1-2',
    rank: '#2',
    badge: 'Ranked #2',
    logo:'images/ranking/2.webp',
    title: 'in Infrastructure (Among South Indian B-Schools)',
  },
  {
    id: 'r1-3',
    rank: '#4',
    badge: 'Ranked #4',
    logo:'images/ranking/4.webp',
    title: 'in Highest Salary Offered',
  },
];

const ROW_2 = [
  {
    id: 'r2-1',
    rank: '#4',
    badge: 'Ranked #4',
    logo:'images/ranking/4.webp',
    title: 'in Overall Ranking in South India',
  },
  {
    id: 'r2-2',
    rank: '#15',
    badge: 'Ranked #15',
    logo:'images/ranking/15.webp',
    title: 'in India for Top ROI (Return on Investment)',
  },
];

/* ─────────────────────────────────────────────
   Motion variants
───────────────────────────────────────────── */
const sectionVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const headingVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 44 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

const dotVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: (delay) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.45, ease: 'backOut', delay },
  }),
};

/* ─────────────────────────────────────────────
   RankCard
───────────────────────────────────────────── */
function RankCard({ rank, badge, title,logo }) {
  return (
    <motion.div variants={cardVariants} className="flex flex-col max-w-[200px] md:max-w-[300px] w-full">
      {/* Large rank number */}
     <img
  src={process.env.IMG_PATH + logo}
  alt={`Rank ${rank}`}
  className="h-full w-full max-h-[60px] sm:max-h-[120px] object-contain object-center sm:object-left"
/>

      {/* Small badge */}
      <span className="mt-3 block text-[14px] leading-tight text-[#212121] font-[var(--font-sans)] sm:text-[18px] text-center sm:text-start">
        {badge}
      </span>

      {/* Description */}
      <span className="mt-1 block max-w-[200px] text-[13px] text-[#212121] font-[var(--font-sans)] font-semibold leading-snug text-black sm:text-[14px] text-center sm:text-start">
        {title}
      </span>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   Main
───────────────────────────────────────────── */
export default function NationalRanking() {
  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      className="relative overflow-hidden bg-white"
    > 
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/ranking/Placement.webp')", opacity: 0.55 }}
      /> 
      <motion.span
        custom={0.3}
        variants={dotVariants}
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 h-8 w-8 bg-[#F0C300] lg:h-12 lg:w-10 aspect-square"
      />

      {/* ══════════════════════════════════════
          Content
      ══════════════════════════════════════ */}
      <div className="custom-container relative z-10 py-14 lg:py-20 xl:py-24">

        {/* Heading */}
        <motion.h2
          variants={headingVariants}
          className="mb-12 text-[var(--color-brand-black)] text-center text-[30px] lg:text-[34px] xl:text-[48px] lg:mb-16"
        >
          <span >National </span>
          <span className="font-bold italic">Rankings</span>
        </motion.h2>

        {/* Row 1 — 3 items */}
        <div className="grid grid-cols-1 gap-6 md:gap-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-6 lg:gap-y-0  justify-items-center">
          {ROW_1.map((item) => (
            <RankCard key={item.id} {...item} />
          ))}
        </div>
 
        <div className="mt-6 md:mt-12 grid grid-cols-1 gap-6 md:gap-12 sm:grid-cols-2 lg:mt-16 lg:gap-x-6 justify-items-center sm:px-24"> 
          {ROW_2.map((item) => (
            <RankCard key={item.id} {...item} />
          ))}
        </div>

      </div>
    </motion.section>
  );
}
