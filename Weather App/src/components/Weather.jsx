// Weather.jsx
import React, { useEffect, useState } from 'react';
import './Weather.css';
import clear_icon from '../assets/Icons/clear.png';
import cloud_icon from '../assets/Icons/cloud.png';
import drizzle_icon from '../assets/Icons/drizzle.png';
import rain_icon from '../assets/Icons/rain.png';
import SearchBar from './SearchBar';
import WeatherCard from './WeatherCard';
import ErrorMessage from './ErrorMessage';

const Weather = () => {
  const [weatherData, setWeatherData] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const allIcons = {
    '01d': clear_icon,
    '01n': clear_icon,
    '02d': cloud_icon,
    '02n': cloud_icon,
    '03d': cloud_icon,
    '03n': cloud_icon,
    '04d': drizzle_icon,
    '04n': drizzle_icon,
    '09d': rain_icon,
    '09n': rain_icon,
    '10d': rain_icon,
    '10n': rain_icon,
  };

  const search = async (city) => {
    if (city === '') {
      setErrorMessage('Enter your city');
      return;
    }
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`;

      const response = await fetch(url);
      const data = await response.json();
      if (!response.ok) {
        setErrorMessage(data.message);
        return;
      }

      const icon = allIcons[data.weather[0].icon] || clear_icon;
      setWeatherData({
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        temperature: Math.floor(data.main.temp),
        location: data.name,
        icon: icon,
      });
      setErrorMessage(''); // Clear error message
    } catch (error) {
      setWeatherData(false);
      setErrorMessage('Error in fetching weather data');
    }
  };

  useEffect(() => {
    search('');
  }, []);

  return (
    <div className="weather">
      <SearchBar onSearch={search} />
      <ErrorMessage message={errorMessage} />
      {weatherData && <WeatherCard weatherData={weatherData} />}
    </div>
  );
};

export default Weather;
