import { motion } from 'framer-motion';
import { fadeLeft, fadeRight, fadeUp, stagger, viewport } from '@/_lib/motion';
import CountUp from './CountUp';

/* ---------- JSON data ---------- */
const COMPANY_MIX = [
  { label: 'MNCs', value: 55, color: '#6C4FDD' },
  { label: 'Indian MNCs', value: 49, color: '#43358F' },
  { label: 'Established SMEs', value: 10, color: '#F04B1D' },
  { label: 'Established Start-ups & Unicorns', value: 22, color: '#F0C400' },
];

/* ---------- Animations ---------- */
const ease = 'easeOut';
const sectionStagger = stagger(0.15);
const smallCards = stagger(0.12);

const cardRise = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease } },
};

export default function CompaniesBreakup() {
  return (
    <motion.section
      variants={sectionStagger}
      initial="hidden"
      animate="visible"
      className="relative overflow-hidden z-10 bg-[#43358F] bg-[url('/images/home/breakup-of-companies.webp')] bg-cover bg-center py-12 lg:pb-[100px] lg:pt-[92px]"
    >
      {/* Cyan square at the bottom-right edge */}
      <span aria-hidden="true" className="absolute -bottom-0 right-0 size-8 bg-[#0CA5E9] lg:size-10" />

      <div className="custom-container">
        <motion.h2 variants={fadeUp} className="text-3xl text-white sm:text-4xl lg:text-[48px] lg:leading-tight">
          <span className="font-light">Breakup of </span>
          <span className="font-semibold italic">Companies</span>
        </motion.h2>

        <div className="mt-8 grid gap-5 lg:mt-[36px] lg:grid-cols-[410fr_835fr] lg:items-end lg:gap-[33px]">
          {/* Left: stat cards */}
          <div className="flex flex-col gap-4 lg:gap-[22px]">
            <motion.div
              variants={fadeLeft}
              className="relative flex min-h-[240px] flex-col justify-end bg-[#F0668F] p-6 text-white lg:h-[384px] lg:p-[42px]"
            >
              <span
                aria-hidden="true"
                className="absolute left-5 top-5 size-3 bg-[#F0C400] lg:left-9 lg:top-9 lg:size-[14px]"
              />
              <p className="text-[10px] uppercase tracking-wider text-white/80 lg:text-xs">Past Year</p>
              <p className="mt-2 text-6xl font-light leading-none lg:text-[112px]">
                <CountUp to={263} suffix="+" />
              </p>
              <p className="mt-4 text-lg font-semibold lg:text-[22px]">Companies Recruited</p>
              <p className="mt-1 text-sm text-white/80 lg:text-[16px]">On &amp; Off Campus</p>
            </motion.div>

            <motion.div variants={smallCards} className="grid grid-cols-2 gap-4 lg:gap-[22px]">
              {[
                { square: '#4CC3F0', to: 55, suffix: '%+', label: 'New Recruiters' },
                { square: '#F04B1D', to: 48, suffix: '+', label: 'Roles Offered' },
              ].map((c) => (
                <motion.div
                  key={c.label}
                  variants={cardRise}
                  className="relative bg-white px-4 pb-6 pt-12 lg:h-[198px] lg:px-[26px] lg:pb-0 lg:pt-[60px]"
                >
                  <span
                    aria-hidden="true"
                    style={{ backgroundColor: c.square }}
                    className="absolute left-4 top-4 size-3 lg:left-6 lg:top-6 lg:size-[14px]"
                  />
                  <p className="text-[10px] uppercase tracking-wider text-black/50 lg:text-[12px]">Past Year</p>
                  <p className="mt-1 text-3xl  font-light leading-none text-[#212121] lg:text-[56px]">
                    <CountUp to={c.to} suffix={c.suffix} />
                  </p>
                  <p className="mt-2 text-xs font-medium text-black lg:text-[16px]">{c.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right: company mix bars */}
          <motion.div variants={fadeRight} className="bg-white p-6 lg:p-[44px]">
            <h3 className="text-lg font-medium text-black lg:text-[24spx]">Company mix</h3>
            <p className="mt-1 text-xs text-black/60 lg:text-[16px]">
              Share of recruiting companies by type, each shown against 100%.
            </p>

            <ul className="mt-[28px] space-y-6 lg:mt-[36px] lg:space-y-8">
              {COMPANY_MIX.map((c, i) => (
                <li key={c.label}>
                  <div className="flex items-end justify-between gap-4">
                    <span className="text-sm text-black lg:text-[18px]">{c.label}</span>
                    <CountUp
                      to={c.value}
                      suffix="%"
                      className="text-2xl font-light leading-none text-black lg:text-[36px]"
                    />
                  </div>
                  <div className="mt-2 h-3 bg-[#EDEBFA] lg:mt-3 lg:h-[20px]">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${c.value}%` }}
                      viewport={{ once: true, amount: 0.6 }}
                      transition={{ duration: 1.2, ease, delay: 0.2 + i * 0.15 }}
                      style={{ backgroundColor: c.color }}
                      className="h-full"
                    />
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex justify-between border-t border-black/10 pt-2 text-[10px] text-black/50 lg:mt-8 lg:text-xs">
              {['0%', '25%', '50%', '75%', '100%'].map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
