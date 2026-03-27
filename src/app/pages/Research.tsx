import { FlaskConical, BookOpen, Users, Award } from "lucide-react";

const researchAreas = [
  {
    title: "Artificial Intelligence & Machine Learning",
    description: "Deep learning, computer vision, natural language processing",
    icon: "🤖",
    projects: 45,
  },
  {
    title: "Internet of Things",
    description: "Smart cities, industrial IoT, sensor networks",
    icon: "🌐",
    projects: 32,
  },
  {
    title: "Renewable Energy",
    description: "Solar energy, wind power, energy storage systems",
    icon: "⚡",
    projects: 28,
  },
  {
    title: "Robotics & Automation",
    description: "Industrial robots, autonomous systems, mechatronics",
    icon: "🦾",
    projects: 35,
  },
  {
    title: "Cybersecurity",
    description: "Network security, cryptography, threat detection",
    icon: "🔒",
    projects: 25,
  },
  {
    title: "Biotechnology",
    description: "Genetic engineering, bioinformatics, drug development",
    icon: "🧬",
    projects: 20,
  },
];

const stats = [
  { icon: FlaskConical, value: "50+", label: "Research Labs" },
  { icon: BookOpen, value: "300+", label: "Publications" },
  { icon: Users, value: "200+", label: "Research Scholars" },
  { icon: Award, value: "₹15 Cr", label: "Research Funding" },
];

export function Research() {
  return (
    <div className="pt-16 lg:pt-20">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FlaskConical className="w-16 h-16 text-white mx-auto mb-4" />
          <h1 className="text-5xl font-bold text-white mb-4">
            Research & Innovation
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Pioneering cutting-edge research and technological advancement
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
                <stat.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
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
              Research Focus Areas
            </h2>
            <p className="text-xl text-gray-600">
              Advancing knowledge across multiple domains
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {researchAreas.map((area, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2"
              >
                <div className="text-5xl mb-4">{area.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {area.title}
                </h3>
                <p className="text-gray-600 mb-4">{area.description}</p>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                  {area.projects} Active Projects
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Recent Achievements
            </h2>
            <div className="space-y-6">
              {[
                {
                  title: "Best Research Paper Award at IEEE International Conference",
                  date: "March 2026",
                  desc: "Recognition for groundbreaking work in quantum computing",
                },
                {
                  title: "₹5 Crore Grant from DST for AI Research",
                  date: "February 2026",
                  desc: "Funding approved for advanced machine learning applications",
                },
                {
                  title: "Patent Filed for Novel IoT Security Protocol",
                  date: "January 2026",
                  desc: "Innovative solution for securing smart home devices",
                },
              ].map((achievement, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl hover:shadow-lg transition-shadow"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-lg font-bold text-gray-900">
                        {achievement.title}
                      </h3>
                      <span className="text-sm text-gray-600 whitespace-nowrap ml-4">
                        {achievement.date}
                      </span>
                    </div>
                    <p className="text-gray-600">{achievement.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
