import React, { useEffect } from "react";
import Loading from "./components/Loading";
import Cursor from "./components/Cursor";
import NavBar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
    useEffect(() => {
        setTimeout(() => {
            const heroSection = document.getElementById("hero");
            if (heroSection) {
                window.scrollTo({ top: heroSection.offsetTop });
            }
        }, 100);
    }, []);

    return (
        <div className="App">
            <Loading />
            <Cursor />
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
};
