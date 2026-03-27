import { useState } from "react";
import { ChevronDown, BookOpen, Beaker, Star } from "lucide-react";

const academicData = {
  cse: {
    name: "Computer Science & Engineering",
    years: {
      1: {
        semesters: {
          1: [
            { name: "Engineering Mathematics I", type: "core", credits: 4 },
            { name: "Engineering Physics", type: "core", credits: 4 },
            { name: "Programming in C", type: "core", credits: 4 },
            { name: "C Programming Lab", type: "lab", credits: 2 },
            { name: "Technical English", type: "core", credits: 3 },
          ],
          2: [
            { name: "Engineering Mathematics II", type: "core", credits: 4 },
            { name: "Engineering Chemistry", type: "core", credits: 4 },
            { name: "Data Structures", type: "core", credits: 4 },
            { name: "Data Structures Lab", type: "lab", credits: 2 },
            { name: "Environmental Studies", type: "elective", credits: 3 },
          ],
        },
      },
      2: {
        semesters: {
          3: [
            { name: "Discrete Mathematics", type: "core", credits: 4 },
            { name: "Digital Logic Design", type: "core", credits: 4 },
            { name: "Computer Organization", type: "core", credits: 4 },
            { name: "Object Oriented Programming", type: "core", credits: 4 },
            { name: "OOP Lab", type: "lab", credits: 2 },
          ],
          4: [
            { name: "Database Management Systems", type: "core", credits: 4 },
            { name: "Operating Systems", type: "core", credits: 4 },
            { name: "Computer Networks", type: "core", credits: 4 },
            { name: "DBMS Lab", type: "lab", credits: 2 },
            { name: "Web Technologies", type: "elective", credits: 3 },
          ],
        },
      },
    },
  },
  ece: {
    name: "Electronics & Communication",
    years: {
      1: {
        semesters: {
          1: [
            { name: "Engineering Mathematics I", type: "core", credits: 4 },
            { name: "Engineering Physics", type: "core", credits: 4 },
            { name: "Basic Electronics", type: "core", credits: 4 },
            { name: "Electronics Lab", type: "lab", credits: 2 },
          ],
          2: [
            { name: "Engineering Mathematics II", type: "core", credits: 4 },
            { name: "Network Theory", type: "core", credits: 4 },
            { name: "Digital Electronics", type: "core", credits: 4 },
          ],
        },
      },
    },
  },
};

const typeColors = {
  core: "bg-blue-100 text-blue-700 border-blue-200",
  lab: "bg-purple-100 text-purple-700 border-purple-200",
  elective: "bg-green-100 text-green-700 border-green-200",
};

export function Academics() {
  const [selectedDept, setSelectedDept] = useState("cse");
  const [selectedYear, setSelectedYear] = useState(1);
  const [selectedSem, setSelectedSem] = useState(1);

  const dept = academicData[selectedDept as keyof typeof academicData];
  const subjects = dept?.years[selectedYear as keyof typeof dept.years]?.semesters[selectedSem as keyof any] || [];

  return (
    <div className="pt-16 lg:pt-20 min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <BookOpen className="w-16 h-16 text-white mx-auto mb-4" />
          <h1 className="text-5xl font-bold text-white mb-4">
            Academic Programs
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Explore our comprehensive curriculum and course structure
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 border-b">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Syllabus Navigator
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Department
                </label>
                <div className="relative">
                  <select
                    value={selectedDept}
                    onChange={(e) => setSelectedDept(e.target.value)}
                    className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 appearance-none cursor-pointer"
                  >
                    <option value="cse">Computer Science & Engineering</option>
                    <option value="ece">Electronics & Communication</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Year
                </label>
                <div className="relative">
                  <select
                    value={selectedYear}
                    onChange={(e) => setSelectedYear(Number(e.target.value))}
                    className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 appearance-none cursor-pointer"
                  >
                    <option value={1}>First Year</option>
                    <option value={2}>Second Year</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Semester
                </label>
                <div className="relative">
                  <select
                    value={selectedSem}
                    onChange={(e) => setSelectedSem(Number(e.target.value))}
                    className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 appearance-none cursor-pointer"
                  >
                    {selectedYear === 1 && (
                      <>
                        <option value={1}>Semester 1</option>
                        <option value={2}>Semester 2</option>
                      </>
                    )}
                    {selectedYear === 2 && (
                      <>
                        <option value={3}>Semester 3</option>
                        <option value={4}>Semester 4</option>
                      </>
                    )}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
              </div>
            </div>
          </div>

          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  {dept.name}
                </h3>
                <p className="text-sm text-gray-600">
                  Year {selectedYear} - Semester {selectedSem}
                </p>
              </div>
              <div className="flex gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Core</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Lab</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Elective</span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              {subjects.map((subject: any, index: number) => (
                <div
                  key={index}
                  className="group flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 rounded-xl transition-all cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    {subject.type === "lab" ? (
                      <Beaker className="w-5 h-5 text-purple-600" />
                    ) : subject.type === "elective" ? (
                      <Star className="w-5 h-5 text-green-600" />
                    ) : (
                      <BookOpen className="w-5 h-5 text-blue-600" />
                    )}
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {subject.name}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {subject.credits} Credits
                      </p>
                    </div>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold border ${
                      typeColors[subject.type as keyof typeof typeColors]
                    }`}
                  >
                    {subject.type.charAt(0).toUpperCase() + subject.type.slice(1)}
                  </span>
                </div>
              ))}
            </div>

            {subjects.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500">
                  No subjects available for this selection
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
