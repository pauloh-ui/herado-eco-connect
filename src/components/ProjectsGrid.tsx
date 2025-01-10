import { Container } from "./ui/container";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
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
        <h2 className="text-3xl font-bold text-center mb-12 text-forest dark:text-forest-light">Latest Projects</h2>
        <div ref={ref}>
          <Carousel opts={{ align: "start", loop: true }}>
            <CarouselContent>
              {projects.map((project, index) => (
                <CarouselItem key={project.title} className="md:basis-1/2 lg:basis-1/3">
                  <div
                    className={cn(
                      "group rounded-lg overflow-hidden shadow-lg opacity-0",
                      inView && "animate-fade-up",
                      inView && `[animation-delay:${200 + index * 100}ms]`
                    )}
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute top-4 left-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm text-forest dark:text-forest-light">
                        {project.category}
                      </div>
                    </div>
                    <div className="p-6 bg-white dark:bg-gray-900">
                      <h3 className="text-xl font-semibold mb-2 text-forest dark:text-forest-light">{project.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </Container>
    </section>
  );
}