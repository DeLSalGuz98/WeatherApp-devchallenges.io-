import React from 'react';

function CardDaysWeather(props) {
    return(
        <div className="card-day">
            <div className="day-name">
                <p>{props.dayName}</p>

            </div>
            <div className="icon-weather">
                <div>
                    <img src={props.iconWeather} alt={props.iconWeatherName}></img>
                </div>
            </div>
            <div className="temperature">
                <p className="temperature-max">{props.temMax}°c</p>
                <p className="temperature-min">{props.temMin}°c</p>
            </div>
        </div>
    );    
}

export default CardDaysWeather;