import { Header } from "@/components/Header";

export default function Work() {
  const projects = [
    {
      title: "Tree Planting Initiative",
      description: "Restoring extinct species through strategic reforestation in the Horn of Africa.",
      impact: "50,000 trees planted",
      location: "Ethiopia"
    },
    {
      title: "Soil Erosion Prevention",
      description: "Implementing sustainable agriculture practices to prevent soil degradation.",
      impact: "2,000 hectares protected",
      location: "Somalia"
    },
    {
      title: "Water Well Projects",
      description: "Providing clean water access to rural communities.",
      impact: "100 wells constructed",
      location: "Djibouti"
    },
    {
      title: "Bee Conservation",
      description: "Protecting native bee populations and promoting sustainable beekeeping.",
      impact: "500 hives established",
      location: "Kenya"
    }
  ];

  return (
    <div className="min-h-screen bg-earth-light/10">
      <Header />
      <div className="pt-32 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-forest mb-8">Our Work</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-semibold text-forest mb-3">{project.title}</h2>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>{project.impact}</span>
                  <span>{project.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}