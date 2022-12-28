export function CardDaysSection() {
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