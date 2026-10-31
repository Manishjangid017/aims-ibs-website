import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeUp, stagger, viewport } from '@/_lib/motion';

const BANKS = [
  { name: 'SBI', logo: 'images/about-us/bank-logo-15.svg' },
  { name: 'ICICI Bank', logo: 'images/about-us/bank-logo-8.svg' },
  { name: 'HDFC Bank', logo: 'images/about-us/bank-logo-6.svg' },
  { name: 'Kotak Mahindra Bank', logo: 'images/about-us/bank-logo-11.svg' },
  { name: 'Axis Bank', logo: 'images/about-us/bank-logo-4.svg' }, // check
  { name: 'Aditya Birla Group', logo: 'images/about-us/bank-logo-2.svg' }, // check
  { name: 'Union Bank of India', logo: 'images/about-us/bank-logo-17.svg' },
  { name: 'Bank of india', logo: 'images/about-us/bank-logo-5.svg' }, // check
  { name: 'Punjab National Bank', logo: 'images/about-us/bank-logo-13.svg' },
  { name: 'Credila', logo: 'images/about-us/bank-logo-7.svg' },
  { name: 'Neev', logo: 'images/about-us/bank-logo-12.svg' },
  { name: 'State Bank of Sikkim', logo: 'images/about-us/bank-logo-16.svg' },
  { name: 'Karnataka Bank', logo: 'images/about-us/bank-logo-10.svg' },
  { name: 'IDFC First Bank', logo: 'images/about-us/bank-logo-9.svg' },
  { name: 'Au small finnance bank', logo: 'images/about-us/bank-logo-3.svg' }, // check
  { name: 'Yes Bank', logo: 'images/about-us/bank-logo-18.svg' },
  { name: 'Propelld', logo: 'images/about-us/bank-logo-14.svg' },
  { name: 'Canara bank', logo: 'images/about-us/bank-logo-1.svg' }, // check
];

/* ---------- Animations ---------- */
const ease = 'easeOut';
const sectionStagger = stagger(0.12);
const gridStagger = stagger(0.05);

const cardIn = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease } },
};

const bgShapeIn = {
  hidden: { opacity: 0, x: -60, y: 30 },
  visible: { opacity: 1, x: 0, y: 0, transition: { duration: 1, ease } },
};

export default function PartnerBanks() {
  return (
    <motion.section
      variants={sectionStagger}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      className="relative overflow-hidden bg-white py-12 lg:pb-[95px] lg:pt-[100px]"
    >
      {/* Bottom-left background shape (add banks-bg-shape.webp) */}
      <motion.div
        aria-hidden="true"
        variants={bgShapeIn}
        className="pointer-events-none absolute bottom-0 left-0 z-0 h-[220px] w-[270px] bg-[url('/images/about-us/transprent-cube-bg.webp')] bg-contain bg-left-bottom bg-no-repeat md:h-[320px] md:w-[400px] lg:h-[400px] lg:w-[493px]"
      />

      <div className="custom-container relative z-10">
        <motion.div variants={fadeUp}>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] lg:leading-tight">
            <span className="font-light">Partner Banks &amp; </span>
            <span className="font-semibold italic">NBFCs</span>
          </h2>
          <p className="mt-3 text-sm text-black/80 lg:mt-4 lg:text-[17px]">
            Trusted Financial Institutions Supporting Our Students
          </p>
        </motion.div>

        <motion.ul
          variants={gridStagger}
          className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:mt-[60px] lg:grid-cols-6 lg:gap-5"
        >
          {BANKS.map((bank) => (
            <motion.li key={bank.name} variants={cardIn}>
              <div className="group relative h-[84px] border border-[#E5E5E5] bg-white shadow-[0_4px_20px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(67,53,143,0.18)] sm:h-24 lg:h-[111px]">
                <Image
                  src={process.env.IMG_PATH + bank.logo}
                  alt={bank.name}
                  fill
                  sizes="(min-width: 1024px) 198px, (min-width: 640px) 33vw, 50vw"
                  quality={100}
                  unoptimized
                  className="object-contain p-[12px] transition-transform duration-300 group-hover:scale-105 lg:p-[14px]"
                />
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </motion.section>
  );
}
