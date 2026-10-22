'use client';
import React from 'react';
import CommonBanner from '../Common/CommonBanner';
import VisionMission from './VisionMission';

export default function MainVisionMission() {
  return (
    <>
      <CommonBanner
        image="/images/about-us/vision-mission-bg.webp"
        position="left"
        lineOne="Vision, Mission"
        lineTwo="and <b>Objectives</b>"
        description="One of India’s best B-Schools, with global links and real-world learning."
        actions={[
          { label: 'Join Today', href: '/apply-now', variant: 'primary', icon: 'arrow' },
          { label: 'Download Handbook', href: '/handbook.pdf', variant: 'outline', icon: 'download', download: true },
        ]}
      />
      <VisionMission />
    </>
  );
}
