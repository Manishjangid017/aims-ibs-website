'use client';
import React from 'react';
import FeedbackIntro from './FeedbackIntro';
import FeedbackTypes from './FeedbackTypes';
import FeedbackForm from './FeedbackForm';
import CommonBanner from '../Common/CommonBanner';

export default function MainStudentFeedback() {
  return (
    <>
      <CommonBanner
        image="/images/about-us/feedback-bg-img.webp"
        position="left"
        lineOne="Share Your "
        lineTwo="<b>Feedback</b>"
        description="Your thoughts help us improve and grow together."
        actions={[]}
      />
      <FeedbackIntro />
      <FeedbackTypes />
      <FeedbackForm />
    </>
  );
}
