import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeUp, stagger, viewport } from '@/_lib/motion';

const ease = 'easeOut';
const sectionStagger = stagger(0.15);

/* ---------- Animations ---------- */
const shapeTop = {
  hidden: { opacity: 0, y: -60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease } },
};
const photoIn = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease } },
};
// Layer slides out from behind the photo
const layerReveal = {
  hidden: { opacity: 0, scaleX: 0 },
  visible: { opacity: 1, scaleX: 1, transition: { duration: 0.8, ease, delay: 0.8 } },
};
// White card slides in, then its children fade up
const cardIn = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease, when: 'beforeChildren', staggerChildren: 0.12 },
  },
};
const squarePop = {
  hidden: { opacity: 0, scale: 0 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease, delay: 0.5 } },
};

export default function FeedbackIntro() {
  return (
    <motion.section
      variants={sectionStagger}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      className="relative overflow-hidden bg-white py-14 lg:pb-[103px] lg:pt-[95px]"
    >
      <motion.div
        aria-hidden="true"
        variants={shapeTop}
        className="pointer-events-none absolute right-0 top-0 h-[70px] w-[46px] bg-[url('/images/about-us/bg-shap-5.webp')] bg-contain bg-right-top bg-no-repeat md:h-[100px] md:w-[65px] lg:h-[143px] lg:w-[93px]"
      />
      <div className="custom-container">
        <div className="relative">
          {/* Photo + layer behind it */}
          <div className="relative w-full lg:w-[56.2%]">
            <div
              aria-hidden="true"
              className="absolute inset-0 -translate-x-3 translate-y-4 rotate-2 lg:-translate-x-[20px] lg:translate-y-[26px]"
            >
              <motion.div
                variants={layerReveal}
                className="h-full w-full origin-right bg-[linear-gradient(127deg,#43358F_0%,#A99CF2_71.43%)]"
              />
            </div>

            <motion.div variants={photoIn} className="relative aspect-[287/198] w-full overflow-hidden">
              <Image
                src={process.env.IMG_PATH + 'images/about-us/student-img-1.webp'}
                alt="AIMS IBS students in class"
                fill
                sizes="(min-width: 1024px) 719px, 100vw"
                quality={100}
                unoptimized
                className="object-cover"
              />
            </motion.div>
          </div>

          {/* White card: overlaps the photo from md up */}
          <motion.div
            variants={cardIn}
            className="relative z-10 mt-8 bg-white p-6 shadow-[0_16px_40px_rgba(0,0,0,0.14)] sm:p-8 md:-mt-14 md:ml-auto md:w-[85%] lg:absolute lg:right-0 lg:top-[17.7%] lg:ml-0 lg:mt-0 lg:w-[51%] lg:px-[55px] lg:py-[56px]"
          >
            {/* Orange square on the card's top-right corner */}
            <motion.span
              aria-hidden="true"
              variants={squarePop}
              className="absolute -right-3 -top-3 size-8 bg-brand-orange lg:-right-[25px] lg:-top-[25px] lg:size-[50px]"
            />
            {/* Pink square on the card's bottom-left corner */}
            <motion.span
              aria-hidden="true"
              variants={squarePop}
              className="absolute -left-3 top-full size-8 bg-[#F0668F] lg:-left-[25px] lg:size-[50px]"
            />

            <motion.h2 variants={fadeUp} className="text-[28px] sm:text-[32px] lg:text-[40px] lg:leading-tight">
              <span className="font-light">Your Voice, </span>
              <span className="font-semibold italic">Our Growth</span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-4 text-sm leading-relaxed text-black/80 lg:mt-6 lg:text-[17px] lg:leading-[1.75]"
            >
              At AIMS IBS, we strive for excellence in academics, campus life, and student support. Your honest feedback
              helps us identify areas of strength and opportunities for improvement. Whether it&rsquo;s about faculty,
              facilities, programs, or services, your insights help us evolve.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
