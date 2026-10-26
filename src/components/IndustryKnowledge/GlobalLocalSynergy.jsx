"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const networks = [
  {
    title: "Technology Leaders",
    description: "SAP, Microsoft, IBM",
    image: "/images/industry-partner/image_tech-1.webp",
    alt: "Professionals with a green digital overlay",
  },
  {
    title: "Digital-first firms",
    description: "Analytics & marketing solution providers",
    image: "/images/industry-partner/image_DIGITAL.webp",
    alt: "Robot and woman working on a laptop",
  },
  {
    title: "Human resource networks",
    description: "National Human Resource Development Network (NHRDN)",
    image: "/images/industry-partner/image_NHRD.webp",
    alt: "NHRD Network logo",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};

export default function GlobalLocalSynergy() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-12 sm:px-8 md:py-20">
      {/* yellow corner accent */}
      <span className="absolute left-0 top-0 h-[40px] w-[40px] bg-[#F0C300]" />

      <div className="custom-container ">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={stagger}
        >
          <motion.h2
            variants={fadeUp}
            className="text-[28px] lg:text-[34px] xl:text-[48px]"
          >
            Global & Local{""}
            <span className="font-semibold italic"> Synergy</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-3 max-w-[870px] text-[14px] leading-snug text-black sm:text-[16px]"
          >
            At AIMS IBS, our partnerships go beyond borders. We combine local
            industry expertise with international academic strength, giving
            students a truly global perspective while remaining grounded in
            real-world business dynamics.
          </motion.p>
        </motion.div>

        {/* Purple panel */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative mt-6 overflow-hidden bg-[#4638A6] p-[30px] md:p-[60px] text-white "
        >
          {/* big soft circle */}
          <motion.div
            aria-hidden
            initial={{ scale: 0.85, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="pointer-events-none absolute -top-[20%] -left-[20%] rounded-[457px] bg-[linear-gradient(246deg,rgba(50,0,137,0.30)_14.84%,rgba(35,0,85,0.30)_62.19%)] h-[914px] w-[914px]"
          />
          <motion.div
            className="relative"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
          >
            <motion.h3
              variants={fadeUp}
              className=" text-[24px] md:text-[26px] lg:text-[28px] text-white "
            >
              Local Industry Networks
            </motion.h3>

            <motion.p
              variants={fadeUp}
              className="mt-3 max-w-[774px] text-[14px] leading-[24px] text-[#F8F8F8] lg:text-[20px]"
            >
              Our collaborations include some of the most influential
              organizations shaping the Indian business ecosystem:
            </motion.p>

            {/* Cards */}
            <div className="mt-6 md:mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-5">
              {networks.map((item) => (
                <motion.article key={item.title} variants={fadeUp}>
                  <motion.div
                    whileHover={{ y: -6, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="rounded-[4px] border-[8px] border-[#9080EE] bg-[#000]"
                  >
                    <div
                      className={`relative aspect-[1.6/1] w-full overflow-hidden rounded-[2px] bg-black`}
                    >
                      <Image
                        src={item.image}
                        alt={item.alt}
                        fill
                        sizes="(min-width: 640px) 200px, 100vw"
                        className={"object-cover"}
                      />
                    </div>
                  </motion.div>

                  <h4 className="mt-4 text-[18px] font-medium md:text-[24px]">
                    {item.title}
                  </h4>
                  <p className="mt-1 text-[14px] leading-snug text-white md:text-[16px]">
                    {item.description}
                  </p>
                </motion.article>
              ))}
            </div>

            <motion.p
              variants={fadeUp}
              className="mt-8 mb-0 max-w-[650px] font-light text-[14px] leading-relaxed text-white md:text-[16px]"
            >
              These alliances ensure students are trained on current market
              tools, emerging technologies, and people-centric practices
              critical to today&apos;s business landscape.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
