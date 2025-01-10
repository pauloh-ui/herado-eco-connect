import { Header } from "@/components/Header";
import { Container } from "@/components/ui/container";

const initiatives = [
  {
    title: "Tree Planting Initiative",
    description: "Our flagship program focused on restoring extinct species through strategic reforestation efforts. We've successfully reintroduced 15 tree species that were previously considered extinct in their native regions.",
    image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86",
  },
  {
    title: "Soil Conservation Project",
    description: "Working with local farmers to implement sustainable soil management practices, preventing erosion and maintaining soil health in vulnerable agricultural areas.",
    image: "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3",
  },
  {
    title: "Water Well Development",
    description: "Providing clean water access to rural communities through sustainable well construction and maintenance programs. Over 100 wells built serving 75+ communities.",
    image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
  },
  {
    title: "Bee Conservation Program",
    description: "Protecting native bee populations through habitat restoration and sustainable beekeeping practices. Creating bee-friendly corridors across urban areas.",
    image: "https://images.unsplash.com/photo-1473800447596-01729482b8eb",
  },
];

export default function Work() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-24 pb-16">
        <Container>
          <h1 className="text-4xl font-bold text-center mb-16 text-forest">Our Work</h1>
          <div className="grid md:grid-cols-2 gap-8">
            {initiatives.map((initiative) => (
              <div key={initiative.title} className="rounded-lg overflow-hidden shadow-lg">
                <img
                  src={initiative.image}
                  alt={initiative.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-forest">{initiative.title}</h3>
                  <p className="text-gray-600">{initiative.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </main>
  );
}