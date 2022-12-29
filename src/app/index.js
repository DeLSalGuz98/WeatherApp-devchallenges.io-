import React from 'react';
import ReactDom from 'react-dom';

import { App } from './App';
import './index.css';


ReactDom.render(
    <App/>, document.getElementById('root')
);

// import NavSection from './nav_section';
// import CardDaysWeather from './card_days_weather';
// import TodayTemperature from './today-temperature';
// import TodayDescriptionWeather from './today_desription_weather';


// import MontsAndWeeks from './daysAndMonths';


// const dlsgApiKey = "b4005826d03fec8a043849646980b840";

// let lat;
// let lon;

// function ConvertDateToString(date) {
    
//     let dateRecived = Date.parse(date);
//     let todayDate = new Date(dateRecived);

//     let newday = MontsAndWeeks.dayWeek[todayDate.getDay()];
//     let newdate = todayDate.getDate();
//     let newmonth = MontsAndWeeks.montsName[todayDate.getMonth()];
    
//     let currentDate = `${newday}. ${newdate} ${newmonth}`;
    
//     return currentDate;
// }


// class App extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             navDeployment: false,
//             leftPropertyCss: "-100%",
//             nameCitySearch: "",

//             lat: 0,
//             lon:0,

//             cityName: "",
//             currentTemperature: "",
//             weatherSituation: "",
//             imageDirection:"",
//             windNumber: "",
//             humidityNumber: "",
//             pressureNumber: "",
//             visibilityNumber:"",
//             windDirection: "",
//             nexDays: []
//         }
//         this.NavBarDeploy = this.NavBarDeploy.bind(this);
//         this.SearchCityWeather = this.SearchCityWeather.bind(this);
//         this.GetTodayWeather = this.GetTodayWeather.bind(this);
//         this.GetUserLocation = this.GetUserLocation.bind(this);
//     }
//     componentDidMount(){
//         this.GetGeolocation().then(res =>{
//             //console.log(res);
//             this.GetWeatherByLocation(res.lat, res.lon);
//         })
//         .catch((err)=>{
//             alert(err);
//             let city = prompt("Wich City are you searching");
//             this.setState({
//                 nameCitySearch: city
//             });
//             this.GetTodayWeather();
//         });
//     }
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
//     NavBarDeploy(){
//         if(this.state.navDeployment === false){
//             this.setState({
//                 navDeployment: true,
//                 leftPropertyCss: "0"
//             });
//         }else{
//             this.setState({
//                 navDeployment: false,
//                 leftPropertyCss: "-100%"
//             });
//         }

//     }
//     SearchCityWeather(nameCity){
//         this.setState({
//             nameCitySearch: nameCity
//         });        
//         setTimeout(()=>{
//             this.NavBarDeploy();
//             this.GetTodayWeather();
//         },500);
        

//     }
//     GetTodayWeather(){
//         fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.nameCitySearch}&appid=${dlsgApiKey}&units=metric`)
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
//                 windDirection: `rotate(${windDir}deg)`
//             });
            
//         })
//         .catch(err => console.log(err));
        
//         this.GetWeatherNextsDays();
//     }
//     GetWeatherNextsDays(){
//         fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${this.state.nameCitySearch}&units=metric&appid=${dlsgApiKey}`)
//         .then(res => res.json())
//         .then(data =>{
//             //console.log(data);
//             let secondDay = ConvertDateToString(data.list[14].dt_txt);
//             let thirdDay = ConvertDateToString(data.list[22].dt_txt);
//             let fourthDay = ConvertDateToString(data.list[30].dt_txt);
//             let fifthDay = ConvertDateToString(data.list[38].dt_txt);

//             let firtsIcon = GetIcons(data.list[6].weather[0].description);
//             let secondIcon = GetIcons(data.list[14].weather[0].description);
//             let thirdIcon = GetIcons(data.list[22].weather[0].description);
//             let fourthIcon = GetIcons(data.list[30].weather[0].description);
//             let fifthIcon = GetIcons(data.list[38].weather[0].description);
            
//             this.setState({
//                 nexDays: [
//                     {
//                         key: data.list[6].dt,
//                         date: "Tomorrow",
//                         maxTemp: data.list[6].main.temp_max.toFixed(1),
//                         minTemp: data.list[6].main.temp_min.toFixed(1),
//                         weathersituation: data.list[6].weather[0].description,
//                         icon: firtsIcon
//                     },
//                     {
//                         key: data.list[14].dt,
//                         date: secondDay,
//                         maxTemp: data.list[14].main.temp_max.toFixed(1),
//                         minTemp: data.list[14].main.temp_min.toFixed(1),
//                         weathersituation: data.list[14].weather[0].description,
//                         icon: secondIcon
//                     },
//                     {
//                         key: data.list[22].dt,
//                         date: thirdDay,
//                         maxTemp: data.list[22].main.temp_max.toFixed(1),
//                         minTemp: data.list[22].main.temp_min.toFixed(1),
//                         weathersituation: data.list[22].weather[0].description,
//                         icon: thirdIcon
//                     },
//                     {
//                         key: data.list[30].dt,
//                         date: fourthDay,
//                         maxTemp: data.list[30].main.temp_max.toFixed(1),
//                         minTemp: data.list[30].main.temp_min.toFixed(1),
//                         weathersituation: data.list[30].weather[0].description,
//                         icon: fourthIcon
//                     },
//                     {
//                         key: data.list[38].dt,
//                         date: fifthDay,
//                         maxTemp: data.list[38].main.temp_max.toFixed(1),
//                         minTemp: data.list[38].main.temp_min.toFixed(1),
//                         weathersituation: data.list[38].weather[0].description,
//                         icon: fifthIcon
//                     }
//                 ]
//             });
//         })
//         .catch(err => console.log(err));
//     }
//     ChangeFarenheit(e){
//         alert("Sorry, This function is not available");
//         e.preventDefault();
//     }
//     render(){
//         return(
//             <React.Fragment>
//                 <div className="section-left">
//                     <TodayTemperature
//                         DeployNav={this.NavBarDeploy}
//                         GetTodayWeather = {this.GetTodayWeather}
//                         GetUserLocation = {this.GetUserLocation}
//                         cityName={this.state.cityName}
//                         currentTemperature={this.state.currentTemperature}
//                         weatherSituation={this.state.weatherSituation}
//                         imageDirection = {this.state.imageDirection}
//                     ></TodayTemperature>
//                 </div>
//                 <div className="section-rigth">
//                     <div className="change-grades-section">
//                         <div className="change-grades-container">
//                             <a href="#" className="cel">
//                                 <p>°C</p>
//                             </a>
//                             <a href="#" className="far" onClick={this.ChangeFarenheit}>
//                                 <p>°F</p>
//                             </a>
//                         </div>
//                     </div>
//                     <div className="card-days-section">
//                         <div className="cards-days">
//                             {
//                                 this.state.nexDays.map(nexDays =>{
//                                     return(
//                                         <CardDaysWeather
//                                             key={nexDays.key}
//                                             dayName={nexDays.date}
//                                             iconWeather={nexDays.icon}
//                                             iconWeatherName={nexDays.weatherSituation}
//                                             temMax={nexDays.maxTemp}
//                                             temMin={nexDays.minTemp}
//                                         />
//                                     )
//                                 })
//                             }
//                         </div>
//                     </div>
//                     <div className="today-description-weather">
//                         <TodayDescriptionWeather
//                             windNumber={this.state.windNumber}
//                             windDirection={this.state.windDirection}
//                             humidityNumber={this.state.humidityNumber}
//                             pressureNumber={this.state.pressureNumber}
//                             visibilityNumber={this.state.visibilityNumber}
//                         ></TodayDescriptionWeather>
//                     </div>
//                 </div>
//                 <div className="section-nav" style={{left: this.state.leftPropertyCss}}>
//                     <NavSection
//                         UndeployNav={this.NavBarDeploy}
//                         SearchCityWeather = {this.SearchCityWeather}
//                     ></NavSection>
//                 </div>
//             </React.Fragment>
//         );
//     }
// }
