import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { Trophy, ArrowLeft, ArrowRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";

const achievers = [
  {
    name: "Priya Sharma",
    achievement: "Winner - Smart India Hackathon 2025",
    department: "Computer Science",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
  },
  {
    name: "Rahul Kumar",
    achievement: "Best Research Paper - IEEE Conference",
    department: "Electronics",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
  },
  {
    name: "Ananya Reddy",
    achievement: "Gold Medal - State Level Robotics",
    department: "Mechanical",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
  },
  {
    name: "Arjun Patel",
    achievement: "Startup Founder - EdTech Platform",
    department: "Information Science",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
  },
  {
    name: "Sneha Iyer",
    achievement: "Published Author - AI Research",
    department: "Artificial Intelligence",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
  },
];

export function AchieversCarousel() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full mb-4">
            <Trophy className="w-5 h-5 text-white" />
            <span className="text-sm font-semibold text-white">
              Student Excellence
            </span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Achievers
          </h2>
          <p className="text-xl text-gray-600">
            Celebrating student success and innovation
          </p>
        </div>

        <div className="relative">
          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={24}
            slidesPerView={1}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            navigation={{
              prevEl: ".achievers-prev",
              nextEl: ".achievers-next",
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            loop={true}
            className="achievers-carousel"
          >
            {achievers.map((achiever, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden group">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={achiever.image}
                      alt={achiever.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  </div>

                  <div className="p-6 -mt-16 relative z-10">
                    <div className="bg-white rounded-xl p-4 shadow-lg">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        {achiever.name}
                      </h3>
                      <p className="text-sm text-gray-600 mb-3">
                        {achiever.department}
                      </p>
                      <div className="flex items-start gap-2">
                        <Trophy className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-gray-700">
                          {achiever.achievement}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button className="achievers-prev absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <button className="achievers-next absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
