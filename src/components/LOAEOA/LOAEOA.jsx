"use client";

import { motion } from "framer-motion";

const items = [
  {
    short: "LOA",
    title: "Letter of Approval (LOA)",
    text: "A Letter of Approval (LOA) is the formal authorization granted by AICTE (All India Council for Technical Education) confirming that AIMS IBS meets the regulatory standards to offer approved programs.",
  },
  {
    short: "EoA",
    title: "Extension of Approval (EoA)",
    text: "An Extension of Approval (EoA) is a periodic reaffirmation by AICTE, extending that approval for subsequent academic years.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2, delayChildren: 0.1 } },
};

const card = {
  hidden: { opacity: 0, x: 40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const heading = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const squareVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.45, ease: "backOut", delay: 0.3 },
  },
};
export default function LOAEOA() {
  return (
    <section className="relative bg-white  py-16 md:py-[120px]">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        aria-hidden="true"
        className="pointer-events-none absolute top-0 right-0 h-8 w-16 lg:h-[50px] lg:w-[100px]"
      >
        <motion.span
          variants={squareVariants}
          className="block h-full w-full origin-top-right bg-[#F04B1D]"
        />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        aria-hidden="true"
        className="pointer-events-none absolute top-0 right-0 h-16 w-8 lg:h-[148px] lg:w-[50px]"
      >
        <motion.span
          variants={squareVariants}
          className="block h-full w-full origin-top-right bg-[#F04B1D]"
        />
      </motion.div>
      <div className="custom-container grid grid-cols-1 items-start gap-[40px] md:grid-cols-[1fr_2fr] md:gap-[100px]">
        {/* Heading */}
        <motion.h2
          variants={heading}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          className="text-[30px] leading-tight text-[#090909] text-center md:text-start lg:text-[34px] xl:text-[40px]"
        >
          What Are <span className="font-bold italic">LOA &amp; EoA?</span>
        </motion.h2>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col gap-4"
        >
          {items.map((item) => (
            <motion.article
              key={item.short}
              variants={card}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="flex overflow-hidden group rounded-[4px] border border-[#F0DFD0] bg-[#FFF4EB] shadow-sm"
            >
              {/* Purple tile: layers stacked with grid (no position utilities) */}
              <div className="grid w-[80px] shrink-0 overflow-hidden bg-[#3F3290] md:w-[120px]">
                {/* decorative diamond */}
                <motion.span
                  initial={{ rotate: 0, opacity: 0 }}
                  whileInView={{ rotate: 45, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="col-start-1 row-start-1 size-14 self-end justify-self-end bg-[#FFFFFF12] sm:size-[100px] group-hover:scale-125"
                  style={{ translateX: "30%", translateY: "-15%" }}
                />
                {/* label */}
                <span className="col-start-1 row-start-1 place-self-center text-[24px] font-bold italic text-white md:text-[30px]">
                  {item.short}
                </span>
                {/* orange corner square */}
                <span className="col-start-1 row-start-1 size-[16px] md:size-[22px] self-start justify-self-start bg-[#F04E23]" />
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center gap-2 p-[18px] md:p-[30px]">
                <h3 className="text-[18px] font-medium text-[#090909] md:text-[22px]">
                  {item.title}
                </h3>
                <p className="text-[14px] text-[#0F0F0FD9] sm:text-[16px]">
                  {item.text}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
