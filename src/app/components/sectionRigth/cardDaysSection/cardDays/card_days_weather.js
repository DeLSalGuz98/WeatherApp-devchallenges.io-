import React, { useEffect, useState } from 'react';
import './cardDayWeather.css'

export function CardDaysWeather({dayName, iconWeather, iconWeatherName, temMax, temMin}) {
    const [grades, setGrades] = useState('°C');
    useEffect(()=>{
        if(localStorage.getItem('gradesFar') === 'true'){
            setGrades('°F')
        }
    })
    return(
        <div className="card-day">
            <div className="day-name">
                <p>{dayName}</p>
            </div>
            <div className="icon-weather">
                <img className='img-card' src={iconWeather} alt={iconWeatherName}></img>
            </div>
            <div className="temperature">
                <p className="temperature-max">{temMax}{grades}</p>
                <p className="temperature-min">{temMin}{grades}</p>
            </div>
        </div>
    );    
}
