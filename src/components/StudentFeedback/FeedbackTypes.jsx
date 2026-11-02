import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeUp, stagger, viewport } from '@/_lib/motion';

/* ---------- JSON data ---------- */
const TYPES = [
  { no: '01', title: 'Academics & Curriculum' },
  { no: '02', title: 'Teaching Quality & Faculty Support' },
  { no: '03', title: 'Infrastructure & Campus Facilities' },
  { no: '04', title: 'Student Services & Support' },
  { no: '05', title: 'Administration & Processes' },
  { no: '06', title: 'Career Guidance & Placements' },
];

/* ---------- Animations ---------- */
const ease = 'easeOut';
const sectionStagger = stagger(0.15);
const gridStagger = stagger(0.1);

const photoIn = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease } },
};
const layerReveal = {
  hidden: { opacity: 0, scaleX: 0 },
  visible: { opacity: 1, scaleX: 1, transition: { duration: 0.8, ease, delay: 0.3 } },
};
const cardIn = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease } },
};

export default function FeedbackTypes() {
  return (
    <motion.section
      variants={sectionStagger}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      className="overflow-hidden bg-[#FFF4EB] py-12 lg:pb-[100px] lg:pt-[95px]"
    >
      <div className="custom-container">
        <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl lg:text-[40px] lg:leading-tight">
          <span className="font-light">Types of Feedback </span>
          <span className="font-semibold italic">You Can Share</span>
        </motion.h2>

        <div className="mt-8 grid gap-10 lg:mt-[58px] lg:grid-cols-[481fr_718fr] lg:gap-20">
          {/* Photo + lilac layer */}
          <motion.div variants={photoIn} className="relative mx-auto w-full max-w-[481px] lg:mx-0 lg:max-w-none">
            <div
              aria-hidden="true"
              className="absolute inset-0 translate-x-3 translate-y-3 rotate-[-1deg] lg:translate-x-[20px] lg:translate-y-[20px]"
            >
              <motion.div
                variants={layerReveal}
                className="h-full w-full origin-left bg-[linear-gradient(127deg,#43358F_0%,#A99CF2_71.43%)] "
              />
            </div>

            <div className="relative aspect-[481/526] w-full overflow-hidden">
              <Image
                src={process.env.IMG_PATH + 'images/about-us/student-img-2.webp'}
                alt="AIMS IBS faculty"
                fill
                sizes="(min-width: 1024px) 481px, 100vw"
                quality={100}
                unoptimized
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Cards */}
          <motion.ul variants={gridStagger} className="grid gap-3 sm:grid-cols-2 lg:gap-[22px]">
            {TYPES.map((t) => (
              <motion.li key={t.no} variants={cardIn}>
                <div className="group flex h-full min-h-[120px] flex-col justify-between border border-black/10 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-brand-orange/50 hover:shadow-[0_14px_30px_rgba(240,75,29,0.15)] lg:min-h-[158px] lg:p-7">
                  <span className="origin-left text-2xl font-semibold italic text-brand-orange transition-transform duration-300 group-hover:scale-110 lg:text-[36px] lg:leading-none">
                    {t.no}
                  </span>
                  <p className="mt-4 text-base font-medium leading-snug text-black lg:text-[19px]">{t.title}</p>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </motion.section>
  );
}
