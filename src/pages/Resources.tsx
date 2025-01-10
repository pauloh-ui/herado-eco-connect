import { Header } from "@/components/Header";
import { Container } from "@/components/ui/container";
import { Download } from "lucide-react";

const resources = {
  research: [
    {
      title: "Impact of Reforestation on Local Ecosystems",
      author: "Dr. Sarah Johnson",
      year: "2023",
      type: "Research Paper",
      size: "2.5 MB",
    },
    {
      title: "Water Conservation Techniques in Rural Areas",
      author: "Prof. Michael Chen",
      year: "2023",
      type: "Case Study",
      size: "1.8 MB",
    },
    {
      title: "Soil Health Assessment Guidelines",
      author: "Dr. Emma Williams",
      year: "2024",
      type: "Technical Report",
      size: "3.2 MB",
    },
  ],
  educational: [
    {
      title: "Introduction to Environmental Conservation",
      format: "Video Series",
      duration: "45 mins",
    },
    {
      title: "Sustainable Farming Practices",
      format: "Interactive Guide",
      duration: "30 mins",
    },
    {
      title: "Water Management Basics",
      format: "Presentation",
      duration: "20 mins",
    },
  ],
};

export default function Resources() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-24 pb-16">
        <Container>
          <h1 className="text-4xl font-bold text-center mb-16 text-forest">Resources</h1>

          <div className="max-w-4xl mx-auto space-y-12">
            <section>
              <h2 className="text-2xl font-semibold mb-6 text-forest">Research Papers</h2>
              <div className="space-y-4">
                {resources.research.map((paper) => (
                  <div key={paper.title} className="p-6 bg-white shadow-md rounded-lg flex justify-between items-center">
                    <div>
                      <h3 className="font-semibold text-lg text-forest mb-2">{paper.title}</h3>
                      <p className="text-gray-600">By {paper.author} • {paper.year}</p>
                      <p className="text-gray-500 text-sm">{paper.type} • {paper.size}</p>
                    </div>
                    <button className="p-2 text-forest hover:text-forest-light transition-colors">
                      <Download size={24} />
                    </button>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-6 text-forest">Educational Materials</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {resources.educational.map((material) => (
                  <div key={material.title} className="p-6 bg-green-50 rounded-lg">
                    <h3 className="font-semibold text-lg text-forest mb-2">{material.title}</h3>
                    <p className="text-gray-600">{material.format}</p>
                    <p className="text-gray-500">Duration: {material.duration}</p>
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