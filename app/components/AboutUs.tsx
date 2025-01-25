"use client";
import Image from "next/image";
import aboutImage from "@/public/assests/logo.jpg"; // Replace with your image path
import Title from "./Title";
import Missions from "@/app/components/Missions"
export default function AboutUs() {
  return (
    <section className="flex flex-col">
      <div className="flex flex-col lg:flex-row items-center justify-center w-full py-16 bg-gray-100">
        <div className="relative flex items-center justify-center w-64 h-64 mb-8 rounded-full bg-gradient-to-r from-red-500 to-pink-500 shadow-lg">
          {/* Bubble with Image */}
          <Image
            src={aboutImage}
            alt="About Us"
            className="rounded-full object-cover w-60 h-60 border-4 border-white"
          />
        </div>
        <div className="select-none">
          <Title className={"pb-[2rem] p-2 m-4 "} text="  من نحن" />
          <p className="text-lg text-center text-gray-700 max-w-2xl px-4 leading-8">
            نحن وكالة سفر متخصصة في تقديم خدمات متكاملة لتلبية جميع احتياجات السفر الخاصة بك.
            نقدم خدمات تخطيط وتنظيم رحلات العمرة والحج، بالإضافة إلى حجز تذاكر الطيران
            والحافلات. كما نوفر المساعدة في إنهاء جميع الوثائق الرسمية المتعلقة بالسفر،
            لضمان تجربة سلسة ومريحة. نسعى دائمًا لتحقيق رضا العملاء من خلال تقديم
            خدمات عالية الجودة وخيارات سفر تناسب الجميع.
          </p>
        </div>
      </div>
      <Missions/>
      
    </section>
  );
}
