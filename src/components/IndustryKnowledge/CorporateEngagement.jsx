"use client";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const points = [
  "Renowned industry faculty conduct hands-on workshops, live case discussions, and modular guest lectures.",
  "Tools and platforms provided by partners become an integrated part of the learning experience.",
  "Regular mentorship sessions and real-time project guidance bridge the academic–industry gap.",
];

const EASE = [0.22, 1, 0.36, 1];

const listVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.35 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: 24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: EASE },
  },
};

const bulletVariants = {
  hidden: { scale: 0, rotate: -45 },
  visible: {
    scale: 1,
    rotate: 0,
    transition: { duration: 0.4, ease: EASE },
  },
};
const squareVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.45, ease: "backOut", delay: 0.3 },
  },
};
export default function CorporateEngagement() {
  const reduceMotion = useReducedMotion();

  // Disable movement for users who prefer reduced motion (opacity only)
  const imageHidden = reduceMotion
    ? { opacity: 0 }
    : { opacity: 0, x: -60, scale: 0.96 };
  const headingHidden = reduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 };

  return (
    <section
      className="relative isolate overflow-hidden bg-[#41338f] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('/images/industry-partner/Section_Engagement.webp')",
      }}
    >
      <div className="mx-auto flex custom-container flex-col items-center gap-8 md:flex-row md:items-center md:gap-10 py-[60px]  lg:gap-12">
        {/* Image */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 right-0 h-8 w-16 lg:h-[50px] lg:w-[100px]"
        >
          <motion.span
            variants={squareVariants}
            className="block h-full w-full origin-top-right bg-[#9080EE]"
          />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 right-0 h-16 w-8 lg:h-[100px] lg:w-[50px]"
        >
          <motion.span
            variants={squareVariants}
            className="block h-full w-full origin-top-right bg-[#9080EE]"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          aria-hidden="true"
          className="pointer-events-none absolute top-0 left-0 h-8 w-10 lg:h-[50px] lg:w-[100px]"
        >
          <motion.span
            variants={squareVariants}
            className="block h-full w-full origin-top-right bg-[#9080EE]"
          />
        </motion.div>
        <motion.div
          className="w-full md:w-[48%]"
          initial={imageHidden}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <div className="relative aspect-[16/9] w-full overflow-hidden">
            <Image
              src="/images/industry-partner/Image.webp"
              alt="Students attending an industry workshop"
              fill
              sizes="(min-width: 1024px) 380px, (min-width: 768px) 40vw, 100vw"
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        {/* Content */}
        <div className="w-full text-white md:flex-1">
          <motion.h2
            className="leading-tight text-[28px] lg:text-[32px]"
            initial={headingHidden}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.15 }}
          >
            Active Corporate{" "}
            <span className="font-bold italic">Engagement</span>
          </motion.h2>

          <motion.ul
            className="mt-5 space-y-3.5"
            variants={listVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {points.map((text) => (
              <motion.li
                key={text}
                className="flex items-start gap-2 md:gap-3"
                variants={
                  reduceMotion
                    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
                    : itemVariants
                }
              >
                <motion.span
                  className="mt-[7px] h-[10px] md:h-[14px] w-[10px] md:w-[14px] shrink-0 bg-orange-500"
                  variants={reduceMotion ? undefined : bulletVariants}
                />
                <p className="leading-relaxed text-white text-[14px] lg:text-[16px]">
                  {text}
                </p>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
