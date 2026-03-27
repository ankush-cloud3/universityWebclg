import { History, Target, Eye, Award } from "lucide-react";

export function About() {
  return (
    <div className="pt-16 lg:pt-20">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">About BMSCE</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            75+ years of excellence in engineering education
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <img
              src="https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=600&fit=crop"
              alt="BMSCE Campus"
              className="rounded-2xl shadow-2xl w-full h-96 object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full mb-4 w-fit">
              <History className="w-4 h-4" />
              <span className="text-sm font-semibold">Established 1946</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Legacy
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              BMS College of Engineering (BMSCE) is one of the oldest and most
              prestigious engineering institutions in India. Established in 1946
              by Sri. B.M. Sreenivasaiah, the college has been at the forefront
              of technical education for over seven decades.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              With a strong emphasis on academic excellence, research, and
              industry collaboration, BMSCE has consistently produced graduates
              who excel in their chosen fields and contribute significantly to
              society.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 shadow-lg">
            <Target className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To provide quality technical education, foster innovation, and
              develop socially responsible engineers who contribute to national
              development.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 shadow-lg">
            <Eye className="w-12 h-12 text-purple-600 mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To be a globally recognized institution of excellence in
              engineering education, research, and innovation, shaping future
              leaders.
            </p>
          </div>

          <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-8 shadow-lg">
            <Award className="w-12 h-12 text-pink-600 mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Values</h3>
            <p className="text-gray-600 leading-relaxed">
              Excellence, Integrity, Innovation, Social Responsibility, and
              Lifelong Learning guide our approach to education and research.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Accreditations & Rankings
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl">
              <div className="text-4xl font-bold text-yellow-600 mb-2">
                NAAC A+
              </div>
              <div className="text-sm text-gray-600">Accreditation</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl">
              <div className="text-4xl font-bold text-blue-600 mb-2">NBA</div>
              <div className="text-sm text-gray-600">Accredited Programs</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl">
              <div className="text-4xl font-bold text-purple-600 mb-2">
                Top 50
              </div>
              <div className="text-sm text-gray-600">NIRF Ranking</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-teal-50 rounded-xl">
              <div className="text-4xl font-bold text-green-600 mb-2">
                Autonomous
              </div>
              <div className="text-sm text-gray-600">Status Since 2007</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-5xl font-bold text-blue-600 mb-2">12</div>
            <div className="text-gray-600">Departments</div>
          </div>
          <div>
            <div className="text-5xl font-bold text-purple-600 mb-2">5000+</div>
            <div className="text-gray-600">Students</div>
          </div>
          <div>
            <div className="text-5xl font-bold text-pink-600 mb-2">400+</div>
            <div className="text-gray-600">Faculty</div>
          </div>
          <div>
            <div className="text-5xl font-bold text-green-600 mb-2">50+</div>
            <div className="text-gray-600">Research Labs</div>
          </div>
        </div>
      </div>
    </div>
  );
}
