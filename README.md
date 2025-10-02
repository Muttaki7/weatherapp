🌤️ React Weather App

A simple React Weather App that fetches real-time weather data from the OpenWeatherMap API
 and displays it using Bootstrap 5. Users can search by city or use their current location.

📸 Demo


Replace with your actual screenshot if available.

🛠 Features

Fetch current weather by city name.

Auto-detect user location using geolocation.

Real-time weather updates every minute.

Displays:

Temperature (°C)

Weather description & icon

Feels like temperature

Humidity

Fully styled with Bootstrap 5.

Modular code with a separate fetchWeather.js service file.

🚀 Getting Started
1. Clone the repository
git clone https://github.com/yourusername/weather-app.git
cd weather-app

2. Install dependencies
npm install

3. Add your OpenWeather API key

Open src/services/fetchWeather.js and replace:

const API_KEY = "YOUR_API_KEY";


with your personal API key from OpenWeatherMap
.

4. Run the app
npm run dev


Open http://localhost:5173 in your browser.

📂 File Structure
weather-app/
 ├── src/
 │    ├── App.jsx
 │    ├── WeatherCard.jsx
 │    ├── index.css
 │    └── services/
 │         └── fetchWeather.js
 ├── package.json
 └── README.md

⚡ Technologies Used

React 18

Bootstrap 5

Vite

OpenWeatherMap API

JavaScript (ES6+)

💡 Notes
The 
API key may take 10–15 minutes to activate.

If location access is denied, the app defaults to a pre-set city.

The app automatically refreshes weather data every 60 seconds.

📌 Future Improvements

Add a 5-day weather forecast.

Show wind speed, pressure, sunrise/sunset times.

Add a loading spinner while fetching data.

Implement dark/light mode toggle.

📜 License

MIT License © 2025
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
