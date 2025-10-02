import React, { useState, useEffect } from "react";
import WeatherCard from "./WeatherCard";
//import { fetchWeatherByCity, fetchWeatherByCoords } from "./services/fetchWeather.js";
//import { fetchWeatherByCity, fetchWeatherByCoords } from "./services/fetchWeather";
//import { fetchWeatherByCity, fetchWeatherByCoords } from "./services/fetchWeather.js";
// src/App.jsx
import { fetchWeatherByCity, fetchWeatherByCoords } from "C:/Users/Muttaki/Desktop/Weather App/weather-app/src/service/fetchWeather.js"
//import "./App.css";
function App() {
  const [city, setCity] = useState("Dhaka");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const getWeatherByCity = async (cityName) => {
    try {
      setError("");
      const data = await fetchWeatherByCity(cityName);
      setWeather(data);
    } catch (err) {
      setWeather(null);
      setError(err.message);
    }
  };

  const getWeatherByLocation = async (lat, lon) => {
    try {
      setError("");
      const data = await fetchWeatherByCoords(lat, lon);
      setWeather(data);
      setCity(data.name);
    } catch (err) {
      setWeather(null);
      setError(err.message);
    }
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => getWeatherByLocation(pos.coords.latitude, pos.coords.longitude),
        () => getWeatherByCity(city)
      );
    } else {
      getWeatherByCity(city);
    }

    const interval = setInterval(() => {
      if (city) getWeatherByCity(city);
    }, 60000);

    return () => clearInterval(interval);
  }, [city]);

  const handleSubmit = (e) => {
    e.preventDefault();
    getWeatherByCity(city);
  };

  return (
    <div className="container py-5">
      <h1 className="text-primary">🌤️ Real-Time Weather App</h1>

      <form onSubmit={handleSubmit} className="d-flex justify-content-center mb-4">
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="form-control w-50 me-2"
        />
        <button type="submit" className="btn btn-primary">
          Search
        </button>
      </form>

      {error && <p className="text-danger">{error}</p>}
      {weather && <WeatherCard weather={weather} />}
    </div>
  );
}

export default App;
