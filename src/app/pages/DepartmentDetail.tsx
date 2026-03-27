import { useParams, Link } from "react-router";
import { Mail, Phone, Users, Beaker, Trophy, BookOpen, ArrowLeft } from "lucide-react";

const departmentData: Record<string, any> = {
  cse: {
    name: "Computer Science & Engineering",
    shortName: "CSE",
    about: "The Department of Computer Science & Engineering at BMSCE has been at the forefront of technological innovation for over two decades. Our curriculum combines theoretical foundations with practical applications.",
    vision: "To be a center of excellence in computer science education and research, producing skilled professionals who contribute to society through technology.",
    programs: [
      "B.E. in Computer Science & Engineering",
      "M.Tech in Computer Science",
      "Ph.D. in Computer Science",
    ],
    faculty: [
      { name: "Dr. Rajesh Kumar", designation: "Professor & HOD", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop" },
      { name: "Dr. Priya Sharma", designation: "Associate Professor", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop" },
      { name: "Dr. Amit Patel", designation: "Assistant Professor", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" },
    ],
    labs: [
      "Advanced Programming Lab",
      "Data Structures Lab",
      "AI & ML Lab",
      "Cloud Computing Lab",
      "Cyber Security Lab",
      "IoT Lab",
    ],
    achievements: [
      "100% placement record for 3 consecutive years",
      "50+ research papers published in SCI journals",
      "Winners of Smart India Hackathon 2025",
      "Collaboration with top tech companies",
    ],
    stats: {
      students: 650,
      faculty: 45,
      labs: 12,
      placement: 98,
    },
    hod: {
      name: "Dr. Rajesh Kumar",
      email: "rajesh.kumar@bmsce.ac.in",
      phone: "+91 80 2662 1515",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    },
  },
};

export function DepartmentDetail() {
  const { id } = useParams();
  const dept = id ? departmentData[id] : null;

  if (!dept) {
    return (
      <div className="pt-16 lg:pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Department Not Found</h1>
          <Link to="/departments" className="text-blue-600 hover:underline">
            Back to Departments
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16 lg:pt-20">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/departments"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Departments
          </Link>
          <h1 className="text-5xl font-bold text-white mb-4">{dept.name}</h1>
          <p className="text-xl text-blue-100">{dept.shortName}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 text-center">
            <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <div className="text-3xl font-bold text-blue-600 mb-1">{dept.stats.students}</div>
            <div className="text-sm text-gray-600">Students</div>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 text-center">
            <BookOpen className="w-8 h-8 text-purple-600 mx-auto mb-2" />
            <div className="text-3xl font-bold text-purple-600 mb-1">{dept.stats.faculty}</div>
            <div className="text-sm text-gray-600">Faculty</div>
          </div>
          <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-6 text-center">
            <Beaker className="w-8 h-8 text-pink-600 mx-auto mb-2" />
            <div className="text-3xl font-bold text-pink-600 mb-1">{dept.stats.labs}</div>
            <div className="text-sm text-gray-600">Labs</div>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 text-center">
            <Trophy className="w-8 h-8 text-green-600 mx-auto mb-2" />
            <div className="text-3xl font-bold text-green-600 mb-1">{dept.stats.placement}%</div>
            <div className="text-sm text-gray-600">Placement</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2 space-y-8">
            <section className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">About</h2>
              <p className="text-gray-600 leading-relaxed mb-6">{dept.about}</p>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Vision</h3>
              <p className="text-gray-600 leading-relaxed">{dept.vision}</p>
            </section>

            <section className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Programs & Curriculum</h2>
              <div className="space-y-3">
                {dept.programs.map((program: string, index: number) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-blue-50 rounded-xl">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-900 font-medium">{program}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Faculty</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {dept.faculty.map((member: any, index: number) => (
                  <div key={index} className="text-center">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto mb-3 object-cover shadow-lg"
                    />
                    <h3 className="font-semibold text-gray-900">{member.name}</h3>
                    <p className="text-sm text-gray-600">{member.designation}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Laboratories</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {dept.labs.map((lab: string, index: number) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-purple-50 rounded-xl hover:bg-purple-100 transition-colors">
                    <Beaker className="w-5 h-5 text-purple-600" />
                    <span className="text-gray-900">{lab}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Trophy className="w-6 h-6 text-yellow-600" />
                Achievements
              </h2>
              <div className="space-y-3">
                {dept.achievements.map((achievement: string, index: number) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">{index + 1}</span>
                    </div>
                    <span className="text-gray-900">{achievement}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div>
            <div className="bg-white rounded-2xl shadow-lg p-8 sticky top-24">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact HOD</h2>
              <img
                src={dept.hod.image}
                alt={dept.hod.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-lg"
              />
              <h3 className="text-xl font-semibold text-gray-900 text-center mb-1">{dept.hod.name}</h3>
              <p className="text-sm text-gray-600 text-center mb-6">Head of Department</p>
              <div className="space-y-3">
                <a href={`mailto:${dept.hod.email}`} className="flex items-center gap-3 p-3 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <span className="text-sm text-gray-900">{dept.hod.email}</span>
                </a>
                <a href={`tel:${dept.hod.phone}`} className="flex items-center gap-3 p-3 bg-green-50 rounded-xl hover:bg-green-100 transition-colors">
                  <Phone className="w-5 h-5 text-green-600" />
                  <span className="text-sm text-gray-900">{dept.hod.phone}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
