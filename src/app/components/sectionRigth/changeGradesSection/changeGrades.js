import React from "react";
export function ChangeGrades() {
    const ChangeFarenheit = ()=>{
        console.log('change temperature');
    }
    return(
        <div className="change-grades-section">
            <div className="change-grades-container">
                <a href="#" className="cel">
                    <p>°C</p>
                </a>
                <a href="#" className="far" onClick={ChangeFarenheit}>
                    <p>°F</p>
                </a>
            </div>
        </div>
    )
}