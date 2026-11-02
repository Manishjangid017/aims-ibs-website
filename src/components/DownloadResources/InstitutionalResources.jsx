import { FileText } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeUp, stagger, viewport } from '@/_lib/motion';
import DownloadButton from './DownloadButton';

/* ---------- JSON data ---------- */
const RESOURCES = [
  {
    no: '01',
    title: 'AIMS IBS Newsletter',
    desc: 'Stay informed with our latest updates, campus highlights, events, and academic news through the AIMS IBS newsletter.',
    cta: 'Download Newsletter',
    href: '/brochures/newsletter.pdf',
  },
  {
    no: '02',
    title: 'SPARK Brochure',
    desc: 'Discover our SPARK initiative—designed to ignite leadership skills and innovation in our students. Get the latest details in this brochure.',
    cta: 'Download SPARK Brochure',
    href: '/brochures/spark-brochure.pdf',
  },
  {
    no: '03',
    title: 'AIMS IBS Placement Brochure',
    desc: 'Explore placement statistics, recruiter profiles, industry partnerships, and success stories with our comprehensive Placement Brochure.',
    cta: 'Download Placement Brochure',
    href: '/brochures/placement-brochure.pdf',
  },
];

/* ---------- Animations ---------- */
const ease = 'easeOut';
const sectionStagger = stagger(0.15);
const gridStagger = stagger(0.15);

const shapeTop = {
  hidden: { opacity: 0, y: -60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease } },
};
const shapeBg = {
  hidden: { opacity: 0, x: -60, y: 40 },
  visible: { opacity: 1, x: 0, y: 0, transition: { duration: 1, ease } },
};

// Card rises in, then its parts follow one after another
const cardIn = {
  hidden: { opacity: 0, y: 50, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease, when: 'beforeChildren', staggerChildren: 0.08 },
  },
};
const iconPop = {
  hidden: { opacity: 0, scale: 0 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease } },
};

export default function InstitutionalResources() {
  return (
    <motion.section
      variants={sectionStagger}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      className="relative overflow-hidden bg-[#43358F] py-14 lg:pb-[120px] lg:pt-[105px]"
    >
      {/* Top-right orange shape (add brochure-shap.webp) */}
      <motion.div
        aria-hidden="true"
        variants={shapeTop}
        className="pointer-events-none absolute right-0 top-0 h-[70px] w-[46px] bg-[url('/images/about-us/bg-shap-5.webp')] bg-contain bg-right-top bg-no-repeat md:h-[100px] md:w-[65px] lg:h-[143px] lg:w-[93px]"
      />
      <motion.div
        aria-hidden="true"
        variants={shapeBg}
        className="pointer-events-none absolute bottom-[2%] left-[-6%] z-0 h-[200px] w-[250px] bg-[url('/images/about-us/transprent-cube-feedback.svg')] bg-contain bg-left-bottom bg-no-repeat md:h-[300px] md:w-[400px] lg:h-[421px] lg:w-[489px]"
      />

      <div className="custom-container relative">
        <motion.div variants={fadeUp}>
          <h2 className="text-3xl text-white sm:text-4xl lg:text-[40px] lg:leading-tight">
            <span className="font-light">Institutional </span>
            <span className="font-semibold italic">Resources</span>
          </h2>
          <p className="mt-3 text-sm text-white/80 lg:mt-4 lg:text-[18px]">
            Stay informed with updates, campus highlights and placement outcomes.
          </p>
        </motion.div>

        <motion.ul
          variants={gridStagger}
          className="mt-8 grid gap-5 md:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-[24px]"
        >
          {RESOURCES.map((r) => (
            <motion.li key={r.no} variants={cardIn} className="md:last:col-span-2 lg:last:col-span-1">
              <article className="group flex h-full flex-col rounded-[3px] bg-white p-6 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_24px_50px_rgba(0,0,0,0.3)] lg:p-[32px]">
                <div className="flex items-start justify-between">
                  <div className="transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
                    <motion.span
                      variants={iconPop}
                      className="grid size-11 place-items-center rounded-[2px] bg-brand-orange text-white lg:size-14"
                    >
                      <FileText className="size-5 lg:size-7" strokeWidth={1.5} />
                    </motion.span>
                  </div>

                  <motion.span
                    variants={fadeUp}
                    className="text-3xl font-medium leading-none text-[#A99CF2] transition-colors duration-300 group-hover:text-[#7C6BE0] lg:text-[40px]"
                  >
                    {r.no}
                  </motion.span>
                </div>

                <motion.h3 variants={fadeUp} className="mt-5 text-lg font-medium text-black lg:mt-6 lg:text-[24px]">
                  {r.title}
                </motion.h3>

                <motion.p variants={fadeUp} className="mt-3 text-sm leading-[1.7] text-black/70 lg:mt-4 lg:text-[16px]">
                  {r.desc}
                </motion.p>

                <motion.div variants={fadeUp} className="mt-auto pt-6">
                  <DownloadButton href={r.href}>{r.cta}</DownloadButton>
                </motion.div>
              </article>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </motion.section>
  );
}
