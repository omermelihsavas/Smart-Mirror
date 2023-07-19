import './App.css';
import { useEffect, useState } from 'react';
import Weather from './components/weather-comp/Weather';
import Clock from './components/clock-comp/Clock';
import News from './components/news-comp/News';
import Gallery from './components/gallery-comp/Gallery';
import Calendar from './components/calender-comp/Calender';

function App() {
  const latitude = '41.0351';
  const longitude = '28.9833';
  const [weatherData, setWeatherData] = useState();
  const [forecastData, setForecastData] = useState();

  const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
  const BASE_URL = process.env.REACT_APP_WEATHER_BASE_URL;

  const GetWeatherData = async (lat, lon) => {
    try {
      const response = await fetch(`${BASE_URL}weather?lat=${lat}&lon=${lon}&lang=tr&appid=${API_KEY}&units=metric`);
      const data = await response.json();
      setWeatherData(data);
    } catch {
      console.log('Veriler alınırken hata oluştu.');
    }
  }

  useEffect(() => {
    latitude && longitude && GetWeatherData(latitude, longitude);
  }, [latitude, longitude]);

  const GetForecastData = async (lat, lon) => {
    try {
      const response = await fetch(`${BASE_URL}forecast?lat=${lat}&lon=${lon}&lang=tr&appid=${API_KEY}&units=metric`);
      const data = await response.json();
      setForecastData(data);
    } catch {
      console.log('Veriler alınırken hata oluştu.');
    }
  }

  useEffect(() => {
    latitude && longitude && GetForecastData(latitude, longitude);
  }, [latitude, longitude]);

  return (
    <div className="App">
      <div className="left-side">
        <Weather data={weatherData} forecastData={forecastData} />
        <News />
      </div>

      <div className="mid-side">
          <Gallery />
      </div>

      <div className="right-side">
        <Clock />
        <Calendar />
      </div>
    </div>
  );
}

export default App;