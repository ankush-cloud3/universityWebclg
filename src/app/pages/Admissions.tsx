import { Calendar, FileText, CheckCircle, Users } from "lucide-react";

const admissionSteps = [
  {
    step: 1,
    title: "Check Eligibility",
    description: "Verify you meet the academic requirements for your desired program",
    icon: CheckCircle,
  },
  {
    step: 2,
    title: "Register Online",
    description: "Complete the online application form with your details",
    icon: FileText,
  },
  {
    step: 3,
    title: "Entrance Exam",
    description: "Appear for KCET/JEE/COMEDK based on your category",
    icon: Users,
  },
  {
    step: 4,
    title: "Counseling",
    description: "Attend counseling sessions and select your preferences",
    icon: Calendar,
  },
];

const programs = [
  {
    name: "B.E. Programs",
    duration: "4 years",
    seats: 120,
    departments: [
      "Computer Science & Engineering",
      "Electronics & Communication",
      "Mechanical Engineering",
      "Civil Engineering",
      "Information Science",
      "Electrical & Electronics",
      "AI & Machine Learning",
      "Biotechnology",
    ],
  },
  {
    name: "M.Tech Programs",
    duration: "2 years",
    seats: 18,
    departments: [
      "Computer Science & Engineering",
      "VLSI Design",
      "Power Systems",
      "Structural Engineering",
    ],
  },
];

export function Admissions() {
  return (
    <div className="pt-16 lg:pt-20">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">Admissions</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Begin your journey towards engineering excellence
          </p>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Admission Process
            </h2>
            <p className="text-xl text-gray-600">
              Simple steps to secure your place at BMSCE
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {admissionSteps.map((item) => (
              <div
                key={item.step}
                className="text-center group hover:-translate-y-2 transition-all"
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:shadow-2xl transition-all">
                    <item.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-white border-4 border-blue-600 rounded-full flex items-center justify-center font-bold text-blue-600">
                    {item.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Programs Offered
            </h2>
            <p className="text-xl text-gray-600">
              Choose from our wide range of engineering programs
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-2xl overflow-hidden"
              >
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{program.name}</h3>
                  <div className="flex gap-6 text-blue-100">
                    <span>Duration: {program.duration}</span>
                    <span>Seats per branch: {program.seats}</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="space-y-2">
                    {program.departments.map((dept, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 p-3 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors"
                      >
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-gray-900">{dept}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Eligibility Criteria
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    For B.E. Programs
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>
                        Passed 12th/PUC with Physics, Chemistry, Mathematics
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Minimum 45% aggregate (40% for reserved)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Valid KCET/JEE/COMEDK score</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    For M.Tech Programs
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 mt-1">•</span>
                      <span>B.E./B.Tech in relevant discipline</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 mt-1">•</span>
                      <span>Minimum 50% aggregate</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 mt-1">•</span>
                      <span>Valid GATE score</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl shadow-2xl p-8 text-white">
              <h2 className="text-3xl font-bold mb-6">Important Dates</h2>
              <div className="space-y-6">
                {[
                  {
                    event: "Application Opens",
                    date: "May 1, 2026",
                    status: "upcoming",
                  },
                  {
                    event: "Application Deadline",
                    date: "June 15, 2026",
                    status: "upcoming",
                  },
                  {
                    event: "Entrance Exam",
                    date: "June 25-30, 2026",
                    status: "upcoming",
                  },
                  {
                    event: "Results Announcement",
                    date: "July 10, 2026",
                    status: "upcoming",
                  },
                  {
                    event: "Counseling Begins",
                    date: "July 20, 2026",
                    status: "upcoming",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20"
                  >
                    <div>
                      <div className="font-semibold">{item.event}</div>
                      <div className="text-sm text-blue-100">{item.date}</div>
                    </div>
                    <Calendar className="w-6 h-6" />
                  </div>
                ))}
              </div>

              <button className="w-full mt-8 px-6 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:shadow-lg transition-all hover:scale-105">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
