import { Link } from "react-router";
import { Mail, Phone, MapPin, GraduationCap } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <div className="font-bold text-lg">BMSCE</div>
                <div className="text-xs text-gray-400">Smart Campus</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Building excellence in engineering education and research since
              1946.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/departments"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Departments
                </Link>
              </li>
              <li>
                <Link
                  to="/admissions"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Admissions
                </Link>
              </li>
              <li>
                <Link
                  to="/placements"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Placements
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/academics"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Academics
                </Link>
              </li>
              <li>
                <Link
                  to="/research"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Research
                </Link>
              </li>
              <li>
                <Link
                  to="/campus-life"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Campus Life
                </Link>
              </li>
              <li>
                <Link
                  to="/alumni"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Alumni
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Bull Temple Road, Basavanagudi, Bangalore - 560019</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>+91 80 2662 1414</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>info@bmsce.ac.in</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; 2026 BMSCE Smart Campus. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Prototype built for hackathon demonstration
          </p>
        </div>
      </div>
    </footer>
  );
}
