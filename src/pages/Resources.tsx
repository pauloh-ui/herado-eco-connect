import { Header } from "@/components/Header";

export default function Resources() {
  const resources = [
    {
      title: "Annual Impact Report 2023",
      type: "PDF",
      size: "2.5 MB",
      category: "Reports"
    },
    {
      title: "Guide to Native Tree Species",
      type: "PDF",
      size: "1.8 MB",
      category: "Educational"
    },
    {
      title: "Water Conservation Techniques",
      type: "Video",
      duration: "15 mins",
      category: "Educational"
    },
    {
      title: "Research: Soil Health Study",
      type: "PDF",
      size: "3.2 MB",
      category: "Research"
    }
  ];

  return (
    <div className="min-h-screen bg-earth-light/10">
      <Header />
      <div className="pt-32 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-forest mb-8">Resources</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resources.map((resource, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-semibold text-forest mb-3">{resource.title}</h2>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>{resource.category}</span>
                  <span>{resource.type} • {resource.size || resource.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}