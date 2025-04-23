import About from "./About";
import Skills from "../components/skills/Skills";
import TestimonialsSection from "../components/testimonials/TestimonialsSection";
import LandingPagNAvBar from "../components/NavBars/NavBar";
import ProjectsSection from "../components/projects/ProjectSection";
import Footer from "../components/Footers/Footer";

export default function App() {
  return (
    <main>
      <LandingPagNAvBar />
      <About />
      <ProjectsSection />
      <Skills />
      <TestimonialsSection />
      <Footer />
    </main>
  );
}
