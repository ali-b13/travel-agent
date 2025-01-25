"use client";

import { servicesItems } from "@/lib/constant";
import { BiMobile } from "react-icons/bi";
import { CgMail } from "react-icons/cg";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
 

  return (
    <footer className="bg-sky-800 text-white py-12 rtl">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-bold mb-4">تواصل معنا</h3>
            <div className="flex gap-2 items-center">
            <BiMobile/>
            <p className="mb-2"> واتساب : 00967781814365</p>
            </div>
            <div className="flex gap-2 items-center">
            <FaWhatsapp/>
            <p className="mb-2"> الجوال : 00967781814365</p>
            </div>
            <div className="flex items-center gap-2">
            <CgMail/>
            <p className="mb-2">alialamri.work@gmailcom</p>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">خدماتنا</h3>
            <ul className="space-y-2">
              {servicesItems.map((service) => (
                <li key={service.title}>
                  <a
                    href={service.href}
                    className="hover:underline hover:text-sky-300 transition duration-200"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About Us */}
          <div>
            <h3 className="text-lg font-bold mb-4">من نحن</h3>
            <p className="text-sm">
              نحن وكالة سفر رائدة مكرسة لتقديم أفضل تجارب السفر. من حجز الرحلات الجوية
              إلى البرامج السياحية المخصصة، نجعل رحلتك خالية من المتاعب وممتعة.
            </p>
          </div>

          {/* Newsletter Subscription */}
          <div>
            <h3 className="text-lg font-bold mb-4">اشترك في نشرتنا الإخبارية</h3>
            <p className="text-sm mb-4">
              احصل على أحدث عروض السفر والتحديثات والنصائح مباشرة في بريدك
              الإلكتروني.
            </p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="أدخل بريدك الإلكتروني"
                className="p-2 rounded-md bg-sky-700 placeholder-sky-300 text-white border border-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
              <button
                type="submit"
                className="p-2 rounded-md bg-sky-600 text-white hover:bg-sky-500 transition duration-200"
              >
                اشتراك
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 text-center border-t border-sky-700 pt-6 ">
          <p className="text-sm pb-2">
            جميع الحقوق محفوظة © {new Date().getFullYear()} وكالة السفر
          </p>
          <p className="text-sm"> برمجة وتصميم علي العمري </p>
        </div>
      </div>
    </footer>
  );
}
