'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeLeft, fadeRight, fadeUp, stagger, viewport } from '@/_lib/motion';

/* ---------- JSON data ---------- */
const ELIGIBILITY = [
  'Graduates with 50% score (3 years program) from any discipline are eligible to apply.',
  'Students awaiting final year/semester results can also apply. (However, such students will be given provisional admission subject to the submission of their final marks sheet).',
];

// body items: a string, an array of { text, href? } parts, or { text, highlight: true }
// panel: { side: 'right' | 'bottom', title?, columns: [[...], [...]] }
const STAGES = [
  {
    no: '01',
    stage: 'Stage One',
    title: 'Applying To AIMS IBS',
    tone: 'light',
    body: [
      [{ text: 'Candidates can ' }, { text: 'Apply Online', href: '/apply-now' }],
      'Download the Application form and send the filled application along with necessary documents to AIMS IBS Bangalore',
    ],
  },
  {
    no: '02',
    stage: 'Stage Two',
    title: 'Assessment',
    tone: 'dark',
    body: [[{ text: 'Click Here', href: '/assessment' }, { text: ' to assess yourself!' }]],
  },
  {
    no: '03',
    stage: 'Stage Three',
    title: 'Written Test',
    tone: 'light',
    body: [
      'Successful candidates who pass the AIMS IBS Written Test will be eligible for admissions. Candidates who have appeared for any of the entrance tests of the national or state level, for example, CAT, CMAT, MAT, XAT, KMAT, PGCET, etc are exempted from the AIMS IBS entrance test.',
    ],
  },
  {
    no: '04',
    stage: 'Stage Four',
    title: 'Interview',
    tone: 'dark',
    className: 'lg:col-span-2',
    body: [
      'Those candidates who clear the written test or fulfill the test requirements will qualify for Interview. The interviews will be scheduled by the admissions department and the information will be sent to shortlisted students.',
    ],
    panel: {
      side: 'right',
      title: 'The selection of the candidate for the program is based on:',
      columns: [
        [
          'Academic performance',
          'Test scores',
          'Interview Performance',
          'Work experience if any',
          'Commitment to the course',
          'Co-curricular achievements and awards',
        ],
      ],
    },
  },
  {
    no: '05',
    stage: 'Stage Five',
    title: 'Admission & Offer Letter',
    tone: 'light',
    body: [
      'The selected students will be updated with the result and such students will get Provisional Admission Offer from AIMS IBS',
    ],
  },
  {
    no: '06',
    stage: 'Stage Six',
    title: 'Admission Confirmation',
    tone: 'dark',
    body: [
      'Those students who will get Provisional Admission offer will get 2 to 3 weeks time to confirm admission by remitting Admission / Registration Charges.',
      {
        text: 'Please note the registration fees once paid is nonrefundable and non adjustable under any circumstances.',
        highlight: true,
      },
    ],
  },
  {
    no: '07',
    stage: 'Stage Seven',
    title: 'Original Documents to be submitted',
    tone: 'light',
    className: 'md:col-span-2',
    panel: {
      side: 'bottom',
      columns: [
        [
          '10th and 12th Marks sheets',
          'Graduation Marks sheets (All the Semesters / Years)',
          'Transfer Certificate (TC)',
          'Migration Certificate',
        ],
        [
          'Provisional Degree Certificate (PDC)',
          'Entrance Exam Scorecard (CMAT / CAT / GMAT / IIFT / XAT / MAT / ATMA / KMAT / PGCET)',
          'Caste Certificate / Income Certificate (If claiming any exemption)',
          '6 Passport Size photographs',
        ],
      ],
    },
  },
];

// Card background images (you add these)
const TONES = {
  light: "bg-[#6A5BDB] bg-[url('/images/home/card-bg-3.webp')]",
  dark: "bg-[#4A3D98] bg-[url('/images/home/card-bg-4.webp')]",
};

/* ---------- Animations ---------- */
const ease = 'easeOut';
const headStagger = stagger(0.12);
const cardViewport = { once: true, amount: 0.2 };

const cardVariant = {
  hidden: { opacity: 0, y: 50, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease, when: 'beforeChildren', staggerChildren: 0.1 },
  },
};

const numberIn = {
  hidden: { opacity: 0, y: -20, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease } },
};

/* ---------- Paragraph (plain, with links, or highlighted) ---------- */
function Para({ item }) {
  const parts = typeof item === 'string' ? [{ text: item }] : Array.isArray(item) ? item : [item];
  const highlight = !Array.isArray(item) && typeof item === 'object' && item.highlight;

  return (
    <p
      className={`text-sm leading-[1.65] lg:text-[16px] ${highlight ? 'font-medium text-[#FFE680]' : 'text-white/90'}`}
    >
      {parts.map((p, i) =>
        p.href ? (
          <Link
            key={i}
            href={p.href}
            className="underline underline-offset-2 transition-colors hover:text-brand-orange"
          >
            {p.text}
          </Link>
        ) : (
          <span key={i}>{p.text}</span>
        ),
      )}
    </p>
  );
}

/* ---------- Translucent panel with orange square bullets ---------- */
function Panel({ panel, className = '' }) {
  return (
    <div className={`bg-white/15 p-5 lg:px-[26px] lg:py-[28px] ${className}`}>
      {panel.title && (
        <p className="mb-5 text-sm font-medium leading-snug text-white lg:mb-6 lg:text-[15px]">{panel.title}</p>
      )}
      <div className={`grid gap-x-8 gap-y-3.5 ${panel.columns.length > 1 ? 'md:grid-cols-2' : ''}`}>
        {panel.columns.map((col, ci) => (
          <ul key={ci} className="space-y-3.5">
            {col.map((text) => (
              <li key={text} className="flex items-start gap-3 text-sm leading-snug text-white/90 lg:text-[14.5px]">
                <span className="mt-[0.45em] size-1.5 shrink-0 bg-brand-orange lg:size-2" />
                <span>{text}</span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}

/* ---------- One stage card ---------- */
function StageCard({ s }) {
  const panelRight = s.panel?.side === 'right';
  const panelBottom = s.panel?.side === 'bottom';

  return (
    <motion.li
      variants={cardVariant}
      initial="hidden"
      whileInView="visible"
      viewport={cardViewport}
      className={s.className ?? ''}
    >
      <article
        className={`relative h-full overflow-hidden bg-cover bg-center text-white transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(43,32,110,0.35)] ${TONES[s.tone]}`}
      >
        <div className={`h-full ${panelRight ? 'lg:grid lg:grid-cols-[48fr_52fr]' : ''}`}>
          <div className="relative px-6 pb-8 pt-7 sm:px-8 lg:px-[40px] lg:pb-[48px] lg:pt-[44px]">
            {/* Big number, top right */}
            <motion.span
              variants={numberIn}
              className="absolute right-5 top-4 text-5xl font-light leading-none sm:right-8 lg:top-[16px] lg:text-[72px]"
            >
              {s.no}
            </motion.span>

            <motion.span
              variants={fadeLeft}
              className="inline-block bg-white px-3 py-1.5 text-xs text-black lg:text-[20px]"
            >
              {s.stage}
            </motion.span>

            <motion.h3 variants={fadeUp} className="mt-6 pr-16 text-xl lg:mt-[34px] lg:pr-0 lg:text-[24px]">
              {s.title}
            </motion.h3>

            {s.body && (
              <motion.div variants={fadeUp} className="mt-3 space-y-3 lg:mt-5">
                {s.body.map((item, i) => (
                  <Para key={i} item={item} />
                ))}
              </motion.div>
            )}

            {panelBottom && (
              <motion.div variants={fadeUp} className="mt-4 lg:mt-[24px]">
                <Panel panel={s.panel} />
              </motion.div>
            )}
          </div>

          {panelRight && (
            <motion.div variants={fadeRight} className="px-6 pb-8 sm:px-8 lg:my-[48px] lg:mr-[45px] lg:px-0 lg:pb-0">
              <Panel panel={s.panel} className="lg:h-full" />
            </motion.div>
          )}
        </div>
      </article>
    </motion.li>
  );
}

export default function AdmissionSteps() {
  return (
    <section className="relative bg-white py-12 lg:pb-[90px] lg:pt-[90px]">
      {/* Top-right shape image — clipped independently so it doesn't force overflow-hidden on the section */}
      <div className="pointer-events-none absolute right-0 top-0 overflow-hidden h-[60px] w-[90px] md:h-[75px] md:w-[115px] lg:h-[91px] lg:w-[147px]">
        <motion.div
          aria-hidden="true"
          initial={{ opacity: 0, y: -60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease }}
          className="h-full w-full bg-[url('/images/about-us/bg-shap-12.svg')] bg-contain bg-right-top bg-no-repeat"
        />
      </div>

      {/* Bottom-left square */}
      <motion.span
        aria-hidden="true"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease }}
        className="absolute bottom-0 left-0 size-8 origin-bottom-left bg-[#F5C400] lg:size-10"
      />

      <div className="custom-container">
        {/* Eligibility */}
        <motion.div variants={headStagger} initial="hidden" whileInView="visible" viewport={viewport}>
          <motion.h2 variants={fadeUp} className="text-[28px] font-semibold italic sm:text-[40px] lg:text-[48px]">
            Eligibility
          </motion.h2>
          <motion.div
            variants={fadeUp}
            className="mt-3 max-w-[985px] space-y-1 text-sm leading-relaxed text-black/80 lg:mt-[16px] lg:text-[18px] lg:leading-[1.8]"
          >
            {ELIGIBILITY.map((text) => (
              <p key={text}>{text}</p>
            ))}
          </motion.div>
        </motion.div>

        {/* Admission Process */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mt-14 text-[28px] sm:text-[40px] lg:mt-[100px] lg:text-[48px]"
        >
          <span className="font-light">Admission </span>
          <span className="font-semibold italic">Process</span>
        </motion.h2>

        <ul className="mt-6 grid gap-5 md:grid-cols-2 lg:mt-[37px] lg:grid-cols-3 lg:grid-rows-[minmax(357px,auto)_minmax(395px,auto)_minmax(446px,auto)] lg:gap-[32px]">
          {STAGES.map((s) => (
            <StageCard key={s.no} s={s} />
          ))}
        </ul>
      </div>
    </section>
  );
}
