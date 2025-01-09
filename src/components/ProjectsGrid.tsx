import { Container } from "./ui/container";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

const projects = [
  {
    title: "Tree Planting Initiative",
    description: "Restoring extinct species through strategic reforestation efforts.",
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9",
    category: "Conservation",
  },
  {
    title: "Soil Conservation",
    description: "Preventing erosion and maintaining soil health in vulnerable areas.",
    image: "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3",
    category: "Research",
  },
  {
    title: "Water Well Project",
    description: "Providing clean water access to rural communities.",
    image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
    category: "Development",
  },
];

export function ProjectsGrid() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20">
      <Container>
        <h2 className="text-3xl font-bold text-center mb-12 text-forest">Latest Projects</h2>
        <div
          ref={ref}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={cn(
                "group rounded-lg overflow-hidden shadow-lg opacity-0",
                inView && "animate-fade-up",
                inView && `[--animate-delay:${200 + index * 100}ms]`
              )}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm text-forest">
                  {project.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-forest">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <a
                  href="#"
                  className="text-forest hover:text-forest-light transition-colors inline-flex items-center"
                >
                  Learn more
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}