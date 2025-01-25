

import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center">
      <h1 className="text-5xl font-bold text-red-600 mb-4">404</h1>
      <p className="text-xl text-gray-700 mb-6">
        عذرًا، الصفحة التي تحاول الوصول إليها غير موجودة.
      </p>
      <Link
        href="/"
        className="bg-red-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-red-700 transition-all"
      >
        العودة إلى الصفحة الرئيسية
      </Link>
    </div>
  );
};

export default NotFoundPage;
