'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ChevronRight } from 'lucide-react';

const MASTERS = {
  image: 'images/home/course-img-1.webp',
  href: '/programs/pg/mba-pgpm',
  meta: [
    { label: 'Duration', value: '2 Years' },
    { label: 'Certification', value: '15 Additional Certifications' },
    { label: 'Domains', value: '6 Specialisations' },
  ],
  points: ['Dual MBA', 'Industry-Integrated Curriculum', 'Placement-Focused Training'],
  specialisations: [
    { label: 'Business Analytics', href: '/programs/pg/business-analytics' },
    { label: 'Marketing', href: '/programs/pg/marketing' },
    { label: 'Finance', href: '/programs/pg/finance' },
    { label: 'Human Resources', href: '/programs/pg/human-resources' },
    { label: 'Logistics & Supply Chain', href: '/programs/pg/logistics-supply-chain' },
    { label: 'Healthcare Management', href: '/programs/pg/healthcare-management' },
  ],
};

const BACHELORS = [
  {
    prefix: 'Bachelor of',
    name: 'Business Administration (BBA)',
    image: 'images/home/course-img-2.webp',
    href: '/programs/ug/bba',
    tags: ['3 Years', '6 Specialisations', '8 Certifications'],
    points: ['Personality & Career Readiness', 'UGC Recognised Degree', 'AI & Digital Marketing Enabled'],
  },
  {
    prefix: 'Bachelor of',
    name: 'Computer Applications (BCA)',
    image: 'images/home/course-img-3.webp',
    href: '/programs/ug/bca',
    tags: ['3 Years', '3 Specialisations', '9 Certifications'],
    points: [
      'UGC-Recognised BCA Degree',
      'Hands-On Coding & Project-Based Learning',
      'Technical Certifications Included',
    ],
  },
  {
    prefix: 'Bachelor of',
    name: 'Commerce (B.Com)',
    image: 'images/home/course-img-4.webp',
    href: '/programs/ug/bcom',
    tags: ['3 Years', '5 Specialisations', '7 Certifications'],
    points: ['UGC-Recognized B.Com Degree', 'End-To-End Placement Support', 'Practical Exposure'],
  },
];

function SectionTag({ children }) {
  return (
    <span className="inline-block bg-brand-violet px-3 py-1.5 text-[10px] font-medium uppercase tracking-wide text-white sm:text-[16px]">
      {children}
    </span>
  );
}

function BulletList({ items, className = '' }) {
  return (
    <ul className={`2xl:space-y-2 space-y-1 ${className}`}>
      {items.map((item) => (
        <li key={item} className="flex items-start 2xl:gap-2.5 gap-2">
          <span className="mt-[0.5em] size-1 shrink-0 rounded-full bg-brand-orange" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function HomePrograms() {
  const sectionRef = useRef(null);
  const bachelorRef = useRef(null);
  const [inView, setInView] = useState(false);
  const [startY, setStartY] = useState(null);

  // Play the blue background animation once, the first time the section is reached
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { rootMargin: '0px 0px -30% 0px', threshold: 0 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Default blue start = just above the Bachelor's block (works on every screen size)
  useEffect(() => {
    const section = sectionRef.current;
    const block = bachelorRef.current;
    if (!section || !block) return;
    const measure = () => {
      const top = block.getBoundingClientRect().top - section.getBoundingClientRect().top;
      setStartY(Math.max(0, Math.round(top - 32)));
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(section);
    return () => ro.disconnect();
  }, []);

  const clipPath = inView
    ? 'inset(0px 0px 0px 0px)'
    : startY === null
      ? 'inset(58% 0px 0px 0px)'
      : `inset(${startY}px 0px 0px 0px)`;

  return (
    <section ref={sectionRef} className="relative isolate overflow-hidden bg-white pb-16 pt-12 lg:pb-20 lg:pt-20">
      {/* Blue background: half by default, expands to full on first scroll */}
      <div
        aria-hidden="true"
        className={`absolute inset-0 -z-10 bg-[#3F2E8F] bg-[url('/images/home/course-bg-image.webp')] bg-cover bg-top will-change-[clip-path] ${
          inView ? 'transition-[clip-path] duration-[1400ms] ease-out motion-reduce:transition-none' : ''
        }`}
        style={{ clipPath }}
      />

      <div className="custom-container">
        <h2 className="text-3xl font-light text-white sm:text-4xl lg:text-[48px]">
          Explore <span className="font-semibold italic">Programs</span>
        </h2>

        {/* Master's */}
        <div className="mt-8 lg:mt-12">
          <SectionTag>Master&apos;s</SectionTag>

          <div className="group relative mt-[24px] flex flex-col overflow-hidden bg-white p-1.5 shadow-xl shadow-black/10 lg:min-h-[420px] lg:flex-row">
            {/* Image */}
            <div className="relative aspect-[4/3] w-full shrink-0 lg:aspect-auto 2xl:w-[538px] lg:w-[400px]">
              <Image
                src={process.env.IMG_PATH + MASTERS?.image}
                alt="MBA + PGPM"
                fill
                sizes="(min-width: 1024px) 530px, 100vw"
                className="object-cover"
                quality={100}
                unoptimized
              />
              <Link
                href={MASTERS.href}
                className="absolute bottom-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-2 bg-brand-orange px-5 py-2.5 text-xs font-medium text-white transition-colors hover:bg-[#d63f14]"
              >
                Know More <ArrowRight className="size-3.5" />
              </Link>
            </div>

            {/* Content */}
            <div className="relative flex-1 overflow-hidden">
              {/* Red hexa image (add /public/images/hexa-shape.webp) */}
              <div className="pointer-events-none absolute bottom-0 right-0 z-0 w-[150px] sm:w-[220px] lg:w-[300px]">
                <Image
                  src={process.env.IMG_PATH + 'images/home/cube-shap-2.webp'}
                  alt=""
                  aria-hidden="true"
                  width={300}
                  height={280}
                  className="h-auto w-full"
                />
              </div>

              <div className="relative z-10 flex h-full flex-col justify-center p-5 sm:p-8 lg:px-10 lg:py-8">
                {/* Default content: moves up on hover (desktop) */}
                <div className="lg:transition-transform lg:duration-500 lg:ease-out lg:group-focus-within:-translate-y-[24px] lg:group-hover:-translate-y-[74px]">
                  <h3 className="text-xl leading-snug sm:text-2xl  lg:text-[22px] 2xl:text-[24px]">
                    <span className="font-semibold">Master of Business Administration</span> (MBA) + Postgraduate
                    Program in Management (PGPM)
                  </h3>

                  <div className="2xl:mt-6 lg:mt-4 mt-6 flex flex-wrap gap-y-4">
                    {MASTERS.meta.map((item, i) => (
                      <div
                        key={item.label}
                        className={`2xl:pr-5 lg:pr-3 pr-2 ${i > 0 ? 'border-l border-black/15 2xl:pl-5 lg:pl-2 pl-4' : ''}`}
                      >
                        <p className="text-xs text-black/60 sm:text-[12px]">{item.label}</p>
                        <p className="mt-1 text-xs font-semibold uppercase sm:text-[14px]">{item.value}</p>
                      </div>
                    ))}
                  </div>

                  <BulletList items={MASTERS.points} className="mt-6 text-sm 2xl:text-[14px]" />
                </div>

                {/* Specialisations: always visible on mobile/tablet, slide up on hover (desktop) */}
                <div className="mt-6 lg:invisible lg:absolute lg:bottom-6 lg:left-10 lg:right-10 lg:mt-0 lg:translate-y-8 lg:opacity-0 lg:transition-all lg:duration-500 lg:ease-out lg:group-focus-within:visible lg:group-focus-within:translate-y-0 lg:group-focus-within:opacity-100 lg:group-hover:visible lg:group-hover:translate-y-0 lg:group-hover:opacity-100">
                  <p className="mb-2 text-xs text-black/60 sm:text-sm">Specialization</p>
                  <div className="flex flex-wrap gap-2">
                    {MASTERS.specialisations.map((s) => (
                      <Link
                        key={s.label}
                        href={s.href}
                        className="inline-flex items-center gap-1.5 rounded-[3px] bg-[#3F2E8F] 2xl:px-3.5 lg:px-3 2xl:py-2 lg:py-1.5  text-xs font-medium text-white transition-colors hover:bg-brand-orange 2xl:text-sm lg:text-[12px]"
                      >
                        {s.label}
                        <ChevronRight className="size-3.5" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bachelor's */}
        <div ref={bachelorRef} className="mt-12 lg:mt-16">
          <SectionTag>Bachelor&apos;s</SectionTag>

          <div className="mt-[30px] grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {BACHELORS.map((item) => (
              <article key={item.name} className="flex flex-col bg-white p-[12px]">
                <div className="relative aspect-[2.3/1.1] w-full">
                  <Image
                    src={process.env.IMG_PATH + item.image}
                    alt={`${item.prefix} ${item.name}`}
                    fill
                    sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>

                <div className="flex flex-1 flex-col px-3 pb-3 pt-5">
                  <h3 className="text-xl leading-snug sm:text-[24px]">
                    {item.prefix} <span className="font-semibold italic">{item.name}</span>
                  </h3>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <span key={tag} className="bg-[#3F2E8F] px-2 py-1 text-[11px] font-medium text-white">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <BulletList items={item.points} className="mt-4 flex-1 text-sm" />

                  <div className="mt-5 flex items-center justify-between gap-3 border-t border-[#8D78F0] pt-3">
                    <div>
                      <p className="text-xs text-black/60">Affiliated to:</p>
                      <p className="text-sm font-semibold sm:text-base">Bangalore University</p>
                    </div>
                    <Link
                      href={item.href}
                      className="inline-flex shrink-0 items-center gap-2 bg-brand-orange px-4 py-3 text-[11px] font-medium uppercase tracking-wide text-white transition-colors hover:bg-[#d63f14]"
                    >
                      Learn More <ArrowRight className="size-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
