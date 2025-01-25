"use client";
import Image from "next/image";
import aboutImage from "@/public/assests/logo.jpg";
import Title from "@/app/components/Title";
import { FaUsers, FaGlobe, FaAward, FaSuitcase } from "react-icons/fa";
import {IconType } from "react-icons"
import { motion } from "framer-motion";
import Missions from "@/app/components/Missions";

export default function AboutUs() {
  return (
    <div className="flex flex-col bg-gray-50">
      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row items-center justify-center w-full py-16 bg-gradient-to-b from-white to-gray-100 px-4">
        <motion.div 
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          className="relative flex items-center justify-center w-64 h-64 mb-8 lg:mb-0"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-red-500 to-pink-500 animate-pulse" />
          <Image
            src={aboutImage}
            alt="About Us"
            className="rounded-full object-cover w-60 h-60 border-4 border-white relative z-10"
          />
        </motion.div>

        <div className="max-w-2xl lg:px-8 text-right w-full">
          <Title className="pb-6 text-center lg:text-right" text="من نحن" />
          <p className="text-lg text-gray-700 leading-8 mb-6 text-right">
            وكالة فلاي للسفريات تأسست عام 2010 بغرض تقديم خدمات سفر استثنائية تجمع بين الأصالة والحداثة.
            خلال رحلتنا التي امتدت لأكثر من عقد، استطعنا بناء شبكة علاقات قوية مع أفضل مزودي الخدمات السياحية
            حول العالم، مع الحفاظ على هويتنا العربية وقيمنا الإسلامية.
          </p>
          <div className="grid grid-cols-2 md:flex md:justify-end gap-4 md:gap-6">
            <StatBox Icon={FaUsers } number="10,000+" label="عميل راضٍ" />
            <StatBox Icon={FaGlobe} number="100+" label="وجهة عالمية" />
            <StatBox Icon={FaAward} number="15+" label="جائزة تميز" />
            <StatBox Icon={FaSuitcase } number="500+" label="برامج سياحية مكتملة" />
          </div>
        </div>
      </section>

      {/* Core Sections */}
      <div className="py-16 px-4 lg:px-8 max-w-7xl mx-auto">
        <Missions />
        
        {/* History Timeline */}
        <div className="mt-16 border-r-2 border-sky-400 pr-8 mr-4 relative">
          <h3 className="text-3xl font-extrabold text-dark mb-8 font-amiri text-right">رحلة التميز</h3>
          <TimelineItem year="2010" title="التأسيس" content="انطلاقتنا الأولى بمكتب صغير في عرماء" />
          <TimelineItem year="2014" title="التوسع الإقليمي" content="فتح 5 فروع جديدة في مدن اليمن" />
          <TimelineItem year="2018" title="الجوائز" content="فوزنا بجائزة أفضل وكالة سفر بالمحافظة" />
          <TimelineItem year="2023" title="الريادة" content="وصولنا لأكثر من 50 دولة حول العالم" />
        </div>
      </div>
    </div>
  );
}

// Reusable Components
const TimelineItem = ({ year, title, content }: {year:string,title:string,content:string}) => (
  <div className="relative mb-8 pr-8 mr-4 text-right">
    <div className="absolute w-4 h-4 bg-sky-400 rounded-full -right-[10px] top-2" />
    <div className="flex flex-col md:flex-row-reverse items-end gap-2">
      <span className="text-xl font-bold text-sky-600">{year}</span>
      <h4 className="text-xl font-semibold text-dark">{title}</h4>
    </div>
    <p className="mt-2 text-gray-600 text-right">{content}</p>
  </div>
);

const StatBox = ({ Icon, number, label }: {Icon:IconType,number:string,label:string}) => (
  <div className="bg-white p-4 rounded-xl shadow-md flex flex-col items-center justify-center w-full min-w-[150px]">
    <div className="text-sky-400 text-2xl mb-2 flex justify-end">{<Icon/>}</div>
    <div className="text-xl font-bold text-dark">{number}</div>
    <div className="text-sm text-gray-600">{label}</div>
  </div>
);