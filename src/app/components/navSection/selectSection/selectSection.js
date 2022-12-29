import React from "react";
import './selectSection.css';

export function SelectSection() {
    const ShowCityOptions = ()=>{
        console.log("ShowCityOptions");
    }
    return(
        <div className="nav-select-section">
            <div className="select-container" onClick={ShowCityOptions}>
                <div className="option-selected" >
                    <div className="name-city">
                        <p>London</p>
                    </div>
                    <i className="fas fa-chevron-right"></i>        
                </div>
                <div className="options" >
                    <div className="name-city">
                        <p>Lima</p>
                    </div>
                    <div className="name-city">
                        <p>Moscu</p>
                    </div>
                    <div className="name-city">
                        <p>Long Beach</p>
                    </div>
                    <div className="name-city">
                        <p>Barcelona</p>
                    </div>

                </div>
            </div>
        </div>
    )
}