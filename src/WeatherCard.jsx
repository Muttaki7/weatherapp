import React from "react";

function WeatherCard({ weather }) {
    const { name, main, weather: weatherInfo } = weather;
    const { temp, feels_like, humidity } = main;
    const { description, icon } = weatherInfo[0];

    return (
        <div className="card weather-card mx-auto" style={{ maxWidth: "20rem" }}>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <img
                    src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
                    alt={description}
                />
                <h3 className="card-text">{Math.round(temp)}°C</h3>
                <p className="text-capitalize">{description}</p>
                <p className="small">Feels like: {Math.round(feels_like)}°C</p>
                <p className="small">Humidity: {humidity}%</p>
            </div>
        </div>
    );
}

export default WeatherCard;
