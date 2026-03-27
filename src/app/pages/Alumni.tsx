import { Briefcase, MapPin, Linkedin } from "lucide-react";

const notableAlumni = [
  {
    name: "Dr. Rajesh Mehta",
    batch: "1995",
    position: "VP Engineering, Google",
    location: "Mountain View, USA",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
  },
  {
    name: "Priya Nair",
    batch: "2005",
    position: "Founder & CEO, TechStartup",
    location: "Bangalore, India",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
  },
  {
    name: "Anil Kumar",
    batch: "2000",
    position: "Chief Architect, Microsoft",
    location: "Seattle, USA",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
  },
  {
    name: "Sneha Reddy",
    batch: "2010",
    position: "Director AI Research, Amazon",
    location: "New York, USA",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
  },
  {
    name: "Vikram Singh",
    batch: "2008",
    position: "Product Manager, Meta",
    location: "San Francisco, USA",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
  },
  {
    name: "Kavya Sharma",
    batch: "2012",
    position: "Engineering Lead, Netflix",
    location: "Los Angeles, USA",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
  },
];

export function Alumni() {
  return (
    <div className="pt-16 lg:pt-20">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">
            Alumni Network
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Connecting graduates across the globe
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-br from-gray-50 to-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition-all">
              <div className="text-5xl font-bold text-blue-600 mb-2">
                25,000+
              </div>
              <div className="text-gray-600">Alumni Worldwide</div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition-all">
              <div className="text-5xl font-bold text-purple-600 mb-2">50+</div>
              <div className="text-gray-600">Countries</div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition-all">
              <div className="text-5xl font-bold text-pink-600 mb-2">100+</div>
              <div className="text-gray-600">Active Chapters</div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Notable Alumni
            </h2>
            <p className="text-xl text-gray-600">
              Our graduates leading innovation globally
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {notableAlumni.map((alumni, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 overflow-hidden"
              >
                <div className="relative h-64">
                  <img
                    src={alumni.image}
                    alt={alumni.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-900">
                    Batch of {alumni.batch}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {alumni.name}
                  </h3>
                  <div className="flex items-start gap-2 mb-3">
                    <Briefcase className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">
                      {alumni.position}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <MapPin className="w-4 h-4 text-purple-600 flex-shrink-0" />
                    <span className="text-sm text-gray-600">
                      {alumni.location}
                    </span>
                  </div>
                  <button className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all">
                    <Linkedin className="w-4 h-4" />
                    Connect
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Alumni Benefits
              </h2>
              <ul className="space-y-4">
                {[
                  "Access to exclusive networking events",
                  "Mentorship opportunities for current students",
                  "Career development resources",
                  "Campus facility access",
                  "Alumni directory and chapter connections",
                  "Discounts on continuing education programs",
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl shadow-2xl p-8 text-white">
              <h2 className="text-3xl font-bold mb-6">Stay Connected</h2>
              <p className="text-blue-100 mb-8">
                Join our alumni network and reconnect with your batchmates.
                Share your success story and inspire current students.
              </p>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:border-white/40"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:border-white/40"
                />
                <input
                  type="text"
                  placeholder="Batch Year"
                  className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:border-white/40"
                />
                <button className="w-full px-6 py-3 bg-white text-blue-600 rounded-xl font-semibold hover:shadow-lg transition-all hover:scale-105">
                  Register Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
