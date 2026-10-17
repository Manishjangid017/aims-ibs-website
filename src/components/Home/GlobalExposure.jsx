import Image from 'next/image';
import { motion } from 'framer-motion';
import Marquee from 'react-fast-marquee';

const COLUMNS = [
  [
    { src: 'images/home/global-exposure-img-1.webp', alt: 'Students on international exchange, photo 1' },
    { src: 'images/home/global-exposure-img-2.webp', alt: 'Students on international exchange, photo 2' },
  ],
  [{ src: 'images/home/global-exposure-img-3.webp', alt: 'Students on international exchange, photo 3' }],
  [
    { src: 'images/home/global-exposure-img-4.webp', alt: 'Students on international exchange, photo 4' },
    { src: 'images/home/global-exposure-img-5.webp', alt: 'Students on international exchange, photo 5' },
  ],
];

const SHIFT = 80; // px the shapes travel
const shapeTransition = { duration: 1, ease: 'easeOut' };

// Right shape: comes down from above into place
const rightShape = {
  hidden: { y: -SHIFT },
  visible: { y: 0, transition: shapeTransition },
};

// Bottom-left shape: comes up from below into place
const leftShape = {
  hidden: { y: SHIFT },
  visible: { y: 0, transition: shapeTransition },
};

export default function GlobalExposure() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="relative overflow-hidden bg-white bg-[url('/images/home/gird-bg-img.webp')] bg-cover bg-center py-14 lg:py-20
        before:pointer-events-none before:absolute before:left-4 before:top-4 before:h-5 before:w-11 before:bg-[url('/images/home/bg-shap-left-squre.webp')] before:bg-contain before:bg-left before:bg-no-repeat md:before:left-8 md:before:h-7 md:before:w-16 2xl:before:left-[2.6vw] 2xl:before:top-[76px] 2xl:before:h-9 2xl:before:w-21
        after:pointer-events-none after:absolute after:right-4 after:top-4 after:h-5 after:w-11 after:bg-[url('/images/home/bg-shap-1.webp')] after:bg-contain after:bg-right after:bg-no-repeat md:after:right-8 md:after:h-7 md:after:w-16 2xl:after:right-[2.6vw] 2xl:after:top-[76px] 2xl:after:h-9 2xl:after:w-21"
    >
      <div className="custom-container relative">
        <h2 className="text-[28px] sm:text-[32px] lg:text-[48px]">
          <span className="font-light">Global Exposure &amp; </span>
          <span className="font-semibold italic">International Exchange</span>
        </h2>

        <div className="relative mt-6 lg:mt-10">
          {/* Top-right shape */}
          <motion.div
            aria-hidden="true"
            variants={rightShape}
            className="pointer-events-none absolute -right-10 -top-10 z-0 size-16 bg-[url('/images/home/shap-right.webp')] bg-contain bg-right-top bg-no-repeat md:-right-12 md:-top-12 md:size-20 lg:-right-15 lg:-top-15 lg:size-25"
          />

          {/* Bottom-left shape */}
          <motion.div
            aria-hidden="true"
            variants={leftShape}
            className="pointer-events-none absolute -bottom-10 -left-10 z-0 size-16 bg-[url('/images/home/shap-left.webp')] bg-contain bg-left-bottom bg-no-repeat md:-bottom-12 md:-left-12 md:size-20 lg:-bottom-15 lg:-left-15 lg:size-25"
          />

          {/* Photo grid */}
          <div className="relative z-10 grid grid-cols-3 gap-2 sm:gap-3">
            {COLUMNS.map((col, i) => (
              <div key={i} className="flex flex-col gap-2 sm:gap-3">
                {col.map((photo) => (
                  <div
                    key={photo.src}
                    className={`group relative overflow-hidden ${col.length === 1 ? 'min-h-0 flex-1' : 'aspect-[260/187]'}`}
                  >
                    <Image
                      src={process.env.IMG_PATH + photo.src}
                      alt={photo.alt}
                      fill
                      sizes="(min-width: 1344px) 416px, 33vw"
                      quality={100}
                      unoptimized
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-110 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                    />

                    {/* Purple tint */}
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#3F2E8F]/60 via-[#3F2E8F]/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    />

                    {/* Inner frame */}
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-2 scale-95 border border-white/80 opacity-0 transition-all duration-500 ease-out group-hover:scale-100 group-hover:opacity-100 sm:inset-3"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
