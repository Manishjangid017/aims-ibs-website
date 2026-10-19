'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeUp } from '@/_lib/motion';

const VISIONARIES = [
  { name: 'Dr. Venkatesh Arakeri', role: 'Director, Principal', image: 'images/about-us/visionaries-img-5.webp' },
  { name: 'Ambika Venkatesh Arakeri', role: 'Executive Director', image: 'images/about-us/visionaries-img-6.webp' },
  { name: 'Dr. Chandra Sekhar Korapala', role: 'Trustee', image: 'images/about-us/visionaries-img-3.webp' },
  { name: 'Rekha Aswathanarayana', role: 'Director- Admissions', image: 'images/about-us/visionaries-img-9.webp' },
  { name: 'Satish Narayanaswamy', role: 'Trustee', image: 'images/about-us/visionaries-img-1.webp' },
  {
    name: 'Soumya Krishnamurthy',
    role: 'Director- Training & Placements',
    image: 'images/about-us/visionaries-img-2.webp',
  },
  { name: 'K J Hemanth Kumar', role: 'Trustee', image: 'images/about-us/visionaries-img-4.webp' },
  { name: 'Ramya J', role: 'Director', image: 'images/about-us/visionaries-img-7.webp' },
  { name: 'Dr. Vinaychandra Mahendrakar', role: 'Trustee', image: 'images/about-us/visionaries-img-8.webp' },
  { name: 'Suma D B', role: 'Director', image: 'images/about-us/visionaries-img-10.webp' },
];

const ease = 'easeOut';

// Each element animates when it reaches the viewport (works well for a tall list on mobile)
const inView = {
  initial: 'hidden',
  whileInView: 'visible',
  viewport: { once: true, amount: 0.3 },
};

// Cards rise in; the delay depends on the column so each row cascades left to right
const cardVariant = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (col) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease, delay: col * 0.12 },
  }),
};

// Yellow square slides in from the bottom-left corner
const squareVariant = {
  hidden: { opacity: 0, x: -40, y: 40 },
  visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.2, ease } },
};

export default function Visionaries() {
  return (
    <section className="relative overflow-hidden bg-white py-12 lg:py-[90px]">
      {/* Yellow square, bottom-left */}
      <motion.span
        aria-hidden="true"
        variants={squareVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0 }}
        className="absolute bottom-0 left-0 size-8 bg-[#F5C400] lg:size-10"
      />

      <div className="custom-container relative">
        <motion.h2
          variants={fadeUp}
          {...inView}
          className="text-center text-[28px] leading-9 sm:text-[32px] lg:text-[48px] lg:leading-13"
        >
          <span className="font-light">The Visionaries Behind </span>
          <span className="font-semibold italic">AIMS IBS</span>
        </motion.h2>

        <ul className="mt-8 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:mt-10 lg:grid-cols-3 lg:gap-5">
          {VISIONARIES.map((v, i) => (
            <motion.li key={v.name} variants={cardVariant} custom={i % 3} {...inView}>
              {/* Card frame: background image + 10px padding */}
              <article className="group relative h-43 bg-[url('/images/about-us/image-bg.webp')] bg-cover bg-center p-2.5 transition-all duration-500 ease-out hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(75,58,158,0.35)] sm:h-[190px] lg:h-[219px]">
                {/* Card body */}
                <div className="relative flex h-full items-center overflow-hidden bg-white">
                  {/* Name + designation */}
                  <div className="relative z-10 w-[56%] pl-4 pr-1 lg:pl-6 xl:pl-9">
                    <h3 className="text-base font-semibold leading-tight text-black transition-colors duration-300 group-hover:text-[#5B3FD1] lg:text-[15px] xl:text-lg 2xl:text-[24px]">
                      {v.name}
                    </h3>
                    <p className="mt-2 text-xs text-black/70 lg:text-[11px] xl:text-[14px">{v.role}</p>
                  </div>

                  {/* Background shape + photo */}
                  <div className="absolute inset-y-0 right-0 w-[52%]">
                    <div className="absolute inset-0 bg-[url('/images/about-us/visionaries-bg-img.webp')] bg-contain bg-right bg-no-repeat transition-transform duration-500 ease-out group-hover:scale-110" />
                    <Image
                      src={process.env.IMG_PATH + `${v.image}`}
                      alt={v.name}
                      fill
                      sizes="(min-width: 1280px) 196px, 160px"
                      quality={100}
                      unoptimized
                      className="origin-bottom object-contain object-bottom transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                    />
                  </div>
                </div>
              </article>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
