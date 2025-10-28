// 'use client';

import CountriesWeCover from '@/components/about/sections/CountriesWeCover';
import Hero from '@/components/about/sections/Hero';
import ContactUsForm from '@/components/contact/sections/ContactUsForm';
import FaqSection from '@/components/home/sections/Faqs';
import ScrollingMarquee from '@/components/home/sections/ScrollingMarquee';
import React from 'react';

const page = () => {
  return (
    <div>
      <Hero />
      <ScrollingMarquee />
      <ContactUsForm />
      <CountriesWeCover />
      <FaqSection />
    </div>
  );
};

export default page;
