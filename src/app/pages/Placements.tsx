import { TrendingUp, Users, Briefcase, Award } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const stats = [
  { icon: TrendingUp, value: "95%", label: "Placement Rate", color: "blue" },
  { icon: Users, value: "450+", label: "Students Placed", color: "purple" },
  { icon: Briefcase, value: "200+", label: "Companies", color: "pink" },
  { icon: Award, value: "₹12 LPA", label: "Average Package", color: "green" },
];

const companies = [
  "Google", "Microsoft", "Amazon", "Apple", "Facebook", "Netflix",
  "Adobe", "Intel", "IBM", "Cisco", "Oracle", "SAP",
  "Infosys", "TCS", "Wipro", "Accenture", "Cognizant", "HCL",
  "Flipkart", "Uber", "Samsung", "VMware", "Tesla", "Nvidia"
];

const topRecruiters = [
  { name: "Google", package: "₹45 LPA", students: 12 },
  { name: "Microsoft", package: "₹42 LPA", students: 15 },
  { name: "Amazon", package: "₹38 LPA", students: 18 },
  { name: "Adobe", package: "₹35 LPA", students: 10 },
  { name: "Apple", package: "₹40 LPA", students: 8 },
  { name: "Netflix", package: "₹48 LPA", students: 5 },
];

export function Placements() {
  return (
    <div className="pt-16 lg:pt-20">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Briefcase className="w-16 h-16 text-white mx-auto mb-4" />
          <h1 className="text-5xl font-bold text-white mb-4">
            Placements 2025-26
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Industry-leading placement record and career success
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-br from-gray-50 to-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition-all hover:-translate-y-2"
              >
                <div className={`w-16 h-16 bg-gradient-to-br from-${stat.color}-500 to-${stat.color}-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Top Recruiters
            </h2>
            <p className="text-xl text-gray-600">
              Leading companies trust BMSCE graduates
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {topRecruiters.map((company, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl shadow-lg p-6 border-2 border-transparent hover:border-blue-200 transition-all"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {company.name}
                </h3>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-gray-600">Highest Package</div>
                    <div className="text-xl font-bold text-blue-600">
                      {company.package}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Students</div>
                    <div className="text-xl font-bold text-purple-600">
                      {company.students}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-white text-center mb-8">
              Companies That Recruit From BMSCE
            </h3>
            <Swiper
              modules={[Autoplay]}
              spaceBetween={30}
              slidesPerView={2}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              loop={true}
              breakpoints={{
                640: { slidesPerView: 3 },
                768: { slidesPerView: 4 },
                1024: { slidesPerView: 6 },
              }}
            >
              {companies.map((company, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 text-center border border-white/20 hover:bg-white/20 transition-colors">
                    <div className="text-white font-semibold">{company}</div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      <div className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Placement Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: 1, title: "Pre-Placement Talk", desc: "Company overview & opportunities" },
                { step: 2, title: "Written Test", desc: "Aptitude & technical assessment" },
                { step: 3, title: "Technical Rounds", desc: "2-3 rounds of technical interviews" },
                { step: 4, title: "HR Round", desc: "Final discussion & offer" },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 shadow-lg">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
