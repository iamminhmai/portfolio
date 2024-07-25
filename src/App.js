import React from "react";
import NavBar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  document.addEventListener('mousemove', function(e) {
    const light = document.getElementById('cursor-light');
    light.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  });

  return (
    <div className="App">
      <div id="cursor-light"></div>
      <div className="background-wrapper fade-in-background"></div>
      <header>
        <NavBar />
      </header>
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
