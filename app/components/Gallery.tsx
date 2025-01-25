"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import Title from "./Title";
import { destinations } from "@/lib/constant";
import Image, { StaticImageData } from "next/image";
import { BiArrowBack, BiArrowFromLeft } from "react-icons/bi";

// Define type for Destination
interface Destination {
  name: string;
  images: (string | StaticImageData)[];
}

export default function Gallery() {
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | StaticImageData | null>(null);

  const handleImageClick = (image: string | StaticImageData) => {
    setSelectedImage(image);
  };

  return (
    <section className="py-16 bg-gray-100 select-none">
      <Title className="p-2 m-4 " text="المعرض السياحي" />

      {/* Main Swiper with Custom Navigation */}
      <div className="relative max-w-6xl mx-auto mt-16">
        {/* Custom Navigation Buttons */}
        <button
          className="swiper-button-prev absolute top-1/2 -left-10 z-10"
          aria-label="Previous Slide"
        >
          <BiArrowBack />
        </button>
        <button
          className="swiper-button-next absolute top-1/2 -right-10 z-10"
          aria-label="Next Slide"
        >
          <BiArrowFromLeft />
        </button>

        <Swiper
          modules={[Navigation, Pagination]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{ clickable: true, el: ".custom-pagination" }}
          slidesPerView={1}
          spaceBetween={16}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}
          className="relative"
        >
          {destinations.map((destination: Destination, index: number) => (
            <SwiperSlide
              key={index}
              className="cursor-pointer"
              onClick={() => {
                setSelectedDestination(destination);
                setSelectedImage(destination.images[0]);
              }}
            >
              <div className="flex flex-col items-center justify-between h-[22rem] bg-white rounded-lg overflow-hidden shadow-lg p-4">
                {/* Image with fixed height */}
                <div className="w-full h-[14rem] flex items-center justify-center overflow-hidden">
                  <Image
                    src={destination.images[0]}
                    alt={destination.name}
                    width={500}
                    height={256}
                    className="object-contain w-auto h-full"
                  />
                </div>
                {/* Text Content */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-dark font-amiri">
                    {destination.name}
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Modal */}
      {selectedDestination && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div
            className="bg-white rounded-lg overflow-hidden w-full max-w-4xl flex flex-col"
            style={{
              maxHeight: "90vh",
            }}
          >
            {/* Main Image */}
            <div className="relative flex-grow">
              <button
                className="absolute top-2 right-2 bg-primary text-white rounded-full px-4 py-2 shadow"
                onClick={() => {
                  setSelectedDestination(null);
                  setSelectedImage(null);
                }}
              >
                اغلاق
              </button>
              {selectedImage && (
                <Image
                  src={selectedImage}
                  alt={selectedDestination.name}
                  width={800}
                  height={400}
                  className="w-full max-h-[22rem] lg:max-h-[28rem] object-contain mt-1 rounded-xl"
                />
              )}
            </div>

            {/* Nested Swiper */}
            <div className="p-4">
              <h3 className="text-2xl font-bold text-center mb-4">
                {selectedDestination.name}
              </h3>
              <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                slidesPerView={3}
                spaceBetween={10}
                className="h-full"
              >
                {selectedDestination.images.map((image, idx) => (
                  <SwiperSlide key={idx} onClick={() => handleImageClick(image)}>
                    <Image
                      src={image}
                      alt={`${selectedDestination.name} ${idx + 1}`}
                      width={500}
                      height={256}
                      className="w-full h-32 object-cover rounded-xl cursor-pointer"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
