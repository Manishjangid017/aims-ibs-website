'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeUp, stagger, viewport } from '@/_lib/motion';

/* ---------- JSON data ---------- */
const METHODS = [
  {
    title: 'Case Study Analysis',
    desc: 'Understand business decisions through Harvard-style case studies and Indian market scenarios.',
    icon: 'images/about-us/methodology-icon-6.webp',
  },
  {
    title: 'Live & Primary Research Projects',
    desc: 'Work on real company assignments and primary field research that sharpen critical and analytical thinking.',
    icon: 'images/about-us/methodology-icon-1.webp',
  },
  {
    title: 'Role Plays & Simulations',
    desc: 'Step into leadership, negotiation, and crisis roles that mirror corporate situations.',
    icon: 'images/about-us/methodology-icon-2.webp',
  },
  {
    title: 'Group Discussions & News Analysis',
    desc: 'Engage in current affairs debates and industry news decoding to enhance your market awareness.',
    icon: 'images/about-us/methodology-icon-3.webp',
  },
  {
    title: 'Business Scenario & Concept Reviews',
    desc: 'Stay updated with global and Indian market trends through structured analysis sessions.',
    icon: 'images/about-us/methodology-icon-4.webp',
  },
  {
    title: 'Research Paper & Article Analysis',
    desc: 'Critically evaluate industry white papers, academic journals, and thought leadership articles.',
    icon: 'images/about-us/methodology-icon-5.webp',
  },
];

// 4 small boxes that slide up from the bottom of the card on hover
const BOXES = [
  { color: 'bg-[#FBD9E6]', delay: '' },
  { color: 'bg-[#F7EAAE]', delay: 'group-hover:delay-75' },
  { color: 'bg-[#CEC6EF]', delay: 'group-hover:delay-150' },
  { color: 'bg-[#BDE5F8]', delay: 'group-hover:delay-200' },
];

/* ---------- Animations ---------- */
const ease = 'easeOut';

const sectionStagger = stagger(0.15);
const cardsStagger = stagger(0.1);

const cardIn = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease } },
};

const squarePop = {
  hidden: { opacity: 0, scale: 0 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease, delay: 0.4 } },
};

export default function TeachingMethodology() {
  return (
    <motion.section
      variants={sectionStagger}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      className="relative overflow-hidden bg-[#4B3A9E] bg-[url('/images/about-us/methodology-bg-img.webp')] bg-cover bg-center pb-14 pt-14 lg:pb-[98px] lg:pt-[100px]"
    >
      {/* Bottom-right square (separate) */}
      <motion.span
        aria-hidden="true"
        variants={squarePop}
        className="absolute bottom-0 right-0 size-8 origin-bottom-right bg-[#F0668F] lg:size-[50px]"
      />

      <div className="custom-container">
        <motion.h2 variants={fadeUp} className="text-[28px] text-white sm:text-[32px] lg:text-[48px] lg:leading-tight">
          <span className="font-light">Key Elements of Our </span>
          <span className="font-semibold italic">Teaching Methodology</span>
        </motion.h2>

        <motion.ul variants={cardsStagger} className="mt-6 grid gap-4 md:grid-cols-2 lg:mt-10 lg:gap-[24px]">
          {METHODS.map((m) => (
            <motion.li key={m.title} variants={cardIn}>
              <article className="group relative flex min-h-[152px] items-center justify-between gap-2 overflow-hidden border border-[#8D78F0] bg-white px-6 pb-8 pt-6 transition-shadow duration-500 hover:shadow-[0_16px_40px_rgba(0,0,0,0.25)] lg:px-[22px]">
                {/* Hover: grid image in the background (add card-grid-bg.webp) */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-[url('/images/methodology/card-grid-bg.webp')] bg-cover bg-center opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />

                {/* Hover: gradient on the right side */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-y-0 right-0 w-[45%] bg-gradient-to-l from-[#8E7BF5] via-[#B9AEF9]/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />

                {/* Text */}
                <div className="relative z-10 max-w-[460px]">
                  <h3 className="text-lg font-medium leading-snug text-black lg:text-[25px]">{m.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-black/80 lg:text-[16px]">{m.desc}</p>
                </div>

                {/* Icon: tilts -20deg on hover */}
                <div className="relative z-10 size-18 shrink-0 transition-transform duration-500 ease-out group-hover:-rotate-20 group-hover:scale-110 sm:size-16 lg:size-25">
                  <Image
                    src={process.env.IMG_PATH + m.icon}
                    alt=""
                    aria-hidden="true"
                    fill
                    sizes="80px"
                    quality={100}
                    unoptimized
                    className="object-contain"
                  />
                </div>

                {/* Hover: 4 boxes rise from the bottom of the card */}
                <div aria-hidden="true" className="absolute bottom-0 left-[24%] z-10 flex gap-2.5">
                  {BOXES.map((b, i) => (
                    <span
                      key={i}
                      className={`h-5 w-[30px] translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0 ${b.color} ${b.delay}`}
                    />
                  ))}
                </div>
              </article>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </motion.section>
  );
}
