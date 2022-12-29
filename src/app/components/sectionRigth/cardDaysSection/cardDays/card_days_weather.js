import React from 'react';
import './cardDayWeather.css'

export function CardDaysWeather({dayName, iconWeather, iconWeatherName, temMax, temMin}) {
    return(
        <div className="card-day">
            <div className="day-name">
                <p>{dayName}</p>

            </div>
            <div className="icon-weather">
                <div>
                    <img src={iconWeather} alt={iconWeatherName}></img>
                </div>
            </div>
            <div className="temperature">
                <p className="temperature-max">{temMax}°c</p>
                <p className="temperature-min">{temMin}°c</p>
            </div>
        </div>
    );    
}
