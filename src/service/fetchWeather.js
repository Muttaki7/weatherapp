// src/services/fetchWeather.js

const API_KEY = "6749fd1b78d5de43983257962685bab8"; // 🔑 Replace with your OpenWeather key
const BASE_URL = "https://openweathermap.org/data/2.5/weather";

/**
 * Fetch weather by city name
 * @param {string} city - Name of the city
 * @returns {Promise<Object|null>}
 */
export async function fetchWeatherByCity(city) {
  if (!city) throw new Error("City name is required");

  try {
    const response = await fetch(`${BASE_URL}?q=${city}&appid=${'6749fd1b78d5de43983257962685bab8'}&units=metric`);

    if (!response.ok) {
      throw new Error("City not found");
    }

    const data = await response.json();
    console.log("Weather data by city:", data);
    return data;
  } catch (error) {
    console.error("Error fetching weather by city:", error);
    return null;
  }
}

/**
 * Fetch weather by coordinates
 * @param {number} lat - Latitude
 * @param {number} lon - Longitude
 * @returns {Promise<Object|null>}
 */
export async function fetchWeatherByCoords(lat, lon) {
  if (lat == null || lon == null) throw new Error("Latitude and longitude are required");

  try {
    const response = await fetch(`${BASE_URL}?lat=${lat}&lon=${lon}&appid=${'6749fd1b78d5de43983257962685bab8'}&units=metric`);

    if (!response.ok) {
      throw new Error("Coordinates not found");
    }

    const data = await response.json();
    console.log("Weather data by coordinates:", data);
    return data;
  } catch (error) {
    console.error("Error fetching weather by coordinates:", error);
    return null;
  }
}
