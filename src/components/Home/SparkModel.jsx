import { useState } from 'react';
import Image from 'next/image';
import { Plus } from 'lucide-react';
import { motion } from 'framer-motion';

const viewport = { once: true, amount: 0.25 };

const PANELS = [
  {
    label: 'Skills',
    desc: 'MS Office, Advanced Excel, AI/ML, Investment Banking, Digital Marketing',
    src: 'images/home/skills-img-bg.webp',
  },
  {
    label: 'Practical Exposure',
    desc: 'Add content for Practical Exposure here.',
    src: 'images/home/skills-img-bg.webp',
  },
  {
    label: 'Attitude & Personality',
    desc: 'Add content for Attitude & Personality here.',
    src: 'images/home/skills-img-bg.webp',
  },
  { label: 'Recreation', desc: 'Add content for Recreation here.', src: 'images/home/skills-img-bg.webp' },
  { label: 'Knowledge', desc: 'Add content for Knowledge here.', src: 'images/home/skills-img-bg.webp' },
];

export default function SparkModel() {
  const [active, setActive] = useState(0); // first panel open by default; one is always open

  return (
    <motion.section
      variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      className="relative overflow-hidden bg-[#4B3A9E] bg-[url('/images/home/sparkmodel-bg-img.webp')] bg-cover bg-center pb-14 pt-12 lg:pb-[80px] lg:pt-[80px]
        after:absolute after:bottom-0 after:left-0 after:size-8 after:bg-[#F0668F] lg:after:size-10"
    >
      <div className="custom-container">
        <div className="text-center">
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
            }}
            className="text-[28px] text-white sm:text-[32px] lg:text-[48px]"
          >
            <span className="font-light">Our Secret Sauce: </span>
            <span className="font-semibold italic">The SPARK Model</span>
          </motion.h2>
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
            }}
            className="mx-auto mt-3 text-sm text-white/90 lg:text-base"
          >
            AIMS IBS offers a 360° training ecosystem that builds everything from core skills to confidence.
          </motion.p>
        </div>

        {/* Accordion: stacked rows on mobile, vertical bars from md up */}
        <motion.ul
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
          className="mt-8 flex flex-col gap-2 md:h-110 md:flex-row lg:mt-11.25 lg:h-130 lg:gap-2.5 xl:h-150.75"
        >
          {PANELS.map((p, i) => {
            const open = active === i;

            return (
              <motion.li
                key={p.label}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
                }}
                className={`relative overflow-hidden transition-[flex-grow,height] duration-700 ease-in-out md:h-full md:basis-[52px] lg:basis-[62px] ${
                  open ? 'h-80 grow' : 'h-14 grow-0'
                }`}
              >
                {/* Expanded layer: image + content */}
                <div aria-hidden={!open} className="absolute inset-0 bg-[#2A1F66]">
                  <Image
                    src={process.env.IMG_PATH + p.src}
                    alt={`${p.label} at AIMS IBS`}
                    fill
                    sizes="(min-width: 1024px) 1000px, 100vw"
                    quality={100}
                    unoptimized
                    className={`object-cover transition-transform duration-1200 ease-out ${
                      open ? 'scale-100' : 'scale-110'
                    }`}
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/25 to-transparent" />

                  <div
                    className={`absolute inset-x-0 bottom-0 p-5 transition-all duration-500 sm:p-8 lg:p-14 ${
                      open ? 'translate-y-0 opacity-100 delay-300' : 'translate-y-4 opacity-0'
                    }`}
                  >
                    <div className="min-w-60 max-w-135">
                      <h3 className="text-[24px] font-medium uppercase tracking-wide text-white sm:text-[28px] lg:text-[33px]">
                        {p.label}
                      </h3>
                      <span className="mt-3 block h-px w-9 bg-white/70" />
                      <p className="mt-4 text-xs leading-relaxed text-white/90 sm:text-[14px]">{p.desc}</p>
                    </div>
                  </div>
                </div>

                {/* Collapsed layer: "+" and label */}
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  aria-expanded={open}
                  aria-label={`Open ${p.label}`}
                  tabIndex={open ? -1 : 0}
                  className={`group absolute inset-0 z-10 flex items-center justify-between bg-[#F6F7FF] px-4 text-left transition-opacity duration-500 hover:bg-white focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-brand-orange md:flex-col-reverse md:px-0 md:py-4 ${
                    open ? 'pointer-events-none opacity-0' : 'opacity-100 delay-300'
                  }`}
                >
                  <span className="text-[16px] font-medium uppercase tracking-wide text-black transition-colors group-hover:text-brand-orange md:rotate-180 md:text-[20px] md:[writing-mode:vertical-rl]">
                    {p.label}
                  </span>
                  <Plus className="size-5 shrink-0 text-brand-orange transition-transform duration-300 group-hover:rotate-90" />
                </button>
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </motion.section>
  );
}
