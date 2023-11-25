import React from "react";
import About from "./components/about/about";
import Skills from "./components/skills/skills";
import TestimonialsSection from "./components/testimonials/testimonialsSection";
import Contact from "./components/contact/contact";
import Navbar from "./components/navBar/navBar";
import ProjectsSection from "./components/projects/projectSection";

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
