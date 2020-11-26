import React from 'react';
import MontsAndWeeks from './daysAndMonths';


class TodayTemperature extends React.Component {
    constructor(props){
        super(props);

        this.state={
            today: ""
        }
        this.DeployNav = this.DeployNav.bind(this);
        this.GetUserLocation = this.GetUserLocation.bind(this);
    }
    DeployNav(){
        this.props.DeployNav();
    }
    componentDidMount(){
        this.GetTodayDate();
    }
    GetUserLocation(e){
        this.props.GetUserLocation();
        e.preventDefault();
    }
    GetTodayWeather(){
        this.props.GetTodayWeather();
    }
    GetTodayDate(){        
        let todayDate = new Date();

        let day = MontsAndWeeks.dayWeek[todayDate.getDay()];
        let date = todayDate.getDate();
        let month = MontsAndWeeks.montsName[todayDate.getMonth()];
        
        let currentDate = `${day}. ${date} ${month}`;
        this.setState({
            today: currentDate
        });
        
    }
    render(){
        return(
            <React.Fragment>
                <div className="header-section">
                    <button onClick={this.DeployNav} >Search for places</button>
                    <a href="#" onClick={this.GetUserLocation}><i className="fas fa-crosshairs"></i></a>
                </div>
                <div className="img-section">
                    <div className="background-img">
                        <img src="./img/Cloud-background.png" alt="Cloud backgroun"></img>
                    </div>
                    <div className="icon-img">
                        <img src={this.props.imageDirection} alt={this.props.weatherSituation}></img>
                    </div>
                </div>
                <div className="description-section">
                    <div className="temperature-description">
                        <p className="number-temperature-desription">{this.props.currentTemperature}</p>
                        <p className="scale-temperature-desription">°c</p>
                    </div>
                    <div className="wheather-description">
                        <p>{this.props.weatherSituation}</p>
                    </div>
                    <div className="date-city-description">
                        <p>Today - {this.state.today}</p>
                        <p><i className="fas fa-map-marker-alt"></i> {this.props.cityName}</p> 
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default TodayTemperature;