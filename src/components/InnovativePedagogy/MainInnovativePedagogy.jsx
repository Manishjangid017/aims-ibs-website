'use client';
import React from 'react';
import CommonBanner from '../Common/CommonBanner';
import TeachingMethodology from './TeachingMethodology';

export default function MainInnovativePedagogy() {
  return (
    <>
      <CommonBanner
        image="/images/about-us/innovative-section-bg.webp"
        position="left"
        lineOne="Innovative Pedagogy"
        lineTwo="<b>at AIMS IBS</b>"
        description="At AIMS IBS, we believe that education must evolve with the industry. Our teaching approach is a blend of academic rigor, experiential learning, and real-world engagement, creating a dynamic, career-focused learning environment."
        actions={[
          { label: 'Join Today', href: '/apply-now', variant: 'primary', icon: 'arrow' },
          { label: 'Download Handbook', href: '/handbook.pdf', variant: 'outline', icon: 'download', download: true },
        ]}
      />
      <TeachingMethodology />
    </>
  );
}
