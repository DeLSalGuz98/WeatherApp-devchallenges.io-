import React, { useContext, useState } from "react";
import './searchSection.css';

import { navContext } from "../../../context/navContext";
import { nameCityContext } from "../../../context/nameCityContext";

export function SearchSection() {
    const [city, setCity] = useState('');
    const {setStatusNav} = useContext(navContext);
    const {setNameCity} = useContext(nameCityContext);

    const SearchCityWeather = ()=>{
        setNameCity(city);
        setStatusNav(false)
    }
    const handleChange = (e)=>{
        setCity(e.target.value)
    }
    return(
        <div className="nav-search-section">
            <div className="search-container">
                <i className="fas fa-search"></i>
                <input type="text" placeholder="search location" onChange={handleChange}/>
            </div>
            <button onClick={SearchCityWeather}>Search</button>
        </div>
    )
}