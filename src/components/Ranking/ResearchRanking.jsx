'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

/* ─────────────────────────────────────────────
   Data — Media & Research Ranking cards
───────────────────────────────────────────── */
const MEDIA_CARDS = [
  {
    id: 1, 
    cardBg: 'images/ranking/Container.webp',
    /* white logo panel image */
    logo: 'images/ranking/image_39.webp',
    logoAlt: 'BW BusinessWorld logo',
    badge: 'Ranked AIMS IBS among the',
    title: 'Top 3 Emerging B-Schools in India – Business World',
  },
  {
    id: 2,
    cardBg: 'images/ranking/Container-1.webp',
    logo: 'images/ranking/Container-2.webp',
    logoAlt: 'India Today logo',
    badge: 'Recognised AIMS IBS as one of the',
    title: 'Best Business Schools in South India – India Today',
  },
  {
    id: 3,
    cardBg: 'images/ranking/Container-3.webp',
    logo: 'images/ranking/Container-4.webp',
    logoAlt: 'Business Standard logo',
    badge: 'Featured in Top MBA Institution lists',
    title: 'The Week & Business Standard',
  },
];

/* ─────────────────────────────────────────────
   Data — International & Industry Partnership cards
───────────────────────────────────────────── */
const PARTNER_CARDS = [
  {
    id: 1,
    icon: 'images/ranking/Group 160.webp',
    iconAlt: 'Academic tie-ups icon',
    text: 'Strong academic tie-ups and international exposure program',
  },
  {
    id: 2,
    icon: 'images/ranking/Group 161.webp',
    iconAlt: 'Industry collaboration icon',
    text: 'Collaboration with 90+ industry experts and 4300+ recruiters',
  },
];

/* ─────────────────────────────────────────────
   Framer-motion variants
───────────────────────────────────────────── */
const sectionVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const headingVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

const partnerCardVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const squareVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'backOut', delay: 0.4 } },
};

/* ─────────────────────────────────────────────
   Media Card Component
───────────────────────────────────────────── */
function MediaCard({ cardBg, logo, logoAlt, badge, title }) {
  return (
    <motion.article
      variants={cardVariants}
      className="group relative flex flex-col overflow-hidden"
    >
      {/* Full card background image */}
      <div className="relative aspect-[200/150] md:aspect-[245/240] w-full overflow-hidden">
        <Image
          src={process.env.IMG_PATH + cardBg}
          alt=""
          aria-hidden="true"
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          quality={100}
          unoptimized
        />

        {/* White logo panel — top portion */}
        <div className="bg-white w-full p-8 sm:p-10 lg:p-12"
          style={{ height: '60%' }}
        >
          <div className="relative h-full w-full">
            <Image
              src={process.env.IMG_PATH + logo}
              alt={logoAlt}
              fill
              sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
              className="object-contain"
              quality={100}
              unoptimized
            />
          </div>
        </div>

        {/* Bottom text */}
        <div className="relative px-8 pb-8 sm:px-10 sm:pb-10 lg:px-12 lg:pb-12">
          <p className="text-[12px] text-white sm:text-[14px] text-center md:text-start">{badge}</p>
          <p className="mt-1 text-[16px] font-semibold leading-snug text-white sm:text-[20px] lg:text-[24px] text-center md:text-start">
            {title}
          </p>
        </div>
      </div>
    </motion.article>
  );
}

/* ─────────────────────────────────────────────
   Partner Card Component
───────────────────────────────────────────── */
function PartnerCard({ icon, iconAlt, text }) {
  return (
    <motion.div
      variants={partnerCardVariants}
      className="flex items-center gap-4 border border-[#000000] bg-white px-5 py-4 shadow-sm
                 sm:gap-5 sm:px-6 sm:py-5"
    >
      {/* Left orange accent line */}
      {/* <span aria-hidden="true" className="h-full w-1 shrink-0 self-stretch bg-brand-orange rounded-full" /> */}

      {/* Icon */}
      <div className="relative h-10 w-10 shrink-0 sm:h-11 sm:w-11">
        <Image
          src={process.env.IMG_PATH + icon}
          alt={iconAlt}
          fill
          sizes="44px"
          className="object-contain"
          quality={100}
          unoptimized
        />
      </div>

      {/* Text */}
      <p className="text-[13px] font-medium leading-snug text-black sm:text-[15px] lg:text-[17px]">{text}</p>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   Main Component
───────────────────────────────────────────── */
export default function ResearchRanking() {
  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className="relative overflow-hidden bg-white py-14 lg:py-20 xl:py-24"
    >

      {/* ── Bottom-right cyan square accent ── */}
      <motion.span
        variants={squareVariants}
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 md:-right-[30px] h-7 w-7 bg-[#00A4EF] lg:h-10 lg:w-10"
      />

      <div className="custom-container relative z-10">

        {/* ══════════════════════════════════
            Block 1 — Credible Media & Research Rankings
        ══════════════════════════════════ */}
        <motion.h2
          variants={headingVariants}
          className="text-center text-[28px] lg:text-[34px] xl:text-[48px] "
        >
          <span >Credible Media &amp; </span>
          <span className="font-bold italic">Research Rankings</span>
        </motion.h2>

        {/* 3 media cards */}
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-10 lg:grid-cols-3 lg:gap-6 xl:gap-7">
          {MEDIA_CARDS.map((card) => (
            <MediaCard key={card.id} {...card} />
          ))}
        </div>

        {/* ══════════════════════════════════
            Block 2 — International & Industry Partnerships
        ══════════════════════════════════ */}
        <motion.h2
          variants={headingVariants}
          className="mt-16 text-center lg:mt-20 text-[28px] lg:text-[34px] xl:text-[48px] "
        >
          <span >International &amp; </span>
          <span className="font-bold italic">Industry Partnerships</span>
        </motion.h2>

        {/* 2 partner cards */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-10 lg:gap-[60px]">
          {PARTNER_CARDS.map((card) => (
            <PartnerCard key={card.id} {...card} />
          ))}
        </div>

      </div>
    </motion.section>
  );
}
