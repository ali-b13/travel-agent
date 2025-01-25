"use client";

import Image from 'next/image';
import { useParams } from 'next/navigation';
import { servicesItems } from '@/lib/constant';
import { notFound } from 'next/navigation';
import WhatsAppButton from '@/app/components/WhatsAppButton';

const ServicePage = () => {
  const params = useParams();
  const href = params.href as string;

  // Then: Find service and handle not found
  const service = servicesItems.find(service => service.href === `/services/${href}`);
  if (!service) {
   return notFound();
  }

  const message = `مرحبا، أريد الاستعلام عن ${service.title}`;

  const sendWhatsAppMessage = () => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/+967781814365?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 select-none">
      <div className="max-w-4xl mx-auto">
        {/* Service Image */}
        <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-8">
          <Image
            src={service.images[0]}
            alt={service.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Service Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-dark mb-4 text-center">
          {service.title}
        </h1>

        {/* Service Description */}
        <p className="text-gray-600 text-lg mb-8 text-center">
          {service.description}
        </p>

        {/* Features & Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Features List */}
          <div className="bg-white p-6 rounded-xl shadow-sm text-right">
            <h2 className="text-2xl font-semibold mb-4 text-dark">مميزات الخدمة</h2>
            <ul className="space-y-3">
              {service.features.map((feature, index) => (
                <li 
                  key={index}
                  className="flex items-center justify-end gap-2 text-gray-600"
                >
                  <span className="text-green-500">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Service Details */}
          <div className="bg-white p-6 rounded-xl shadow-sm text-right">
            <h2 className="text-2xl font-semibold mb-4 text-dark">تفاصيل الخدمة</h2>
            <ul className="space-y-3">
              {service.details.map((detail, index) => (
                <li 
                  key={index}
                  className="flex items-center justify-end gap-2 text-gray-600"
                >
                  <span className="text-blue-500">•</span>
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* WhatsApp Booking */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="space-y-4">
           
            <button
              onClick={sendWhatsAppMessage}
              className="w-full bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-lg font-medium text-lg transition-all flex items-center justify-center gap-2"
            >
              <WhatsAppButton className="w-6 h-6" />
              الطلب عبر واتساب
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;