import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { ChevronLeft, ChevronRight, Download, Play } from 'lucide-react';
import Marquee from 'react-fast-marquee';
import Image from 'next/image';
import { motion } from 'framer-motion';

const VIDEOS = [
  { id: 1, name: 'Devaiah K U', src: 'images/home/placement-1.mp4', poster: 'images/home/video-img-1.webp' },
  { id: 2, name: 'Anjali', src: 'images/home/placement-2.mp4', poster: 'images/home/video-img-2.webp' },
  { id: 3, name: 'Devaiah K U', src: 'images/home/placement-1.mp4', poster: 'images/home/video-img-1.webp' },
  { id: 4, name: 'Anjali', src: 'images/home/placement-2.mp4', poster: 'images/home/video-img-2.webp' },
  { id: 5, name: 'Devaiah K U', src: 'images/home/placement-1.mp4', poster: 'images/home/video-img-1.webp' },
  { id: 6, name: 'Anjali', src: 'images/home/placement-2.mp4', poster: 'images/home/video-img-2.webp' },
];

const STATS = [
  { value: '94%', unit: '', label: 'Placement Rate' },
  { value: '₹6.8', unit: 'LPA', label: 'Average Package' },
  { value: '₹14.5', unit: 'LPA', label: 'Highest Package', highlight: true },
  { value: '200+', unit: '', label: 'Hiring Partners' },
];

function VideoCard({ name, src, poster }) {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    videoRef.current?.play();
    setPlaying(true);
  };

  return (
    <div className="relative aspect-[3/5] overflow-hidden bg-black shadow-[0px_8px_10px_-6px_#0000001A,0px_20px_25px_-5px_#0000001A]">
      <video
        ref={videoRef}
        src={src}
        poster={process.env.IMG_PATH + poster}
        preload="metadata"
        playsInline
        controls={playing}
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
        className="h-full w-full object-cover"
      />
      {!playing && (
        <button
          type="button"
          aria-label={`Play ${name}'s video`}
          onClick={handlePlay}
          className="absolute left-1/2 top-1/2 grid size-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-[#FF7A00] text-white transition-transform duration-300 hover:scale-110 lg:size-14"
        >
          <Play className="size-5 fill-white" />
        </button>
      )}
    </div>
  );
}

function LogoRow({ logos, direction }) {
  return (
    <Marquee direction={direction} speed={40} gradient={false} autoFill pauseOnHover>
      {logos.map((logo) => (
        <div
          key={logo.src}
          className="relative mx-2 h-14 w-28 border border-[#D9DDEA] bg-white sm:mx-3 sm:h-16 sm:w-36 lg:mx-3.5 lg:h-[73px] lg:w-[167px]"
        >
          <Image
            src={process.env.IMG_PATH + logo.src}
            alt={logo.alt}
            fill
            sizes="170px"
            quality={100}
            unoptimized
            className="object-contain"
          />
        </div>
      ))}
    </Marquee>
  );
}

const LOGOS = [
  { src: 'images/home/company-logo-1.webp', alt: 'Company logo 1' },
  { src: 'images/home/company-logo-2.webp', alt: 'Company logo 2' },
  { src: 'images/home/company-logo-3.webp', alt: 'Company logo 3' },
  { src: 'images/home/company-logo-4.webp', alt: 'Company logo 4' },
  { src: 'images/home/company-logo-5.webp', alt: 'Company logo 5' },
  { src: 'images/home/company-logo-6.webp', alt: 'Company logo 6' },
];

const ROW_2 = [
  { src: 'images/home/company-logo-7.webp', alt: 'Company logo 7' },
  { src: 'images/home/company-logo-8.webp', alt: 'Company logo 8' },
  { src: 'images/home/company-logo-9.webp', alt: 'Company logo 9' },
  { src: 'images/home/company-logo-10.webp', alt: 'Company logo 10' },
  { src: 'images/home/company-logo-11.webp', alt: 'Company logo 11' },
  { src: 'images/home/company-logo-12.webp', alt: 'Company logo 12' },
];

export default function Placements() {
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const sync = (swiper) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  return (
    <section className="bg-white pt-12 lg:pt-[100px] pb-[20px] lg:pb-[40px]">
      <div className="custom-container">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-[50px] mb-[44px] lg:mb-[64px]">
          {/* Left: video slider */}
          <div className="order-2 min-w-0 lg:order-1">
            <Swiper
              modules={[Autoplay]}
              loop
              loopedslides={2}
              roundLengths
              slidesPerView="auto"
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              spaceBetween={0}
              speed={600}
              className="!pb-6"
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
                sync(swiper);
              }}
              onSlideChange={sync}
              onResize={sync}
              onUpdate={sync}
            >
              {VIDEOS.map((v) => (
                <SwiperSlide
                  key={v.id}
                  className="mr-4 w-[calc((100%-16px)/1.25)]! last:mr-0 sm:mr-6 sm:w-[calc((100%-24px)/2)]!"
                >
                  <VideoCard {...v} />
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="flex gap-0.5">
              <button
                type="button"
                aria-label="Previous"
                onClick={() => swiperRef.current?.slidePrev()}
                className="grid size-11 place-items-center border-2 border-brand-orange bg-[#FFF5E4] text-black transition-colors hover:bg-brand-orange hover:text-white disabled:pointer-events-none disabled:opacity-50"
              >
                <ChevronLeft className="size-5" />
              </button>
              <button
                type="button"
                aria-label="Next"
                onClick={() => swiperRef.current?.slideNext()}
                className="grid size-11 place-items-center border-2 border-brand-orange bg-brand-orange text-white transition-colors hover:border-[#d63f14] hover:bg-[#d63f14] disabled:pointer-events-none disabled:opacity-50"
              >
                <ChevronRight className="size-5" />
              </button>
            </div>
          </div>

          {/* Right: content */}
          <div className="order-1 min-w-0 lg:order-2">
            <h2 className="text-[28px] sm:text-[32px] lg:text-[48px] lg:leading-[52px]">
              <span className="block font-light">Placements That</span>
              <span className="block">
                <span className="font-light">Define </span>
                <span className="font-semibold italic">Careers</span>
              </span>
            </h2>

            {/* Stats */}
            <div className="mt-6 bg-[url('/images/home/placement-stats-bg-img.webp')] bg-cover bg-center p-3 sm:p-4 lg:p-5">
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3">
                {STATS.map((s) => (
                  <div
                    key={s.label}
                    className={`flex aspect-square flex-col items-center justify-center border border-[#8D78F0] p-2 text-center ${
                      s.highlight
                        ? "bg-[url('/images/home/placement-box-bg.webp')] bg-cover bg-center text-white"
                        : 'bg-white text-[#3F2E8F]'
                    }`}
                  >
                    <p className="text-[26px] font-bold leading-none lg:text-[28px] xl:text-[33px]">
                      {s.value}
                      {s.unit && <span className="ml-0.5 text-xs font-medium">{s.unit}</span>}
                    </p>
                    <p
                      className={`mt-2 text-[11px] font-medium uppercase leading-tight xl:text-[13px] ${
                        s.highlight ? 'text-white' : 'text-black/80'
                      }`}
                    >
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <p className="mt-5 text-sm leading-relaxed text-black/80 lg:text-[16px]">
              AIMS IBS&rsquo;s dedicated placement cell works year-round to ensure students walk into outstanding
              careers — from aptitude training and mock interviews to live industry exposure.
            </p>

            <a
              href="/placement-report.pdf"
              download
              className="mt-8 inline-flex items-center gap-2.5 bg-brand-orange rounded-[4px] px-6 py-3.5 text-[13px] font-medium uppercase tracking-wide text-white transition-colors hover:bg-[#d63f14]"
            >
              Download Placement Report
              <Download className="size-3.5" />
            </a>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.25 }}
          className="space-y-4 overflow-hidden rounded-md bg-[url('/images/home/company-logo-bg.webp')] bg-cover bg-center px-2 py-4 lg:space-y-[27px] lg:px-4 lg:py-5"
        >
          <LogoRow logos={LOGOS} direction="left" /> {/* right to left */}
          <LogoRow logos={ROW_2} direction="right" /> {/* left to right */}
        </motion.div>
      </div>
    </section>
  );
}
