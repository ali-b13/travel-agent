import { FaBullseye, FaEye, FaHeart } from "react-icons/fa";

const Missions =()=>{

    return (
        <div className="mt-12 space-y-8 lg:mr-12 select-none pb-6">
        {/* Mission */}
        <div className="flex flex-row-reverse items-start">
          <div className="w-14 h-12 lg:w-20 lg:h-20 bg-sky-400 text-white rounded-full flex items-center justify-center shadow-lg ml-4 group">
          <FaBullseye className="text-lg lg:text-3xl group-hover:scale-x-[-1] transition-transform duration-300" />

          </div>
          <div className="max-w-2xl text-right">
            <h3 className="text-3xl font-extrabold text-dark mb-2 font-amiri">المهمة</h3>
            <p className="text-gray-700 leading-7 max-w-lg">
              تقديم خدمات سفر متكاملة ومتميزة تلبي احتياجات وتوقعات العملاء من خلال
              التزامنا بأعلى معايير الجودة، الابتكار، والكفاءة، مع الحرص على توفير
              تجربة سفر سلسة ومميزة لجميع عملائنا.
            </p>
          </div>
        </div>

        {/* Vision */}
        <div className="flex flex-row-reverse items-start">
          <div className=" w-14 h-12 lg:w-20 lg:h-20 bg-sky-400 text-white rounded-full flex items-center justify-center shadow-lg ml-4 group">
          <FaEye className=" text-lg lg:text-3xl group-hover:scale-x-[-1] transition-transform duration-300" />
          </div>
          <div className="max-w-2xl text-right">
            <h3 className="text-3xl font-extrabold text-dark mb-2 font-amiri">الرؤية</h3>
            <p className="text-gray-700 leading-7 max-w-lg">
              أن نصبح الخيار الأول والرائد في مجال خدمات السفر حول العالم، من خلال تقديم
              حلول مبتكرة وبرامج تنافسية تلبي تطلعات المسافرين من مختلف الفئات.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="flex flex-row-reverse items-start">
          <div className="w-14 h-12 lg:w-20 lg:h-20 bg-sky-400 text-white rounded-full flex items-center justify-center shadow-lg ml-4 group">
          <FaHeart className="text-lg lg:text-3xl group-hover:scale-x-[-1] transition-transform duration-300" />
          </div>
          <div className="max-w-2xl text-right">
            <h3 className="text-3xl font-extrabold text-dark mb-2 font-amiri">القيم</h3>
            <p className="text-gray-700 leading-7 max-w-lg">
              نضع عملاءنا في قلب اهتمامنا، ونعمل على تلبية احتياجاتهم بأعلى مستويات الخدمة والاحترافية.
              رؤيتنا تنبع من شغفنا بتمكين الجميع من تحقيق تجربة سفر استثنائية، ونعمل جاهدين لتقديم قيمة
              لا تضاهى تجمع بين الراحة، الجودة، والتميز.
            </p>
          </div>
        </div>
      </div>
    )
}
export default Missions