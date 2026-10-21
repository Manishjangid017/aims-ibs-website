'use client';
import React from 'react';
import RankingHero from './RankingHero';
import NationalRanking from './NationalRanking';
import ResearchRanking from './ResearchRanking';
import RankedResult from './RankedResult'
export default function MainRanking() {
  return (
    <>
      <RankingHero />
      <NationalRanking />
      <RankedResult/>
      <ResearchRanking />
    </>
  );
}
