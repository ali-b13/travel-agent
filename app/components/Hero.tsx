"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import image1 from "@/public/assests/hero.jpg";
import image2 from "@/public/assests/hero-2.jpg";

const ImageSwiper = () => {
  const slides = [
    {
      image: image1,
      title: "رحلاتك المميزة تبدأ معنا",
      description: "اكتشف العالم بأسعار تنافسية وخدمات استثنائية  لك",
      buttonText: "ابدأ رحلتك الآن",
      buttonLink: "/services",
    },
    {
      image: image2,
      title: "خدمات متنوعة وشاملة",
      description: "تطبيق واحد يجمع كل ما تحتاجه للحج، العمرة، والسياحة والخدمات المتنوعة",
      buttonText: "استكشف الخدمات",
      buttonLink: "/services",
    },
  ];

  const animationVariants = {
    hidden: { opacity: 0, y: 70 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      autoplay={{ delay: 5000 }}
      loop
      pagination={{ clickable: true }}
      className="w-full h-[80vh] rounded-sm mx-4 p-4 font-sans"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index} className="relative">
          <div className="relative w-full h-full">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority={index === 0}
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col items-end justify-center text-white px-8 lg:px-16">
              <motion.h2
                className="text-4xl lg:text-7xl font-extrabold mb-6 text-end leading-tight drop-shadow-2xl max-w-2xl font-amiri"
                variants={animationVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              >
                {slide.title}
              </motion.h2>
              
              <motion.p
                className="text-lg lg:text-xl mb-8 text-gray-100 text-end leading-relaxed max-w-xl drop-shadow-lg font-amiri"
                variants={animationVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              >
                {slide.description}
              </motion.p>

              <motion.a
                href={slide.buttonLink}
                className="relative bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 rounded-full 
                         backdrop-blur-lg border border-white/20 shadow-xl hover:shadow-2xl
                         transition-all duration-300 hover:scale-105 group"
                variants={animationVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
              >
                <span className="relative z-10 font-semibold text-lg">
                  {slide.buttonText}
                </span>
                <div className="absolute inset-0 bg-white/10 rounded-full 
                              group-hover:bg-white/20 transition-all duration-300
                              mix-blend-overlay" />
              </motion.a>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageSwiper;