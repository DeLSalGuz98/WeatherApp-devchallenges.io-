import React from 'react';
import { DescriptionWeatherCard } from './descriptionWeatherCard/description_weather_card';
import './descriptionWeather.css'

export function TodayDescriptionWeather({windNumber, windDirection, humidityNumber, pressureNumber, visibilityNumber}) {
    return(
        <>
            <div className="title">
                <p>Today's Hightlights</p>
            </div>
            <div className="today-weather-cards">
                <div className="today-cards">
                    <DescriptionWeatherCard
                        classNameCardDescription="wind-status-card"
                        titleCard="Wind Status"
                        number={windNumber}
                        extention="mph"
                    >
                        <div className="wind-direction">
                            <div className="direction-container">
                                <a href="#" style={{transform: windDirection}}>
                                    <i className="fas fa-location-arrow"></i>
                                </a>
                                <p>wsw</p>
                            </div>
                        </div>
                    </DescriptionWeatherCard>
                    <DescriptionWeatherCard
                        classNameCardDescription="humidity-card"
                        titleCard="Humidity"
                        number={humidityNumber}
                        extention="%"
                    >
                        <div className="percent-bar">
                            <div className="numbers">
                                <p>0</p>
                                <p>50</p>
                                <p>100</p>
                            </div>
                            <div className="bar">
                                <div className="bar-container">
                                    <div className="gradual-bar" style={{width: humidityNumber}}>
    
                                    </div>
                                </div>
                                <p>%</p>        
                            </div>
                        </div>
                    </DescriptionWeatherCard>
                    <DescriptionWeatherCard
                        classNameCardDescription="visibility-card"
                        titleCard="Visibility"
                        number={visibilityNumber}
                        extention="miles"
                    ></DescriptionWeatherCard>
                    <DescriptionWeatherCard
                        classNameCardDescription="air-pressure-card"
                        titleCard="Air Pressure"
                        number={pressureNumber}
                        extention="mb"
                    ></DescriptionWeatherCard>
                </div>
            </div>
            <div className="credits">
                <p>Denilson @ DevChallenges.io</p>
            </div>
        </>
    
    );
}