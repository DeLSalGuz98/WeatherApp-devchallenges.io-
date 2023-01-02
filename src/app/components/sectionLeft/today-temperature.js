import React, { useContext, useEffect, useState } from 'react';
import { ConvertDateToString } from "../../services/daysAndMonths";
import { GetTodayWeather, GetWeatherByLocation } from "../../services/getDataApi";
import { GetGeolocation } from '../../services/getGeolocation';
import './todayTemperature.css'

import { nameCityContext } from '../../context/nameCityContext';
import { navContext } from '../../context/navContext';
import { dataWeatherContext } from '../../context/dataWeatherContext';


export function TodayTemperature() {
    const {nameCity, setNameCity} = useContext(nameCityContext);
    const {dataWeather, setDataWeather} = useContext(dataWeatherContext)
    const {setStatusNav} = useContext(navContext)

    const [today, setToday] = useState("");
    const [grades, setGrades] = useState('°C');
    useEffect(()=>{
        if(localStorage.getItem('gradesFar') === 'true'){
            setGrades('°F')
        }
        CityNameUpdated();      
    },[nameCity]);

    const CityNameUpdated = ()=>{
        if(nameCity !== ""){
            GetTodayDate();
            GetWeather();
        }else{
            setNameCity("españa");
        }
    }

    const DeployNav = ()=>{
        setStatusNav(true)
    }
    const GetTodayDate = ()=>{        
        let todayDate = new Date();
        setToday(ConvertDateToString(todayDate));        
    }

    const GetUserLocation = async(e)=>{
        e.preventDefault();
        const {lat, lon} = await GetGeolocation()
        console.log({lat: lat, lon: lon})
        const data = await GetWeatherByLocation(lat, lon)
        setDataWeather({...dataWeather,
            cityName: data.cityName,
            currentTemperature: data.currentTemperature,
            weatherSituation : data.weatherSituation,
            imageDirection: data.imageDirection,
            windNumber: data.windNumber,
            humidityNumber: data.humidityNumber,
            pressureNumber : data.pressureNumber,
            visibilityNumber: data.visibilityNumber,
            windDirection: data.windDirection,
            nextDays: data.nextDays
        })       
    }

    const GetWeather = async()=>{
        const data = await GetTodayWeather(nameCity);
        setDataWeather({...dataWeather,
            cityName: data.cityName,
            currentTemperature: data.currentTemperature,
            weatherSituation : data.weatherSituation,
            imageDirection: data.imageDirection,
            windNumber: data.windNumber,
            humidityNumber: data.humidityNumber,
            pressureNumber : data.pressureNumber,
            visibilityNumber: data.visibilityNumber,
            windDirection: data.windDirection,
            nextDays: data.nextDays
        })
    }
    return(
        <section className="section-left">
            <div className="header-section">
                <button className='btn btn-color' onClick={DeployNav} >Search for places</button>
                <a className='btn-circle btn-color' href="#" onClick={GetUserLocation}><i className="fas fa-crosshairs"></i></a>
            </div>
            <div className="img-section">
                <div className="background-img">
                    <img src="./img/Cloud-background.png" alt="Cloud backgroun"></img>
                </div>
                <div className="icon-img">
                    <img src={dataWeather.imageDirection} alt={dataWeather.weatherSituation}></img>
                </div>
            </div>
            <div className="description-section">
                <div className="temperature-description">
                    <p className="number-temperature-desription">{dataWeather.currentTemperature}</p>
                    <p className="scale-temperature-desription">{grades}</p>
                </div>
                <div className="wheather-description">
                    <p>{dataWeather.weatherSituation}</p>
                </div>
                <div className="date-city-description">
                    <p>Today - {today}</p>
                    <p><i className="fas fa-map-marker-alt"></i> {dataWeather.cityName}</p> 
                </div>
            </div>
        </section>
    )
}

//     GetUserLocation(){
//         this.GetGeolocation().then(res =>{
//             //console.log(res);
//             this.GetWeatherByLocation(res.lat, res.lon);
//         })
//         .catch((err)=>{
//             alert(err);
//         })
//     }
//     GetGeolocation(){
//         const promesa = new Promise((resolve, reject)=>{
//             navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

//             function successCallback(position){   
//                 lat = position.coords.latitude;
//                 lon = position.coords.longitude;
//                 resolve({lat, lon});            
//             }

//             function errorCallback(error) {
//                 const message = 'ERROR(' + error.code + '): ' + error.message;
//                 console.warn(message);
//                 reject(message);
//             }
//         });
//         return promesa;
//     }
//     GetWeatherByLocation(lati, long){
//         fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${long}&appid=${dlsgApiKey}&units=metric`)
//         .then(res => res.json())
//         .then(data => {
//             console.log(data);
//             //let temper = (data.main.temp).toFixed();
//             let milles = (data.visibility / 1609.34).toFixed(1);
//             let windMph = (data.wind.speed * 2.236934).toFixed(1);
//             let windDir = (data.wind.deg - 45);

//             let iconWeather = GetIcons(data.weather[0].description);
//             this.setState({
//                 cityName: data.name,
//                 currentTemperature: data.main.temp,
//                 weatherSituation: data.weather[0].main,
//                 imageDirection: iconWeather,
//                 windNumber: windMph,
//                 humidityNumber: data.main.humidity,
//                 pressureNumber: data.main.pressure,
//                 visibilityNumber: milles,
//                 windDirection: `rotate(${windDir}deg)`,

//                 nameCitySearch: data.name
//             });
//         })
//         .then(()=>{
//             this.GetWeatherNextsDays();
//         })
//         .catch(err => console.log(err));
        
//     }

// class TodayTemperature extends React.Component {
//     constructor(props){
//         super(props);

//         this.state={
//             today: ""
//         }
//         this.DeployNav = this.DeployNav.bind(this);
//         this.GetUserLocation = this.GetUserLocation.bind(this);
//     }
//     DeployNav(){
//         this.props.DeployNav();
//     }
//     componentDidMount(){
//         this.GetTodayDate();
//     }
//     GetUserLocation(e){
//         this.props.GetUserLocation();
//         e.preventDefault();
//     }
//     GetTodayWeather(){
//         this.props.GetTodayWeather();
//     }
//     GetTodayDate(){        
//         let todayDate = new Date();

//         let day = MontsAndWeeks.dayWeek[todayDate.getDay()];
//         let date = todayDate.getDate();
//         let month = MontsAndWeeks.montsName[todayDate.getMonth()];
        
//         let currentDate = `${day}. ${date} ${month}`;
//         this.setState({
//             today: currentDate
//         });
        
//     }
//     render(){
//         return(
//             <>
//                 <div className="header-section">
//                     <button onClick={this.DeployNav} >Search for places</button>
//                     <a href="#" onClick={this.GetUserLocation}><i className="fas fa-crosshairs"></i></a>
//                 </div>
//                 <div className="img-section">
//                     <div className="background-img">
//                         <img src="./img/Cloud-background.png" alt="Cloud backgroun"></img>
//                     </div>
//                     <div className="icon-img">
//                         <img src={this.props.imageDirection} alt={this.props.weatherSituation}></img>
//                     </div>
//                 </div>
//                 <div className="description-section">
//                     <div className="temperature-description">
//                         <p className="number-temperature-desription">{this.props.currentTemperature}</p>
//                         <p className="scale-temperature-desription">°c</p>
//                     </div>
//                     <div className="wheather-description">
//                         <p>{this.props.weatherSituation}</p>
//                     </div>
//                     <div className="date-city-description">
//                         <p>Today - {this.state.today}</p>
//                         <p><i className="fas fa-map-marker-alt"></i> {this.props.cityName}</p> 
//                     </div>
//                 </div>
//             </>
//         );
//     }
// }

export default TodayTemperature;