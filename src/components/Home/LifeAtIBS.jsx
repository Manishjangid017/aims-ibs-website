import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import { motion } from 'framer-motion';

const viewport = { once: true, amount: 0.25 };
const ease = 'easeOut';

const PHOTOS = [
  { id: 1, src: `images/home/life-at-ibs-img-1.webp`, alt: `Life at AIMS IBS, photo 1` },
  { id: 2, src: `images/home/life-at-ibs-img-2.webp`, alt: `Life at AIMS IBS, photo 2` },
  { id: 3, src: `images/home/life-at-ibs-img-3.webp`, alt: `Life at AIMS IBS, photo 3` },
  { id: 4, src: `images/home/life-at-ibs-img-4.webp`, alt: `Life at AIMS IBS, photo 4` },
  { id: 5, src: `images/home/life-at-ibs-img-5.webp`, alt: `Life at AIMS IBS, photo 5` },
  { id: 6, src: `images/home/life-at-ibs-img-6.webp`, alt: `Life at AIMS IBS, photo 6` },
  { id: 7, src: `images/home/life-at-ibs-img-7.webp`, alt: `Life at AIMS IBS, photo 7` },
  { id: 8, src: `images/home/life-at-ibs-img-8.webp`, alt: `Life at AIMS IBS, photo 8` },
  { id: 9, src: `images/home/life-at-ibs-img-9.webp`, alt: `Life at AIMS IBS, photo 9` },
  { id: 10, src: `images/home/life-at-ibs-img-10.webp`, alt: `Life at AIMS IBS, photo 10` },
  { id: 11, src: `images/home/life-at-ibs-img-11.webp`, alt: `Life at AIMS IBS, photo 11` },
  { id: 12, src: `images/home/life-at-ibs-img-12.webp`, alt: `Life at AIMS IBS, photo 12` },
  { id: 13, src: `images/home/life-at-ibs-img-13.webp`, alt: `Life at AIMS IBS, photo 13` },
  { id: 14, src: `images/home/life-at-ibs-img-14.webp`, alt: `Life at AIMS IBS, photo 14` },
  { id: 15, src: `images/home/life-at-ibs-img-15.webp`, alt: `Life at AIMS IBS, photo 15` },
  { id: 16, src: `images/home/life-at-ibs-img-16.webp`, alt: `Life at AIMS IBS, photo 16` },
  { id: 17, src: `images/home/life-at-ibs-img-17.webp`, alt: `Life at AIMS IBS, photo 17` },
  { id: 18, src: `images/home/life-at-ibs-img-18.webp`, alt: `Life at AIMS IBS, photo 18` },
  { id: 19, src: `images/home/life-at-ibs-img-19.webp`, alt: `Life at AIMS IBS, photo 19` },
  { id: 20, src: `images/home/life-at-ibs-img-20.webp`, alt: `Life at AIMS IBS, photo 20` },
  { id: 21, src: `images/home/life-at-ibs-img-21.webp`, alt: `Life at AIMS IBS, photo 21` },
  { id: 22, src: `images/home/life-at-ibs-img-22.webp`, alt: `Life at AIMS IBS, photo 22` },
  { id: 23, src: `images/home/life-at-ibs-img-23.webp`, alt: `Life at AIMS IBS, photo 23` },
  { id: 24, src: `images/home/life-at-ibs-img-24.webp`, alt: `Life at AIMS IBS, photo 24` },
  { id: 25, src: `images/home/life-at-ibs-img-25.webp`, alt: `Life at AIMS IBS, photo 25` },
  { id: 26, src: `images/home/life-at-ibs-img-26.webp`, alt: `Life at AIMS IBS, photo 26` },
  { id: 27, src: `images/home/life-at-ibs-img-27.webp`, alt: `Life at AIMS IBS, photo 27` },
  { id: 28, src: `images/home/life-at-ibs-img-28.webp`, alt: `Life at AIMS IBS, photo 28` },
  { id: 29, src: `images/home/life-at-ibs-img-29.webp`, alt: `Life at AIMS IBS, photo 29` },
  { id: 30, src: `images/home/life-at-ibs-img-30.webp`, alt: `Life at AIMS IBS, photo 30` },
];

export default function LifeAtIBS() {
  return (
    <motion.section
      variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      className="overflow-hidden bg-white pb-12 pt-12 lg:pb-20 lg:pt-20"
    >
      <div className="custom-container">
        <motion.h2
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
          }}
          className="text-[28px] sm:text-[32px] lg:text-[48px]"
        >
          <span className="font-light">Life at </span>
          <span className="font-semibold italic">AIMS IBS</span>
        </motion.h2>
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
          }}
          className="mt-2 max-w-160 text-sm text-black/80 lg:text-base"
        >
          Students don&rsquo;t call us the top B school in Bangalore for academics. They say that because of the overall
          experience.
        </motion.p>
      </div>

      {/* Full-width strip with the background image, photos move right to left */}
      <motion.div
        variants={{
          hidden: { opacity: 0, scale: 0.94 },
          visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: 'easeOut' } },
        }}
        className="mt-6 bg-[url('/images/home/life-aims-bg.webp')] bg-cover bg-center py-4 lg:mt-9 lg:py-7.5"
      >
        <Marquee direction="left" speed={50} gradient={false} pauseOnHover autoFill>
          {PHOTOS.map((photo) => (
            <div
              key={photo.src}
              className="group relative mx-1.5 aspect-561/402 w-65 cursor-pointer overflow-hidden shadow-[0_8px_24px_rgba(63,46,143,0.15)] transition-shadow duration-500 hover:shadow-[0_16px_36px_rgba(63,46,143,0.3)] sm:mx-2 sm:w-85 lg:mx-2.25 lg:w-105 2xl:w-140.25"
            >
              <Image
                src={process.env.IMG_PATH + photo.src}
                alt={photo.alt}
                fill
                sizes="(min-width: 1536px) 561px, (min-width: 1024px) 420px, 340px"
                quality={100}
                unoptimized
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[#3F2E8F]/0 transition-colors duration-500 group-hover:bg-[#3F2E8F]/15"
              />
            </div>
          ))}
        </Marquee>
      </motion.div>
    </motion.section>
  );
}
