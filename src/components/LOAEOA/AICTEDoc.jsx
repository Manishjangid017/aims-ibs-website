"use client";

import { motion } from "framer-motion";
import { DownloadIcon, MoveDown } from "lucide-react";

const documents = [
  {
    title: "AICTE LOA – 2017–18",
    text: "Letter of Approval for the academic year 2017–2018.",
    href: "#",
  },
  {
    title: "AICTE EoA – 2018–19",
    text: "Extension of Approval certificate for 2018–2019.",
    href: "#",
  },
  {
    title: "AICTE EoA – 2019–20",
    text: "Extension of Approval certificate for 2019–2020.",
    href: "#",
  },
  {
    title: "AICTE EoA – 2020–21",
    text: "Extension of Approval certificate for 2020–2021.",
    href: "#",
  },
  {
    title: "AICTE EoA – 2021–22",
    text: "Extension of Approval certificate for 2021–2022.",
    href: "#",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const heading = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const row = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function AICTEDoc() {
  return (
    <section className="bg-[#43358F] py-16 md:py-[120px] relative">
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="pointer-events-none absolute -bottom-8 -left-30"
      >
        <img
          src="images/loa-eoa/Group_159.webp"
          className="block w-[150px] sm:w-[220px] md:w-[300px] lg:w-[480px]"
        />
      </motion.div>
      <div className="custom-container">
        {/* Heading */}
        <motion.h2
          variants={heading}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          className="mb-[34px] md:mb-[56px] text-[30px] leading-tight text-white text-center md:text-start lg:text-[34px] xl:text-[40px]"
        >
          Available <span className="font-bold italic">AICTE Documents</span>
        </motion.h2>

        {/* List */}
        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="flex flex-col gap-[16px] md:gap-[20px]"
        >
          {documents.map((doc, i) => (
            <motion.li
              key={doc.title}
              variants={row}
              className="flex flex-wrap items-center gap-x-4 gap-y-3 rounded-[4px] bg-white p-[20px] transition-shadow duration-300 hover:shadow-xl md:flex-nowrap md:gap-x-[28px] md:p-[32px]"
            >
              {/* Number */}
              <span className="shrink-0 text-[24px] font-medium text-[#A99CF2] md:text-[40px]">
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Icon */}
              <span className="hidden md:grid shrink-0 place-items-center bg-[#F04E23] text-white p-4">
                <img src="images/loa-eoa/FileIcon.svg" />
              </span>

              {/* Text */}
              <div className="min-w-0 flex-1 basis-[calc(100%-7rem)] sm:basis-auto">
                <h3 className="text-[18px] font-medium text-[#090909] md:text-[24px]">
                  {doc.title}
                </h3>
                <p className="text-[14px] text-[#0F0F0FCC]">{doc.text}</p>
              </div>

              {/* Button */}
              <motion.a
                href={doc.href}
                download
                whileTap={{ scale: 0.96 }}
                className="ml-auto flex shrink-0 items-center gap-2 bg-[#F04B1D] px-3 py-2 text-[12px] font-medium uppercase tracking-wide text-white transition-colors duration-200 hover:bg-[#d83f16] md:px-5 md:py-2.5 md:text-[14px]"
              >
                Download PDF
                <MoveDown className="size-[16px]" />
              </motion.a>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
