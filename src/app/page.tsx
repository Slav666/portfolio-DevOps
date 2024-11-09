import About from "./About";
import Skills from "../components/skills/Skills";
import TestimonialsSection from "../components/testimonials/TestimonialsSection";
import Contact from "./Contact";
import Navbar from "./NavBar";
import ProjectsSection from "../components/projects/ProjectSection";
import { testimonials } from "@/constants";

export default function App() {
  return (
    <main>
      <Navbar />
      <About />
      <ProjectsSection />
      <Skills />
      <TestimonialsSection />
      <Contact />
    </main>
  );
}
