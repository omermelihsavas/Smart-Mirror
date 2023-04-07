import { usePosition } from 'use-position';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

import Weather from './components/weather-comp/Weather';

function App() {
  const { latitude, longitude } = usePosition();
  const [weatherData, setWeatherData] = useState();

  const GetWeatherData = async (lat, lon) => {
    const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
    const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather?'
    try {
      const { data } = await axios.get(`${BASE_URL}lat=${lat}&lon=${lon}&lang=tr&appid=${API_KEY}&units=metric`);
      setWeatherData(data);
    } catch {
      alert("Veriler çekilemedi");
    }
  }

  useEffect(() => {
    latitude && longitude && GetWeatherData(latitude, longitude);
  }, [latitude, longitude])

  return (
    <div className="App">
      <div className="left-side">
        <Weather data={weatherData}/>
      </div>
    </div>
  );
}

export default App;
