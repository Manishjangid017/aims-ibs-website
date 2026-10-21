'use client';

import Image from 'next/image';
import { motion, useMotionTemplate, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion';
import { stagger, viewport } from '@/_lib/motion';

const ease = 'easeOut';

const sectionStagger = stagger(0.18);
const listStagger = stagger(0.08);

// Photo cards rise in
const cardIn = {
  hidden: { y: 50, scale: 0.94 },
  visible: { y: 0, scale: 1, transition: { duration: 0.8, ease } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.2, ease } },
};

// Orange border "draws" itself: top line -> right side down -> bottom line back to the left
const lineEase = 'easeInOut';
const topLine = {
  hidden: { scaleX: 0 },
  visible: { scaleX: 1, transition: { duration: 0.9, ease: lineEase, delay: 0.3 } },
};
const rightLine = {
  hidden: { scaleY: 0 },
  visible: { scaleY: 1, transition: { duration: 0.7, ease: lineEase, delay: 1.1 } },
};
const bottomLine = {
  hidden: { scaleX: 0 },
  visible: { scaleX: 1, transition: { duration: 0.9, ease: lineEase, delay: 1.7 } },
};

// Corner shapes
const shapeTop = {
  hidden: { opacity: 0, y: -60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease } },
};
const squarePop = {
  hidden: { opacity: 0, scale: 0 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease, delay: 0.4 } },
};

const OBJECTIVES = [
  'Empower Students to Lead and Innovate',
  'Foster Inclusive and Supportive Learning',
  'Deliver Practical, Industry-Relevant Education',
  'Build Strong Industry & Community Connections',
  'Provide Personalized Career Guidance & Support',
];

/* 3D tilt card: photo + layer behind it */
/* Photo + layer: gentle fixed 3D tilt on hover */
function TiltCard({ src, layer, alt, aspect, photoClass, sizes, className = '' }) {
  return (
    <div className={`group relative [perspective:1200px] ${className}`}>
      <div className={`relative w-full transition-transform duration-500 ease-out will-change-transform ${aspect}`}>
        {/* Layer behind the photo: drifts back and rotates a little */}
        <div
          aria-hidden="true"
          style={{ backgroundImage: `url(${process.env.IMG_PATH}${layer})` }}
          className="absolute inset-0 bg-[length:100%_100%] bg-no-repeat transition-transform duration-500 ease-out group-hover:[transform:rotate(4deg)]"
        />

        {/* Photo: comes forward */}
        <div
          className={`absolute overflow-hidden shadow-[0_18px_36px_rgba(63,46,143,0.25)] transition-[transform,box-shadow] duration-500 ease-out [transform:translateZ(10px)] group-hover:shadow-[0_30px_60px_rgba(63,46,143,0.4)] group-hover:[transform:rotate(-2deg)] ${photoClass}`}
        >
          <Image
            src={process.env.IMG_PATH + src}
            alt={alt}
            fill
            sizes={sizes}
            quality={100}
            unoptimized
            className="object-cover transition-transform duration-700 ease-out"
          />

          {/* Light sheen sweeps across once on hover */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 -translate-x-full -skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-[400%]"
          />
        </div>
      </div>
    </div>
  );
}

export default function VisionMission() {
  return (
    <motion.section
      variants={sectionStagger}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      className="relative overflow-hidden bg-white py-12 lg:pb-[90px] lg:pt-[75px]"
    >
      {/* Top-right shape image */}
      <motion.div
        aria-hidden="true"
        variants={shapeTop}
        className="pointer-events-none absolute right-0 top-0 h-[70px] w-12 bg-[url('/images/about-us/bg-shap-5.webp')] bg-contain bg-right-top bg-no-repeat md:h-[93px] md:w-16 lg:h-[120px] lg:w-[82px]"
      />

      {/* Bottom-left pink square */}
      <motion.span
        aria-hidden="true"
        variants={squarePop}
        className="absolute bottom-0 left-0 size-8 origin-bottom-left bg-[#F0668F] lg:size-10"
      />

      <div className="custom-container">
        <div className="relative">
          {/* Orange border: starts at the left of row 1, goes around the right side and ends at the bottom card */}
          <motion.span
            aria-hidden="true"
            variants={topLine}
            className="absolute left-[19.3%] right-0 top-[25.5%] z-0 hidden h-px origin-left bg-brand-orange lg:block"
          />
          <motion.span
            aria-hidden="true"
            variants={rightLine}
            className="absolute bottom-[22.2%] right-0 top-[25.5%] z-0 hidden w-px origin-top bg-brand-orange lg:block"
          />
          <motion.span
            aria-hidden="true"
            variants={bottomLine}
            className="absolute bottom-[22.2%] left-[19.3%] right-0 z-0 hidden h-px origin-right bg-brand-orange lg:block"
          />

          {/* Row 1: Vision | photo | Mission | photo */}
          <div className="relative z-10 grid gap-8 md:grid-cols-2 md:items-center lg:grid-cols-[233fr_224fr_31fr_212fr_42fr_224fr_29fr] lg:items-start lg:gap-0">
            <motion.div variants={fadeUp} className="lg:col-start-1 lg:mt-9 lg:max-w-[73%] xl:mt-12">
              <h2 className="mb-4 text-3xl font-bold italic sm:text-4xl lg:mb-5 lg:text-3xl xl:text-4xl 2xl:text-[44px]">
                Vision
              </h2>
              <p className="text-sm leading-relaxed text-black/80 lg:text-xs lg:leading-[1.6] xl:text-sm 2xl:text-base">
                We envision being a beacon of educational excellence recognized for groundbreaking programs, inspiring
                faculty, and a deep commitment to social responsibility. Our graduates will emerge as confident
                changemakers, equipped to navigate the complexities of tomorrow with integrity, creativity, and purpose.
              </p>
            </motion.div>

            <motion.div variants={cardIn} className="lg:col-start-2 bg-white">
              <TiltCard
                src="images/about-us/vision-img-1.webp"
                layer="images/about-us/vision-card-bg.webp"
                alt="Graduation ceremony at AIMS IBS"
                aspect="aspect-[224/346]"
                photoClass="inset-[4.6%_4.9%_4.9%_0]"
                sizes="(min-width: 1024px) 280px, (min-width: 768px) 45vw, 300px"
                className="mx-auto w-full max-w-[300px] md:max-w-none bg-white"
              />
            </motion.div>

            <motion.div variants={fadeUp} className="lg:col-start-4 lg:mt-4 lg:bg-white lg:p-5 xl:mt-7">
              <h2 className="mb-4 text-3xl font-bold italic sm:text-4xl lg:mb-5 lg:text-3xl xl:text-4xl 2xl:text-[44px]">
                Mission
              </h2>
              <p className="text-sm leading-relaxed text-black/80 lg:text-xs lg:leading-[1.6] xl:text-sm 2xl:text-base">
                Our mission is to deliver exceptional education and comprehensive support that empowers every student to
                excel academically and professionally. We cultivate a dynamic environment where curiosity thrives,
                innovation is sparked, and diverse ideas flourish, preparing learners to become impactful leaders and
                responsible global citizens.
              </p>
            </motion.div>

            <motion.div variants={cardIn} className="lg:col-start-6">
              <TiltCard
                src="images/about-us/vision-img-2.webp"
                layer="images/about-us/vision-card-bg.webp"
                alt="Speaker at an AIMS IBS event"
                aspect="aspect-[224/346]"
                photoClass="inset-[4.6%_4.9%_4.9%_0]"
                sizes="(min-width: 1024px) 280px, (min-width: 768px) 45vw, 300px"
                className="mx-auto w-full max-w-[300px] md:max-w-none"
              />
            </motion.div>
          </div>

          {/* Row 2: photo | Objectives */}
          <div className="relative z-10 mt-8 grid gap-8 md:grid-cols-2 md:items-center lg:mt-[3.4%] lg:grid-cols-[10fr_478fr_83fr_320fr_104fr] lg:gap-0">
            <motion.div variants={cardIn} className="lg:col-start-2">
              <TiltCard
                src="images/about-us/vision-img-3.webp"
                layer="images/about-us/objective-card-bg.webp"
                alt="AIMS IBS students at a registration desk"
                aspect="aspect-[478/350]"
                photoClass="inset-[5.1%_0.2%_5.7%_2.3%]"
                sizes="(min-width: 1024px) 600px, (min-width: 768px) 45vw, 100vw"
              />
            </motion.div>

            <motion.div variants={fadeUp} className="lg:col-start-4 lg:bg-white lg:p-5">
              <h2 className="mb-4 text-3xl font-bold italic sm:text-4xl lg:mb-5 lg:text-3xl xl:text-4xl 2xl:text-[44px]">
                Objectives
              </h2>
              <p className="text-sm leading-relaxed text-black/80 lg:text-xs lg:leading-[1.6] xl:text-sm 2xl:text-base">
                Our objective is to empower every student by providing a supportive and dynamic learning environment
                that fosters personal growth, academic excellence, and career readiness. We are committed to equipping
                students with the skills, values, and opportunities needed to become confident leaders and responsible
                global citizens.
              </p>

              <motion.ul
                variants={listStagger}
                className={`mt-5 space-y-2 text-sm leading-relaxed text-black/80 lg:text-xs lg:leading-[1.6] xl:text-sm 2xl:text-base`}
              >
                {OBJECTIVES.map((item) => (
                  <motion.li key={item} variants={fadeUp} className="flex items-start gap-3">
                    <span className="mt-[0.6em] size-1 shrink-0 rounded-full bg-black" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
