'use client';
import React from 'react';
import HomeHero from './HomeHero';
import HomeStates from './HomeStates';
import HomePrograms from './HomePrograms';
import RankedSection from './RankedSection';
import GlobalCollaborations from './GlobalCollaborations';
import GlobalExposure from './GlobalExposure';
import Placements from './Placements';

export default function MainHome() {
  return (
    <>
      <HomeHero />
      <HomeStates />
      <HomePrograms />
      <RankedSection />
      <GlobalCollaborations />
      <GlobalExposure />
      <Placements />
    </>
  );
}
