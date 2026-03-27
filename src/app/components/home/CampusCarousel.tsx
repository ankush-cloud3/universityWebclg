import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const campusImages = [
  {
    url: "https://images.unsplash.com/photo-1562774053-701939374585?w=1200&h=600&fit=crop",
    title: "Main Campus Building",
    description: "Our historic main building",
  },
  {
    url: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1200&h=600&fit=crop",
    title: "Library & Learning Center",
    description: "State-of-the-art facilities",
  },
  {
    url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&h=600&fit=crop",
    title: "Innovation Labs",
    description: "Cutting-edge technology",
  },
  {
    url: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=1200&h=600&fit=crop",
    title: "Campus Grounds",
    description: "Beautiful green spaces",
  },
];

export function CampusCarousel() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Explore Our Campus
          </h2>
          <p className="text-xl text-gray-600">
            Take a visual tour of our beautiful facilities
          </p>
        </div>

        <div className="rounded-3xl overflow-hidden shadow-2xl">
          <Swiper
            modules={[Autoplay, Pagination, EffectFade]}
            effect="fade"
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              bulletActiveClass: "swiper-pagination-bullet-active",
            }}
            loop={true}
            className="campus-carousel"
          >
            {campusImages.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="relative h-[500px] group">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <h3 className="text-3xl font-bold mb-2">{image.title}</h3>
                    <p className="text-lg text-gray-200">{image.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
