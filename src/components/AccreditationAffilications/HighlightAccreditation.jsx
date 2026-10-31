import Image from 'next/image';
import { motion } from 'framer-motion';

const ROW1_HIGHLIGHTS = [
  'Recognized by the Ministry of Higher Education Govt. of Karnataka',
  'Governed under the Department of Higher Education',
  {
    main: 'Subdivisions include:',
    sub: [
      'Department of Collegiate Education',
      'Department of Technical Education',
      'Karnataka State Higher Education Council',
      'Karnataka Examination Authority',
    ],
  },
  'AICTE-Compliant Curriculum & Academic Standards',
  'Ensuring national credibility and institutional trust',
];

const ROW2_HIGHLIGHTS = [
  'Academic Collaboration with Université Montesquieu – Bordeaux IV, France',
  'Affiliated with Université de Bordeaux, France',
  'Opportunities for academic exchange & global immersion',
  'Exposure to international curriculum frameworks & research perspectives',
  'Enhancing student readiness for global careers',
];

/* ─────────────────────────────────────────────
   Motion variants
───────────────────────────────────────────── */
const ease = [0.22, 1, 0.36, 1];

const rowVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13 } },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.75, ease } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.75, ease } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: 'easeOut' },
  },
};

const imgReveal = {
  hidden: { opacity: 0, scale: 1.06 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, ease, delay: 0.2 },
  },
};

/* ─────────────────────────────────────────────
   Highlights Card
───────────────────────────────────────────── */
const BOX_COLORS = ['#FFD6E7', '#FFF3B0', '#D9D4FA', '#C9ECFF'];

function HighlightCard({ items, decoratorSide = 'right', motionVariant }) {
  return (
    <motion.div
      variants={motionVariant}
      whileHover="hover"
      initial="initial"
      className={`group relative flex h-full flex-col overflow-hidden bg-white ${
        decoratorSide === 'right'
          ? 'border-l-[3px] border-solid border-[#F04B1D]'
          : 'border-r-[3px] border-solid border-[#9080EE]'
      } lg:p-[48px] lg:px-[56px] p-[30px] pb-[50px] lg:pb-auto shadow-[0_4px_6px_-2px_rgba(66,77,87,0.10),0_12px_16px_-4px_rgba(66,77,87,0.15)] transition-shadow duration-300 cursor-default`}
    >
      {/* Card heading */}
      <h3 className="mb-5 text-black text-[30px] lg:text-[48px]">Highlights</h3>

      {/* Bullet list */}
      <ul className="flex-1 space-y-3 relative z-20">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <span
              className={`mt-[6px] h-[7px] w-[7px] shrink-0 ${
                decoratorSide === 'right' ? 'bg-[#F04B1D]' : 'bg-[#9080EE]'
              }`}
            />
            <span className="text-[14px] md:text-[15px] text-black">
              {typeof item === 'string' ? (
                item
              ) : (
                <>
                  {item.main}
                  <ul className="mt-1 space-y-0.5 pl-2">
                    {item.sub.map((s, j) => (
                      <li key={j} className="text-[14px] md:text-[15px] text-black">
                        · {s}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </span>
          </li>
        ))}
      </ul>

      {/* Decorative stacked vertical lines */}
      <div
        className={`pointer-events-none absolute bottom-0 flex items-end gap-[3px] w-[300px] md:w-[500px] z-30 ${
          decoratorSide === 'right' ? '-right-[60%]' : '-left-[60%]'
        }`}
      >
        <img
          src={process.env.IMG_PATH + 'images/accreditations/Group_163.webp'}
          alt="Decoration"
          className="w-full h-auto object-contain relative z-10"
        />
      </div>

      {/* 4 colour boxes — bottom se slide-up, sirf hover par */}
      <div
        className={`pointer-events-none absolute bottom-0 z-[5] flex items-end gap-2 ${
          decoratorSide === 'right' ? 'left-[56px]' : 'right-[56px]'
        }`}
      >
        {BOX_COLORS.map((color, i) => (
          <motion.span
            key={i}
            variants={{
              initial: { y: '100%', opacity: 0 },
              hover: {
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                  delay: i * 0.08, // ek ke baad ek aaye
                },
              },
            }}
            transition={{ duration: 0.3, ease: 'easeIn' }} // hover hatne par wapas niche
            className="block h-[14px] w-[20px] md:h-[24px] md:w-[36px]"
            style={{ backgroundColor: color }}
          />
        ))}
      </div>

      {/* Hover glow — bottom-right ya bottom-left se */}
      <motion.div
        variants={{
          initial: { opacity: 0, scale: 0.6 },
          hover: { opacity: 1, scale: 1 },
        }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`pointer-events-none absolute w-[280px] h-[280px] md:w-[350px] md:h-[350px] rounded-full blur-2xl z-10 ${
          decoratorSide === 'right' ? '-bottom-20 -right-20 bg-[#F04B1D]/25' : '-bottom-20 -left-20 bg-[#9080EE]/25'
        }`}
      />
    </motion.div>
  );
}
/* ─────────────────────────────────────────────
   Text + Image Block (left or right layout)
───────────────────────────────────────────── */
function TextImageBlock({ heading, headingBold, description, imgSrc, imgAlt, textColor, motionVariant }) {
  return (
    <motion.div variants={motionVariant} className="flex flex-col justify-between gap-8 lg:gap-[60px]">
      <motion.div variants={motionVariant} className="flex flex-col justify-between gap-4 md:gap-6 lg:gap-8">
        {/* Heading */}
        <motion.h2
          variants={fadeUp}
          className={` text-[28px] lg:text-[34px] xl:text-[48px] leading-tight ${textColor}`}
        >
          <span>{heading} </span>
          <span className="font-bold italic">{headingBold}</span>
        </motion.h2>

        {/* Description */}
        <motion.p variants={fadeUp} className={`text-[14px] lg:text-[16px] max-w-[500px] ${textColor} `}>
          {description}
        </motion.p>
      </motion.div>

      {/* Building photo */}
      <motion.div
        variants={imgReveal}
        className="relative w-full overflow-hidden aspect-[16/9] sm:aspect-[4/3] lg:aspect-[16/9] h-[207px] cursor-pointer"
      >
        <motion.div
          className="absolute inset-0"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src={process.env.IMG_PATH + imgSrc}
            alt={imgAlt}
            fill
            sizes="(min-width: 1024px) 44vw, 100vw"
            className="object-cover object-center"
            quality={100}
            unoptimized
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   Main Component
───────────────────────────────────────────── */
export default function HighlightAccreditation() {
  return (
    <section className="w-full">
      {/* ══════════════════════════════════════
          ROW 1 — Purple background
      ══════════════════════════════════════ */}
      <motion.div
        variants={rowVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="relative bg-brand-purple"
      >
        <div className="custom-container py-12 lg:py-16 xl:py-20">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10 xl:gap-14">
            {/* Left: Regulatory Recognition */}
            <TextImageBlock
              motionVariant={fadeLeft}
              heading="Regulatory"
              headingBold="Recognition"
              description="Our academic foundation is strengthened through alignment with respected national regulatory bodies and state-level education authorities. This ensures that all programs meet the highest standards of academic quality, transparency, and accountability."
              imgSrc="images/accreditations/Rectangle_3467012.webp"
              imgAlt="Government building - Karnataka"
              textColor="text-white"
            />

            {/* Right: Highlights card */}
            <HighlightCard items={ROW1_HIGHLIGHTS} decoratorSide="right" motionVariant={fadeRight} />
          </div>
        </div>
      </motion.div>

      {/* ══════════════════════════════════════
          ROW 2 — Orange background
      ══════════════════════════════════════ */}
      <motion.div
        variants={rowVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="relative bg-brand-orange"
      >
        <div className="custom-container py-12 lg:py-16 xl:py-20">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10 xl:gap-14">
            {/* Left: Highlights card */}
            <HighlightCard items={ROW2_HIGHLIGHTS} decoratorSide="left" motionVariant={fadeLeft} />

            {/* Right: Global Academic Partnerships */}
            <TextImageBlock
              motionVariant={fadeRight}
              heading="Global Academic"
              headingBold="Partnerships"
              description="In today's interconnected world, exposure to international academic ecosystems is vital. Through our global collaborations, students gain access to cross-cultural learning, research exchange, and global networking opportunities. These partnerships not only broaden academic horizons but also prepare our learners to thrive in diverse professional environments across the globe."
              imgSrc="images/accreditations/Rectangle_34670121.webp"
              imgAlt="Global academic partnership building"
              textColor="text-white"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
