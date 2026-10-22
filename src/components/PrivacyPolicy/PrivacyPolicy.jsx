'use client';
import React from 'react';
import CommonBanner from '../Common/CommonBanner';
import { motion } from 'framer-motion';
import { fadeUp, stagger, viewport } from '@/_lib/motion';
export default function PrivacyPolicy() {
  const POLICIES = [
    {
      id: 'collect',
      title: 'Data We Collect From You',
      intro:
        'We may collect the following types of information through our website, online forms, and digital communications:',
      items: [
        { text: 'Name, email address, phone number, and postal address' },
        { text: 'Academic background and documents submitted during admission' },
        { text: 'Payment and transaction details for application and tuition fees' },
        { text: 'Browser and usage data (IP address, device info, cookies)' },
      ],
    },
    {
      id: 'purpose',
      title: 'Purpose of Data Collection & Usage',
      intro: 'The information we collect is used strictly for the following purposes:',
      items: [
        { text: 'Processing applications and admissions' },
        {
          text: 'Sending program updates, admission notifications, or marketing materials (only with consent)',
        },
        { text: 'Improving website experience and analyzing user interaction' },
        { text: 'Sharing updates related to academic programs, events, placements, or collaborations' },
        { text: 'Compliance with regulatory or legal obligations' },
      ],
    },
    {
      id: 'sharing',
      title: 'Information Sharing and Third-Party Disclosures',
      items: [
        { text: 'We do not sell or rent your personal information to third parties' },
        {
          text: 'Information may be shared with:',
          subItems: [
            'Government or regulatory bodies (as required by law)',
            'Affiliated academic partners and examination bodies (for certification or enrollment)',
            'Technology or marketing partners under strict confidentiality agreements',
          ],
        },
      ],
    },
    {
      id: 'protection',
      title: 'Data Protection',
      intro:
        'We use appropriate technical and organizational measures to protect your personal data from unauthorized access, misuse, or disclosure, including:',
      items: [
        { text: 'Encrypted storage and transfer of sensitive data' },
        { text: 'Secure payment gateways' },
        { text: 'Limited access controls for internal use' },
      ],
    },
    {
      id: 'rights',
      title: 'Your Data Privacy Rights',
      intro: 'You have the right to:',
      items: [
        { text: 'Access or update your personal data' },
        { text: 'Withdraw consent at any time' },
        { text: 'Request deletion of your data (subject to academic/legal obligations)' },
        { text: 'Opt out of marketing communications' },
      ],
    },
    {
      id: 'cookies',
      title: 'Our Cookie Policy',
      className: 'lg:min-h-[366px]',
      intro:
        'Our website uses cookies to enhance user experience, personalize content, and analyze traffic. You can manage or disable cookies through your browser settings.',
      footer: { text: 'To exercise these rights, please contact us at -', email: 'info@aimsibs.com' },
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
        image="/images/about-us/privacy-policy-img.webp"
        position="left"
        lineOne="Privacy <b class='italic font-semibold'>Policy</b>"
        lineTwo=""
        description="At AIMS IBS, we respect your privacy and are committed to protecting the personal information you share with us. This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you visit our website or interact with us through our services, in accordance with applicable data protection laws."
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
          style={{ backgroundColor: '#1E9BF0' }}
          className="absolute bottom-0 left-0 size-8 origin-bottom-left lg:size-[50px]"
        />

        <div className="custom-container">
          <div className="flex flex-col gap-6 lg:gap-16">
            {POLICIES.map((policy) => {
              const items = policy?.items ?? [];
              const single = items.length === 1;

              return (
                <motion.article
                  key={policy?.id}
                  variants={cardVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewport}
                  className={`relative overflow-hidden bg-[#3F2E8F] px-6 pt-10 sm:px-10 lg:px-[54px] lg:pb-[100px] lg:pt-[70px] ${
                    policy?.footer ? 'pb-24' : 'pb-14'
                  } ${policy?.className ?? ''}`}
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

                    {policy?.intro && (
                      <motion.p
                        variants={fadeUp}
                        className={`mt-3 max-w-[760px] lg:mt-5 text-sm leading-relaxed text-white/90 sm:text-base lg:text-[20px] lg:leading-[1.6]`}
                      >
                        {policy?.intro}
                      </motion.p>
                    )}

                    {items.length > 0 && (
                      <motion.ul
                        variants={listStagger}
                        className={`${policy?.intro ? 'mt-8 lg:mt-10' : 'mt-8 lg:mt-[62px]'} ${
                          single ? 'block' : 'grid'
                        } gap-x-10 gap-y-8 md:grid-cols-2 lg:gap-x-[60px] lg:gap-y-[40px]`}
                      >
                        {items.map((item) => (
                          <motion.li
                            key={item.text}
                            variants={fadeUp}
                            className={`flex items-start gap-3 ${single ? 'md:col-span-2' : ''}`}
                          >
                            <span className="mt-[0.5em] size-2.5 shrink-0 bg-brand-orange" />

                            <div
                              className={`${single ? 'block' : 'max-w-[560px]'} text-sm leading-relaxed text-white/90 sm:text-base lg:text-[16px] lg:leading-[1.6]`}
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
                    )}
                  </div>

                  {/* Bottom-left contact line */}
                  {policy?.footer && (
                    <motion.p
                      variants={fadeUp}
                      className="absolute bottom-6 left-6 right-6 z-10 text-xs text-white/90 sm:bottom-8 sm:left-10 sm:text-sm lg:bottom-[33px] lg:left-[54px] lg:text-[15px]"
                    >
                      {policy?.footer.text}{' '}
                      <a
                        href={`mailto:${policy?.footer.email}`}
                        className="font-semibold text-white underline-offset-4 transition-colors hover:text-brand-orange hover:underline"
                      >
                        {policy?.footer.email}
                      </a>
                    </motion.p>
                  )}
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
