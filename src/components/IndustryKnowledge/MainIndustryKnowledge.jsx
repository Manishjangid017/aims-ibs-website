"use client";

import GlobalInternational from "../AccreditationAffilications/GlobalInternational";
import CommonBanner from "../Common/CommonBanner";
import BenefitsImpact from "./BenefitsImpact";
import CertificationPrograms from "./CertificationPrograms";
import CorporateEngagement from "./CorporateEngagement";
import GlobalLocalSynergy from "./GlobalLocalSynergy";

export default function MainIndustryKnowledge() {
  return (
    <section>
      <CommonBanner
        image="/images/industry-partner/Hero_Section.webp"
        position="left"
        lineOne="Industry & Knowledge"
        lineTwo="<b>Partners</b>"
        description="Our Industry & Knowledge Partners are at the heart of AIMS IBS’s mission to deliver an education that’s authentic, current, and practically rich. These alliances empower students with real-world insights, tools, and mentorship from global industry leaders."
        actions={[
          {
            label: "Join Today",
            href: "/apply-now",
            variant: "primary",
            icon: "arrow",
          },
          {
            label: "Download Handbook",
            href: "/handbook.pdf",
            variant: "outline",
            icon: "download",
            download: true,
          },
        ]}
      />
      <CertificationPrograms />
      <CorporateEngagement />
      <GlobalLocalSynergy />
      <GlobalInternational />
      <BenefitsImpact />
    </section>
  );
}
