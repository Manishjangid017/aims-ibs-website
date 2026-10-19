'use client';
import React from 'react';
import CommonBanner from '../Common/CommonBanner';
import WelcomeFamily from './WelcomeFamily';
import Visionaries from './Visionaries';

export default function MainAimsFamliy() {
  return (
    <>
      <CommonBanner
        image="images/about-us/aiims-family-bg-img.webp"
        position="left"
        lineOne="Welcome to the"
        lineTwo="AIMS IBS Family"
        description="Your goals have a home. And it starts right here."
        actions={[
          { label: 'Join Today', href: '/apply-now', variant: 'primary', icon: 'arrow' },
          { label: 'Download Handbook', href: '/handbook.pdf', variant: 'outline', icon: 'download', download: true },
        ]}
      />
      <WelcomeFamily />
      <Visionaries />
    </>
  );
}
