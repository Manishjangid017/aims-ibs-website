"use client";

import CommonBanner from "../Common/CommonBanner";
import AICTEDoc from "./AICTEDoc";
import LOAEOA from "./LOAEOA";
import QuickLinks from "./QuickLinks";

export default function MainLOAEOA() {
  return (
    <div>
      <CommonBanner
        image="/images/loa-eoa/Hero_Section.webp"
        position="left"
        lineOne='AICTE <span class="font-bold italic">Approval Documents </span>'
        lineTwo="<b>(LOA & EoA)</b>"
        description="Access our Letter of Approval and Extension of Approval certificates for institutional transparency and compliance. "
      />
      <LOAEOA />
      <AICTEDoc />
      <QuickLinks />
    </div>
  );
}
