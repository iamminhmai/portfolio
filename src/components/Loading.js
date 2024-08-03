import { useState, useEffect } from "react";
import "../styles/loading.css"

export default function Loading() {
    const [percentage, setPercentage] = useState(0);
    const [isActive, setIsActive] = useState(true);

    useEffect(() => {
        // Set increment delay based on percentage: slow down if above 90%
        // const incrementDelay = percentage > 90 ? percentage : 10;
        let incrementDelay;

        if (percentage > 95) {
            incrementDelay = percentage + 30;   // Adds 30ms to the percentage if above 95
        } else if (percentage > 90) {
            incrementDelay = percentage;        // Uses the percentage value if above 90 but 95 or below
        } else {
            incrementDelay = 10;                // Uses a constant delay for percentages 90 or less
        }

        const timer = setTimeout(() => {
            if (percentage === 100) {
                // Delay deactivation slightly after reaching 100%
                setTimeout(() => setIsActive(false), 130);
            } else {
                // Increment until reaching 100
                setPercentage(prev => prev + 1);
            }
        }, incrementDelay);

        return () => clearTimeout(timer);
    }, [isActive, percentage]); 

    return (
        <div className={`loading-mask ${isActive ? "active" : "inactive"}`}>
            <div className="percentage-container">
                <span className="percentage-digit">{percentage}</span>
                <span className="percentage-symbol">%</span>
            </div>
        </div>
    )
}