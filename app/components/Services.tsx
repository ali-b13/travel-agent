"use client";
import React from 'react';
import Title from './Title';
import SwiperWithPagination from './SwiperItems';
import { servicesItems } from '@/lib/constant';
import Image from 'next/image';
import Button from './Button';

const Services = () => {
  return (
    <div className="min-h-screen relative  bg-right flex flex-col justify-center mt-[6rem]">
      {/* Modern Geometric Background */}
      <div className="absolute inset-0 filter  bg-hero-pattern bg-contain"></div>
      {/* Content Layer */}
      <div className="relative z-10 container mx-auto px-4">
        <Title className='p-2 m-4 ' text="ماذا نقدم"  />
        
        <SwiperWithPagination
          items={servicesItems}
          className="py-12"
          swiperParams={{
            spaceBetween: 40,
            breakpoints: {
              1280: { slidesPerView: 3 },
              1024: { slidesPerView: 2.5 },
              768: { slidesPerView: 2 },
              0: { slidesPerView: 1 }
            }
          }}
          renderSlide={(item) => (
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden text-right">
              <div className="relative h-64">
                <Image
                  src={item.images[0]}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
          
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                
                <ul className="mb-4 space-y-3">
                  {item.features.slice(0, 3).map((feature, index) => (
                    <li key={index} className="flex flex-row-reverse items-start">
                      <svg className="w-5 h-5 text-cyan-500 mt-1 ml-2 flex-shrink-0" 
                           fill="currentColor" viewBox="0 0 20 20">
                        <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                      </svg>
                      <span className="text-gray-600 leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
          
          
                <Button
                
                 href={item.href}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 rounded-lg transition-all"
                >
                  ابدأ الحجز الآن
                </Button>
              </div>
            </div>
          )}
        />
      </div>
    </div>
  );
};

export default Services;