import React from 'react';
import { Trophy } from 'lucide-react'; // Or use your custom trophy image/icon
import { motion } from 'framer-motion';

const accreditationsData = [
  {
    id: 1,
    text: 'NAAC Accredited- A++ Grade',
  },
  {
    id: 2,
    text: 'Ranked 151st Among BRICS Nations',
    subtext: '(QS University Rankings)',
  },
  {
    id: 3,
    text: 'Top 15 Multidisciplinary Universities In India',
    subtext: '(Hansa Research, The Week 2016)',
  },
  {
    id: 4,
    text: '48+ Postgraduate Departments',
  },
  {
    id: 5,
    text: '684+ Affiliated Colleges Under Six Faculties',
  },
];

// Stacked squares — slide in from left, staggered
const squareVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: 'easeOut', delay: 0.4 + i * 0.08 },
  }),
};

export default function AccreditationsSection() {
  return (
    <section className="relative w-full min-h-[600px] py-16 lg:py-20 md:pb-30 px-4 md:px-6 flex items-center justify-center overflow-hidden custom-certificate">
      {/* Main Container Wrapper */}
      <motion.span
        variants={squareVariants}
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 bg-[#F8769A] h-[24px] w-[24px] md:h-[40px] md:w-[40px]"
      />
      <div className="relative w-full max-w-[1661px] mx-auto">
        {/* Floating Title overlapping the border */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="absolute -top-10 left-[20%] md:left-16 z-20 px-2 md:px-4 py-1 md:max-w-[290px] bg-[#EBE1EA]"
        >
          <h2 className="text-[28px] md:text-[40px] font-bold text-black tracking-tight">
            Accreditations <span className="block md:inline">& Affiliations</span>
          </h2>
        </motion.div>

        {/* Outer Gradient Border Box with Top-Left Cutout Effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-[24px] p-6 lg:p-20 pt-20 lg:pt-24 lg:pb-24"
          style={{
            borderWidth: '10px',
            borderStyle: 'solid',
            borderImage: 'linear-gradient(to left, #43358F, #CB60CE, #F26B9B, #F0A18C) 1',
          }}
        >
          {/* Grid of Accreditations */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-0 md:gap-4 items-stretch justify-center">
            {accreditationsData.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="flex flex-col items-center text-center group h-full"
              >
                {/* Container with relative positioning so images act as side borders and text sits in the middle */}
                <div className="relative flex items-center justify-center md:py-8 w-full h-full min-h-[120px] md:min-h-[160px]">
                  {/* Left Laurel Image (Absolute or Flex-aligned to left) */}
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 h-[90px] md:h-[110px] w-auto flex items-center pointer-events-none opacity-80">
                    <img
                      src={process.env.IMG_PATH + 'images/accreditations/Group.webp'}
                      alt="Laurel Left"
                      className="h-full w-auto object-contain"
                    />
                  </div>

                  {/* Center Text Content */}
                  <div className="relative z-10  w-full  flex flex-col justify-center px-8 md:px-[38px]">
                    <p className="text-[15px] md:text-[18px] font-semibold text-[#212121] leading-snug">{item.text}</p>
                    {item.subtext && (
                      <span className="text-[13px] text-[#212121] mt-1 block font-semibold md:max-w-[140px] mx-auto">
                        {item.subtext}
                      </span>
                    )}
                  </div>

                  {/* Right Laurel Image (Absolute or Flex-aligned to right) */}
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 h-[90px] md:h-[110px] w-auto flex items-center pointer-events-none opacity-80">
                    <img
                      src={process.env.IMG_PATH + 'images/accreditations/Frame.webp'}
                      alt="Laurel Right"
                      className="h-full w-auto object-contain"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* 3D Glossy Trophy on Bottom Right */}
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="absolute bottom-4 right-10 z-30 hidden md:flex flex-col items-center"
      >
        <img src={process.env.IMG_PATH + 'images/accreditations/Container.webp'} />
      </motion.div>
    </section>
  );
}
