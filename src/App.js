import React, { useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loading from "./components/Loading";
import Cursor from "./components/Cursor";
import NavBar from "./components/Navbar";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";
import * as Static from "./components/StaticPages";

export default function App() {
    const refs = {
        heroRef: useRef(null),
        aboutRef: useRef(null),
        projectsRef: useRef(null),
        contactRef: useRef(null)
    };

    return (
        <div className="App">
            <Router>
                <Loading />
                <Cursor />
                <header>
                    <NavBar refs={refs} />
                </header>
                <main>
                    <Routes>
                        <Route index element={ <HomePage refs={refs} /> } />
                        <Route path="*" element={ <Static.PageNotFound /> } />
                    </Routes>
                </main>
                <Footer />
            </Router>
        </div>
    );
};
