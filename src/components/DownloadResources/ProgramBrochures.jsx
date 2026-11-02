import { motion } from 'framer-motion';
import { fadeUp, stagger, viewport } from '@/_lib/motion';
import DownloadButton from './DownloadButton';

/* ---------- JSON data ---------- */
const PROGRAMS = [
  {
    code: 'MBA',
    title: 'MBA Brochure',
    desc: 'Learn about our MBA program offerings, course structure, faculty insights, and student outcomes through the MBA Brochure.',
    cta: 'Download MBA Brochure',
    href: '/brochures/mba-brochure.pdf',
  },
  {
    code: 'BBA',
    title: 'BBA Brochure',
    desc: 'Our Bachelor of Business Administration (BBA) program is designed to equip students with leadership, analytical, and managerial skills to excel in the corporate world.',
    cta: 'Download BBA Brochure',
    href: '/brochures/bba-brochure.pdf',
  },
  {
    code: 'BCA',
    title: 'BCA Brochure',
    desc: 'The Bachelor of Computer Applications (BCA) program nurtures IT professionals with a strong foundation in computer science, software development, and emerging technologies.',
    cta: 'Download BCA Brochure',
    href: '/brochures/bca-brochure.pdf',
  },
  {
    code: 'B.Com',
    title: 'B.Com Brochure',
    desc: 'Our Bachelor of Commerce (B.Com) program provides students with in-depth knowledge of accounting, finance, and business management, preparing them for careers in commerce and finance.',
    cta: 'Download B.Com Brochure',
    href: '/brochures/bcom-brochure.pdf',
  },
];

/* ---------- Animations ---------- */
const ease = 'easeOut';
const sectionStagger = stagger(0.15);
const gridStagger = stagger(0.12);

// Left-column cards come from the left, right-column cards from the right
const cardIn = {
  hidden: (i) => ({ opacity: 0, x: i % 2 === 0 ? -50 : 50 }),
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease, when: 'beforeChildren', staggerChildren: 0.08 },
  },
};
const codeIn = {
  hidden: { opacity: 0, scale: 0.7 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease } },
};
const popIn = {
  hidden: { opacity: 0, scale: 0 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease } },
};

export default function ProgramBrochures() {
  return (
    <motion.section
      variants={sectionStagger}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      className="overflow-hidden bg-white py-12 lg:pb-[100px] lg:pt-[115px]"
    >
      <div className="custom-container">
        <motion.div variants={fadeUp}>
          <h2 className="text-[28px] sm:text-4xl lg:text-[40px] lg:leading-tight">
            <span className="font-light">Program </span>
            <span className="font-semibold italic">Brochures</span>
          </h2>
          <p className="mt-3 text-[16px] text-black/80 lg:mt-4 lg:text-[18px]">
            Explore course structure, faculty insights and student outcomes.
          </p>
        </motion.div>

        <motion.ul variants={gridStagger} className="mt-8 grid gap-5 lg:mt-14 lg:grid-cols-2 lg:gap-8">
          {PROGRAMS.map((p, i) => (
            <motion.li key={p.code} custom={i} variants={cardIn}>
              <article className="group flex h-full overflow-hidden border border-[#F0DFD0] bg-[#FFF4EB] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(67,53,143,0.18)] lg:min-h-[285px]">
                {/* Purple panel with the course code */}
                <div className="relative grid w-24 shrink-0 place-items-center overflow-hidden bg-brand-purple sm:w-32 xl:w-[162px]">
                  {/* Diamond (rotates a little on hover) */}
                  <span
                    aria-hidden="true"
                    className="absolute right-0 top-[40%] size-20 -translate-y-1/2 translate-x-[35%] rotate-45 transition-transform duration-500 group-hover:rotate-[60deg] xl:size-[120px]"
                  >
                    <motion.span variants={popIn} className="block h-full w-full bg-white/10" />
                  </span>

                  {/* Orange square, top-left */}
                  <motion.span
                    aria-hidden="true"
                    variants={popIn}
                    className="absolute left-0 top-0 size-4 origin-top-left bg-brand-orange lg:size-[25px]"
                  />

                  <motion.span
                    variants={codeIn}
                    className="relative text-2xl font-bold italic text-white sm:text-3xl xl:text-[36px]"
                  >
                    {p.code}
                  </motion.span>
                </div>

                {/* Content */}
                <div className="flex-1 p-5 sm:p-6 lg:px-[31px] lg:pb-[31px] lg:pt-[35px]">
                  <motion.h3 variants={fadeUp} className="text-lg font-medium text-black lg:text-[24px]">
                    {p.title}
                  </motion.h3>

                  <motion.p
                    variants={fadeUp}
                    className="mt-3 text-sm leading-[1.7] text-black/70 lg:mt-[18px] lg:text-[16px]"
                  >
                    {p.desc}
                  </motion.p>

                  <motion.div variants={fadeUp} className="mt-5 lg:mt-[30px]">
                    <DownloadButton href={p.href}>{p.cta}</DownloadButton>
                  </motion.div>
                </div>
              </article>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </motion.section>
  );
}
