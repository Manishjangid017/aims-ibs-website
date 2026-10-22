'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeUp, stagger, viewport } from '@/_lib/motion';

const SECTIONS = [
  {
    id: 'visual',
    headingLight: 'Visual & Communication-',
    headingBold: 'Centric Learning',
    cards: [
      {
        title: 'TEDx Talks & Learning via Cinema',
        desc: 'Analyze powerful business lessons through curated TEDx videos and films.',
        image: 'images/about-us/visual-img-1.webp',
        imageAlt: 'TEDx sign illuminated in red on a dark stage',
      },
      {
        title: 'WAC (Written Analysis of Communication)',
        desc: 'Build persuasive business communication skills through case writing and structured reviews.',
        image: 'images/about-us/visual-img-2.webp',
        imageAlt: 'Colorful speech bubble hands illustration',
      },
    ],
  },
  {
    id: 'enrichment',
    headingLight: 'Enrichment Beyond',
    headingBold: 'the Books',
    cards: [
      {
        title: 'Weekly Club Activities',
        desc: 'Clubs for entrepreneurship, finance, marketing, analytics, and more — building student-led learning.',
        image: 'images/about-us/visual-img-3.webp',
        imageAlt: 'Students gathered for weekly club activities',
      },
      {
        title: 'Annual Mega Events',
        desc: 'Management fests, startup expos, and business simulations that promote leadership and networking.',
        image: 'images/about-us/visual-img-4.webp',
        imageAlt: 'Large group of students at an annual mega event under string lights',
      },
    ],
  },
];

const ease = 'easeOut';
const shapeTransition = { duration: 0.8, ease: 'easeInOut' };

const leftShape = {
  hidden: { top: '5%', y: '5%' },
  visible: { top: '0%', y: '0%', transition: shapeTransition },
};
const sectionStagger = stagger(0.18);
const cardsStagger = stagger(0.12);

const cardVariant = {
  hidden: { opacity: 0, y: 48, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.65, ease } },
};

function MediaCard({ card }) {
  return (
    <motion.article variants={cardVariant} className="group flex flex-col relative">
      {/* Main image */}
      <div className="relative aspect-480/360 w-full overflow-hidden">
        <Image
          src={process.env.IMG_PATH + card.image}
          alt={card.imageAlt}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          quality={100}
          unoptimized
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>

      <div className="absolute bottom-0 left-0 min-h-30 p-5 bg-white w-full max-w-125">
        <h3 className="text-[17px] font-semibold leading-snug text-[#1A1A2E] lg:text-[20px]">{card.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-[#555] lg:text-[15px]">{card.desc}</p>
      </div>
    </motion.article>
  );
}

/* ─────────────────────────────────────────────
   Main export
───────────────────────────────────────────── */
export default function VisualEnrichment() {
  return (
    <section className="relative overflow-hidden bg-white py-14 lg:py-22.5">
      <span aria-hidden="true" className="absolute bottom-0 left-0 size-8 bg-[#F5C842] lg:size-[50px]" />
      <motion.div
        aria-hidden="true"
        variants={leftShape}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="pointer-events-none absolute top-0 left-0 size-10 bg-[url('/images/about-us/bg-shap-6.webp')] bg-contain bg-left bg-no-repeat md:size-20 lg:size-25"
      />
      <div className="custom-container">
        <div className="flex flex-col gap-12 lg:gap-25">
          {SECTIONS.map((section, i) => {
            return (
              <motion.div
                key={i}
                variants={sectionStagger}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                className="relative"
                id={i}
              >
                <motion.h2
                  variants={fadeUp}
                  className="text-[24px] leading-tight text-[#1A1A2E] sm:text-[28px] lg:text-[40px]"
                >
                  <span className="block font-light">{section.headingLight}</span>
                  <span className="block font-semibold italic">{section.headingBold}</span>
                </motion.h2>
                <motion.div
                  variants={cardsStagger}
                  className="mt-9 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:mt-10 lg:gap-x-5"
                >
                  {section.cards.map((card) => (
                    <MediaCard key={card.title} card={card} />
                  ))}
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
