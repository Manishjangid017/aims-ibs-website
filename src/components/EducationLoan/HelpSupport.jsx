'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { delay, motion } from 'framer-motion';
import { fadeLeft, fadeUp, stagger, viewport } from '@/_lib/motion';

const ease = 'easeOut';
const sectionStagger = stagger(0.15);

/* ---------- Animations ---------- */
// Box rises in, then its children animate one after another (squares, text, button, circle, girl)
const boxIn = {
  hidden: { opacity: 0, y: 50, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease, when: 'beforeChildren', staggerChildren: 0.12 },
  },
};

const squarePop = {
  hidden: { opacity: 0, scale: 0 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease } },
};

// Circle grows up from the bottom, then the girl rises in front of it
const circleIn = {
  hidden: { opacity: 0, scale: 0.6 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease, delay: 1 } },
};
const girlIn = {
  hidden: { opacity: 0, y: 70 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
};

export default function HelpSupport() {
  return (
    <motion.section
      variants={sectionStagger}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      className="relative overflow-hidden bg-white py-14 lg:py-[94px]"
    >
      {/* Section bottom-left square */}
      <motion.span
        aria-hidden="true"
        variants={squarePop}
        className="absolute bottom-0 left-0 size-8 origin-bottom-left bg-[#F0668F] lg:size-[45px]"
      />

      <div className="custom-container">
        <motion.div variants={boxIn} className="relative">
          {/* Box top-left square */}
          <motion.span
            aria-hidden="true"
            variants={squarePop}
            className="absolute -left-3 top-0 z-20 size-8 origin-top-left bg-[#F0668F] lg:-left-6 lg:size-[49px]"
          />
          {/* Box bottom-right square */}
          <motion.span
            aria-hidden="true"
            variants={squarePop}
            className="absolute -right-3 bottom-0 z-20 size-8 origin-bottom-right bg-brand-orange lg:-right-6 lg:size-[49px]"
          />

          {/* Purple box */}
          <div className="relative flex flex-col justify-center md:min-h-[360px] lg:aspect-[692/216] lg:min-h-0">
            {/* Background: one image with the diamond shape */}
            <div
              aria-hidden="true"
              className="absolute inset-0 overflow-hidden rounded-[4px] bg-[url('/images/about-us/help-banner-bg.webp')] bg-cover bg-center shadow-[0_30px_70px_-20px_rgba(67,53,143,0.45)]"
            />

            {/* Content */}
            <div className="relative z-10 px-6 pb-4 pt-10 sm:px-10 md:w-[58%] md:pb-10 lg:w-[48%] lg:py-12 lg:pl-[5.6%] lg:pr-0">
              <motion.h2
                variants={fadeUp}
                className="text-3xl leading-tight text-white sm:text-4xl lg:text-[36px] lg:leading-[1.25]"
              >
                <span className="block font-light">Need Help With Your</span>
                <span className="block font-semibold italic">Education Loan?</span>
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className="mt-4 max-w-[548px] text-sm leading-relaxed text-white/90 sm:text-base lg:mt-6 lg:text-[17px] lg:leading-[1.8]"
              >
                Our admissions and finance support teams are here to assist you with guidance and documentation for your
                loan application.
              </motion.p>

              <motion.div variants={fadeLeft} className="mt-6 lg:mt-9">
                <Link
                  href="/contact-us"
                  className="group inline-flex items-center gap-3 rounded-[2px] bg-brand-orange px-7 py-4 text-sm font-medium uppercase tracking-wide text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#d63f14] hover:shadow-[0_10px_24px_rgba(240,75,29,0.4)]"
                >
                  Contact Support
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </div>

            {/* Girl + circle (two separate images). Stacked below the text on mobile, on the right from md up */}
            <div className="relative z-10 mx-auto mt-2 aspect-[559/474] w-full max-w-[320px] md:absolute md:bottom-0 md:right-[3%] md:mt-0 md:w-[42%] md:max-w-none lg:right-[4.8%] lg:w-[43.7%]">
              {/* Circle (only its top half shows) */}
              <motion.div
                variants={circleIn}
                className="absolute inset-x-0 bottom-0 h-[80%] origin-bottom overflow-hidden"
              >
                <Image
                  src={process.env.IMG_PATH + 'images/about-us/circle-clip.svg'}
                  alt=""
                  aria-hidden="true"
                  fill
                  sizes="(min-width: 1024px) 559px, 320px"
                  quality={100}
                  unoptimized
                  className="object-cover object-top"
                />
              </motion.div>

              {/* Girl: head rises above the box on desktop */}
              <div className="absolute bottom-[-20px] left-[3.5%] aspect-[522/474] w-[93%]">
                <motion.div variants={girlIn} className="relative h-full w-full">
                  <Image
                    src={process.env.IMG_PATH + 'images/about-us/help-cetner-girl.webp'}
                    alt="AIMS IBS loan support executive"
                    fill
                    sizes="(min-width: 1024px) 522px, 300px"
                    quality={100}
                    unoptimized
                    className="object-contain object-bottom"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
