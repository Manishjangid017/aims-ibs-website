'use client';
import React from 'react';
import PlacementRecords from './PlacementRecords';
import CompaniesBreakup from './CompaniesBreakup';
import SpecializationBreakup from './SpecializationBreakup';
import CommonBanner from '../Common/CommonBanner';
import SectorPlacements from './SectorPlacements';
import OverallPlacementRecord from './OverallPlacementRecord';

export default function MainPlacementStatistics() {
  return (
    <>
      <CommonBanner
        image="/images/why-aims-ibs/placement-statistics-bg-img.webp"
        position="left"
        lineOne="Placement <b>Statistics</b>"
        lineTwo=""
        description="At AIMS IBS, placements go beyond job offers. Our robust placement training, industry mentoring, and company-specific preparations ensure you don't just find a job, you launch a career."
        actions={[
          { label: 'Join Today', href: '/apply-now', variant: 'primary', icon: 'arrow' },
          { label: 'Download Handbook', href: '/handbook.pdf', variant: 'outline', icon: 'download', download: true },
        ]}
      />
      <PlacementRecords />
      <CompaniesBreakup />
      <SpecializationBreakup />
      <SectorPlacements />
      <OverallPlacementRecord />
    </>
  );
}
