'use client';
import React from 'react';
import CommonBanner from '../Common/CommonBanner';
import WhyIsTheUniqueApproach from './WhyIsTheUniqueApproach';
import TrainingApproach from './TrainingApproach';
import MakeItHappen from './MakeItHappen';
import ExpertMentorship from './ExpertMentorship';

export default function MainOurTraningApproach() {
  return (
    <>
      <CommonBanner
        image="/images/industry-partner/Hero_Section.webp"
        position="left"
        lineOne="Welcome to the"
        lineTwo="<b>AIMS IBS Family</b>"
        description="Your goals have a home. And it starts right here."
        actions={[
          { label: 'Join Today', href: '/apply-now', variant: 'primary', icon: 'arrow' },
          { label: 'Download Handbook', href: '/handbook.pdf', variant: 'outline', icon: 'download', download: true },
        ]}
      />
      <WhyIsTheUniqueApproach />
      <TrainingApproach />
      <MakeItHappen />
      <ExpertMentorship />
    </>
  );
}
