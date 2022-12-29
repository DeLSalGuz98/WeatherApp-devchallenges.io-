import React, { createContext, useState } from "react";

export const dataWeatherContext = createContext();

export const DataWeatherContextProvider = ({children})=>{
    const [dataWeather, setDataWeather] = useState({
        cityName: "",
        currentTemperature: "",
        weatherSituation : "",
        imageDirection: "",
        windNumber: "",
        humidityNumber: "",
        pressureNumber : "",
        visibilityNumber: "",
        windDirection: "",
        nextDays: []
    });
    return(
        <dataWeatherContext.Provider value={{dataWeather,setDataWeather}}>
            {children}
        </dataWeatherContext.Provider>
    )
}