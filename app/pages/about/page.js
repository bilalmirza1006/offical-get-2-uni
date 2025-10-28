// 'use client';

import ChooseUs from '@/components/about/sections/ChooseUs';
import CountriesWeCover from '@/components/about/sections/CountriesWeCover';
import Hero from '@/components/about/sections/Hero';
import OurStory from '@/components/about/sections/OurStory';
import WhatYouCanDo from '@/components/about/sections/WhatYouCanDo';
import FaqSection from '@/components/home/sections/Faqs';
import ScrollingMarquee from '@/components/home/sections/ScrollingMarquee';
import React from 'react';

const page = () => {
  return (
    <>
      <Hero />
      <ScrollingMarquee />
      <OurStory />
      <WhatYouCanDo />
      <CountriesWeCover />
      <ChooseUs />
      <FaqSection />
    </>
  );
};

export default page;
