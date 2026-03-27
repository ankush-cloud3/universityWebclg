import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Users, Music, Code, Camera, Heart, Trophy } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";

const campusImages = [
  { url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop", title: "Campus Events" },
  { url: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=600&fit=crop", title: "Library" },
  { url: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=800&h=600&fit=crop", title: "Sports" },
  { url: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&h=600&fit=crop", title: "Cultural Fest" },
  { url: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=600&fit=crop", title: "Study Groups" },
  { url: "https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=600&fit=crop", title: "Campus Buildings" },
];

const clubs = [
  {
    name: "Coding Club",
    description: "Competitive programming, hackathons, and open source",
    icon: Code,
    members: 250,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    name: "Music Club",
    description: "Bands, concerts, and musical performances",
    icon: Music,
    members: 180,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    name: "Photography Club",
    description: "Capture moments and learn photography skills",
    icon: Camera,
    members: 150,
    gradient: "from-orange-500 to-red-500",
  },
  {
    name: "Social Service",
    description: "Community outreach and volunteer programs",
    icon: Heart,
    members: 200,
    gradient: "from-green-500 to-teal-500",
  },
  {
    name: "Sports Club",
    description: "Athletics, cricket, football, and more",
    icon: Trophy,
    members: 300,
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    name: "Drama Club",
    description: "Theatre, plays, and dramatic performances",
    icon: Users,
    members: 120,
    gradient: "from-pink-500 to-purple-500",
  },
];

export function CampusLife() {
  return (
    <div className="pt-16 lg:pt-20">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">Campus Life</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Experience vibrant student life beyond academics
          </p>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Campus Gallery
            </h2>
            <p className="text-xl text-gray-600">
              A glimpse into life at BMSCE
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {campusImages.map((image, index) => (
              <div
                key={index}
                className="group relative h-80 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white">
                    {image.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Student Clubs & Activities
            </h2>
            <p className="text-xl text-gray-600">
              Join a community that matches your passion
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clubs.map((club, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 overflow-hidden"
              >
                <div className={`h-2 bg-gradient-to-r ${club.gradient}`}></div>
                <div className="p-6">
                  <div className={`w-14 h-14 bg-gradient-to-br ${club.gradient} rounded-2xl flex items-center justify-center mb-4 shadow-lg`}>
                    <club.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {club.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{club.description}</p>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Users className="w-4 h-4" />
                    <span>{club.members} members</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center text-white shadow-2xl">
            <h2 className="text-4xl font-bold mb-4">Annual Fest - UTSAV</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Three days of cultural performances, technical competitions, and
              celebrity nights
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <div className="text-4xl font-bold mb-2">3</div>
                <div className="text-blue-100">Days</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <div className="text-4xl font-bold mb-2">50+</div>
                <div className="text-blue-100">Events</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <div className="text-4xl font-bold mb-2">10K+</div>
                <div className="text-blue-100">Participants</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
