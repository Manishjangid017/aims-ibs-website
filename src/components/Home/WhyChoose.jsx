import { useRef, useState } from 'react';
import { Play } from 'lucide-react';
import { motion } from 'framer-motion';

export const viewport = { once: true, amount: 0.25 };

function VideoPlayer({ src, poster, title }) {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    videoRef.current?.play();
    setPlaying(true);
  };

  return (
    <div className="relative aspect-video overflow-hidden rounded-md bg-black">
      <video
        ref={videoRef}
        src={process.env.IMG_PATH + src}
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
          aria-label={`Play ${title}`}
          onClick={handlePlay}
          className="absolute left-1/2 top-1/2 grid size-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-[#FF7A00] text-white transition-transform duration-300 hover:scale-110 lg:size-14"
        >
          <Play className="size-5 fill-white" />
        </button>
      )}
    </div>
  );
}

export default function WhyChoose() {
  return (
    <motion.section
      variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.2 } } }}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      className="relative overflow-hidden bg-[#4B3A9E] bg-[url('/images/home/why-choose-bg-img.webp')] bg-cover bg-center py-12 lg:py-18.25
        before:absolute before:-top-8 before:right-0 before:size-8 before:bg-[#4CC3F0] lg:before:-top-10 lg:before:size-10"
    >
      <div className="custom-container">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12.5">
          {/* Left: heading + text */}
          <motion.div variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}>
            <motion.h2
              variants={{
                hidden: { opacity: 0, x: -60 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } },
              }}
              className="text-3xl text-white sm:text-4xl lg:text-[40px] lg:leading-[1.2]"
            >
              <span className="block font-light">21 Reasons:</span>
              <span className="block">
                <span className="font-light">Why Choose </span>
                <span className="font-semibold italic">AIMS IBS</span>
              </span>
            </motion.h2>

            <motion.p
              variants={{
                hidden: { opacity: 0, x: -60 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } },
              }}
              className="mt-5 max-w-112.5 text-sm leading-relaxed text-white/90 lg:text-[16px]"
            >
              Still hesitant? Here is a <strong className="font-semibold">list of reasons</strong> why students consider
              us the best <strong className="font-semibold">business school in Bangalore</strong>.
            </motion.p>
          </motion.div>

          {/* Right: video in a #9080EE box */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 60 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } },
            }}
            className="w-full rounded-2xl bg-brand-violet p-3 shadow-[0_20px_40px_rgba(0,0,0,0.2)] lg:ml-auto lg:max-w-150 lg:p-4"
          >
            <VideoPlayer
              src="images/home/reasons-video.mp4"
              poster="images/home/reasons-video-poster.webp"
              title="Why choose AIMS IBS"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
