import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ChevronLeft, ChevronRight, Download, Play } from 'lucide-react';

const VIDEOS = [
  { name: 'Devaiah K U', src: '/videos/placement-1.mp4', poster: '/images/home/placement-video-1.webp' },
  { name: 'Anjali', src: '/videos/placement-2.mp4', poster: '/images/home/placement-video-2.webp' },
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
    <div className="relative aspect-[3/5] overflow-hidden bg-black shadow-[0_14px_30px_rgba(0,0,0,0.18)]">
      <video
        ref={videoRef}
        src={src}
        poster={poster}
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

export default function Placements() {
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const sync = (swiper) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  return (
    <section className="bg-white py-12 lg:py-[100px]">
      <div className="custom-container">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-[50px]">
          {/* Left: video slider */}
          <div className="order-2 min-w-0 lg:order-1">
            <Swiper
              slidesPerView={1.25}
              spaceBetween={16}
              breakpoints={{ 640: { slidesPerView: 2, spaceBetween: 24 } }}
              speed={600}
              className="!pb-6"
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
                sync(swiper);
              }}
              onSlideChange={sync}
              onResize={sync}
              onBreakpoint={sync}
              onUpdate={sync}
            >
              {VIDEOS.map((v) => (
                <SwiperSlide key={v.name}>
                  <VideoCard {...v} />
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="flex gap-0.5">
              <button
                type="button"
                aria-label="Previous"
                disabled={isBeginning}
                onClick={() => swiperRef.current?.slidePrev()}
                className="grid size-11 place-items-center border-2 border-brand-orange bg-[#FFF1EC] text-black transition-colors hover:bg-brand-orange hover:text-white disabled:pointer-events-none disabled:opacity-50"
              >
                <ChevronLeft className="size-5" />
              </button>
              <button
                type="button"
                aria-label="Next"
                disabled={isEnd}
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
      </div>
    </section>
  );
}
