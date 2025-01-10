import { Header } from "@/components/Header";

export default function Involved() {
  const opportunities = [
    {
      title: "Field Volunteer",
      commitment: "Flexible",
      location: "Various locations",
      description: "Join our field teams in tree planting and conservation activities."
    },
    {
      title: "Research Assistant",
      commitment: "Part-time",
      location: "Remote",
      description: "Help analyze environmental data and prepare research reports."
    },
    {
      title: "Community Educator",
      commitment: "Weekly",
      location: "Local communities",
      description: "Teach environmental conservation practices to local communities."
    }
  ];

  return (
    <div className="min-h-screen bg-earth-light/10">
      <Header />
      <div className="pt-32 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-forest mb-8">Get Involved</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {opportunities.map((opportunity, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-semibold text-forest mb-3">{opportunity.title}</h2>
                <p className="text-gray-600 mb-4">{opportunity.description}</p>
                <div className="text-sm text-gray-500">
                  <p>Commitment: {opportunity.commitment}</p>
                  <p>Location: {opportunity.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}