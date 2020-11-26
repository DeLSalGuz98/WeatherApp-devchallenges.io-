import React from 'react';
import DescriptionWeatherCard from './description_weather_card';

class TodayDescriptionWeather extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="title">
                    <p>Today's Hightlights</p>
                </div>
                <div className="today-weather-cards">
                    <div className="today-cards">
                        <DescriptionWeatherCard
                            classNameCardDescription="wind-status-card"
                            titleCard="Wind Status"
                            number={this.props.windNumber}
                            extention="mph"
                        >
                            <div className="wind-direction">
                                <div className="direction-container">
                                    <a href="#" style={{transform: this.props.windDirection}}>
                                        <i className="fas fa-location-arrow"></i>
                                    </a>
                                    <p>wsw</p>
                                </div>
                            </div>
                        </DescriptionWeatherCard>
                        <DescriptionWeatherCard
                            classNameCardDescription="humidity-card"
                            titleCard="Humidity"
                            number={this.props.humidityNumber}
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
                                        <div className="gradual-bar" style={{width: this.props.humidityNumber}}>
        
                                        </div>
                                    </div>
                                    <p>%</p>        
                                </div>
                            </div>
                        </DescriptionWeatherCard>
                        <DescriptionWeatherCard
                            classNameCardDescription="visibility-card"
                            titleCard="Visibility"
                            number={this.props.visibilityNumber}
                            extention="miles"
                        ></DescriptionWeatherCard>
                        <DescriptionWeatherCard
                            classNameCardDescription="air-pressure-card"
                            titleCard="Air Pressure"
                            number={this.props.pressureNumber}
                            extention="mb"
                        ></DescriptionWeatherCard>
                    </div>
                </div>
                <div className="credits">
                    <p>Your name @ DevChallenges.io</p>
                </div>
            </React.Fragment>
        
        );
    }
}
export default TodayDescriptionWeather;