import { useState } from "react";
import { MapPin, X } from "lucide-react";

const facilities = [
  {
    id: 1,
    name: "Main Building",
    description: "Administrative offices and classrooms",
    position: { top: "30%", left: "40%" },
  },
  {
    id: 2,
    name: "Library",
    description: "Central Library with 50,000+ books",
    position: { top: "45%", left: "25%" },
  },
  {
    id: 3,
    name: "Computer Labs",
    description: "State-of-the-art computing facilities",
    position: { top: "35%", left: "60%" },
  },
  {
    id: 4,
    name: "Cafeteria",
    description: "Student dining and recreation",
    position: { top: "60%", left: "50%" },
  },
  {
    id: 5,
    name: "Sports Complex",
    description: "Indoor and outdoor sports facilities",
    position: { top: "70%", left: "30%" },
  },
];

export function CampusMap() {
  const [selectedFacility, setSelectedFacility] = useState<number | null>(null);
  const [selectedDropdown, setSelectedDropdown] = useState("");

  const facility = facilities.find((f) => f.id === selectedFacility);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Interactive Campus Map
          </h2>
          <p className="text-xl text-gray-600">
            Click on markers to explore campus facilities
          </p>
        </div>

        <div className="mb-6 max-w-md mx-auto">
          <select
            value={selectedDropdown}
            onChange={(e) => setSelectedDropdown(e.target.value)}
            className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-blue-500 transition-colors"
          >
            <option value="">Find a facility...</option>
            {facilities.map((f) => (
              <option key={f.id} value={f.id}>
                {f.name}
              </option>
            ))}
          </select>
        </div>

        <div className="relative bg-gradient-to-br from-green-50 to-blue-50 rounded-3xl shadow-2xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1562774053-701939374585?w=1200&h=700&fit=crop"
            alt="Campus Map"
            className="w-full h-[600px] object-cover opacity-80"
          />

          {facilities.map((f) => (
            <button
              key={f.id}
              onClick={() => setSelectedFacility(f.id)}
              className="absolute group"
              style={{ top: f.position.top, left: f.position.left }}
            >
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                  {f.name}
                </div>
              </div>
            </button>
          ))}

          {facility && (
            <div className="absolute bottom-8 left-8 right-8 bg-white rounded-2xl shadow-2xl p-6 animate-in fade-in slide-in-from-bottom-4 duration-300">
              <button
                onClick={() => setSelectedFacility(null)}
                className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {facility.name}
              </h3>
              <p className="text-gray-600">{facility.description}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
