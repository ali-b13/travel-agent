import planeReserve from "@/public/assests/plane.jpg";
import hotelImage from "@/public/assests/hotel.jpg";
import drivingImage from "@/public/assests/driving.png";
import ummraimage from "@/public/assests/ummra.png";
import toursimImage from "@/public/assests/visa.jpg";
import busImage from "@/public/assests/bus.jpg";
import documentVisa from "@/public/assests/documentVisa.jpg";
export const navLinks=[
    {
      title:"الرئيسية",
      href:"/",
     
    },
    {
        title:"من نحن ",
        href:"/about-us"
    },
    {
        title:"خدماتنا",
        href:"/services",
  
      },
      {
        title:"العروض والباقات",
        href:"/offers",
  
      },
      {
        title:"تواصل معنا",
         href:"/contact"
      }
]
export interface ServiceItem {
  title: string;
  href: string;
  images: StaticImageData[];
  description: string;
  features: string[];
  price: string;
  duration: string;
  capacity: string;
  destinations: string[];
  inclusions: string[];
  details: string[];
}

export const servicesItems: ServiceItem[] = [
  {
    title: "تذاكر الطيران",
    href: "/services/flights",
    images: [planeReserve],
    description: "احجز رحلتك بسلاسة مع أحدث أنظمة الحجز وأفضل العروض من كبرى شركات الطيران العالمية بأسعار تنافسية",
    price: "١٬٢٩٩ ر.س",
    duration: "حسب الوجهة",
    capacity: "1+ أشخاص",
    destinations: ["جميع الوجهات الدولية"],
    inclusions: ["تأمين سفر", "وجبات على الطائرة", "أمتعة مجانية"],
    features: [
      "تتبع الأسعار في الوقت الحقيقي",
      "خيارات دفع متعددة وآمنة",
      "تذكرة إلكترونية فورية",
      "تغيير الحجز بمرونة",
      "أفضل عروض الخطوط الجوية"
    ],
    details: [
      "تأكيد الحجز الفوري عبر البريد الإلكتروني",
      "دعم على مدار 24 ساعة لتعديلات الحجز",
      "مقاعد مضمونة حسب الطلب",
      "نظام ترقب الأسعار الذكي",
      "إشعارات بتغير أوقات الرحلات"
    ],
  },
  {
    title: "تصاريح الحج والعمرة",
    href: "/services/hajj-umrah",
    images: [ummraimage],
    description: "خدمات متكاملة للحج والعمرة مع مرشدين مختصين وبرامج متميزة تغطي كافة تفاصيل الرحلة الروحانية",
    price: "٥٬٩٩٩ ر.س",
    duration: "30 يوم",
    capacity: "مجموعات من 10-50",
    destinations: ["مكة المكرمة", "المدينة المنورة"],
    inclusions: ["الإقامة الفندقية", "النقل الداخلي", "الوجبات اليومية"],
    features: [
      "مجموعات بإشراف مرشدين معتمدين",
      "حجوزات بالقرب من الأماكن المقدسة",
      "برامج تثقيفية مسبقة",
      "دعم طبي خلال الرحلة",
      "تسهيلات نقل خاصة"
    ],
    details: [
      "تأمين صحي شامل طوال الرحلة",
      "برنامج توجيهي يومي",
      "حقيبة الحجاج الخاصة",
      "خدمة التوصيل من المطار",
      "دليل إرشادي إلكتروني"
    ],
  },
  {
    title: "برامج سياحية",
    href: "/services/tours",
    images: [toursimImage],
    description: "تصميم برامج سياحية فريدة تناسب جميع الأذواق، من الجولات الثقافية إلى المغامرات الاستكشافية الفاخرة",
    price: "٣٬٩٩٩ ر.س",
    duration: "7-14 يوم",
    capacity: "2-8 أشخاص",
    destinations: ["أوروبا", "آسيا", "أمريكا الشمالية"],
    inclusions: ["تذاكر الدخول", "المرشد السياحي", "التنقلات الداخلية"],
    features: [
      "جولات خاصة مع مرشدين محليين",
      "تخطيط حسب الميزانية",
      "تذاكر دخول للمعالم السياحية",
      "تأمين سفر شامل",
      "خدمة ترجمة مرافقة"
    ],
    details: [
      "برنامج يومي مفصل",
      "خيارات الإقامة الفاخرة",
      "تقييمات السياح الحقيقية",
      "خدمة حجز المطاعم",
      "بطاقة SIM سياحية مجانية"
    ],
  },
  {
    title: "حجز الفنادق",
    href: "/services/hotels",
    images: [hotelImage],
    description: "اختر من بين تشكيلة واسعة من الفنادق الفاخرة والمنتجعات العالمية مع عروض حصرية وضمان أفضل الأسعار",
    price: "٧٩٩ ر.س/ليلة",
    duration: "حسب المدة",
    capacity: "1-4 أشخاص",
    destinations: ["دبي", "اسطنبول", "باريس", "نيويورك"],
    inclusions: ["إفطار مجاني", "واي فاي مجاني", "خدمة الغرف 24 ساعة"],
    features: [
      "عروض الإقامة الطويلة",
      "مقارنة الأسعار بين المواقع",
      "مراجعات حقيقية من النزلاء",
      "خدمة الكونسيرج الفاخرة",
      "إلغاء مجاني حتى 24 ساعة"
    ],
    details: [
      "خيارات الدفع عند الوصول",
      "ترقيات الغرف المجانية",
      "برنامج المكافآت الدائم",
      "خدمة النقل من المطار",
      "ضمان أفضل سعر"
    ],
  },
  {
    title: "النقل البري",
    href: "/services/transport",
    images: [busImage],
    description: "خدمات نقل مريحة وآمنة بأسطول حديث من المركبات الفاخرة مع سائقين محترفين على مدار الساعة",
    price: "٣٩٩ ر.س/يوم",
    duration: "حسب الرحلة",
    capacity: "1-12 شخص",
    destinations: ["المدن السعودية", "المناطق السياحية"],
    inclusions: ["وقود مجاني", "سائق خاص", "تأمين شامل"],
    features: [
      "تتبع الرحلات المباشر",
      "مركبات بمواصفات فاخرة",
      "خدمة الاستلام والتوصيل",
      "تأمين ركاب شامل",
      "حجوزات فورية عبر التطبيق"
    ],
    details: [
      "تحديد نقاط التوقف المطلوبة",
      "خدمة الطلبات الفورية",
      "تقييم السائقين بعد كل رحلة",
      "أنظمة ترفيه داخل المركبة",
      "تقرير الرحلة التفصيلي"
    ],
  },
  {
    title: "الفيزا والتصاريح",
    href: "/services/visa",
    images: [documentVisa,],
    description: "معالجة سريعة ودقيقة لكافة متطلبات التأشيرات والتصاريح مع متابعة شخصية حتى اكتمال الإجراءات",
    price: "٤٩٩ ر.س",
    duration: "5-10 أيام عمل",
    capacity: "فردي/عائلي",
    destinations: ["شنغن", "أمريكا", "بريطانيا", "آسيا"],
    inclusions: ["الرسوم الحكومية", "الاستشارات القانونية", "المتابعة اليومية"],
    features: [
      "متابعة حالة الطلب أونلاين",
      "استشارات قانونية متخصصة",
      "تجديد التصاريح تلقائيًا",
      "دعم المستندات المطلوبة",
      "خدمة الاستعجال 24 ساعة"
    ],
    details: [
      "فحص مسبق للمستندات",
      "تحديثات حالة الطلب الفورية",
      "خدمة البريد السريع",
      "دعم تجديد التأشيرات",
      "حماية بيانات شخصية"
    ],
  },
  {
    title: "الرخص الدولية",
    href: "/services/license",
    images: [drivingImage],
    description: "استخراج الرخص الدولية المعتمدة بسهولة مع دعم كامل للإجراءات القانونية وتسهيل القيادة بالخارج",
    price: "٨٩٩ ر.س",
    duration: "5-7 أيام عمل",
    capacity: "فردي",
    destinations: ["جميع الدول المعترف بها"],
    inclusions: ["الترجمة المعتمدة", "التوثيق الرسمي", "دليل القيادة"],
    features: [
      "ترجمة معتمدة للرخصة",
      "حزم تأمين السيارات",
      "دليل القيادة الدولي",
      "تجديد الرخصة عن بعد",
      "دعم الطوارئ على الطرق"
    ],
    details: [
      "معالجة إلكترونية كاملة",
      "تتبع حالة الطلب أونلاين",
      "دعم تجديد السنوي",
      "خدمة التوصيل السريع",
      "استشارات قانونية دولية"
    ],
  }
];



// destinations 

//Eygpt
import eygpt1 from "@/public/assests/eygpt/image-2.jpg";
import eygpt2 from "@/public/assests/eygpt/image-1.jpg";
import eygpt3 from "@/public/assests/eygpt/image-3.jpg";
import eygpt4 from "@/public/assests/eygpt/image-4.jpg";
import eygpt5 from "@/public/assests/eygpt/image-5.jpg";

// Saudi 
import saudi1 from "@/public/assests/suadi/image-1.jpg";
import saudi2 from "@/public/assests/suadi/image-2.jpg";
import saudi3 from "@/public/assests/suadi/image-3.jpg";
import saudi4 from "@/public/assests/suadi/image-4.jpg";
import saudi5 from "@/public/assests/suadi/image-5.jpg";

// uae 
import uae1 from "@/public/assests/uae/image-1.jpg";
import uae2 from "@/public/assests/uae/image-2.jpg";
import uae3 from "@/public/assests/uae/image-3.jpg";
import uae4 from "@/public/assests/uae/image-4.jpg";
import uae5 from "@/public/assests/uae/image-5.jpg";
import uae6 from "@/public/assests/uae/image-6.jpg";
import uae7 from "@/public/assests/uae/image-6.jpg";

interface Destination {
  name: string;
  images: StaticImageData[];
}
export const destinations:Destination[] = [
    {
      name: "مصر",
      images: [
        eygpt1,eygpt2,eygpt3,eygpt4,eygpt5
      ],
    },
    {
      name: "المملكة العربية السعودية",
      images: [
        saudi3,saudi2,saudi3,saudi1,saudi5,saudi4
      ],
    },
    {
      name: "الامارات العربية",
      images: [
        uae1,uae2,uae3,uae4,uae5,uae6,uae7
      ],
    },
  ];



  import ummraOffer from "@/public/assests/offers/ummra.jpg"
  import hotelOffer from "@/public/assests/offers/hotel.jpg"
import { StaticImageData } from "next/image";


  export interface Offer {
    title: string;
    description: string;
    image: StaticImageData;
    price: string;
    features: string[];
    isLimited?: boolean;
    validUntil?: string;
  }

  
  export const offers: Offer[] = [
    {
      title: "عرض العمرة المميز",
      description: "عمرة مريحة مع إقامة فندقية 5 نجوم ووجبات يومية",
      image: ummraOffer,
      price: "٣٬٩٩٩ ر.س",
      features: [
        "إقامة 7 ليالي بفندق 5 نجوم",
        "نقل من المطار ذهاب وعودة",
        "مرشد رحلة متخصص",
        "تأمين سفر شامل"
      ],
      isLimited: true,
      validUntil: "١٥ رمضان ١٤٤٥"
    },
    
    {
      title: "خصم 30% على الفنادق",
      description: "احجز فندقك المفضل بخصم خاص لمدة محدودة",
      image: hotelOffer,
      price: "تبدأ من ٢٩٩ ر.س/ليلة",
      features: [
        "أكثر من 5000 فندق متاح",
        "إلغاء مجاني حتى 24 ساعة",
        "ترقيات مجانية للغرف",
        "أفضل ضمان سعر"
      ],
      isLimited: true
    },
  ];