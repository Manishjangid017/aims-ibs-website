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

export default function ExpertMentorship() {
  return (
    <motion.section
      variants={sectionStagger}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      className="relative overflow-hidden py-14 lg:py-[88px]"
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

      <motion.span
        aria-hidden="true"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease }}
        style={{ backgroundColor: '#F472B6' }}
        className={`absolute bottom-0 left-0 size-4 lg:size-[50px] `}
      />
      <div className="custom-container relative">
        <div className="grid items-center gap-8 md:grid-cols-[42%_1fr] md:gap-10 xl:grid-cols-[604px_1fr] xl:gap-[48px]">
          {/* Left: image (add your own) */}
          <motion.div variants={fadeLeft} className="group relative aspect-[604/329] w-full overflow-hidden">
            <Image
              src={process.env.IMG_PATH + 'images/why-aims-ibs/experts.webp'}
              alt="AIMS IBS campus and faculty"
              fill
              sizes="(min-width: 1280px) 524px, (min-width: 768px) 42vw, 100vw"
              quality={100}
              unoptimized
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </motion.div>

          {/* Right: content */}
          <motion.div variants={textStagger}>
            <motion.h2 variants={fadeUp} className="text-[28px] leading-tight text-black sm:text-[32px] lg:text-[48px]">
              <span className="font-light">Learn by Doing with</span>
              <span className="font-semibold italic"> Expert Mentorship</span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-[600px] text-sm leading-relaxed text-black/90 lg:text-[16px] lg:leading-[1.7]"
            >
              Our experienced mentors from top industries guide you throughout your journey — helping you turn
              challenges into opportunities and preparing you for a smooth transition from campus to corporate life.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
