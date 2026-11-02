import { useRef } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeUp, stagger, viewport } from '@/_lib/motion';

/* ─── Slide data ─── */
const SLIDES = [
  {
    id: 1,
    title: 'Industrial Visits',
    desc: 'See theory in action at factories, corporate offices, and logistics hubs.',
    image: 'images/about-us/career-img-4.webp',
    imageAlt: 'Students during an industrial visit at a corporate campus',
  },
  {
    id: 2,
    title: 'Industry-Relevant Certifications',
    desc: 'Practical skill-building in Excel, Digital Marketing, Financial Modelling, and more.',
    image: 'images/about-us/career-img-1.webp',
    imageAlt: 'Students receiving industry-relevant certifications',
  },
  {
    id: 3,
    title: 'C2C – Campus to Corporate Training',
    desc: 'Career readiness modules focused on business etiquette, teamwork, and leadership behavior.',
    image: 'images/about-us/career-img-3.webp',
    imageAlt: 'Students at AIMS IBS campus to corporate training program',
  },
  {
    id: 4,
    title: 'Aptitude Training & Mock Interviews',
    desc: 'Placement prep from Day 1 — reasoning, problem-solving, and panel interviews.',
    image: 'images/about-us/career-img-5.webp',
    imageAlt: 'Students at AIMS IBS campus to corporate training program',
  },
  {
    id: 5,
    title: 'Certified Workshops & Corporate Series',
    desc: 'Masterclasses by CEOs, industry experts, and consultants to keep you ahead of the curve.',
    image: 'images/about-us/career-img-2.webp',
    imageAlt: 'Students at AIMS IBS campus to corporate training program',
  },
];

/* ─── Animation variants ─── */
const headingStagger = stagger(0.14);
const shapeTransition = { duration: 0.8, ease: 'easeInOut' };

const leftShape = {
  hidden: { bottom: '5%', y: '-5%' },
  visible: { bottom: '0%', y: '0%', transition: shapeTransition },
};

/* ─── Slide Card ─── */
function SlideCard({ slide }) {
  return (
    <article className="group flex flex-col">
      <div className="relative aspect-[3/2.2] w-full overflow-hidden">
        <Image
          src={process.env.IMG_PATH + slide.image}
          alt={slide.imageAlt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 90vw"
          quality={100}
          unoptimized
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>
      <div className="py-4">
        <h3 className="text-[15px] font-semibold leading-snug text-[#1A1A2E] lg:text-[17px]">{slide.title}</h3>
        <p className="mt-1.5 text-[13px] leading-relaxed text-[#555] lg:text-sm">{slide.desc}</p>
      </div>
    </article>
  );
}

/* ─── Main export ─── */
export default function CareerDrivenPedagogy() {
  const swiperRef = useRef(null);

  return (
    <section
      className="relative overflow-hidden py-14 lg:py-[90px]"
      style={{
        background:
          'linear-gradient(135deg, #9686F0 0%, rgba(144, 128, 238, 0.00) 25.78%), linear-gradient(225deg, #9686F0 0%, rgba(144, 128, 238, 0.00) 25.78%)',
      }}
    >
      <motion.div
        aria-hidden="true"
        variants={leftShape}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="pointer-events-none absolute bottom-0 right-0 size-10 bg-[url('/images/about-us/bg-shap-7.webp')] bg-contain bg-left bg-no-repeat md:size-20 lg:size-25"
      />

      <div className="custom-container">
        {/* Heading row + arrows */}
        <motion.div
          variants={headingStagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <motion.h2
              variants={fadeUp}
              className="text-[26px] leading-tight sm:text-[30px] lg:text-[42px] lg:leading-[1.15]"
            >
              <span className="font-light">Career-Driven </span>
              <span className="font-semibold italic">Pedagogy</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-2 text-sm text-[#1A1A2E]/70 lg:text-base">
              Where classroom learning meets real-world career success.
            </motion.p>
          </div>

          {/* Arrow buttons — no disabled state, loop is infinite */}
          <motion.div variants={fadeUp} className="flex shrink-0 gap-0.5 justify-end">
            <button
              type="button"
              aria-label="Previous slide"
              onClick={() => swiperRef.current?.slidePrev()}
              className="grid size-9 lg:size-11 place-items-center border-2 border-brand-orange bg-[#FFF1EC] text-black transition-colors hover:bg-brand-orange hover:text-white"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              type="button"
              aria-label="Next slide"
              onClick={() => swiperRef.current?.slideNext()}
              className="grid size-9 lg:size-11 place-items-center border-2 border-brand-orange bg-brand-orange text-white transition-colors hover:border-[#d63f14] hover:bg-[#d63f14]"
            >
              <ChevronRight className="size-5" />
            </button>
          </motion.div>
        </motion.div>

        {/* Slider */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut', delay: 0.2 } }}
          viewport={viewport}
          className="mt-[24px] [--swiper-pagination-color:#43358F] [--swiper-pagination-bullet-inactive-color:#9686F0] [--swiper-pagination-bullet-inactive-opacity:1]"
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            loop
            slidesPerView="auto"
            spaceBetween={0}
            speed={600}
            grabCursor
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true, el: '.cdp-pagination' }}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
          >
            {SLIDES.map((s, i) => (
              <SwiperSlide
                key={`${s.id}-${i}`}
                className="mr-4 w-[calc((100%-3.2px)/1.1)]! last:mr-0 sm:mr-5 sm:w-[calc((100%-20px)/2)]! md:w-[calc((100%-40px)/2.5)]! lg:mr-6 lg:w-[calc((100%-48px)/3)]!"
              >
                <SlideCard slide={s} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Pagination dots */}
          <style>{`
            .cdp-pagination .swiper-pagination-bullet {
              width: 8px;
              height: 8px;
              border-radius: 0;
              opacity: 1;
              transition: width 0.3s ease, background-color 0.3s ease;
            }
            .cdp-pagination .swiper-pagination-bullet-active {
              width: 24px;
            }
          `}</style>
          <div className="cdp-pagination mt-6 flex justify-center gap-1" />
        </motion.div>
      </div>
    </section>
  );
}
