'use client';

import { motion } from 'framer-motion';
import { fadeUp, stagger, viewport } from '@/_lib/motion';
import CountUp from './CountUp';

/* ---------- JSON data (values add up to 100) ---------- */
// tier: xl (15%+), lg (9–11%), md (5%), sm (2–4%) | layout: top (default), bottom, row
const SECTORS = [
  { key: 'bfsi', label: 'BFSI', value: 29, tier: 'xl', layout: 'bottom' },
  { key: 'hr', label: 'HR', value: 11, tier: 'lg' },
  { key: 'retail', label: 'Retail', value: 10, tier: 'lg' },
  { key: 'it', label: 'IT & Allied Service', value: 9, tier: 'lg' },
  { key: 'ecommerce', label: 'Ecommerce', value: 9, tier: 'lg' },
  { key: 'consulting', label: 'Consulting', value: 5, tier: 'md' },
  { key: 'fmcg', label: 'FMCG', value: 5, tier: 'md' },
  { key: 'telecom', label: 'Telecom', value: 5, tier: 'md' },
  { key: 'logistics', label: 'Logistics', value: 5, tier: 'md' },
  { key: 'infrastructure', label: 'Infrastructure', value: 4, tier: 'sm' },
  { key: 'manufacturing', label: 'Manufacturing', value: 3, tier: 'sm', layout: 'row' },
  { key: 'oil', label: 'Oil & Gas', value: 3, tier: 'sm', layout: 'row' },
  { key: 'healthcare', label: 'Healthcare', value: 2, tier: 'sm', layout: 'row' },
];
const BY_KEY = Object.fromEntries(SECTORS.map((s) => [s.key, s]));

const TIERS = {
  xl: { bg: 'bg-[#43358F]', text: 'text-white', pct: 'text-5xl lg:text-[clamp(56px,6.3vw,105px)]' },
  lg: { bg: 'bg-[#604CD4]', text: 'text-white', pct: 'text-3xl lg:text-[clamp(30px,3.4vw,66px)]' },
  md: { bg: 'bg-[#9688E8]', text: 'text-[#212121]', pct: 'text-2xl lg:text-[clamp(24px,2.6vw,46px)]' },
  sm: { bg: 'bg-[#D6CFF6]', text: 'text-[#2B2160]', pct: 'text-lg lg:text-[clamp(18px,1.7vw,33px)]' },
};

const LEGEND = [
  { label: '15% and above', color: '#43358F' },
  { label: '9% – 11%', color: '#604CD4' },
  { label: '5%', color: '#9688E8' },
  { label: '2% – 4%', color: '#D6CFF6' },
];

/* ---------- Animations ---------- */
const ease = 'easeOut';
const sectionStagger = stagger(0.15);
const treeStagger = stagger(0.06);

const tileIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease } },
};
const stripesIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease } },
};
const squarePop = {
  hidden: { opacity: 0, scale: 0 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease, delay: 0.4 } },
};
const boxesIn = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease } },
};

const labelCls = 'text-[10px] font-medium uppercase tracking-wider lg:text-[11px] xl:text-[12px]';

/* ---------- One tile ---------- */
function Tile({ s, compact = false }) {
  const t = TIERS[s.tier];
  const row = s.layout === 'row';
  const bottom = s.layout === 'bottom';

  const minH = compact ? (s.key === 'bfsi' ? 'min-h-[140px]' : row ? 'min-h-[60px]' : 'min-h-[96px]') : '';

  return (
    <motion.div variants={tileIn} className={`min-h-0 ${compact && s.key === 'bfsi' ? 'col-span-2' : ''}`}>
      <div
        className={`group flex h-full w-full ${t.bg} ${t.text} ${minH} ${
          row ? 'items-center justify-between px-3 lg:px-[14px]' : 'px-3 py-3 lg:px-[18px] lg:py-[20px]'
        } ${!row && (bottom ? 'flex-col justify-end' : 'flex-col')} transition-[filter] duration-300 hover:brightness-110`}
      >
        <span className={labelCls}>{s.label}</span>
        <span
          className={`${t.pct} font-light leading-none transition-transform duration-300 group-hover:scale-105 ${
            row ? 'origin-right' : 'origin-left'
          } ${row ? '' : bottom ? 'mt-3' : 'mt-2 lg:mt-3'}`}
        >
          <CountUp to={s.value} suffix="%" />
        </span>
      </div>
    </motion.div>
  );
}

export default function SectorPlacements() {
  const sorted = [...SECTORS].sort((a, b) => b.value - a.value);
  const top = sorted.slice(0, 3);

  return (
    <motion.section
      variants={sectionStagger}
      initial="hidden"
      animate="visible"
      className="relative overflow-hidden bg-white py-12 lg:pb-[98px] lg:pt-[60px]"
    >
      {/* Bottom stripes (add sector-stripes.webp) */}
      <motion.div
        aria-hidden="true"
        variants={stripesIn}
        className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[150px] bg-[url('/images/home/placements-bottom-strip-bg.svg')] bg-cover bg-bottom md:h-[180px] lg:h-[216px]"
      />

      {/* Bottom-left yellow square */}
      <motion.span
        aria-hidden="true"
        variants={squarePop}
        className="absolute bottom-0 left-0 z-10 size-8 origin-bottom-left bg-[#F5C400] lg:size-[38px]"
      />

      <div className="custom-container relative z-10">
        {/* Top-right 3x3 boxes (add sector-boxes.webp) */}
        <motion.div
          aria-hidden="true"
          variants={boxesIn}
          className="pointer-events-none absolute right-8 top-2 h-5 w-11 bg-[url('/images/home/bg-shap-1.webp')] bg-contain bg-right bg-no-repeat md:h-7 md:w-16 lg:h-[38px] lg:w-[84px]"
        />

        <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl lg:text-[44px] lg:leading-tight">
          <span className="font-light">Sector-wise </span>
          <span className="font-semibold italic">Placements</span>
        </motion.h2>

        <motion.div
          variants={fadeUp}
          className="mt-6 border border-black/10 bg-white p-5 shadow-[0_10px_40px_rgba(67,53,143,0.06)] lg:mt-[32px] lg:p-10"
        >
          {/* Header + legend */}
          <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
            <div>
              <h3 className="text-lg font-medium text-black lg:text-2xl">Sector mix</h3>
              <p className="mt-1 text-xs text-black/60 lg:text-base">
                {top[0].label} leads with {top[0].value}%, followed by {top[1].label} ({top[1].value}%) and{' '}
                {top[2].label} ({top[2].value}%)
              </p>
            </div>

            <div className="">
              <p className="text-[10px] font-medium uppercase tracking-wider text-[#424242] lg:text-[12px]">
                Tile size = share of placements
              </p>
              <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1 lg:justify-end">
                {LEGEND.map((l) => (
                  <li key={l.label} className="flex items-center gap-2 text-xs text-black/80 lg:text-[13px]">
                    <span style={{ backgroundColor: l.color }} className="size-3" />
                    {l.label}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Mobile: simple tile grid */}
          <motion.div variants={treeStagger} className="mt-6 grid grid-cols-2 gap-1.5 md:hidden">
            {sorted.map((s) => (
              <Tile key={s.key} s={s} compact />
            ))}
          </motion.div>

          {/* Tablet / desktop: treemap */}
          <motion.div
            variants={treeStagger}
            className="mt-6 hidden gap-[5px] md:grid md:aspect-[659/340] md:grid-cols-[190fr_136fr_115fr_209fr] lg:mt-[47px] lg:aspect-[659/283]"
          >
            <Tile s={BY_KEY.bfsi} />

            <div className="grid grid-rows-[147fr_133fr] gap-[5px]">
              <Tile s={BY_KEY.hr} />
              <Tile s={BY_KEY.retail} />
            </div>

            <div className="grid grid-rows-[140fr_140fr] gap-[5px]">
              <Tile s={BY_KEY.it} />
              <Tile s={BY_KEY.ecommerce} />
            </div>

            <div className="grid grid-rows-[87fr_193fr] gap-[5px]">
              <div className="grid grid-cols-2 gap-[5px]">
                <Tile s={BY_KEY.consulting} />
                <Tile s={BY_KEY.fmcg} />
              </div>

              <div className="grid grid-cols-[94fr_112fr] gap-[5px]">
                <div className="grid grid-rows-2 gap-[5px]">
                  <Tile s={BY_KEY.telecom} />
                  <Tile s={BY_KEY.logistics} />
                </div>
                <div className="grid grid-rows-[62fr_47fr_46fr_29fr] gap-[5px]">
                  <Tile s={BY_KEY.infrastructure} />
                  <Tile s={BY_KEY.manufacturing} />
                  <Tile s={BY_KEY.oil} />
                  <Tile s={BY_KEY.healthcare} />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
