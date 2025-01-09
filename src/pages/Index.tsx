import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ImpactStats } from "@/components/ImpactStats";
import { ProjectsGrid } from "@/components/ProjectsGrid";
import { Newsletter } from "@/components/Newsletter";

export default function Index() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <ImpactStats />
      <ProjectsGrid />
      <Newsletter />
    </main>
  );
}