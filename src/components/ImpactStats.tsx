import { Container } from "./ui/container";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

const stats = [
  { label: "Trees Planted", value: "50,000+" },
  { label: "Water Wells Built", value: "100+" },
  { label: "Communities Helped", value: "75+" },
  { label: "Volunteers Engaged", value: "1,000+" },
];

export function ImpactStats() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-earth-light">
      <Container>
        <h2 className="text-3xl font-bold text-center mb-12 text-forest">Our Impact</h2>
        <div
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={cn(
                "opacity-0",
                inView && "animate-fade-up",
                // Stagger the animations
                inView && `[--animate-delay:${200 + index * 100}ms]`
              )}
            >
              <div className="text-4xl font-bold text-forest mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}