"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const links = [
  { normal: "Mandatory", bold: "Disclosure", href: "#" },
  { normal: "Board", bold: "of Governers", href: "#" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

const card = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const dotVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: (delay) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.45, ease: "backOut", delay },
  }),
};
export default function QuickLinks() {
  return (
    <section className="bg-white py-16 md:py-[120px] relative">
      <motion.span
        custom={0.3}
        variants={dotVariants}
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 h-8 w-8 bg-[#F8769A] lg:h-[50px] lg:w-[50px] aspect-square"
      />
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="custom-container mx-auto grid  grid-cols-1 gap-[24px] sm:grid-cols-2 md:gap-[32px]"
      >
        {links.map((item) => (
          <motion.a
            key={item.bold}
            href={item.href}
            variants={card}
            className="relative group grid overflow-hidden rounded-[3px] bg-[#43358F]"
          >
            {/* Decorative diamond (stacked with grid, no position utilities) */}
            <span
              aria-hidden="true"
              className="absolute mr-[12%] rotate-45 -top-[30%] md:-top-[40%] lg:-top-[50%] start-[30%] aspect-square w-[150px] md:w-[220px] bg-[#FFFFFF0D] transition-transform duration-500 group-hover:scale-110"
            />

            {/* Content */}
            <div className="col-start-1 row-start-1 flex items-center justify-between gap-4 p-[30px] md:p-[48px]">
              <div className="flex flex-col gap-3">
                <span className="h-[2px] w-[64px] bg-[#F04B1D]" />
                <h3 className="text-[24px] font-light text-white md:text-[32px]">
                  {item.normal}{" "}
                  <span className="font-bold italic">{item.bold}</span>
                </h3>
              </div>

              <span className="grid size-[32px] shrink-0 place-items-center bg-[#F04B1D] rounded-[2px] text-white transition-colors duration-200 group-hover:bg-[#d83f16] md:size-[48px]">
                <ArrowRight className="size-[20px] md:size-[26px] transition-transform duration-200 group-hover:translate-x-0.5" />
              </span>
            </div>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}
