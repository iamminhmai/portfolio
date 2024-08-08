import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/error.css';

export default function PageNotFound() {
    useEffect(() => {
        const navbarElement = document.querySelector(".navbar");
        const footerElement = document.querySelector("footer");
        const loadingElement = document.querySelector(".loading-mask");
        navbarElement.classList.add("d-none");
        footerElement.classList.add("d-none");
        loadingElement.classList.add("d-none");

        const originalTitle = document.title;
        document.title = "404 - Page Not Found | Minh Mai";
    
        return () => {
            document.title = originalTitle;
        };
    }, []);

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