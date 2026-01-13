"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Slider = () => {
  const router = useRouter();

  const slides = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1589256469067-ea99122bbdc4?w=1600&auto=format&fit=crop",
      title: "HUMAN CHARACTER MODELS",
      description: "Realistic human 3D model collection. High-quality character models of men, women, children, different ages and ethnicities.",
      buttonText: "View Human Models"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=1600&auto=format&fit=crop",
      title: "ANIMALS & CREATURES",
      description: "Complete collection of 3D animal models. Domestic pets, wildlife, birds, marine life and fantasy creatures.",
      buttonText: "View Animal Models"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1600&auto=format&fit=crop",
      title: "PLANTS & TREES",
      description: "Realistic 3D vegetation models. Trees, plants, flowers, grass and complete environment packs.",
      buttonText: "View Plant Models"
    }
  ];

  const handleViewAllModels = () => {
    router.push('/all-models');
  };

  return (
    <div className="w-full h-100 md:h-125 rounded-2xl overflow-hidden relative group">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation={{
          nextEl: '.custom-next-btn',
          prevEl: '.custom-prev-btn',
        }}
        pagination={{ 
          clickable: true,
          renderBullet: function (index, className) {
            return `<span class="${className} swiper-bullet"></span>`;
          }
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-full w-full">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/70 to-black/50"></div>
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/50 to-transparent"></div>
              </div>

              <div className="relative h-full flex items-center">
                <div className="w-full px-5">
                  <div className="max-w-xl">
                    <div className="mb-3">
                      <span className="inline-block px-3 py-1 bg-linear-to-r from-[#7c3aed] to-[#06b6d4] text-white text-sm font-bold rounded-full">
                        PREMIUM 3D MODELS
                      </span>
                    </div>
                    
                    <h1 className="text-lg md:text-3xl font-bold mb-3 text-[#7c3aed]">
                      {slide.title}
                    </h1>
                    
                    <p className="text-[12px] md:text-[18px] text-white/60 mb-6">
                      {slide.description}
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link href={'/all-models'} className="px-6 py-3 bg-linear-to-r from-[#7c3aed] to-[#06b6d4] text-white rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 shadow-md cursor-pointer">
                        {slide.buttonText}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      <button className="custom-next-btn cursor-pointer absolute right-4 top-1/2 -translate-y-1/2 z-10 md:w-14 md:h-14 bg-white/20 backdrop-blur-lg rounded-full flex items-center justify-center hover:bg-white/30 hover:scale-110 active:scale-95 transition-all duration-300 border border-white/30 shadow-lg">
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div className="swiper-pagination bottom-6"></div>
    </div>
  );
};

export default Slider;