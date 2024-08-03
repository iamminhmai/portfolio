import { useEffect } from "react";
import '../styles/cursor.css';

const INTERACTIVE_TAGS = ['BUTTON', 'A', 'INPUT', 'TEXTAREA'];

export default function Cursor() {
    useEffect(() => {
        const cursorContainer = document.getElementById('cursor-container');
        const outerCircle = document.getElementById('outer-circle');
        const innerCircle = document.getElementById('inner-circle');

        const moveCursor = (e) => {
            cursorContainer.style.left = `${e.clientX}px`;
            cursorContainer.style.top = `${e.clientY}px`;
        };


        const handleHover = (e) => {
            // Collect all elements in the event path
            const path = e.composedPath();

            // Check for general interactive tags
            const isInteractiveHover = path.some(el => INTERACTIVE_TAGS.includes(el.tagName));

            // Additional specific check for links with SVGs
            const isLinkHover = path.some(el => 
                el.tagName === 'A' && (el.querySelector('svg') || el instanceof SVGElement)
            );

            // Combine the checks to decide on applying the hover effect
            if (isInteractiveHover || isLinkHover) {
                outerCircle.classList.add('hover-effect');
                innerCircle.classList.add('hover-effect');
            } else {
                outerCircle.classList.remove('hover-effect');
                innerCircle.classList.remove('hover-effect');
            }
        };

        document.addEventListener('mousemove', moveCursor);
        document.addEventListener('mouseover', handleHover);
        document.addEventListener('mouseout', () => outerCircle.classList.remove('hover-effect'));
        document.addEventListener('mouseout', () => innerCircle.classList.remove('hover-effect'));

        return () => {
            document.removeEventListener('mousemove', moveCursor);
            document.removeEventListener('mouseover', handleHover);
            document.removeEventListener('mouseout', () => outerCircle.classList.remove('hover-effect'));
            document.removeEventListener('mouseout', () => innerCircle.classList.remove('hover-effect'));
        };
    }, []);

    return (
        <div id="cursor-container">
            <div id="inner-circle"></div>
            <div id="outer-circle"></div>
        </div>
    );
};