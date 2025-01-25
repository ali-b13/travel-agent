// app/services/page.tsx
"use client";
import ServiceCard from "@/app/components/ServiceCard";
import { servicesItems } from "@/lib/constant";
import Title from "../components/Title";
import SubTitle from "../components/SubTitle";

export default function ServicesPage() {
    return (
      <div className="min-h-screen bg-gray-50">
        <header className="container mx-auto px-4 py-12 md:py-16 text-center">
          <Title text="خدماتنا المتكاملة"/>
        
          <SubTitle text=" نقدم حلول سفر شاملة تغطي كافة احتياجات رحلاتك بدءًا من الحجوزات وحتى الوصول" 
          className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto mt-4"/>
        </header>
  
        <section className="container mx-auto px-4 pb-12 md:pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {servicesItems.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
        </section>
      </div>
    );
  }