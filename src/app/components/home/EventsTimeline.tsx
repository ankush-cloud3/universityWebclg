import { Calendar, MapPin } from "lucide-react";

const events = [
  {
    id: 1,
    title: "Tech Fest 2026",
    date: "April 15-17, 2026",
    location: "Main Auditorium",
    status: "upcoming",
    color: "blue",
  },
  {
    id: 2,
    title: "Industry Connect",
    date: "April 22, 2026",
    location: "Conference Hall",
    status: "upcoming",
    color: "purple",
  },
  {
    id: 3,
    title: "Research Symposium",
    date: "May 5-6, 2026",
    location: "Innovation Center",
    status: "upcoming",
    color: "pink",
  },
  {
    id: 4,
    title: "Alumni Meetup",
    date: "May 20, 2026",
    location: "Campus Grounds",
    status: "upcoming",
    color: "orange",
  },
];

export function EventsTimeline() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Upcoming Events
          </h2>
          <p className="text-xl text-gray-600">
            Stay updated with campus activities
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-0 right-0 top-1/2 h-1 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 -translate-y-1/2 hidden lg:block"></div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {events.map((event, index) => (
              <div
                key={event.id}
                className="relative group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 p-6 border-2 border-transparent hover:border-blue-200">
                  <div className={`w-12 h-12 bg-gradient-to-br from-${event.color}-500 to-${event.color}-600 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg`}>
                    <Calendar className="w-6 h-6 text-white" />
                  </div>

                  {event.status === "upcoming" && (
                    <div className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold mb-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      Upcoming
                    </div>
                  )}

                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {event.title}
                  </h3>

                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
