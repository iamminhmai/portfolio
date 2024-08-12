import React, { useRef } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Loading from "./components/Loading";
import Cursor from "./components/Cursor";
import NavBar from "./components/Navbar";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";
import * as Static from "./components/StaticPages";

export default function App() {
    const heroRef = useRef(null);
    const aboutRef = useRef(null);
    const projectsRef = useRef(null);
    const contactRef = useRef(null);

    return (
        <div className="App">
            <Router basename="/portfolio">
                <Loading />
                <Cursor />
                <header>
                    <NavBar heroRef={heroRef} aboutRef={aboutRef} projectsRef={projectsRef} contactRef={contactRef} />
                </header>
                <main>
                    <Routes>
                        <Route index element={ <HomePage heroRef={heroRef} aboutRef={aboutRef} projectsRef={projectsRef} contactRef={contactRef} /> } />
                        <Route path="/resume" element={ <Static.Resume /> } />
                        <Route path="*" element={ <Static.PageNotFound /> } />
                    </Routes>
                </main>
                <Footer />
            </Router>
        </div>
    );
};

{/* <Route path="/portfolio" element={<Navigate replace to="/" />} /> */}
