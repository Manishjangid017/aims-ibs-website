import Image from 'next/image';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { fadeLeft, fadeRight, fadeUp, stagger, viewport } from '@/_lib/motion';

const ease = 'easeOut';
const sectionStagger = stagger(0.15);

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < breakpoint);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, [breakpoint]);
  return isMobile;
}

/* ---------- Animations ---------- */
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

// Gradient box slides out from behind the photo and settles with a slight tilt
const gradientBox = (isMobile) => ({
  hidden: { opacity: 0, x: 0, y: 0, rotate: 0 },
  visible: {
    opacity: 1,
    x: isMobile ? 12 : 32,
    y: isMobile ? 10 : 28,
    rotate: -2.5,
    transition: { duration: 0.9, ease, delay: 0.5 },
  },
});

// Orange square on the photo's top-right corner pops in last
const squarePop = {
  hidden: { opacity: 0, scale: 0 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease, delay: 0.9 } },
};

export default function AffordableEducation() {
  const isMobile = useIsMobile();
  return (
    <motion.section
      variants={sectionStagger}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      className="relative overflow-hidden bg-[#43358F] py-14 lg:pb-[120px] lg:pt-[120px]"
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
        <div className="grid items-center gap-12 lg:grid-cols-[1.12fr_1fr] lg:gap-16 xl:gap-[87px]">
          {/* Left: content */}
          <div className="max-w-[630px]">
            <motion.h2
              variants={fadeUp}
              className="text-3xl leading-tight text-white sm:text-4xl lg:text-[40px] lg:leading-[1.2]"
            >
              <span className="font-light">Making Education </span>
              <span className="font-semibold italic">Affordable and Accessible</span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-5 text-sm leading-relaxed text-white/90 sm:text-base lg:mt-6 lg:text-[19px] lg:leading-[1.85]"
            >
              At AIMS IBS, we believe financial constraints should never be a barrier to quality education. That&rsquo;s
              why we assist our students in availing education loans through leading public sector banks, private banks,
              and NBFCs.
            </motion.p>

            <motion.div
              variants={fadeLeft}
              className="mt-6 border-l-[3px] border-brand-orange bg-[#FFF3EA] px-5 py-5 text-sm leading-[1.7] text-black sm:px-[31px] lg:mt-8 lg:py-7 lg:text-[16px]"
            >
              Once admission is confirmed, the institute provides all necessary loan-related documents. While availing
              the loan is the student&rsquo;s responsibility, our support team ensures smooth coordination with banks.
            </motion.div>
          </div>

          {/* Right: photo with gradient box behind it */}
          <motion.div variants={fadeRight} className="relative mr-4 sm:mr-0">
            {/* Box behind the photo */}
            <motion.div
              aria-hidden="true"
              variants={gradientBox(isMobile)}
              className="absolute inset-0 bg-[linear-gradient(126.87deg,#A99CF2_0%,#D6CFFA_71.43%)]"
            />

            <div className="relative aspect-[310/288] w-full overflow-hidden">
              <Image
                src={process.env.IMG_PATH + 'images/about-us/affordable-img.webp'}
                alt="Affordable education loans at AIMS IBS"
                fill
                sizes="(min-width: 1280px) 563px, (min-width: 1024px) 45vw, 100vw"
                quality={100}
                unoptimized
                className="object-cover"
              />
            </div>

            {/* Orange square centered on the photo's top-right corner */}
            <motion.span
              aria-hidden="true"
              variants={squarePop}
              className="absolute -right-4 -top-4 size-8 bg-brand-orange lg:-right-[26px] lg:-top-[26px] lg:size-[51px]"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
