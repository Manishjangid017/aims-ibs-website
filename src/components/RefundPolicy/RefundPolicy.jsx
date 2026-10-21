'use client';
import React from 'react';
import CommonBanner from '../Common/CommonBanner';
import { motion } from 'framer-motion';
import { fadeUp, stagger, viewport } from '@/_lib/motion';

export default function RefundPolicy() {
  const POLICIES = [
    {
      id: 'general',
      title: 'General Refund Guidelines',
      className: 'lg:min-h-[627px]', // optional extra classes per card
      items: [
        { text: 'Tuition fees are non-refundable once a student has been assigned a University Registration Number.' },
        { text: 'Examination Fees and Application Form Fees are strictly non-refundable under any circumstances.' },
        {
          text: 'If a student’s admission is cancelled due to:',
          subItems: [
            'Disciplinary action',
            'Violation of Anti-Ragging Regulations',
            'Breach of Code of Conduct',
            'Or any other regulatory non-compliance, no refund will be applicable towards tuition, hostel, or other institutional fees.',
          ],
        },
        {
          text: 'In cases not covered above, the decision regarding refund eligibility will be taken by the institutional board on a case-by-case basis.',
        },
      ],
    },
    {
      id: 'special',
      title: 'Special Cases – No Refund Will Be Processed If',
      items: [
        {
          text: 'The student is expelled for misconduct, disciplinary issues, or violation of the institute’s regulations.',
        },
        { text: 'The cancellation occurs after registration confirmation by the University.' },
        { text: 'The refund request is beyond the official deadline communicated during admissions.' },
      ],
    },
    {
      id: 'apply',
      title: 'How to Apply for Cancellation',
      items: [
        {
          text: 'All refund or cancellation requests must be submitted in writing to the Admissions Office, along with supporting documentation and a formal request letter. The institute reserves the right to evaluate each case individually.',
        },
      ],
    },
  ];

  /* ---------- Animations ---------- */
  const ease = 'easeOut';

  // Card rises in, then its children animate one after another
  const cardVariant = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease, when: 'beforeChildren', staggerChildren: 0.12 },
    },
  };

  // Background slowly settles
  const bgZoom = {
    hidden: { scale: 1.12 },
    visible: { scale: 1, transition: { duration: 1.4, ease } },
  };

  // Lines image slides in from the right
  const patternIn = {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease, delay: 0.3 } },
  };

  const listStagger = stagger(0.1);

  return (
    <>
      <CommonBanner
        image="/images/about-us/refund-canclation-img.webp"
        position="left"
        lineOne="Cancellation &"
        lineTwo="<b>Refund Policy</b>"
        description="At AIMS IBS, we believe in maintaining transparent and student-friendly processes. Our cancellation and refund guidelines are outlined below for all UG and PG programs:"
        actions={[
          { label: 'Join Today', href: '/apply-now', variant: 'primary', icon: 'arrow' },
          { label: 'Download Handbook', href: '/handbook.pdf', variant: 'outline', icon: 'download', download: true },
        ]}
      />{' '}
      <section className="relative overflow-hidden bg-white py-12 lg:py-[90px]">
        {/* Bottom-left square */}
        <motion.span
          aria-hidden="true"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="absolute bottom-0 left-0 size-8 origin-bottom-left bg-[#F0668F] lg:size-[50px]"
        />
        <div className="custom-container">
          <div className="flex flex-col gap-6 lg:gap-16">
            {POLICIES.map((policy) => (
              <motion.article
                key={policy?.id}
                variants={cardVariant}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                className={`relative overflow-hidden bg-[#3F2E8F] px-6 pb-14 pt-10 sm:px-10 lg:px-[54px] lg:pb-[100px] lg:pt-[70px] ${policy?.className ?? ''}`}
              >
                {/* Background: gradient + circle in one image */}
                <motion.div
                  aria-hidden="true"
                  variants={bgZoom}
                  className="absolute inset-0 bg-[url('/images/about-us/policy-card-bg.webp')] bg-cover bg-top"
                />

                {/* Lines image, bottom-right (separate image) */}
                <motion.div
                  aria-hidden="true"
                  variants={patternIn}
                  className="pointer-events-none absolute bottom-0 right-0 h-[15%] max-h-[88px] min-h-10 w-3/5 bg-[url('/images/about-us/barcode-img-card.webp')] bg-cover bg-left-top sm:w-[42%]"
                />

                <div className="relative z-10">
                  <motion.h2
                    variants={fadeUp}
                    className="text-[28px] font-light leading-tight text-white sm:text-[32px] lg:text-[48px]"
                  >
                    {policy?.title}
                  </motion.h2>

                  <motion.ul
                    variants={listStagger}
                    className={`mt-8 ${(policy?.items.length === 1 && 'block') || 'grid'}  gap-x-10 gap-y-8 md:grid-cols-2 lg:mt-[62px] lg:gap-x-[60px] lg:gap-y-[60px]`}
                  >
                    {policy?.items.map((item) => (
                      <motion.li
                        key={item.text}
                        variants={fadeUp}
                        className={`flex items-start gap-3 ${policy?.items.length === 1 ? 'md:col-span-2' : ''}`}
                      >
                        <span className="mt-[0.5em] size-2.5 shrink-0 bg-brand-orange" />

                        <div
                          className={`${(policy?.items.length === 1 && 'block') || 'max-w-[560px]'} text-sm leading-relaxed text-white/90 sm:text-base lg:text-[17px] lg:leading-[1.6]`}
                        >
                          <p>{item.text}</p>

                          {item.subItems && (
                            <ul className="mt-1 space-y-0.5">
                              {item.subItems.map((sub) => (
                                <li key={sub} className="flex items-start gap-2">
                                  <span className="mt-[0.6em] size-1 shrink-0 rounded-full bg-white/90" />
                                  <span>{sub}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
