import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp, stagger, viewport } from '@/_lib/motion';

export default function MakeItHappen() {
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

  const POLICIES = [
    {
      id: 'general',
      title: 'Find Out How We Make It Happen',
      className: 'lg:min-h-[427px]',
      items: [
        { text: 'Over 70% of your learning is practical, not just theory' },
        { text: 'Work on live projects and real business challenges' },
        { text: 'Industry certificate courses to boost your skills' },
        { text: 'On-the-job training with top companies' },
        { text: 'Mentorship from experienced industry professionals' },
        { text: 'Hands-on experience that prepares you for interviews and jobs' },
        { text: 'Opportunities to connect directly with corporate leaders' },
      ],
    },
  ];

  const listStagger = stagger(0.1);
  return (
    <section className="pb-[64px] pt-[40px] pb-[90px]">
      <div className="custom-container">
        <div className="flex flex-col gap-6 lg:gap-16">
          {POLICIES.map((policy) => (
            <motion.article
              key={policy?.id}
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              className={`relative overflow-hidden bg-[#3F2E8F] px-6 pb-14 pt-10 sm:px-10 lg:px-[54px] lg:pb-[100px] lg:pt-[64px] ${policy?.className ?? ''}`}
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
                  className={`mt-6 ${(policy?.items.length === 1 && 'block') || 'grid'}  gap-x-10 gap-y-8 md:grid-cols-2 lg:mt-[38px] lg:gap-x-[60px] lg:gap-y-[40px]`}
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
  );
}
