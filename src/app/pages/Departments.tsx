import { useState } from "react";
import { Link } from "react-router";
import { Search, Users, Beaker, ArrowRight } from "lucide-react";

const departments = [
  {
    id: "cse",
    name: "Computer Science & Engineering",
    shortName: "CSE",
    description: "Leading in software development, AI, and data science",
    students: 650,
    labs: 12,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: "ece",
    name: "Electronics & Communication",
    shortName: "ECE",
    description: "Pioneering in VLSI, embedded systems, and IoT",
    students: 480,
    labs: 10,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    id: "me",
    name: "Mechanical Engineering",
    shortName: "ME",
    description: "Excellence in design, manufacturing, and robotics",
    students: 520,
    labs: 8,
    gradient: "from-orange-500 to-red-500",
  },
  {
    id: "civil",
    name: "Civil Engineering",
    shortName: "CE",
    description: "Building sustainable infrastructure and smart cities",
    students: 380,
    labs: 7,
    gradient: "from-green-500 to-teal-500",
  },
  {
    id: "ise",
    name: "Information Science",
    shortName: "ISE",
    description: "Innovation in software engineering and cloud computing",
    students: 600,
    labs: 11,
    gradient: "from-indigo-500 to-blue-500",
  },
  {
    id: "eee",
    name: "Electrical & Electronics",
    shortName: "EEE",
    description: "Powering the future with sustainable energy solutions",
    students: 420,
    labs: 9,
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    id: "aiml",
    name: "Artificial Intelligence & ML",
    shortName: "AI/ML",
    description: "Shaping the future with intelligent systems",
    students: 350,
    labs: 8,
    gradient: "from-pink-500 to-purple-500",
  },
  {
    id: "biotech",
    name: "Biotechnology",
    shortName: "BT",
    description: "Advancing life sciences and biomedical engineering",
    students: 280,
    labs: 6,
    gradient: "from-teal-500 to-green-500",
  },
];

export function Departments() {
  const [search, setSearch] = useState("");

  const filteredDepts = departments.filter((dept) =>
    dept.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="pt-16 lg:pt-20 min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">
            Our Departments
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Explore our world-class engineering programs and research facilities
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8 max-w-2xl mx-auto">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search departments..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white rounded-2xl shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDepts.map((dept) => (
            <Link
              key={dept.id}
              to={`/departments/${dept.id}`}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
            >
              <div className={`h-2 bg-gradient-to-r ${dept.gradient}`}></div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="text-xs font-semibold text-gray-500 mb-1">
                      {dept.shortName}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {dept.name}
                    </h3>
                  </div>
                  <div className={`w-12 h-12 bg-gradient-to-br ${dept.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                    <ArrowRight className="w-6 h-6 text-white" />
                  </div>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {dept.description}
                </p>

                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{dept.students} students</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Beaker className="w-4 h-4" />
                    <span>{dept.labs} labs</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredDepts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No departments found</p>
          </div>
        )}
      </div>
    </div>
  );
}
