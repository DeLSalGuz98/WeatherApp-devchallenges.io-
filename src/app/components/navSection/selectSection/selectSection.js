import React, { useContext, useEffect, useState } from "react";
import './selectSection.css';
import { nameCityContext } from "../../../context/nameCityContext";
import { navContext } from "../../../context/navContext";

const places = ["London","Lima", "Moscu", "Long Beach", "Barcelona"]

export function SelectSection() {
    const {nameCity, setNameCity} = useContext(nameCityContext);
    const {setStatusNav} = useContext(navContext);
    const [showOptions, setShowOptions] = useState(false);
    const ShowCityOptions = ()=>{
        if(showOptions === false){
            setShowOptions(true)
        }else{
            setShowOptions(false)
        }
    }
    const Selected = (e)=>{
        const {value} = e.target;
        setNameCity(value);
        if(value !== nameCity){
            setStatusNav(false)
        }
        
    }
    return(
        <div className="nav-select-section">
            <div className="select-container" onClick={ShowCityOptions}>
                <div className="option-selected" >
                    <div>
                        <p>{nameCity}</p>
                    </div>
                    <i className="fas fa-chevron-right"></i>        
                </div>
                <div className={`options-container ${showOptions? 'show-options': 'hide-options'}`} >
                    {
                        places.map(place =>{
                            return(
                                <input 
                                    key={place}
                                    className="option name-city" 
                                    onClick={Selected}  
                                    type="button"   
                                    value={place} 
                                />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}