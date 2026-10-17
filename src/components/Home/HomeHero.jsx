'use client';

import Image from 'next/image';
import Link from 'next/link';
import Marquee from 'react-fast-marquee';
import { ArrowRight, Download } from 'lucide-react';

const VIDEO_SRC = 'images/home/home-banner-video.mp4';

const LOGOS = Array.from({ length: 12 }, (_, i) => `images/home/company-logo-${i + 1}.webp`);

function LogoRow({ direction }) {
  return (
    <Marquee direction={direction} speed={30} gradient={false} autoFill pauseOnHover>
      {LOGOS.map((src, i) => (
        <div
          key={src}
          className="mx-1 flex h-[38px] w-[88px] items-center justify-center rounded-[4px] overflow-hidden bg-white"
        >
          <Image
            src={process.env.IMG_PATH + src}
            alt={`Hiring partner ${i + 1}`}
            width={88}
            height={38}
            quality={100}
            priority
            unoptimized
            className="h-full w-full object-contain"
          />
        </div>
      ))}
    </Marquee>
  );
}

export default function HomeHero() {
  return (
    <section className="relative flex min-h-[calc(100svh-90px)] w-full items-end overflow-hidden bg-black text-white">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={process.env.IMG_PATH + VIDEO_SRC}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        controls={false}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />

      <div className="custom-container relative z-10 pb-10 pt-32 lg:pb-14">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          {/* Left content */}
          <div className="max-w-105 sm:max-w-[558px]">
            <h1 className="text-3xl leading-tight sm:text-4xl lg:text-[40px]">
              <span className="block font-light">Not Your Average</span>
              <span className="block font-semibold">Business School in Bangalore</span>
            </h1>
            <p className="mt-5 text-[16px] leading-relaxed text-white/90">
              At AIMS IBS, we offer class-apart{' '}
              <strong className="font-semibold text-white">UG &amp; PG management education</strong> pathways that have
              been consistently trusted by ranking organizations &amp; students from pan-India.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/apply-now"
                className="inline-flex items-center gap-3 border border-brand-orange bg-brand-orange px-5 py-3 text-xs font-medium uppercase tracking-wide transition-colors hover:bg-[#d63f14]"
              >
                Join Today
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="/handbook.pdf"
                download
                className="inline-flex items-center gap-3 border border-white px-5 py-3 text-xs font-medium uppercase tracking-wide transition-colors hover:bg-white hover:text-black"
              >
                Download Handbook
                <Download className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Companies */}
          <div className="w-full sm:max-w-[416px] shrink-0 lg:mb-0">
            <p className="mb-2 text-[14px] font-medium uppercase tracking-wide text-white/90">
              Companies hiring from us
            </p>
            <div className="flex flex-col gap-2 overflow-hidden rounded-md border border-white/10 bg-[#FFFFFF1A] p-2 backdrop-blur-sm">
              <LogoRow direction="left" />
              <LogoRow direction="right" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
