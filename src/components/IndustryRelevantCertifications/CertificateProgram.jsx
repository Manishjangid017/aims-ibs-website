"use client";
import { motion } from "framer-motion";

const programs = [
  {
    title: "Harvard Manage Mentor – Corporate Readiness Courses",
    logos: [
      {
        src: "images/industry-relevant-certifications/image_39.webp",
        alt: "Harvard Business Publishing Education",
      },
    ],
  },
  {
    title: "Entrepreneurship & Innovation",
    logos: [{ src: "images/industry-relevant-certifications/image_62.webp", alt: "Entrepreneurship & Innovation" }],
  },
  {
    title: "Digital Marketing",
    logos: [{ src: "images/industry-relevant-certifications/image_60.webp", alt: "Google" }],
  },
  {
    title: "SAP – Finance & HR",
    logos: [{ src: "images/industry-relevant-certifications/image_63.webp", alt: "SAP" }],
  },
  {
    title: "SAP – Sales & Distribution",
    logos: [{ src: "images/industry-relevant-certifications/image_63.webp", alt: "SAP" }],
  },
  {
    title: "SAP – Materials Management",
    logos: [{ src: "images/industry-relevant-certifications/image_63.webp", alt: "SAP" }],
  },
  {
    title: "SAP – HANA / Business Intelligence ",
    logos: [{ src: "images/industry-relevant-certifications/image_63.webp", alt: "SAP" }],
  },
  {
    title: "AI & Machine Learning",
    logos: [{ src: "images/industry-relevant-certifications/image_60.webp", alt: "SAP" }],
  },
  {
    title: "Advanced Excel Course",
    logos: [{ src: "images/industry-relevant-certifications/image_61.webp", alt: "SAP" }],
  },
  {
    title: "Investment Banking and Capital Market NISM Modules",
    logos: [{ src: "images/industry-relevant-certifications/image_65.webp", alt: "SAP" }],
  },
  {
    title: "Logistics & Supply Chain Management",
    logos: [{ src: "images/industry-relevant-certifications/image_64.webp", alt: "SAP" }],
  },
  {
    title: "Certificate courses in Securities Market",
    logos: [{ src: "images/industry-relevant-certifications/Container.webp", alt: "SAP" }],
  },
  {
    title: "Investment Advisor Level 1 & 2 NISM Certifications Examinations in Securities Market ",
    logos: [{ src: "images/industry-relevant-certifications/Container.webp", alt: "SAP" }],
  },
  {
    title: "Business Analytics",
    logos: [{ src: "images/industry-relevant-certifications/image_66.webp", alt: "SAP" }],
  },
  {
    title: "HR Analytics",
    logos: [{ src: "images/industry-relevant-certifications/image_66.webp", alt: "SAP" }],
  },
  {
    title: "Artificial Intelligence & Machine Learning ",
    logos: [{ src: "images/industry-relevant-certifications/image_67.webp", alt: "SAP" }],
  },
  {
    title: "Data Science Cybersecurity",
    logos: [{ src: "images/industry-relevant-certifications/image_67.webp", alt: "SAP" }],
  },
  {
    title: "Digital Marketing",
    logos: [{ src: "images/industry-relevant-certifications/image_67.webp", alt: "SAP" }],
  },
];
const ribbon = {
  hidden: { scaleY: 0 },
  show: { scaleY: 1, transition: { delay: 0.3, duration: 0.4 } },
};
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const card = {
  hidden: { opacity: 0, y: 30 },
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
function CertificateCard({ title, logos }) {
  return (
    <motion.article
      variants={card}
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group relative md:aspect-[4/3] w-full overflow-hidden shadow-sm hover:shadow-xl min-h-[240px]  md:min-h-[300px]"
      style={{
        backgroundImage: "url('./images/industry-relevant-certifications/certificate_cards.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* left purple tab beside the logo */}
      <span className="absolute left-0 h-[72px] w-[127px] bg-[#9686F0] aspect-[25/26]" />

      {/* logo box */}
      <div className="absolute left-[6%] flex h-[72px] w-[127px] aspect-[127/72] items-center gap-2 bg-white">
        {logos.map((logo) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={logo.alt}
            src={logo.src}
            alt={logo.alt}
            className="h-full w-full object-contain"
            style={{ backgroundBlendMode: "darken, normal" }}
          />
        ))}
      </div>

      {/* bookmark ribbon */}
      <motion.img src={process.env.IMG_PATH + './images/industry-relevant-certifications/Image_15.webp'} alt=""
        variants={ribbon}
        className="absolute right-[7.5%] top-0 aspect-[12/17] w-[26px] md:w-[35px] "
      />

      {/* title */}
      <h3 className="absolute inset-x-[7%] top-[40%] md:top-[30%] text-[20px] max-w-[280px] font-normal leading-snug text-black md:text-[24px]">
        {title}
      </h3>

      {/* bottom-right stepped blocks */}
      <span className="absolute bottom-[5%] md:bottom-[8%] right-0 md:-right-[8%] h-[40px] md:h-[50px] w-[100px] md:w-[150px] bg-[#9686F0]" />
      <span className="absolute -bottom-[8%] right-[20%] md:right-[26%] h-[100px] md:h-[150px] w-[40px] md:w-[50px] bg-[#9686F0]" />

      {/* bottom-left striped strip */}
      <span
        className="absolute -bottom-[4px] -left-[20%] h-[9%] w-[300px] aspect-[69/17] "
        style={{
          backgroundImage: "url('/images/industry-relevant-certifications/sequence_patterns.webp')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "left bottom",
        }}
      />
    </motion.article>
  );
}
export default function CertificateProgram() {
  return (
    <section
      className="relative w-full overflow-hidden bg-white"
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.04) 1px, transparent 1px)",
        backgroundSize: "24px 24px",
      }}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 h-6 w-6 lg:h-[40px] lg:w-[40px]"
      >
        <motion.span
          variants={squareVariants}
          className="block h-full w-full origin-bottom-left bg-[#F8769A]"
        />
      </motion.div>

      <div className="custom-container py-12 lg:py-16 xl:py-20">
        <motion.h2
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-[30px] leading-tight text-black text-center lg:text-[34px] xl:text-[48px]"
        >
          Certificate <span className="font-bold italic">Program</span>
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-[30px] grid grid-cols-1 gap-6 md:gap-[30px] sm:grid-cols-2 lg:mt-[40px] lg:grid-cols-3"
        >
          {programs.map((p, i) => (
            <CertificateCard key={i} {...p} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
