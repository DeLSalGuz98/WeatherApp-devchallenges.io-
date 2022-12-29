import React, { useContext, useEffect, useState } from "react";
import './cardDaysSection.css'
import { CardDaysWeather } from "../cardDaysSection/cardDays/card_days_weather";
import { GetWeatherNextDays } from "../../../services/getDataApi";
import { nameCityContext } from "../../../context/nameCityContext";

export function CardDaysSection() {
    const {nameCity} = useContext(nameCityContext);
    const [nextDays, setNextDays] = useState([]);

    useEffect(()=>{
        CityNameUpdated();
    },[nameCity]);
    const CityNameUpdated = ()=>{
        if(nameCity !== ""){
            WeatherNexDays();
        }
    }

    const WeatherNexDays = async()=>{
        setNextDays(await GetWeatherNextDays(nameCity));        
    }
    return(
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
    )
}