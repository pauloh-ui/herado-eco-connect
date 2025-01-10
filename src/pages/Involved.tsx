import { Header } from "@/components/Header";
import { Container } from "@/components/ui/container";

const opportunities = [
  {
    title: "Volunteer Programs",
    description: "Join our community of dedicated volunteers in various environmental conservation projects.",
    activities: [
      "Tree planting events",
      "Water well maintenance",
      "Educational workshops",
      "Community outreach",
    ],
  },
  {
    title: "Upcoming Events",
    description: "Participate in our scheduled activities and make a direct impact.",
    events: [
      {
        name: "Spring Tree Planting Drive",
        date: "April 15, 2024",
        location: "Green Valley Park",
      },
      {
        name: "World Water Day Workshop",
        date: "March 22, 2024",
        location: "Community Center",
      },
      {
        name: "Environmental Education Seminar",
        date: "May 5, 2024",
        location: "City Library",
      },
    ],
  },
];

export default function Involved() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-24 pb-16">
        <Container>
          <h1 className="text-4xl font-bold text-center mb-16 text-forest">Get Involved</h1>
          
          <div className="max-w-4xl mx-auto space-y-12">
            <section>
              <h2 className="text-2xl font-semibold mb-6 text-forest">{opportunities[0].title}</h2>
              <p className="text-gray-600 mb-6">{opportunities[0].description}</p>
              <div className="grid md:grid-cols-2 gap-4">
                {opportunities[0].activities.map((activity) => (
                  <div key={activity} className="p-4 bg-green-50 rounded-lg">
                    <p className="text-forest">{activity}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-6 text-forest">{opportunities[1].title}</h2>
              <p className="text-gray-600 mb-6">{opportunities[1].description}</p>
              <div className="space-y-4">
                {opportunities[1].events.map((event) => (
                  <div key={event.name} className="p-6 bg-white shadow-md rounded-lg">
                    <h3 className="font-semibold text-lg text-forest mb-2">{event.name}</h3>
                    <p className="text-gray-600">📅 {event.date}</p>
                    <p className="text-gray-600">📍 {event.location}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </Container>
      </div>
    </main>
  );
}