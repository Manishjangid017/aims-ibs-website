"use client";

import HeroAccreditation from "./HeroAccreditation";
import AcademicExcellence from "./AcademicExcellence";
import AccreditationCertificate from "./AccreditationCertificate";
import HighlightAccreditation from "./HighlightAccreditation";
import GlobalInternational from "./GlobalInternational";

export default function MainAccreditation() {
  return (
    <div>
      <HeroAccreditation />
      <AcademicExcellence />
      <AccreditationCertificate />
      <HighlightAccreditation />
      <GlobalInternational />
    </div>
  );
}
