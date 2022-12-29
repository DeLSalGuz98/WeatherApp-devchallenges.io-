import React, { useContext, useEffect, useState } from "react";
import { DescriptionWeatherCard } from './descriptionWeatherCard/description_weather_card';
import './descriptionWeather.css'
import { GetTodayWeather } from "../../../services/getDataApi";
import { nameCityContext } from "../../../context/nameCityContext";

export function TodayDescriptionWeather() {
    const {nameCity} = useContext(nameCityContext);
    const [todayWeatherDescription, setTodayWeatherDescription] = useState({
        windNumber: "",
        humidityNumber: "",
        pressureNumber : "",
        visibilityNumber: "",
        windDirection: ""
    });
    useEffect(()=>{
        CityNameUpdated();
    },[nameCity]);
    
    const CityNameUpdated = ()=>{
        if(nameCity !== ""){
            GetWeather();
        }
    }
    const GetWeather = async()=>{
        const data = await GetTodayWeather(nameCity);
        setTodayWeatherDescription({...todayWeatherDescription,
            windNumber: data.windNumber,
            humidityNumber: data.humidityNumber,
            pressureNumber : data.pressureNumber,
            visibilityNumber: data.visibilityNumber,
            windDirection: data.windDirection
        });
    }
    return(
        <div className="today-description-weather">
            <div className="title">
                <p>Today's Hightlights</p>
            </div>
            <div className="today-weather-cards">
                <div className="today-cards">
                    <DescriptionWeatherCard
                        classNameCardDescription="wind-status-card"
                        titleCard="Wind Status"
                        number={todayWeatherDescription.windNumber}
                        extention="mph"
                    >
                        <div className="wind-direction">
                            <div className="direction-container">
                                <a href="#" style={{transform: todayWeatherDescription.windDirection}}>
                                    <i className="fas fa-location-arrow"></i>
                                </a>
                                <p>wsw</p>
                            </div>
                        </div>
                    </DescriptionWeatherCard>
                    <DescriptionWeatherCard
                        classNameCardDescription="humidity-card"
                        titleCard="Humidity"
                        number={todayWeatherDescription.humidityNumber}
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
                                    <div className="gradual-bar" style={{width: todayWeatherDescription.humidityNumber}}>
    
                                    </div>
                                </div>
                                <p>%</p>        
                            </div>
                        </div>
                    </DescriptionWeatherCard>
                    <DescriptionWeatherCard
                        classNameCardDescription="visibility-card"
                        titleCard="Visibility"
                        number={todayWeatherDescription.visibilityNumber}
                        extention="miles"
                    ></DescriptionWeatherCard>
                    <DescriptionWeatherCard
                        classNameCardDescription="air-pressure-card"
                        titleCard="Air Pressure"
                        number={todayWeatherDescription.pressureNumber}
                        extention="mb"
                    ></DescriptionWeatherCard>
                </div>
            </div>
            <div className="credits">
                <p>Denilson @ DevChallenges.io</p>
            </div>
        </div>
    
    );
}