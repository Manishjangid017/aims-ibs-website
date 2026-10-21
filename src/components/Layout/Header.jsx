'use client';
import Link from 'next/link';
import { ChevronDown, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const TOP_LINKS = [
  { label: 'Industry/Corporate Exposure', href: '/industry-corporate-exposure' },
  { label: 'AICTE', href: '/aicte' },
  { label: 'Admissions', href: '/admissions' },
];

const NAV_LINKS = [
  {
    label: 'About',
    href: '/',
    children: [
      { label: 'Welcome note & Board Members', href: '/aims-ibs-family' },
      { label: 'Vision Mission and Objectives', href: '/vision-mission' },
    ],
  },
  {
    label: 'Programs',
    href: '/programs',
    children: [
      { label: 'Undergraduate', href: '/programs/ug' },
      { label: 'Postgraduate', href: '/programs/pg' },
    ],
  },
  { label: 'Why AIMS IBS', href: '/why-aims-ibs' },
  { label: 'Faculty', href: '/faculty' },
  { label: 'Student Life', href: '/student-life' },
  { label: 'Placements', href: '/placements' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu and desktop dropdowns on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);
  return (
    <>
      <div className="hidden bg-black text-white md:block">
        <div className="custom-container flex h-8 items-center justify-end gap-6">
          {TOP_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[11px] font-medium uppercase tracking-wide transition-colors hover:text-brand-orange"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
      <header className="sticky top-0 z-50 border-b bg-white">
        <div className="custom-container flex h-[58px] items-center justify-between lg:h-[76px]">
          <Link href="/" className="shrink-0">
            <Image
              src="/images/logo.svg"
              alt="AIMS IBS"
              width={83}
              height={57}
              priority
              quality={100}
              unoptimized
              className="h-10 w-auto lg:h-14.25"
            />
          </Link>

          {/* Desktop */}
          <div className="hidden items-center gap-6 lg:flex">
            <nav className="flex items-center gap-6">
              {NAV_LINKS.map((link) =>
                link.children ? (
                  <div key={link.label} className="group relative">
                    <Link
                      href={link.href}
                      className="flex items-center gap-1 py-5 text-[13px] font-medium uppercase tracking-wide text-black transition-colors group-hover:text-brand-orange"
                    >
                      {link.label}
                      <ChevronDown className="h-3 w-3 transition-transform group-hover:rotate-180" />
                    </Link>
                    <div className="invisible absolute left-0 top-full min-w-70 translate-y-2 border bg-white py-2 opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={(e) => e.currentTarget.closest('.group')?.querySelector('a')?.blur()}
                          className="block px-4 py-2 text-xs font-medium uppercase tracking-wide text-black transition-colors hover:bg-brand-orange/10 hover:text-brand-orange"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="flex items-center gap-1 py-5 text-[13px] font-medium uppercase tracking-wide text-black transition-colors hover:text-brand-orange"
                  >
                    {link.label}
                  </Link>
                ),
              )}
            </nav>

            <Link
              href="/apply-now"
              className="rounded-[3px] border-2 border-brand-orange bg-brand-orange px-5 py-2.5 font-general-sans text-[13px] font-medium uppercase tracking-wide text-white transition-colors hover:bg-[#d63f14] hover:border-[#d63f14]"
            >
              Apply Now
            </Link>
            <Link
              href="/contact-us"
              className="rounded-[3px] border-2 border-brand-orange bg-white px-5 py-2.5 font-general-sans text-[13px] font-medium uppercase tracking-wide text-black transition-colors hover:bg-brand-orange hover:text-white"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="font-general-sans lg:hidden"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="max-h-[calc(100svh-58px)] overflow-y-auto border-t bg-white lg:hidden">
            <nav className="custom-container flex flex-col py-2">
              {NAV_LINKS.map((link) => (
                <div key={link.label} className="border-b last:border-0">
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 text-xs font-semibold uppercase tracking-wide hover:text-brand-orange"
                  >
                    {link.label}
                  </Link>
                  {link.children?.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={() => setOpen(false)}
                      className="block py-2 pl-4 text-xs uppercase tracking-wide text-black/70 hover:text-brand-orange"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ))}
              <div className="flex gap-3 py-4">
                <Link
                  href="/apply-now"
                  className="flex-1 rounded-[3px] bg-brand-orange py-3 text-center font-general-sans text-xs font-medium uppercase text-white"
                >
                  Apply Now
                </Link>
                <Link
                  href="/contact-us"
                  className="flex-1 rounded-[3px] border-2 border-brand-orange py-3 text-center font-general-sans text-xs font-medium uppercase"
                >
                  Contact Us
                </Link>
              </div>
              <div className="flex flex-wrap gap-x-5 gap-y-2 border-t pt-4 text-[11px] font-medium uppercase text-black/70">
                <Link href="/industry-corporate-exposure">Industry/Corporate Exposure</Link>
                <Link href="/aicte">AICTE</Link>
                <Link href="/admissions">Admissions</Link>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
