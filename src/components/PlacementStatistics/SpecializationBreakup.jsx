import { motion } from 'framer-motion';
import { fadeLeft, fadeRight, fadeUp, stagger, viewport } from '@/_lib/motion';
import CountUp from './CountUp';

/* ---------- JSON data (values add up to 100, order = clockwise from the top) ---------- */
const SPECS = [
  { name: 'Sales & Marketing', value: 45, color: '#43358F' },
  { name: 'Finance', value: 40, color: '#6C4FDD' },
  { name: 'HRM', value: 9, color: '#F04B1D' },
  { name: 'Logistics & Supplychain', value: 4, color: '#0EA5E9' },
  { name: 'Health Care', value: 2, color: '#F0C400' },
];
const ease = 'easeOut';
const shapeTop = {
  hidden: { opacity: 0, y: -60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease } },
};

/* ---------- Donut geometry ---------- */
const R = 80;
const C = 2 * Math.PI * R;
const ARCS = SPECS.reduce((acc, s) => {
  const start = acc.length ? acc[acc.length - 1].end : 0;
  const len = (s.value / 100) * C;
  return [...acc, { ...s, start, end: start + len, len }];
}, []);
const largest = SPECS.reduce((a, b) => (b.value > a.value ? b : a));

/* ---------- Animations ---------- */
const sectionStagger = stagger(0.15);
const listStagger = stagger(0.1);

export default function SpecializationBreakup() {
  return (
    <motion.section
      variants={sectionStagger}
      initial="hidden"
      animate="visible"
      className="relative overflow-hidden bg-white py-12 lg:pb-[100px] lg:pt-[95px]"
    >
      <motion.div
        aria-hidden="true"
        variants={shapeTop}
        className="pointer-events-none absolute left-0 top-0 h-[50px] w-[55px] bg-[url('/images/home/red-shap-left-.svg')] bg-contain bg-left-top bg-no-repeat md:h-[65px] md:w-[72px] lg:h-[82px] lg:w-[90px]"
      />
      <div className="custom-container">
        <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl lg:text-[48px] lg:leading-tight">
          <span className="font-light">Placement Breakup </span>
          <span className="font-semibold italic">(Specializations wise)</span>
        </motion.h2>
        <div className="mt-8 grid gap-5 lg:mt-[36px] lg:grid-cols-[520fr_729fr] lg:gap-[26px]">
          {/* Left: donut */}
          <motion.div variants={fadeLeft} className="bg-[#E8F4F3] p-6 lg:p-[38px]">
            <h3 className="text-lg font-semibold text-black lg:text-[22px]">Specialization share</h3>
            <p className="mt-1 text-xs text-black/60 lg:text-[15px]">
              Share of placements by specialization, totaling 100%.
            </p>

            <div className="relative mx-auto mt-6 aspect-square w-[220px] lg:mt-8 lg:w-[440px]">
              <svg
                viewBox="0 0 200 200"
                className="size-full -rotate-90"
                role="img"
                aria-label="Placements by specialization"
              >
                <circle cx="100" cy="100" r={R} fill="none" stroke="#FFFFFF" strokeOpacity="0.6" strokeWidth="30" />
                {ARCS.map((a, i) => {
                  const len = Math.max(a.len - 1.5, 0);
                  return (
                    <motion.circle
                      key={a.name}
                      cx="100"
                      cy="100"
                      r={R}
                      fill="none"
                      stroke={a.color}
                      strokeWidth="30"
                      strokeDashoffset={-a.start}
                      initial={{ strokeDasharray: `0 ${C}` }}
                      whileInView={{ strokeDasharray: `${len} ${C - len}` }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 + i * 0.25 }}
                    />
                  );
                })}
              </svg>

              {/* Center label */}
              <div className="absolute inset-0 grid place-items-center text-center">
                <div>
                  <p className="text-[9px] font-medium uppercase tracking-wider text-black/50 lg:text-[12px]">
                    Largest share
                  </p>
                  <p className="text-4xl font-light leading-tight text-[#212121] lg:text-[80px]">
                    <CountUp to={largest.value} suffix="%" />
                  </p>
                  <p className="text-xs text-[#43358F] lg:text-[18px]">{largest.name}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: list with bars */}
          <motion.div variants={fadeRight} className="border border-black/10 bg-white p-6 lg:px-[44px] lg:py-[40px]">
            <motion.ul variants={listStagger} className="flex h-full flex-col justify-between gap-6">
              {SPECS.map((s, i) => (
                <motion.li key={s.name} variants={fadeUp}>
                  <div className="flex items-center justify-between gap-4">
                    <span className="flex items-center gap-3 text-sm text-black lg:text-[20px]">
                      <span style={{ backgroundColor: s.color }} className="size-2.5 shrink-0" />
                      {s.name}
                    </span>
                    <CountUp
                      to={s.value}
                      suffix="%"
                      className="text-2xl font-light leading-none text-black lg:text-[40px]"
                    />
                  </div>
                  <div className="mt-2 h-[8px] bg-[#EDEBFA] lg:mt-3">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.value}%` }}
                      viewport={{ once: true, amount: 0.6 }}
                      transition={{ duration: 1.1, ease: 'easeOut', delay: 0.2 + i * 0.12 }}
                      style={{ backgroundColor: s.color }}
                      className="h-full"
                    />
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
