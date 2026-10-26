"use client";

import { motion } from "framer-motion";

const columns = [
  {
    heading: "Benefit",
    items: [
      "Industry-Approved Credentials",
      "Real-World Project Work",
      "Industry Networking",
      "Curriculum Relevance",
      "Global Outlook",
    ],
  },
  {
    heading: "Impact",
    items: [
      "Certifications recognized and respected by employers",
      "Immediate application of classroom concepts",
      "Direct mentorship & career opportunities",
      "Training aligned to current and future job needs",
      "Exposure through international tools and perspectives",
    ],
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.18 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const listContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.3 } },
};

const listItem = {
  hidden: { opacity: 0, x: -16 },
  show: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function BenefitsImpact() {
  return (
    <section
      className="relative w-full overflow-hidden bg-white bg-cover bg-center bg-no-repeat py-12 font-sans sm:px-8 md:py-16"
      style={{
        backgroundImage:
          "url('/images/industry-partner/sequence_patterns.webp')",
      }}
    >
      {/* pink corner accent */}
      <span className="absolute bottom-0 right-0 h-6 w-6 bg-[#F26BB5] sm:h-8 sm:w-8" />

      <div className="custom-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-[28px] lg:text-[34px] xl:text-[48px] font-[var(--font-sans)]"
        >
          What This Means{""}
          <span className="font-semibold italic"> for Students</span>
        </motion.h2>

        <motion.div
          className="mt-6 md:mt-8 grid grid-cols-1 gap-6 md:grid-cols-2"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={container}
        >
          {columns.map((col) => (
            <motion.div
              key={col.heading}
              variants={fadeUp}
              className="flex h-full flex-col"
            >
              {/* header bar */}
              <div className="bg-[#41298A] px-4 py-2 text-[16px] md:text-[18px] font-semibold text-white">
                {col.heading}
              </div>

              {/* content card with its own background image */}
              <motion.div className="flex flex-1 flex-col items-start justify-center gap-2 border border-[#43358F] bg-[lightgray] bg-[url('/images/industry-partner/Frame_1707480825.webp')] bg-cover bg-center bg-no-repeat p-[26px] md:mt-4 md:p-[30px]">
                <motion.ul
                  variants={listContainer}
                  className="space-y-[8px] text-[14px] text-black md:text-[18px]"
                >
                  {col.items.map((item) => (
                    <motion.li
                      key={item}
                      variants={listItem}
                      className="flex items-center gap-2"
                    >
                      <span className="mt-[5px] h-[4px] w-[4px] shrink-0 rounded-full bg-black" />
                      {item}
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
