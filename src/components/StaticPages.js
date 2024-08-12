import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import resume from '../assets/files/resume-1.pdf';
import '../styles/static.css';

export function Resume() {
    useEffect(() => {
        document.title = "Resume | Minh Mai";
    })

    return (
        <section className="resume-section">
            <div className="resume-title">
                <h2>Resume<span className="text-dot">.</span></h2>
                <a href={resume} download="Minh-Mai-Resume.pdf">
                    <button>
                        <i className="fa-solid fa-download"></i>
                    </button>
                </a>
            </div>
            <object className="pdf" data={resume} width="800" height="1090">Resume</object>
        </section>
    );
};

export function PageNotFound() {
    useEffect(() => {
        document.querySelector(".navbar").classList.add("d-none");
        document.querySelector("footer").classList.add("d-none");
        document.querySelector(".loading-mask").classList.add("d-none");
        document.title = "Page Not Found | Minh Mai";
    });

    return (
        <div className="error-container">
            <div className="error-404">
                <i className="fa-solid fa-4"></i>
                <i className="fa-solid fa-0"></i>
                <i className="fa-solid fa-4"></i>
                <h2>Page not found<span className="text-dot">.</span></h2>
            </div>
            <div className="error-message">
                <p>Whoops, the page you were looking for doesn't exist or you're lost in a perpetual black hole.</p>
            </div>
            <Link reloadDocument to="/">
                <span>Return Home<i className="fa-solid fa-arrow-up"></i></span>
            </Link>
        </div>
    );
};