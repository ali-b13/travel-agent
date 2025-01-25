"use client";
import Image from "next/image";
import image1 from "@/public/assests/partners/emirates.png"
import image2 from "@/public/assests/partners/flydubai.png"
import image3 from "@/public/assests/partners/yemenia.png"
import image4 from "@/public/assests/partners/saidda.png"

export default function Partners() {
  const partners = [
    { id: 1, logo: image1, alt: "Partner 1" },
    { id: 2, logo: image2, alt: "Partner 2" },
    { id: 3, logo: image3, alt: "Partner 3" },
    { id: 4, logo: image4, alt: "Partner 4" },
  ];

  return (
    <section className=" py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="flex items-center justify-center p-4 bg-white rounded-lg   transition-shadow duration-300"
            >
              <Image
                src={partner.logo}
                alt={partner.alt}
                width={120}
                height={120}
                className="object-contain max-h-[6rem] "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
