'use client';

import { motion } from 'framer-motion';
import { fadeLeft, fadeRight, fadeUp, stagger, viewport } from '@/_lib/motion';
import CountUp from './CountUp';

/* ---------- JSON data ---------- */
// Bars are drawn in proportion to the figures (like the design)
// Stacked bars reveal left to right (driven by the section's hidden/visible state)
const barReveal = {
  hidden: { clipPath: 'inset(0 100% 0 0)' },
  visible: {
    clipPath: 'inset(0 0% 0 0)',
    transition: { duration: 1.2, ease: 'easeInOut', delay: 0.3 },
  },
};

const EMPLOYER = [
  { label: 'Placements in MNCs', value: 36, color: '#3F3187' },
  { label: 'Placements in Indian MNCs', value: 30, color: '#6350D4' },
  { label: 'Placements in Established Start-ups & Unicorns', value: 24, color: '#F04B1D' },
  { label: 'Placements in Established SMEs', value: 13, color: '#F0C400', dark: true },
];

const DESTINATION = [
  { label: 'National Placements', value: 82, color: '#3F3187' },
  { label: 'Higher Education & Business', value: 5, color: '#F0668F' },
  { label: 'International Placements', value: 4, color: '#0EA5E9' },
];

const SALARIES = [
  { label: 'Highest Salary', value: 14.5, color: '#F04B1D' },
  { label: 'Median Salary', value: 6.8, color: '#6350D4' },
  { label: 'Cut Off Salary', value: 4.5, color: '#D9D1F6' },
];
const MAX_SALARY = Math.max(...SALARIES.map((s) => s.value));

/* ---------- Animations ---------- */
const ease = 'easeOut';
const sectionStagger = stagger(0.15);

const squarePop = {
  hidden: { opacity: 0, scale: 0 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease, delay: 0.5 } },
};

/* ---------- Stacked bar + legend ---------- */
function StackedBar({ title, segments }) {
  return (
    <div>
      <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-black/60 lg:text-xs">{title}</p>

      {/* Revealed left to right */}
      <motion.div variants={barReveal} className="mt-2 flex h-[42px] gap-[5px] lg:mt-3 lg:h-[64px]">
        {segments.map((s) => (
          <div
            key={s.label}
            style={{ flexGrow: s.value, flexBasis: 0, backgroundColor: s.color }}
            className={`grid min-w-0 place-items-center overflow-hidden transition-[filter] duration-300 hover:brightness-110 ${
              s.dark ? 'text-black' : 'text-white'
            }`}
          >
            <span className={s.value < 8 ? 'text-[9px] font-medium lg:text-xs' : 'text-sm font-medium lg:text-[22px]'}>
              {s.value}%
            </span>
          </div>
        ))}
      </motion.div>

      <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-1.5 text-xs text-black/80 lg:mt-[16px] lg:text-[16px]">
        {segments.map((s) => (
          <li key={s.label} className="flex items-center gap-2">
            <span style={{ backgroundColor: s.color }} className="size-2.5 shrink-0" />
            <span>
              {s.label} <strong className="ml-1 font-semibold text-black">{s.value}%</strong>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function OverallPlacementRecord() {
  return (
    <motion.section
      variants={sectionStagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className="relative overflow-hidden bg-[#3B2E7E] bg-[url('/images/home/overall-perfomance-bg.webp')] bg-cover bg-center py-12 lg:pb-[100px] lg:pt-[105px]"
    >
      {/* Bottom-right pink square */}
      <motion.span
        aria-hidden="true"
        variants={squarePop}
        className="absolute bottom-0 right-0 size-8 origin-bottom-right bg-[#F0668F] lg:size-[47px]"
      />

      <div className="custom-container">
        <motion.h2 variants={fadeUp} className="text-3xl text-white sm:text-4xl lg:text-[44px] lg:leading-tight">
          <span className="font-light">Overall Placement </span>
          <span className="font-semibold italic">Record</span>
        </motion.h2>

        <div className="mt-8 grid gap-5 lg:mt-[48px] lg:grid-cols-[759fr_488fr] lg:gap-[33px]">
          {/* Placement record: two stacked bars */}
          <motion.div variants={fadeLeft} className="bg-white p-6 lg:p-[40px]">
            <h3 className="text-lg font-medium text-black lg:text-[24px]">Placement record</h3>
            <p className="mt-1 text-xs text-[#424242] lg:text-[16px]">
              Share of placements; segments are drawn in proportion to the figures shown
            </p>

            <div className="mt-6 space-y-6 lg:mt-[40px] lg:space-y-[34px]">
              <StackedBar title="By employer type" segments={EMPLOYER} />
              <StackedBar title="By destination" segments={DESTINATION} />
            </div>
          </motion.div>

          {/* Salary structure: 3 vertical bars */}
          <motion.div variants={fadeRight} className="flex flex-col bg-white p-6 lg:p-[40px]">
            <h3 className="text-lg font-medium text-black lg:text-2xl">Salary structure</h3>
            <p className="mt-1 text-xs text-black/60 lg:text-base">LPA – Lakh Per Annum</p>

            <div className="mt-8 [--bar-max:190px] lg:mt-[44px] lg:[--bar-max:260px]">
              <div className="grid grid-cols-3 items-end gap-3 lg:gap-[25px]">
                {SALARIES.map((s, i) => (
                  <div key={s.label}>
                    <p className="flex items-start gap-1 text-black">
                      <CountUp to={s.value} decimals={1} className="text-3xl font-light leading-none lg:text-[44px]" />
                      <span className="mt-0.5 text-[9px] lg:text-xs">LPA</span>
                    </p>

                    <motion.div
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true, amount: 0.6 }}
                      transition={{ duration: 0.9, ease, delay: 0.2 + i * 0.2 }}
                      style={{ height: `calc(${s.value / MAX_SALARY} * var(--bar-max))`, backgroundColor: s.color }}
                      className="mt-2 origin-bottom transition-[filter] duration-300 hover:brightness-110 lg:mt-3"
                    />

                    <p className="mt-2 text-[9px] font-medium uppercase tracking-wider text-black/70 lg:mt-3 lg:text-xs">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <p className="mt-auto border-t border-black/10 pt-4 text-xs text-black/70 lg:mt-8 lg:text-sm">
              Highest salary: On Campus &amp; Off Campus Hiring for Freshers
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
