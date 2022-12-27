import React from 'react';

function DescriptionWeatherCard(props) {
    return(
        <React.Fragment>
            <div className={props.classNameCardDescription}>
                <div className="title-card">
                    <p>{props.titleCard}</p>
                </div>
                <div className="description-card">
                    <p className="card-number">{props.number}</p>
                    <p className="card-extention">{props.extention}</p>
                </div>
                {props.children}
            </div>
        </React.Fragment>
    );
}

export default DescriptionWeatherCard;