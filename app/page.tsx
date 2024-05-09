import Image from "next/image";
import { Hero } from "./components/Hero";
import { SectionTwo } from "./components/SectionTwo";
import { AboutSection } from "./components/AboutSection";
import { FavoriteProjects } from "./components/FavoriteProjects";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto w-full px-4 md:px-8">
      <Hero />
      <SectionTwo />
      <AboutSection />
      <FavoriteProjects />
      <Footer />
    </div>
  );
}
