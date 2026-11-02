'use client';
import React from 'react';
import CommonBanner from '../Common/CommonBanner';
import HelpSupport from '../Common/HelpSupport';
import InstitutionalResources from './InstitutionalResources';
import ProgramBrochures from './ProgramBrochures';

export default function MainDownloadResources() {
  return (
    <>
      <CommonBanner
        image="/images/why-aims-ibs/download-brouchers-bg-image.webp"
        position="left"
        lineOne="Access <b>Brochures &</b>"
        lineTwo="<b>Resources</b>"
        description="Download the latest institutional brochures and placement materials in one place."
        actions={[]}
      />
      <InstitutionalResources />
      <ProgramBrochures />
      <HelpSupport
        title="Need Help With Your"
        boldtxt="Education Loan?"
        desc=" Our admissions and finance support teams are here to assist you with guidance and documentation for your
                      loan application."
        buttntxt="Contact Support"
        btnaction="/contact-us"
      />
    </>
  );
}
