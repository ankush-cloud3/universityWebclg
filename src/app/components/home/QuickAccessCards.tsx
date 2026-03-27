import { Link } from "react-router";
import { BookOpen, UserPlus, Briefcase, FlaskConical } from "lucide-react";

const cards = [
  {
    title: "Departments",
    description: "Explore our 12 engineering departments",
    icon: BookOpen,
    link: "/departments",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Admissions",
    description: "Start your journey with us",
    icon: UserPlus,
    link: "/admissions",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Placements",
    description: "95% placement success rate",
    icon: Briefcase,
    link: "/placements",
    gradient: "from-orange-500 to-red-500",
  },
  {
    title: "Research",
    description: "Cutting-edge innovation",
    icon: FlaskConical,
    link: "/research",
    gradient: "from-green-500 to-teal-500",
  },
];

export function QuickAccessCards() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Quick Access
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need at your fingertips
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <Link
              key={index}
              to={card.link}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-5 transition-opacity`}></div>

              <div className="p-8">
                <div className={`w-14 h-14 bg-gradient-to-br ${card.gradient} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                  <card.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-600">{card.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
