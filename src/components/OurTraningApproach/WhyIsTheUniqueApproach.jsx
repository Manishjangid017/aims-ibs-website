'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeLeft, fadeUp, stagger, viewport } from '@/_lib/motion';

const ease = 'easeOut';

const sectionStagger = stagger(0.2);
const textStagger = stagger(0.15);

// Decorative shapes
const boxesLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease } },
};
const boxesRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease } },
};
const shapeBottom = {
  hidden: { opacity: 0, x: 60, y: 60 },
  visible: { opacity: 1, x: 0, y: 0, transition: { duration: 1, ease, delay: 0.3 } },
};

export default function WhyIsTheUniqueApproach() {
  return (
    <motion.section
      variants={sectionStagger}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      className="relative overflow-hidden bg-[#43358F] py-14 lg:py-[73px]"
    >
      {/* 3x3 boxes, top-left and top-right (move in from the sides) */}
      <motion.div
        aria-hidden="true"
        variants={boxesLeft}
        className="pointer-events-none absolute left-4 top-4 h-5 w-11 bg-[url('/images/about-us/bg-shap-3.webp')] bg-contain bg-left bg-no-repeat md:left-8 md:h-7 md:w-16 lg:left-[2%] 3xl:left-[5%] 2xl:top-[71px] 2xl:h-9 2xl:w-21"
      />
      <motion.div
        aria-hidden="true"
        variants={boxesRight}
        className="pointer-events-none absolute right-4 top-4 h-5 w-11 bg-[url('/images/about-us/bg-shap-1.webp')] bg-contain bg-right bg-no-repeat md:right-8 md:h-7 md:w-16 lg:right-[2%] 3xl:right-[5%] 2xl:top-[71px] 2xl:h-9 2xl:w-21"
      />

      {/* Bottom-right shape (slides up and in) */}
      <motion.div
        aria-hidden="true"
        variants={shapeBottom}
        className="pointer-events-none absolute bottom-0 right-0 aspect-[82/52] w-[90px] bg-[url('/images/about-us/bg-shap-2.webp')] bg-contain bg-right-bottom bg-no-repeat sm:w-[110px] lg:w-[150px]"
      />

      <div className="custom-container relative">
        <div className="grid items-center gap-8 md:grid-cols-[42%_1fr] md:gap-10 xl:grid-cols-[524px_1fr] xl:gap-[126px]">
          {/* Left: image (add your own) */}
          <motion.div variants={fadeLeft} className="group relative aspect-[524/538] w-full overflow-hidden">
            <Image
              src={process.env.IMG_PATH + 'images/why-aims-ibs/approach-image.webp'}
              alt="AIMS IBS campus and faculty"
              fill
              sizes="(min-width: 1280px) 524px, (min-width: 768px) 42vw, 100vw"
              quality={100}
              unoptimized
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </motion.div>

          {/* Right: content */}
          <motion.div variants={textStagger}>
            <motion.h2 variants={fadeUp} className="text-[28px] leading-tight text-white sm:text-[32px] lg:text-[48px]">
              <span className="block font-light">What is the Unique 360° </span>
              <span className="block font-semibold italic">Training Approach?</span>
            </motion.h2>

            <motion.p variants={fadeUp} className="mt-4 text-sm text-white/90 lg:text-[16px]">
              Your goals have a home. And it starts right here.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-[600px] text-sm leading-relaxed text-white/90 lg:text-[16px] lg:leading-[1.7]"
            >
              The 360° Training Approach at AIMS IBS means you’re not just studying theory, you’re developing all the
              skills and experiences needed to succeed in today’s competitive world.
              <br />
              It covers everything: from building your technical knowledge and practical skills to shaping your
              personality, career mindset, and global outlook. You get hands-on projects, industry exposure, personality
              development, mentorship, and even international opportunities — all woven into your PG program. <br />
              This all-around training ensures you graduate confident, capable, and ready for any challenge, whether
              it’s your first job or your future career growth.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
