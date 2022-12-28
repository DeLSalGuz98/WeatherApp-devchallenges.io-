import { GetIcons } from "./getIcon";
import { ConvertDateToString } from "./daysAndMonths";

const dlsgApiKey = "b4005826d03fec8a043849646980b840";

export const GetTodayWeather = async(nameCitySearch)=>{
    try {
        const res = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${nameCitySearch}&appid=${dlsgApiKey}&units=metric`);
        const data = await res.json();
        let iconWeather = GetIcons(data.weather[0].description);
        let windMph = (data.wind.speed * 2.236934).toFixed(1);
        let milles = (data.visibility / 1609.34).toFixed(1);
        let windDir = (data.wind.deg - 45)
        return {
            cityName: data.name,
            currentTemperature: data.main.temp,
            weatherSituation : data.weather[0].main,
            imageDirection: iconWeather,
            windNumber: windMph,
            humidityNumber: data.main.humidity,
            pressureNumber : data.main.pressure,
            visibilityNumber: milles,
            windDirection: `rotate(${windDir}deg)`
        }
    } catch (error) {
        console.log(error)
    }
}
export const GetWeatherNextDays = async (nameCitySearch)=>{
    try {
        const res = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${nameCitySearch}&units=metric&appid=${dlsgApiKey}`);
        const data = await res.json();
        const nextWeather = []
        for (let i = 6; i < data.list.length; i+=8) {
            const Weather = {
                id: data.list[i].dt,
                dayName: i===6? "Tomorrow" : ConvertDateToString(data.list[i].dt_txt),
                iconWeather: GetIcons(data.list[i].weather[0].description),
                iconWeatherName: data.list[i].weather[0].description,
                maxTemp: data.list[i].main.temp_max.toFixed(1),
                minTemp: data.list[i].main.temp_min.toFixed(1)
            }
            nextWeather.push(Weather)
        }
        return nextWeather;

    } catch (error) {
        console.log(error);
    }
}