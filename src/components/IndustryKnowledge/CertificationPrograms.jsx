"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { IBM_Plex_Sans } from "next/font/google";

const plex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

/*
  Logo images apne project ke /public/logos/ folder mein rakhein:
  microsoft.png, sap.png, ibm-spss.png, pmi.png, nhrd.png, digital-marketing.png
*/
const programs = [
  {
    logo: "images/industry-partner/Frame_1707480318.webp",
    label: "Advanced Excel",
  },
  {
    logo: "images/industry-partner/Frame_1707480318-1.webp",
    label: "SAP modules",
  },
  {
    logo: "images/industry-partner/Frame_1707480318-2.webp",
    label: "IBM SPSS Analytics",
  },
  {
    logo: "images/industry-partner/Frame_1707480318-3.webp",
    label: "Project Management",
  },
  {
    logo: "images/industry-partner/Frame_1707480318-4.webp",
    label: "HR best practices through NHRDN collaboration",
  },
  {
    logo: "images/industry-partner/Frame_1707480318-5.webp",
    label: "Digital Marketing",
  },
];

/* Purple rosette / gear style icon (6 lobes), generated with polar coordinates */
function RosetteIcon({ className = "" }) {
  const points = [];
  const steps = 240;
  for (let i = 0; i <= steps; i++) {
    const t = (i / steps) * Math.PI * 2;
    const r = 19 + 5 * Math.cos(6 * t);
    points.push(
      `${(32 + r * Math.cos(t)).toFixed(2)},${(32 + r * Math.sin(t)).toFixed(2)}`,
    );
  }
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <polygon
        points={points.join(" ")}
        stroke="#9D7CF4"
        strokeWidth="5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};
const squareVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.45, ease: "backOut", delay: 0.3 },
  },
};
export default function CertificationPrograms() {
  return (
    <section
      className={`${plex.className} relative w-full overflow-hidden bg-white py-10 sm:py-14`}
    >
      {/* Orange corner block (top right) */}
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
      <div className="mx-auto w-full max-w-[1680px] px-4 sm:px-8 lg:px-16">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 sm:gap-6 md:gap-[30px]"
        >
          <motion.div
            initial={{ rotate: -90, opacity: 0 }}
            whileInView={{ rotate: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="shrink-0 hidden sm:block"
          >
            <img src="images/industry-partner/Layer_2.svg" />
          </motion.div>

          <div>
            <h2 className="text-[28px] lg:text-[34px] xl:text-[48px]">
              Expert-Led{" "}
              <span className="font-semibold italic">
                Certification Programs
              </span>
            </h2>
            <p className="mt-3 max-w-[740px] text-[14px] leading-snug text-black sm:text-[16px]">
              These programs are taught by seasoned professionals and tailored
              to industry-grade applications, so students finish with skills
              that matter.
            </p>
          </div>
        </motion.div>

        {/* Gradient bordered box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-8 bg-[linear-gradient(to_right,#F0A18C,#F26B9B,#CB60CE,#43358F)] p-2 sm:mt-10 sm:p-3 lg:p-[14px]"
        >
          <motion.ul
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-2 gap-x-4 gap-y-10 bg-white px-4 py-10 sm:grid-cols-3 sm:px-8 lg:grid-cols-6 lg:gap-x-6 lg:px-[100px] lg:py-[60px]"
          >
            {programs.map((p) => (
              <motion.li
                key={p.label}
                variants={item}
                transition={{ type: "spring", stiffness: 300, damping: 18 }}
                className="flex flex-col items-center justify-start text-center"
              >
                <div className="relative flex w-full items-center justify-center">
                  <Image
                    src={process.env.IMG_PATH + p.logo}
                    alt={p.label}
                    width={190}
                    height={100}
                    className="object-contain"
                  />
                </div>
                <span className="text-[12px] leading-snug text-black sm:text-[14px]">
                  {p.label}
                </span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
}
