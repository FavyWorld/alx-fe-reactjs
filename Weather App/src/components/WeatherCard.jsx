// WeatherCard.jsx
import React from 'react';
import humidity_icon from '../assets/Icons/humidity.png';
import wind_icon from '../assets/Icons/wind.png';

const WeatherCard = ({ weatherData }) => {
  return (
    <div>
      <img
        src={weatherData.icon}
        alt="weather icon"
        className="weather_icon"
      />
      <p className="temperature">{weatherData.temperature}°c</p>
      <p className="location">{weatherData.location}</p>

      <div className="weather-data">
        <div className="humidity">
          <img src={humidity_icon} alt="Humidity" />
          <div>
            <p>{weatherData.humidity}%</p>
            <span>Humidity</span>
          </div>
        </div>

        <div className="wind">
          <img src={wind_icon} alt="Wind Speed" />
          <div>
            <p>{weatherData.windSpeed} km/h</p>
            <span>Wind Speed</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
