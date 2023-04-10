import React from 'react'
import './Weather.css'
import Icon from './weather-icons/Icon'

function Weather({ data }) {
  const date = new Date();
  const options = { weekday: 'long', month: 'long', day: 'numeric' };

  return (
    <div className='weather'>
      <div className='first-section'>
        {(data?.weather[0].icon === '01d' || data?.weather[0].icon === '01n') && <Icon icon='clear-sky' />}
        {(data?.weather[0].icon === '02d' || data?.weather[0].icon === '02n') && <Icon icon='few-clouds' />}
        {(data?.weather[0].icon === '03d' || data?.weather[0].icon === '03n') && <Icon icon='scattered-clouds' />}
        {(data?.weather[0].icon === '04d' || data?.weather[0].icon === '04n') && <Icon icon='broken-clouds' />}
        {(data?.weather[0].icon === '09d' || data?.weather[0].icon === '09n') && <Icon icon='shower-rain' />}
        {(data?.weather[0].icon === '10d' || data?.weather[0].icon === '10n') && <Icon icon='rain' />}
        {(data?.weather[0].icon === '11d' || data?.weather[0].icon === '11n') && <Icon icon='thunderstorm' />}
        {(data?.weather[0].icon === '13d' || data?.weather[0].icon === '13n') && <Icon icon='snow' />}
        {(data?.weather[0].icon === '50d' || data?.weather[0].icon === '50n') && <Icon icon='mist' />}

        <p className="weather-description">{data?.weather[0].description}</p> 
      </div>

      <div className="second-section">
        <div className="left-side">
          <p className='date'>{date.toLocaleDateString(undefined, options)}</p>
          <p className="location">{data?.name}, {data?.sys.country}</p>
        </div>

        <div className="right-side">
          <p className="temperature">{Math.round(data?.main.temp)}°C</p>
        </div>
      </div>

      <hr />
    </div>
  )
}

export default Weather
