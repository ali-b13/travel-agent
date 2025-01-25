"use client";

import React, { useState } from "react";
import Logo from "./Logo";
import waveSvg from "@/public/assests/logo_bg_mask.png";
import Image from "next/image";
import { navLinks } from "@/lib/constant";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { MdMenu } from 'react-icons/md';

import { FiX } from "react-icons/fi"; // Feather Icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Menu state
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full font-sans sticky top-0 z-50 bg-white">
      {/* Top bar */}
      <section className="hidden lg:flex items-center justify-between border-2 px-4 py-2 bg-white text-gray-600">
        <div className="flex items-center gap-2">
          <Link href={"/contact"}  className="hover:text-primary hover:cursor-pointer transition-all duration-300">
            تواصل معنا
          </Link>
         
        </div>

        <div className="flex items-center gap-2">
          <span> السبت إلى الخميس: 8.30 صباحًا - 8.30 مساءً</span>
          <span className="text-neutral-400">|</span>
          <span> اليمن شبوه ,عرماء </span>
        </div>
      </section>

      {/* Main navbar */}
      <section className="min-h-[4rem] flex justify-between items-center lg:mt-1 relative">
        <Image
          className="absolute w-auto"
          src={waveSvg}
          alt="logo-back"
          width={180}
          height={180}
        />
        {/* Desktop menu */}
        <div className="hidden lg:flex self-center items-center gap-8 z-50 text-center text-dark">
          <Link
            href={"/services"}
            className="hidden lg:block mr-[11rem] ml-[4rem] rounded-md p-2 text-center bg-sky-900 text-white hover:bg-white hover:text-dark transition-all duration-500"
          >
            احجز الان
          </Link>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-dark font-sans font-semibold hover:text-primary transition-all duration-500 cursor-pointer select-none ${
                pathname == link.href ? "text-primary" : ""
              }`}
            >
              {link.title}
            </Link>
          ))}
        </div>

        {/* Mobile menu icon */}
        <div
          className="block font-bold lg:hidden z-50 ml-[15%] text-white text-4xl cursor-pointer"
          onClick={toggleMenu}
        >
          {isOpen ? <FiX/> : <MdMenu/>}
        </div>

        <Logo />

        {/* Mobile menu */}
        <div
          className={`fixed top-0 right-0 h-full w-2/3 bg-white shadow-lg z-40 transform transition-transform duration-500 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col gap-4 p-6">
            <button
              onClick={toggleMenu}
              className="text-2xl text-dark self-end font-bold"
            >
              ×
            </button>
            {navLinks.map((link) => (
              <Link
                onClick={toggleMenu}
                key={link.href}
                href={link.href}
                className={`text-lg font-semibold ${
                  pathname === link.href ? "text-primary" : "text-dark"
                } hover:text-primary transition-all duration-300`}
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
