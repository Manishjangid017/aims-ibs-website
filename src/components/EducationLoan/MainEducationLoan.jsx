'use client';
import React from 'react';
import CommonBanner from '../Common/CommonBanner';
import AffordableEducation from './AffordableEducation';
import PartnerBanks from './PartnerBanks';
import HelpSupport from '../Common/HelpSupport';

export default function MainEducationLoan() {
  return (
    <>
      <CommonBanner
        image="/images/about-us/education-loan-img.webp"
        position="left"
        lineOne="Education Loan"
        lineTwo="<b>Support</b>"
        description="We partner with leading banks and NBFCs to help you pursue your education without financial hurdles."
        actions={[
          { label: 'Join Today', href: '/apply-now', variant: 'primary', icon: 'arrow' },
          { label: 'Download Handbook', href: '/handbook.pdf', variant: 'outline', icon: 'download', download: true },
        ]}
      />
      <AffordableEducation />
      <PartnerBanks />
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
