'use client';
import React from 'react';
import HomeHero from './HomeHero';
import HomeStates from './HomeStates';
import HomePrograms from './HomePrograms';

export default function MainHome() {
  return (
    <>
      <HomeHero />
      <HomeStates />
      <HomePrograms />
    </>
  );
}
