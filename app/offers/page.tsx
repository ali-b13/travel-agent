"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import WhatsAppButton from "@/app/components/WhatsAppButton";
import { offers } from "@/lib/constant";

const OffersPage = () => {
  const sendOfferMessage = (title: string) => {
    const message = `مرحبا، أنا مهتم بالعرض التالي: ${title} - أريد معرفة المزيد من التفاصيل`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/00967781814365?text=${encodedMessage}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8 select-none">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-dark mb-4">
            العروض الحصرية
          </h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
            استفد من عروضنا المميزة المدروسة بعناية لتجربة سفر استثنائية
          </p>
        </motion.div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 ">
          {offers.map((offer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Offer Image */}
              <div className="relative h-48 w-full">
                <Image
                  src={offer.image}
                  alt={offer.title}
                  fill
                  className="object-cover"
                />
                {offer.isLimited && (
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm">
                    وقت محدود
                  </div>
                )}
              </div>

              {/* Offer Content */}
              <div className="p-6 text-right">
                <h3 className="text-2xl font-bold text-dark mb-3">
                  {offer.title}
                </h3>
                <p className="text-gray-600 mb-4">{offer.description}</p>

                {/* Features List */}
                <ul className="space-y-2 mb-6">
                  {offer.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center justify-end gap-2 text-gray-600"
                    >
                      <span className="text-green-500">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Price & CTA */}
                <div className="border-t pt-4">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-dark">
                      {offer.price}
                    </span>
                    <button
                      onClick={() => sendOfferMessage(offer.title)}
                      className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-lg flex items-center gap-2 transition-colors"
                    >
                      <WhatsAppButton className="w-5 h-5" />
                      استفسر الآن
                    </button>
                  </div>
                  {offer.validUntil && (
                    <p className="text-sm text-gray-500">
                      صالح حتى: {offer.validUntil}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OffersPage;