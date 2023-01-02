import React from 'react';
import './descriptionWeatherCard.css'

export function DescriptionWeatherCard({classNameCardDescription, titleCard, number, extention, children}) {
    return(
        <>
            <div className={` card-description-weather ${classNameCardDescription}`}>
                <div className="title-card">
                    <p>{titleCard}</p>
                </div>
                <div className="description-card">
                    <p className="card-number">{number}</p>
                    <p className="card-extention">{extention}</p>
                </div>
                {children}
            </div>
        </>
    );
}