"use client";

import CommonBanner from "../Common/CommonBanner";
import CertificateProgram from "./CertificateProgram";
import TrainingPartner from "./TrainingPartner";

export default function MainIndustryRelavantCertificate() {
  return (
    <div>
      <CommonBanner
        image="/images/industry-relevant-certifications/Hero_Section.webp"
        position="left"
        lineOne="Industry-Relevant"
        lineTwo="<b>Certificate Programs</b>"
        description="At AIMS IBS, our certificate programs are developed in collaboration with globally recognized industry leaders to ensure alignment with current market demands. "
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
      <TrainingPartner />
      <CertificateProgram />
    </div>
  );
}
