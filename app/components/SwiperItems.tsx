// components/ReusableSwiper.tsx
"use client";
import { Swiper, SwiperSlide, SwiperProps } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

interface ReusableSwiperProps<T> {
  items: T[];
  renderSlide: (item: T) => React.ReactNode;
  className?: string;
  swiperParams?: SwiperProps;
}

export default function ReusableSwiper<T>({
  items,
  renderSlide,
  className = "",
  swiperParams = {},
}: ReusableSwiperProps<T>) {
  return (
    <div className={`w-full ${className}`}>
      <Swiper
        modules={[EffectCoverflow, Pagination, Autoplay]}
        effect="coverflow"
        grabCursor
        loop
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        centeredSlides
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 5,
          stretch: -50,
          depth: 200,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{
          clickable: true,
          el: ".custom-pagination",
          bulletClass: "swiper-bullet",
          bulletActiveClass: "swiper-bullet-active",
        }}
        breakpoints={{
          1280: { slidesPerView: 3, spaceBetween: 40 },
          1024: { slidesPerView: 2.5, spaceBetween: 30 },
          768: { slidesPerView: 2, spaceBetween: 20 },
          0: { slidesPerView: 1, spaceBetween: 10 },
        }}
        {...swiperParams}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="relative group">
              {/* White Glow Effect */}
              <div className="absolute inset-0 bg-white/5 rounded-3xl shadow-[0_0_60px_-15px_rgba(255,255,255,0.3)] group-hover:shadow-[0_0_80px_-10px_rgba(255,255,255,0.5)] transition-all duration-300" />
              {renderSlide(item)}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Pagination with White Theme */}
      <div className="custom-pagination mt-12 flex gap-2 [&_.swiper-bullet]:w-3 [&_.swiper-bullet]:h-3 [&_.swiper-bullet]:bg-white/50 [&_.swiper-bullet-active]:bg-white [&_.swiper-bullet]:transition-all [&_.swiper-bullet]:rounded-full" />
    </div>
  );
}