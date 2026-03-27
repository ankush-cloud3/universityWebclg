import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Quote } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Vikram Singh",
    role: "Alumni, Class of 2022",
    company: "Software Engineer at Google",
    quote: "BMSCE provided me with the perfect foundation for my career. The faculty's dedication and industry exposure prepared me for real-world challenges.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
  },
  {
    name: "Divya Menon",
    role: "Final Year Student",
    company: "CSE Department",
    quote: "The research opportunities and state-of-the-art labs have been instrumental in my academic growth. I'm grateful for the supportive environment.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
  },
  {
    name: "Karthik Rao",
    role: "Alumni, Class of 2020",
    company: "Entrepreneur & Startup Founder",
    quote: "The entrepreneurship cell and mentorship programs helped me turn my idea into a successful startup. BMSCE truly nurtures innovation.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
  },
];

export function TestimonialsCarousel() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            What People Say
          </h2>
          <p className="text-xl text-blue-100">
            Hear from our students and alumni
          </p>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            bulletActiveClass: "swiper-pagination-bullet-active",
          }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="testimonials-carousel pb-12"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 h-full border border-white/20 hover:bg-white/20 transition-all">
                <Quote className="w-10 h-10 text-white/50 mb-4" />

                <p className="text-white mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>

                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-white/30"
                  />
                  <div>
                    <div className="font-semibold text-white">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-blue-100">
                      {testimonial.role}
                    </div>
                    <div className="text-xs text-blue-200">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
