import { createRef, useEffect, useMemo, useState } from 'react';
import {
  AnimatePresence,
  animate,
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion';
import { fadeUp, stagger, viewport } from '@/_lib/motion';

const COLORS = {
  purple: '#43358F',
  yellow: '#F6C21B',
  red: '#F04B1D',
  blue: '#4CC9E9',
  pink: '#F8769A',
};

const STEPS = [
  {
    id: 'self-discovery',
    label: 'Self-Discovery & Foundation',
    title: { plain: 'Self-Discovery', accent: '& Foundation' },
    color: COLORS.purple,
    theme: 'light',
    deco: { side: 'left', color: COLORS.purple },
    programs: [
      { pid: '01', title: 'Roots to Fruits – Unique Induction Program', signature: true },
      { pid: '02', title: 'Orientation on How to Choose a Specialization' },
      { pid: '03', title: 'SWOT Analysis' },
      { pid: '04', title: 'Psychometric Assessments' },
      { pid: '05', title: 'Training on Career & Psychology' },
      { pid: '06', title: 'Personality Development' },
      { pid: '07', title: 'Aptitude Development' },
    ],
  },
  {
    id: 'academic-excellence',
    label: 'Academic Excellence & Pedagogy',
    title: { plain: 'Academic Excellence', accent: '& Pedagogy' },
    color: COLORS.yellow,
    theme: 'dark',
    deco: { side: 'right', color: COLORS.yellow },
    programs: [
      { pid: '08', title: 'Focus on Academic Excellence' },
      { pid: '09', title: '70% Practical', signature: true },
      { pid: '10', title: 'Evolutionary Pedagogy' },
      { pid: '11', title: 'Case Study-Based Projects' },
      { pid: '12', title: 'Training on New Generation Tech Skills' },
    ],
  },
  {
    id: 'industry-integration',
    label: 'Industry Integration',
    title: { plain: 'Industry', accent: 'Integration' },
    color: COLORS.red,
    theme: 'light',
    deco: { side: 'left', color: COLORS.red },
    programs: [
      { pid: '13', title: 'First of Its Kind – Industry Integrated Program', signature: true },
      { pid: '14', title: 'Industry Embedded Certificate Courses' },
      { pid: '15', title: 'Industry / Practical Exposure through Live & Capstone Projects' },
      { pid: '16', title: 'Corporate Connect Series' },
      { pid: '17', title: 'Mentoring by Corporate Experts' },
      { pid: '18', title: 'On-the-Job Training' },
      { pid: '19', title: 'Campus-2-Corporate Program' },
    ],
  },
  {
    id: 'global-exposure',
    label: 'Global & Experiential Exposure',
    title: { plain: 'Global & Experiential', accent: 'Exposure' },
    color: COLORS.blue,
    theme: 'dark',
    deco: { side: 'right', color: COLORS.blue },
    programs: [
      { pid: '20', title: 'Global Exposure & Certificate Program' },
      { pid: '21', title: 'International & Domestic Industrial Visits' },
      { pid: '22', title: 'Foreign Internship & Student Exchange Programs' },
      { pid: '23', title: 'Hollywood & Advanced e-Learning Programs' },
    ],
  },
  {
    id: 'career-readiness',
    label: 'Career Readiness',
    title: { plain: 'Career', accent: 'Readiness' },
    color: COLORS.pink,
    theme: 'light',
    deco: { side: 'left', color: COLORS.pink },
    programs: [
      { pid: '24', title: 'Employability Assessment & Training' },
      { pid: '25', title: 'GD Analysis & Training' },
      { pid: '26', title: 'Preparation for Interviews' },
    ],
  },
];

/* ======================================================================
   CONSTANTS
   ====================================================================== */
const INK = '#241B52';
const RED = COLORS.red;
const ease = 'easeOut';

// Sticky stacking sirf desktop + enough screen height par (warna lambe section atak jate hain)
const STACK =
  '[@media(min-width:1024px)_and_(min-height:700px)]:sticky ' +
  '[@media(min-width:1024px)_and_(min-height:700px)]:top-[60px] ' +
  '[@media(min-width:1024px)_and_(min-height:700px)]:min-h-[calc(100svh-60px)]';

const group = stagger(0.1);
const boxesRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease } },
};
const GAP = 2; // degrees between segments
const OUT = 2; // hover/active par segment kitna bahar jaye (svg units)
const BORDER = 1; // active segment ke aas-paas kaala (#000) border kitna mota (svg units, dono taraf)

function polar(r, deg) {
  const a = ((deg - 90) * Math.PI) / 180;
  return [50 + r * Math.cos(a), 50 + r * Math.sin(a)];
}

function arcPath(r, start, end) {
  const [x1, y1] = polar(r, start);
  const [x2, y2] = polar(r, end);
  return `M ${x1} ${y1} A ${r} ${r} 0 ${end - start > 180 ? 1 : 0} 1 ${x2} ${y2}`;
}

function Donut({
  segments,
  label,
  activeIndex = null,
  hovered = null,
  onHover,
  thickness = 16,
  disc = false,
  className = '',
  children,
}) {
  const total = segments.reduce((sum, s) => sum + s.value, 0);
  const r = 50 - thickness / 2;
  // End (circumferential) border ka angular extension — BORDER se derive kiya (radial jitna mota, ends bhi utne) aur GAP ke andar clamp kiya taaki padosi segment se overlap na ho
  const capDeg = Math.min((BORDER / 2 / r) * (180 / Math.PI), GAP / 2 - 0.15);

  let acc = 0;
  const arcs = segments.map((seg) => {
    const start = (acc / total) * 360 + GAP / 2;
    acc += seg.value;
    const end = (acc / total) * 360 - GAP / 2;
    const mid = (((start + end) / 2 - 90) * Math.PI) / 180;
    return { ...seg, start, end, d: arcPath(r, start, end), dx: Math.cos(mid), dy: Math.sin(mid) };
  });

  return (
    <div className={`relative ${className}`}>
      <svg viewBox="0 0 100 100" className="size-full overflow-visible" role="img" aria-label={label}>
        {disc && <circle cx="50" cy="50" r="50" fill="#fff" />}

        {arcs.map((a, i) => {
          const isActive = activeIndex === i;
          const isOut = hovered === i || isActive;
          return (
            <motion.g
              key={a.id}
              animate={{
                x: isOut ? a.dx * OUT : 0,
                y: isOut ? a.dy * OUT : 0,
              }}
              transition={{ type: 'spring', stiffness: 260, damping: 18 }}
            >
              {/* Active segment ke peeche kaala (#000) border — sirf sectionstep Donut me (activeIndex !== null). Arc ko dono ends par capDeg se lamba kiya hai taaki left/right (circumferential) ends par bhi border dikhe, sirf up/down (radial) nahi */}
              {isActive && (
                <path
                  d={arcPath(r, a.start - capDeg, a.end + capDeg)}
                  fill="none"
                  stroke="#000"
                  strokeWidth={thickness + BORDER}
                  strokeLinecap="butt"
                  className="pointer-events-none"
                />
              )}
              <motion.path
                d={a.d}
                fill="none"
                stroke={a.color}
                strokeWidth={thickness}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{
                  opacity: activeIndex === null || isActive ? 1 : 0.28,
                  scale: 1,
                }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.3, ease, delay: 0.15 + i * 0.18 }}
                className={onHover ? 'cursor-pointer' : undefined}
                onMouseEnter={onHover ? () => onHover(i) : undefined}
                onMouseLeave={onHover ? () => onHover(null) : undefined}
              />
            </motion.g>
          );
        })}
      </svg>

      <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center text-center">
        {children}
      </div>
    </div>
  );
}

/* ======================================================================
   SMALL PIECES
   ====================================================================== */
function CountUp({ value }) {
  const mv = useMotionValue(0);
  const text = useTransform(mv, (v) => Math.round(v));

  useEffect(() => {
    const controls = animate(mv, value, { duration: 0.6, ease });
    return () => controls.stop();
  }, [mv, value]);

  return <motion.span>{text}</motion.span>;
}

const swap = {
  initial: { opacity: 0, y: 10, scale: 0.9 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: -10, scale: 0.9 },
};

function ProgramCard({ number, program }) {
  return (
    <motion.li
      variants={fadeUp}
      className="flex min-h-[76px] items-start gap-3 border border-[#9686F0] bg-white p-4 lg:min-h-[88px] lg:gap-4 lg:p-5"
    >
      <span
        className="grid size-9 shrink-0 place-items-center text-[13px] font-semibold text-white lg:size-10 lg:text-[18px]"
        style={{ backgroundColor: program.signature ? RED : COLORS.purple }}
      >
        {program.pid}
      </span>

      <div className="min-w-0">
        <p className="text-sm font-medium leading-snug lg:text-[17px]" style={{ color: INK }}>
          {program.title}
        </p>
        {program.signature && (
          <span
            className="mt-1.5 inline-block px-2 py-1 text-[13px] font-semibold leading-none text-[#8A2A0C]"
            style={{ backgroundColor: '#FDE4D0' }}
          >
            Signature
          </span>
        )}
      </div>
    </motion.li>
  );
}

/* ======================================================================
   ONE STEP (01 – 05), sticky stack
   ====================================================================== */
function StepSection({ step, index, segments, sectionRef, nextRef }) {
  const reduce = useReducedMotion();
  const dark = step.theme === 'dark';
  const number = String(index + 1).padStart(2, '0');

  // Jab agla section upar aakar isse dhakta hai, ye halka sa peeche dab jata hai
  const { scrollYProgress } = useScroll({
    target: nextRef ?? sectionRef,
    offset: ['start end', 'start 60px'],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.55]);
  const covered = Boolean(nextRef) && !reduce;

  return (
    <section
      ref={sectionRef}
      id={`step-${number}`}
      style={{ zIndex: index + 1 }}
      className={`relative flex scroll-mt-[60px] flex-col justify-center overflow-hidden py-12 lg:py-[60px] ${STACK} ${
        dark ? 'bg-[#3F2E8F]' : 'bg-white'
      }`}
    >
      {/* Top corner accent — bottom corner agle sticky section ke rise hote hi cover ho jata tha */}
      {(index !== 4 && (
        <>
          <motion.span
            aria-hidden="true"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease }}
            style={{ backgroundColor: step.deco.color }}
            className={`absolute size-4 lg:size-[50px] ${step.deco.side === 'left' ? 'left-0 bottom-0 ' : 'right-0 bottom-0'}`}
          />
        </>
      )) || <></>}

      <motion.div style={covered ? { scale, opacity, transformOrigin: 'top center' } : undefined} className="w-full">
        <div className="custom-container">
          <motion.div variants={group} initial="hidden" whileInView="visible" viewport={viewport}>
            {/* Heading row */}
            <motion.div variants={fadeUp} className="flex items-center gap-5 lg:gap-8">
              <Donut
                segments={segments}
                activeIndex={index}
                thickness={18}
                disc
                label={`${step.label} highlighted in the 360° chart`}
                className="size-[84px] shrink-0 sm:size-[104px] lg:size-[180px]"
              >
                <span className="text-[15px] font-bold leading-none lg:text-[36px]" style={{ color: INK }}>
                  360°
                </span>
                <span className="mt-0.5 text-[7px] leading-none text-[#6E6A92] lg:text-[9px]">5 categories</span>
              </Donut>

              <div>
                <span
                  className="block text-[44px] font-semibold leading-none sm:text-[52px] lg:text-[72px]"
                  style={{ color: dark ? '#fff' : RED }}
                >
                  {number}
                </span>

                <h3
                  className={`mt-2 max-w-[340px] text-xl font-light leading-tight sm:text-2xl lg:mt-3 lg:text-[36px] ${
                    dark ? 'text-white/90' : 'text-[#2B2358]'
                  }`}
                >
                  {step.title.plain}{' '}
                  <span className={`font-semibold italic ${dark ? 'text-white' : 'text-[#3F2E8F]'}`}>
                    {step.title.accent}
                  </span>
                </h3>

                <p className={`mt-1.5 text-xs lg:text-[16px] ${dark ? 'text-white/70' : 'text-[#6E6A92]'}`}>
                  {step.programs.length} programs
                </p>
              </div>
            </motion.div>

            {/* Cards */}
            <motion.ul variants={group} className="mt-7 grid gap-3 sm:grid-cols-2 lg:mt-10 lg:grid-cols-3 lg:gap-5">
              {step.programs.map((program, i) => (
                <ProgramCard key={program.title} number={String(i + 1).padStart(2, '0')} program={program} />
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default function TrainingApproach() {
  const [hovered, setHovered] = useState(null);

  // Har step ka ref, taaki pichla step agle ko track kar sake
  const refs = useMemo(() => STEPS.map(() => createRef()), []);

  const segments = STEPS.map((s) => ({ id: s.id, value: s.programs.length, color: s.color }));
  const active = hovered !== null ? STEPS[hovered] : null;

  return (
    <>
      {/* ---------- Intro: heading + chart + legend ---------- */}
      <section className="relative overflow-hidden bg-white pb-12 pt-14 lg:pb-[90px] lg:pt-[80px]">
        <motion.div
          aria-hidden="true"
          variants={boxesRight}
          className="pointer-events-none absolute right-4 top-4 h-5 w-11 bg-[url('/images/about-us/bg-shap-1.webp')] bg-contain bg-right bg-no-repeat md:right-8 md:h-7 md:w-16 lg:right-[2%] 3xl:right-[5%] 2xl:top-[71px] 2xl:h-9 2xl:w-21"
        />
        <div className="custom-container">
          <motion.div
            variants={group}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between"
          >
            <div className="max-w-[780px]">
              <motion.h2
                variants={fadeUp}
                className="text-[32px] font-light leading-tight text-[#2B2358] sm:text-[40px] lg:text-[56px]"
              >
                360° <span className="font-semibold italic text-[#3F2E8F]">Training Approach</span>
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className="mt-3 max-w-[580px] text-sm leading-relaxed text-[#6E6A92] lg:mt-5 lg:text-[18px]"
              >
                26 programs across five pillars, from the first day of induction to the campus-to-corporate transition.
              </motion.p>
            </div>

            <motion.div variants={fadeUp} className="self-center lg:mr-6 lg:self-auto">
              <Donut
                segments={segments}
                hovered={hovered}
                onHover={setHovered}
                thickness={16}
                label="360° training approach: five categories"
                className="size-44 sm:size-62 lg:size-90"
              >
                <AnimatePresence mode="wait" initial={false}>
                  {active ? (
                    <motion.div
                      key={active.id}
                      {...swap}
                      transition={{ duration: 0.25, ease }}
                      className="flex flex-col items-center"
                    >
                      <span className="text-3xl font-bold leading-none lg:text-[72px]" style={{ color: active.color }}>
                        <CountUp value={active.programs.length} />
                      </span>
                      <span className="mt-1 text-[11px] text-[#6E6A92] lg:text-[18px]">programs</span>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="default"
                      {...swap}
                      transition={{ duration: 0.25, ease }}
                      className="flex flex-col items-center"
                    >
                      <span
                        className="text-2xl font-bold leading-none sm:text-[52px] lg:text-[72px]"
                        style={{ color: INK }}
                      >
                        360°
                      </span>
                      <span className="mt-1 text-[10px] text-[#6E6A92] lg:text-[18px]">26 programs</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Donut>
            </motion.div>
          </motion.div>

          {/* Legend */}
          <motion.div
            className="p-[2px] mt-10 lg:mt-[70px] "
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            style={{ background: 'linear-gradient(90deg, #43358F 0%, #8B7FD3 55%, #F04B1D 100%)' }}
          >
            <ul className="grid mt-[-1px] grid-cols-2 gap-x-4 bg-white gap-y-5 p-4 sm:grid-cols-3 lg:grid-cols-5 lg:gap-x-6 lg:p-6">
              {STEPS.map((step, i) => (
                <li key={step.id}>
                  <div
                    className={`flex items-start gap-2.5 transition-opacity duration-200 ${
                      hovered !== null && hovered !== i ? 'opacity-45' : 'opacity-100'
                    }`}
                  >
                    <span className="mt-1 size-2.5 shrink-0" style={{ backgroundColor: step.color }} />
                    <span className="text-xs font-semibold leading-snug lg:text-[17px]" style={{ color: INK }}>
                      {step.label}
                      <span className="mt-0.5 block text-[14px] font-normal text-[#6E6A92]">
                        {step.programs.length} programs
                      </span>
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ---------- Steps 01 – 05 (sticky stack, top 60px) ---------- */}
      <div className="relative">
        {STEPS.map((step, i) => (
          <StepSection
            key={step.id}
            step={step}
            index={i}
            segments={segments}
            sectionRef={refs[i]}
            nextRef={refs[i + 1]}
          />
        ))}
      </div>
    </>
  );
}
