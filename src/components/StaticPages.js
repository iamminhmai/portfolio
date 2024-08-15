import { useEffect, useRef } from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { Link } from 'react-router-dom';
import resume from '../assets/files/resume-1.pdf';
import '../styles/static.css';

export function Resume() {
    useEffect(() => {
        document.title = "Resume | Minh Mai";
    })

    const iframeRef = useRef(null);

    const toggleFullScreen = () => {
        if (!document.fullscreenElement) {
        if (iframeRef.current.requestFullscreen) {
            iframeRef.current.requestFullscreen();
        } else if (iframeRef.current.mozRequestFullScreen) { // Firefox
            iframeRef.current.mozRequestFullScreen();
        } else if (iframeRef.current.webkitRequestFullscreen) { // Chrome, Safari, and Opera
            iframeRef.current.webkitRequestFullscreen();
        } else if (iframeRef.current.msRequestFullscreen) { // IE/Edge
            iframeRef.current.msRequestFullscreen();
        }
        } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) { // Firefox
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) { // Chrome, Safari, and Opera
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { // IE/Edge
            document.msExitFullscreen();
        }
        }
    };

    return (
        <section className="resume-section">
            <div className="resume-title">
                <h2>Resume<span className="text-dot">.</span></h2>
                <div>
                    <a href={resume} download="Minh-Mai-Resume.pdf">
                        <OverlayTrigger
                            placement="top"
                            delay={{ show: 250, hide: 400 }}
                            overlay={
                                <Tooltip id="download-tooltip">
                                    Download Resume
                                </Tooltip>
                            }
                        >
                            <button className="download-btn">
                                <i className="fa-solid fa-download"></i>
                            </button>
                        </OverlayTrigger>
                    </a>
                    <OverlayTrigger
                        placement="bottom"
                        delay={{ show: 250, hide: 400 }}
                        overlay={
                            <Tooltip id="fullscreen-tooltip">
                                Toggle Full Screen
                            </Tooltip>
                    }
                    >
                        <button className="fullscreen-btn" onClick={toggleFullScreen}>
                            <i className="fa-solid fa-expand"></i>
                        </button>
                    </OverlayTrigger>
                </div>
            </div>
            <iframe 
                ref={iframeRef} 
                className="resume-pdf" 
                title="Minh Mai Resume" 
                src={resume} 
                type="application/pdf" 
                width="800" height="1090" 
                allowFullScreen
            >
                <title>Minh Mai Resume</title>
                <p>Your browser does not support iframe tags. Click <a href="https://drive.google.com/file/d/1Lh5ctVd1ABZjl8EZBb_NB4yd2tp_UWY4/view">here</a> to view my resume.</p>
            </iframe>
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