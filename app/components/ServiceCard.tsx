// components/ServiceCard.tsx
"use client";
import Image from "next/image";
import Link from "next/link";
import { ServiceItem } from "@/lib/constant";

interface ServiceCardProps {
  service: ServiceItem;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col border border-gray-100 text-right">
      {/* Image Section */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={service.images[0]}
          alt={service.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent" />
        
        {/* Reserve Button */}
        <Link
          href={service.href}
          className="absolute bottom-4 left-4 md:bottom-6 md:left-6"
        >
          <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-5 py-2.5 rounded-full font-medium flex flex-row-reverse items-center gap-2 shadow-md text-sm md:text-base md:px-6 md:py-3 transform transition-all duration-300 hover:scale-105">
            احجز الآن
            <svg className="w-4 h-4 md:w-5 md:h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </Link>
      </div>

      {/* Content Section */}
      <div className="p-5 md:p-6 flex-1 flex flex-col">
        <h3 className="text-xl md:text-2xl font-bold text-dark mb-3 relative">
          {service.title}
          <span className="absolute bottom-0 right-0 w-10 h-1 bg-dark rounded-full mt-2"></span>
        </h3>
        
        <p className="text-gray-600 text-sm md:text-base mb-4 flex-1 leading-relaxed">
          {service.description}
        </p>

        {/* Features Column */}
        <div className="space-y-3 mb-6">
          {service.features.slice(0, 3).map((feature, index) => (
            <div key={index} className="flex flex-row-reverse items-start p-3 bg-gray-50 rounded-lg">
              <svg
                className="w-5 h-5 text-cyan-500 ml-3 flex-shrink-0 mt-0.5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
              </svg>
              <span className="text-gray-700 text-sm font-medium">{feature}</span>
            </div>
          ))}
        </div>

        {/* Details Link */}
        <Link
         href={service.href}
          className="text-cyan-600 hover:text-cyan-700 font-medium flex flex-row-reverse items-center justify-start gap-2 text-sm md:text-base mt-auto"
        >
          المزيد من التفاصيل
          <svg className="w-4 h-4 md:w-5 md:h-5 rotate-180" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168a1 1 0 00-1.111 1.62l1.805 1.349H6a1 1 0 100 2h4.249l-1.805 1.35a1 1 0 001.11 1.662l3.5-2.625a1 1 0 000-1.542l-3.5-2.625a1 1 0 00-.3-.168z" clipRule="evenodd" />
          </svg>
        </Link>
      </div>
    </div>
  );
}