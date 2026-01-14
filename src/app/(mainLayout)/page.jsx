import AboutSection from '@/components/mainLayout/home/AboutSection';
import FAQSection from '@/components/mainLayout/home/FAQSection';
import FeaturesSection from '@/components/mainLayout/home/FeaturesSection';
import NewsletterSection from '@/components/mainLayout/home/NewsletterSection';
import PopularModels from '@/components/mainLayout/home/PopularModels';
import ServicesSection from '@/components/mainLayout/home/ServicesSection';
import Slider from '@/components/mainLayout/home/Swiper';
import TestimonialsSection from '@/components/mainLayout/home/TestimonialsSection';
import React from 'react';

const Home = () => {
  return (
    <div>
      <main className='space-y-10'>
        <header><Slider/></header>
        <PopularModels/>
        <FeaturesSection/>
        <ServicesSection/>
        <TestimonialsSection/>
        <NewsletterSection/>
        <FAQSection/>
        <AboutSection/>
      </main>
    </div>
  );
};

export default Home;