import PopularModels from '@/components/mainLayout/home/PopularModels';
import Slider from '@/components/mainLayout/home/Swiper';
import React from 'react';

const Home = () => {
  return (
    <div>
      <main className='space-y-10'>
        <header><Slider/></header>
        <PopularModels/>
      </main>
    </div>
  );
};

export default Home;