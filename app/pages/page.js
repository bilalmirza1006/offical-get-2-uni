import ExploreProgram from '@/components/home/sections/ExploreProgram';
import FaqSection from '@/components/home/sections/Faqs';
import HeroSection from '@/components/home/sections/HeroSection';
import ScrollingMarquee from '@/components/home/sections/ScrollingMarquee';

export default function HomeSections() {
  return (
    <>
      <HeroSection />
      <ScrollingMarquee />
      <ExploreProgram />
      <FaqSection />
      {/* <Header />/ */}
      {/* <HeroSection /> */}
      {/* <FeaturesSection /> */}
      {/* <TestimonialsSection /> */}
      {/* <CTASection /> */}
    </>
  );
}
