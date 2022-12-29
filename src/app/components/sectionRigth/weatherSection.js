import React from "react";

import './weatherSection.css'

import { TodayDescriptionWeather } from "./todayWeatherDescription/today_desription_weather";
import { ChangeGrades } from "./changeGradesSection/changeGrades";
import { CardDaysSection } from "./cardDaysSection/cardDaysSection";

export function WeatherSection() {
    return(
        <section className="section-rigth">
            <ChangeGrades/>
            <CardDaysSection/>
            <TodayDescriptionWeather/>
        </section>
    )
}