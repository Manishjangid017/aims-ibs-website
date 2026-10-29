'use client';
import React from 'react';
import CommonBanner from '../Common/CommonBanner';
import AdmissionSteps from './AdmissionSteps';

export default function MainAdmissionProcess() {
  return (
    <>
      <CommonBanner
        image="/images/about-us/admission-process-img.webp"
        position="left"
        lineOne="Start Your Journey with "
        lineTwo="<b>AIMS IBS</b>"
        description="Admission Process Made Simple"
        actions={[
          { label: 'Join Today', href: '/apply-now', variant: 'primary', icon: 'arrow' },
          { label: 'Download Handbook', href: '/handbook.pdf', variant: 'outline', icon: 'download', download: true },
        ]}
      />
      <AdmissionSteps />
    </>
  );
}
