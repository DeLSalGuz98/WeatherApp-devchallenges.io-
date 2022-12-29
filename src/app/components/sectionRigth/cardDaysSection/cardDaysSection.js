import React, { useContext} from "react";
import './cardDaysSection.css'
import { CardDaysWeather } from "../cardDaysSection/cardDays/card_days_weather";
import { dataWeatherContext } from "../../../context/dataWeatherContext";

export function CardDaysSection() {
    const {dataWeather} = useContext(dataWeatherContext)
    return(
        <div className="card-days-section">
            <div className="cards-days">
                {
                    dataWeather.nextDays.map(day =>{
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