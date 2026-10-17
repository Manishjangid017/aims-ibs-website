import { useRef } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const PARTNERS = [
  {
    name: 'Harvard Business Publishing Education',
    logo: 'images/home/university-img-1.webp',
    bg: 'images/home/card-bg-1.webp',
  },
  { name: 'IAE Bordeaux', logo: 'images/home/university-img-2.webp', bg: 'images/home/card-bg-2.webp' },
  { name: 'SIM University', logo: 'images/home/university-img-3.webp', bg: 'images/home/card-bg-3.webp' },
  { name: 'James Cook University', logo: 'images/home/university-img-4.webp', bg: 'images/home/card-bg-4.webp' },
  {
    name: 'Singapore Human Resources Institute (SHRI)',
    logo: 'images/home/university-img-5.webp',
    bg: 'images/home/card-bg-1.webp',
  },
  { name: 'University of Stirling', logo: 'images/home/university-img-6.webp', bg: 'images/home/card-bg-2.webp' },
  { name: 'Staffordshire University', logo: 'images/home/university-img-7.webp', bg: 'images/home/card-bg-3.webp' },
  { name: 'Putra Business School', logo: 'images/home/university-img-8.webp', bg: 'images/home/card-bg-4.webp' },
];

// Loop mode needs more slides than are visible, so the list is repeated
const LOOP_SLIDES = [...PARTNERS, ...PARTNERS];

export default function GlobalCollaborations() {
  const swiperRef = useRef(null);

  return (
    <section className="relative isolate overflow-hidden my-[44px] lg:my-[80px] bg-white [--edge:max(2rem,calc((100vw_-_1344px)/2_+_2rem))] lg:bg-[url('/images/home/global-collaboration-bg-img.webp')] bg-top lg:bg-cover">
      {/* Top row: heading (left) + text & arrows (right) */}
      <div className="grid lg:grid-cols-2 lg:items-start lg:pt-20">
        <div className="px-[var(--edge)] pb-8 pt-12 lg:pb-0 lg:pl-[5.8vw] lg:pr-4 lg:pt-0">
          <h2 className="text-3xl sm:text-4xl lg:text-[clamp(1.875rem,2.5vw,3rem)] lg:leading-tight">
            <span className="block font-light">Global Collaborations &amp;</span>
            <span className="block font-semibold italic">International Exposure</span>
          </h2>
          <span className="mt-2 block h-[3px] w-20 bg-gradient-to-r from-brand-orange to-transparent" />
        </div>

        <div className="px-[var(--edge)] pb-2 pt-3 text-white lg:bg-transparent lg:pb-0 lg:pl-0 lg:pr-[var(--edge)] lg:pt-3">
          <p className="max-w-[560px] text-sm leading-relaxed text-[#000000] lg:text-white/90 sm:text-base lg:text-lg">
            Our students receive certifications, internships, sessions, projects, and orientation, exchange &amp;
            twinning programs from a list of partnerships.
          </p>

          <div className="mt-6 flex gap-0.5 justify-end">
            <button
              type="button"
              aria-label="Previous"
              onClick={() => swiperRef.current?.slidePrev()}
              className="grid size-11 place-items-center border-2 border-brand-orange bg-[#FFF5E4] font-general-sans text-black transition-colors hover:bg-brand-orange hover:text-white"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              type="button"
              aria-label="Next"
              onClick={() => swiperRef.current?.slideNext()}
              className="grid size-11 place-items-center border-2 border-brand-orange bg-brand-orange font-general-sans text-white transition-colors hover:border-[#d63f14] hover:bg-[#d63f14]"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Slider: starts at the container's left edge and bleeds to the right edge of the screen */}
      <div className="pb-12 pt-6 lg:bg-transparent lg:pb-16 lg:pt-10">
        <div className="pl-[var(--edge)]">
          <Swiper
            modules={[Autoplay]}
            loop
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            loopAdditionalSlides={2}
            roundLengths
            slidesPerView="auto"
            spaceBetween={0}
            speed={600}
            grabCursor
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
          >
            {LOOP_SLIDES.map((p, i) => (
              <SwiperSlide key={`${p.name}-${i}`} style={{ width: 'clamp(405px, 21.3vw, 408px)' }}>
                <article className="group relative aspect-[245/253] w-[calc(100%+1px)] overflow-hidden bg-[#4B3A9E]">
                  <Image
                    src={process.env.IMG_PATH + p.bg}
                    alt=""
                    aria-hidden="true"
                    fill
                    sizes="(min-width: 1920px) 408px, 22vw"
                    quality={100}
                    unoptimized
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="relative z-10 flex h-full flex-col justify-between px-[30px] pb-[40px] pt-[40px] xl:px-[44px] xl:pb-[48px] xl:pt-[64px]">
                    <div className="relative max-h-[182px] min-h-[182px] w-full bg-white">
                      <Image
                        src={process.env.IMG_PATH + p.logo}
                        alt={p.name}
                        fill
                        sizes="320px"
                        quality={100}
                        unoptimized
                        className="object-contain"
                      />
                    </div>
                    <h3 className="text-[20px] leading-snug text-white sm:text-base xl:text-[24px]">{p.name}</h3>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
