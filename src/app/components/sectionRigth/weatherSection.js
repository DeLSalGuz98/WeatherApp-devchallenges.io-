import React, { useContext, useEffect, useState } from "react";

import './weatherSection.css'

import { CardDaysWeather } from "./cardDaysSection/card_days_weather";
import { TodayDescriptionWeather } from "./todayWeatherDescription/today_desription_weather";
import { ChangeGrades } from "./changeGradesSection/changeGrades";

import { GetTodayWeather, GetWeatherNextDays } from "../../services/getDataApi";
import { nameCityContext } from "../../context/nameCityContext";

export function WeatherSection() {
    const nameCitySearch = useContext(nameCityContext);
    const [nextDays, setNextDays] = useState([]);
    const [todayWeatherDescription, setTodayWeatherDescription] = useState({
        windNumber: "",
        humidityNumber: "",
        pressureNumber : "",
        visibilityNumber: "",
        windDirection: ""
    });
    useEffect(()=>{
        WeatherNexDays();
        GetWeather();
    },[]);
    const WeatherNexDays = async()=>{
        setNextDays(await GetWeatherNextDays(nameCitySearch));        
    }
    const GetWeather = async()=>{
        const data = await GetTodayWeather(nameCitySearch);
        setTodayWeatherDescription({...todayWeatherDescription,
            windNumber: data.windNumber,
            humidityNumber: data.humidityNumber,
            pressureNumber : data.pressureNumber,
            visibilityNumber: data.visibilityNumber,
            windDirection: data.windDirection
        });
    }
    return(
        <section className="section-rigth">
                <ChangeGrades/>
                <div className="card-days-section">
                    <div className="cards-days">
                        {
                            nextDays.map(day =>{
                                return(
                                    <CardDaysWeather
                                        key={day.id}
                                        dayName={day.dayName}
                                        iconWeather={day.iconWeather}
                                        iconWeatherName={day.iconWeatherName}
                                        temMax={day.maxTemp}
                                        temMin={day.minTemp}
                                    />
                                )
                            })
                        }
                    
                    </div>
                </div>
                <div className="today-description-weather">
                    <TodayDescriptionWeather
                        windNumber={todayWeatherDescription.windNumber}
                        windDirection={todayWeatherDescription.windDirection}
                        humidityNumber={todayWeatherDescription.humidityNumber}
                        pressureNumber={todayWeatherDescription.pressureNumber}
                        visibilityNumber={todayWeatherDescription.visibilityNumber}
                    ></TodayDescriptionWeather>
                </div>
            </section>
    )
}