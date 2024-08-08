import React, { useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Loading from "./components/Loading";
import Cursor from "./components/Cursor";
import NavBar from "./components/Navbar";
import HomePage from "./components/HomePage";
import PageNotFound from "./components/PageNotFound";
import Footer from "./components/Footer";

export default function App() {
    const heroRef = useRef(null);
    const aboutRef = useRef(null);
    const projectsRef = useRef(null);
    const contactRef = useRef(null);

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
            <Router>
                <Loading />
                <Cursor />
                <header>
                    <NavBar heroRef={heroRef} aboutRef={aboutRef} projectsRef={projectsRef} contactRef={contactRef} />
                </header>
                <main>
                    <Routes>
                        <Route index element={ <HomePage heroRef={heroRef} aboutRef={aboutRef} projectsRef={projectsRef} contactRef={contactRef} /> } />
                        <Route path="/portfolio" element={<Navigate replace to="/" />} />
                        <Route path="*" element={ <PageNotFound /> } />
                    </Routes>
                </main>
                <Footer />
            </Router>
        </div>
    );
};
