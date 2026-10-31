import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeUp, fadeLeft, stagger, viewport } from '@/_lib/motion';

const CARDS = [
  {
    id: 1,
    text: '70% Practical Learning, 30% Theory',
    bg: 'images/home/card-bg-1.webp',
  },
  {
    id: 2,
    text: 'Builds decision-making, team collaboration & critical thinking',
    bg: 'images/home/card-bg-2.webp',
  },
  {
    id: 3,
    text: 'Designed to meet the demands of Industry 4.0 & Education 4.0',
    bg: 'images/home/card-bg-3.webp',
  },
  {
    id: 4,
    text: 'Aligned with global B-school teaching trends',
    bg: 'images/home/card-bg-4.webp',
  },
];

/* ─── Animation variants ─── */
const ease = 'easeOut';

const wrapperStagger = stagger(0.13);

const cardVariant = {
  hidden: { opacity: 0, y: 50, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.65, ease } },
};

/* ─── Main export ─── */
export default function IndustryAligned() {
  return (
    <section className="relative overflow-hidden bg-white pb-14 lg:pb-[90px]">
      {/* Bottom-left decorative box */}
      <motion.span
        aria-hidden="true"
        initial={{ opacity: 0, x: -20, y: 20 }}
        whileInView={{ opacity: 1, x: 0, y: 0, transition: { duration: 0.7, ease } }}
        viewport={viewport}
        className="absolute bottom-0 left-0 size-8 bg-[#9686F0] lg:size-[40px]"
      />

      <div className="custom-container">
        {/* Heading */}
        <motion.div
          variants={stagger(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mb-10 lg:mb-14"
        >
          <motion.h2
            variants={fadeUp}
            className="text-[26px] leading-tight sm:text-[30px] lg:text-[42px] lg:leading-[1.15]"
          >
            <span className="font-light">Aligned with</span>
            <br />
            <span className="font-bold">Industry 4.0 &amp; Education 4.0</span>
          </motion.h2>

          {/* Underline accent */}
          <motion.span
            variants={fadeLeft}
            className="mt-3 block w-16"
            style={{ height: '8px', background: 'linear-gradient(90deg, #FF734C 0%, #FFD3B1 100%)' }}
          />
        </motion.div>

        {/* 4-card grid */}
        <motion.div
          variants={wrapperStagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4"
        >
          {CARDS.map((card) => (
            <motion.article
              key={card.id}
              variants={cardVariant}
              className="group relative flex min-h-[240px] items-start overflow-hidden lg:min-h-[333px]"
            >
              {/* Background image */}
              <Image
                src={process.env.IMG_PATH + card.bg}
                alt=""
                aria-hidden="true"
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                quality={100}
                unoptimized
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Dark gradient overlay for readability */}
              <div
                className="absolute inset-0 z-[1]"
                style={{
                  background: 'linear-gradient(180deg, rgba(75,58,158,0.30) 0%, rgba(75,58,158,0.75) 100%)',
                }}
              />
              <div className=" pt-12 lg:pt-20 lg:px-9 px-6">
                {/* Text */}
                <h3 className="relative z-[2] text-[18px] font-normal leading-snug text-white lg:text-[24px]">
                  {card.text}
                </h3>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
