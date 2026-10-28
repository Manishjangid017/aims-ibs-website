'use client';
import React from 'react';
import CommonBanner from '../Common/CommonBanner';
import FaqsSection from './FaqsSection';

export default function MainFaq() {
  return (
    <>
      <CommonBanner
        image="/images/about-us/faq-banner-img.webp"
        position="left"
        lineOne="Frequently Asked"
        lineTwo="<b>Questions</b>"
        description="Experience learning beyond borders and gain a truly international perspective."
        actions={[
          { label: 'Join Today', href: '/apply-now', variant: 'primary', icon: 'arrow' },
          { label: 'Download Handbook', href: '/handbook.pdf', variant: 'outline', icon: 'download', download: true },
        ]}
      />
      <FaqsSection />
    </>
  );
}
