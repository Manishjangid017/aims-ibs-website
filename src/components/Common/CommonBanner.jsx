import Link from 'next/link';
import { ArrowRight, Download } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeUp, viewport } from '@/_lib/motion';
import parse from 'html-react-parser';

const ease = 'easeOut';

// Background photo: slow zoom-out
const bgReveal = {
  hidden: { scale: 1.12 },
  visible: { scale: 1, transition: { duration: 1.6, ease } },
};

// Red cube: rises in after the box
const cubeReveal = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease, delay: 0.5 } },
};

// White box slides in from its own side, then its content fades up one by one
const boxVariants = (x) => ({
  hidden: { opacity: 0, x },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease, delay: 0.3, when: 'beforeChildren', staggerChildren: 0.15 },
  },
});

const BOX = { left: boxVariants(-80), right: boxVariants(80) };

const POSITION = {
  left: 'md:left-0 md:pl-[var(--edge)] md:pr-8 lg:pr-[min(12vw, 40px)]',
  right: 'md:right-0 md:pr-[var(--edge)] md:pl-8 lg:pl-[min(12vw,230px)]',
};
const CUBE_POSITION = { left: 'left-0', right: 'right-0 -scale-x-100' };

const ICONS = {
  arrow: { Icon: ArrowRight, hover: 'group-hover:translate-x-1' },
  download: { Icon: Download, hover: 'group-hover:translate-y-0.5' },
};

const VARIANTS = {
  primary:
    'border-brand-orange bg-brand-orange text-white hover:border-[#d63f14] hover:bg-[#d63f14] hover:shadow-[0_10px_20px_rgba(240,75,29,0.3)]',
  outline: 'border-black bg-white text-black hover:bg-black hover:text-white',
};

export default function CommonBanner({
  image,
  position = 'left',
  cubeImage = '/images/about-us/cube-img.webp',
  lineOne,
  lineTwo,
  description,
  actions = [],
}) {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      className="relative bg-white [--edge:max(2rem,calc((100vw_-_1344px)/2_+_2rem))]"
    >
      {/* Background image */}
      <div className="relative h-[260px] overflow-hidden sm:h-[340px] md:h-[460px] lg:aspect-[940/437] xl:aspect-[1049/437] lg:h-auto lg:min-h-[460px]">
        <motion.div
          variants={bgReveal}
          aria-hidden="true"
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        />
      </div>

      {/* White box: under the image on mobile, bottom-left / bottom-right from md up */}
      <motion.div
        variants={BOX[position]}
        className={`relative overflow-hidden bg-white px-[16px] lg:pl-[var(--edge)] py-8 md:absolute md:bottom-0 md:w-[calc(var(--edge)+clamp(380px,43vw,695px))] md:py-10 lg:py-[73px] ${POSITION[position]}`}
      >
        {/* Red cube (flipped automatically for the right side) */}
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute bottom-0 hidden aspect-[187/112] w-[160px] sm:block lg:w-[clamp(180px,17.8vw,342px)] ${CUBE_POSITION[position]}`}
        >
          <motion.div
            variants={cubeReveal}
            className="h-full w-full bg-contain bg-left-bottom bg-no-repeat"
            style={{ backgroundImage: `url(${cubeImage})` }}
          />
        </div>

        <div className="relative z-10">
          <motion.h1 variants={fadeUp} className="text-[30px] leading-tight sm:text-[32px] lg:text-[40px]">
            {lineOne && <span className="block font-light">{parse(lineOne)}</span>}
            {lineTwo && <span className="block italic">{parse(lineTwo)}</span>}
          </motion.h1>

          {description && (
            <motion.p variants={fadeUp} className="mt-4 text-sm text-black/80 lg:text-[16px]">
              {description}
            </motion.p>
          )}

          {actions.length > 0 && (
            <motion.div variants={fadeUp} className="mt-6 flex flex-wrap lg:gap-3 gap-2 lg:mt-9">
              {actions.map((action) => {
                const { Icon, hover } = ICONS[action.icon] ?? ICONS.arrow;
                const Tag = action.download ? 'a' : Link;

                return (
                  <Tag
                    key={action.label}
                    href={action.href}
                    {...(action.download ? { download: true } : {})}
                    className={`group inline-flex items-center gap-3 border px-4 lg:px-6 py-3.5 text-xs font-medium uppercase tracking-wide transition-all duration-300 hover:-translate-y-0.5 lg:text-sm ${
                      VARIANTS[action.variant] ?? VARIANTS.primary
                    }`}
                  >
                    {action.label}
                    <Icon className={`size-4 transition-transform duration-300 ${hover}`} />
                  </Tag>
                );
              })}
            </motion.div>
          )}
        </div>
      </motion.div>
    </motion.section>
  );
}
