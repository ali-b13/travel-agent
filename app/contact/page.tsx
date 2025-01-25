"use client";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import Title from "@/app/components/Title";
import { IconType } from "react-icons";

export default function ContactPage() {
  return (
    <div className="flex flex-col bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-16 bg-gradient-to-b from-white to-gray-100 px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-7xl mx-auto text-center"
        >
          <Title className="mb-3 md:mb-4" text="تواصل معنا" />
          <p className="text-base md:text-lg text-gray-700 leading-relaxed md:leading-8 max-w-2xl mx-auto text-center md:text-right">
            نحن هنا لمساعدتك في أي استفسار أو طلب. فريق الدعم لديعمل على مدار الساعة لتقديم أفضل خدمة عملاء.
          </p>
        </motion.div>
      </section>

      {/* Contact Content */}
      <div className="py-12 md:py-16 px-4 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col items-center">
          {/* Contact Methods Grid - Full width on small screens */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
          >
            <ContactCard
              Icon={FaPhone }
              className="text-2xl md:text-3xl text-sky-400"
              title="الهاتف"
              content="+967 70 000 0000"
            />
            
            <ContactCard
              Icon={FaWhatsapp }  
              className={"text-2xl md:text-3xl text-green-500"}            
              title="واتساب"
              content="+000 50 000 0000"
            />
            
            <ContactCard
              Icon={FaEnvelope }
              className={"text-2xl md:text-3xl text-red-400"}
              title="البريد الإلكتروني"
              content="testTheApp@gmail.com"
            />
            
            <ContactCard
              Icon={FaMapMarkerAlt }
              className={"text-2xl md:text-3xl text-purple-400"}
              title="العنوان"
              content="عرماء , شبوة ,  اليمن"
            />
          </motion.div>

          {/* Social Media - Full width on small screens */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="w-full mt-8 md:mt-12"
          >
            <div className="bg-white p-4 md:p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl md:text-2xl font-bold text-dark mb-3 md:mb-4 text-center md:text-right">
                وسائل التواصل الاجتماعي
              </h3>
              <div className="flex justify-center md:justify-end gap-3 md:gap-4">
                <SocialIcon Icon={FaTwitter } color="text-blue-400" />
                <SocialIcon Icon={FaFacebook } color="text-blue-600" />
                <SocialIcon Icon={FaInstagram } color="text-pink-500" />
              </div>
            </div>
          </motion.div>

          {/* Map - Full width on all screens */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="w-full mt-8 md:mt-12 rounded-2xl overflow-hidden shadow-lg"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.041267433312!2d46.8267!3d14.5521!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTrCsDMzJzA3LjYiTiA0NsKwNDknMzYuMSJF!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
              className="w-full h-64 md:h-96 border-0"
              allowFullScreen
              loading="lazy"
              title="Ataq City Map"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

// Reusable Components with full-width on mobile
const ContactCard = ({ Icon, title, content,className }: {Icon:IconType,title:string,content:string,className:string}) => (
  <motion.div 
    whileHover={{ scale: 1.02 }}
    className="bg-white p-4 md:p-6 rounded-2xl shadow-lg hover:shadow-lg transition-all w-full"
  >
    <div className="flex items-center gap-3 md:gap-4 justify-end">
      <div className="bg-gray-100 p-3 md:p-4 rounded-full">{<Icon className={className}/>}</div>
      <div className="text-right flex-1">
        <h4 className="text-lg md:text-xl font-bold text-dark">{title}</h4>
        <p className="text-sm md:text-base text-gray-600">{content}</p>
      </div>
    </div>
  </motion.div>
);

const SocialIcon = ({ Icon, color }: {Icon:IconType, color:string}) => (
  <motion.a 
    href="#" 
    whileHover={{ scale: 1.1 }}
    className={`p-2 md:p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors ${color} text-lg md:text-xl`}
  >
    {<Icon/>}
  </motion.a>
);