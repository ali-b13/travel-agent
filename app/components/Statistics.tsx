"use client";

import { FaUsers, FaSuitcase ,FaGlobe,FaAward} from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

export default function OurStatistics() {
  const stats = [
    {
      icon: <FaUsers className="text-6xl text-sky-400" />,
      label: "عميل راضٍ",
      value: 11500,
      suffix: "+",
    },
    {
      icon: <FaAward className="text-6xl text-sky-400" />,
      label: "جائزة تميز",
      value: 8,
      suffix: "",
    },
    {
      icon: <FaGlobe className="text-6xl text-sky-400" />,
      label: "وجهة عالمية",
      value: 20,
      suffix: "+",
    },
    {
      icon: <FaSuitcase className="text-6xl text-sky-400" />,
      label: "برامج سياحية مكتملة",
      value: 500,
      suffix: "+",
    },
  ];

  const animationVariants = {
    hiddenLeft: { opacity: 0, x: -50 },
    hiddenRight: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section className="relative bg-gray-100 py-16 mx-auto">
      {/* Background Image */}
      <div className="absolute inset-0 filter bg-hero-pattern bg-contain"></div>
      
      {/* Content Layer */}
      <div className="relative z-10">
        <div ref={ref} className="flex flex-col items-center space-y-12 lg:mx-[50%]">
          {stats.map((stat, index) => (
            <motion.h2
              key={index}
              variants={animationVariants}
              initial={index % 2 === 0 ? "hiddenLeft" : "hiddenRight"}
              animate={inView ? "visible" : undefined}
              transition={{ duration: 0.5, delay: index * 0.3 }}
              className={`relative w-60 h-60 rounded-full border-4 border-gray-300 flex flex-col items-center justify-center shadow-lg group hover:border-primary transition-all duration-500 ${
                index % 2 === 0 ? "self-end mr-4" : "self-start ml-4"
              }`}
            >
              {/* Dot animation */}
              <span
                className="absolute w-5 h-5 bg-sky-400 rounded-full top-15 transform opacity-0 group-hover:opacity-100 group-hover:animate-spin-dot"
              ></span>

              {stat.icon}
              <p className="text-dark font-extrabold text-xl font-amiri mt-1">
                {stat.label}
              </p>
              <p className="text-4xl font-extrabold text-primary mt-4">
                {inView && (
                  <CountUp
                    start={0}
                    end={stat.value}
                    duration={5}
                    suffix={stat.suffix}
                  />
                )}
              </p>
            </motion.h2>
          ))}
        </div>
      </div>
    </section>
  );
}