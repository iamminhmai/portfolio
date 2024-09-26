import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/static.css';

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
                <p>Oops! The page you're looking for doesn't exist, or you've wandered into the digital void.</p>
            </div>
            <Link reloadDocument to="/">
                <span>Return Home<i className="fa-solid fa-arrow-up"></i></span>
            </Link>
        </div>
    );
};