import React from 'react'
import './Weather.css'
import Icon from './weather-icons/Icon'

function Weather({ data, forecastData }) {
  const date = new Date();
  const options = { weekday: 'long', month: 'long', day: 'numeric' };

  return (
    <div className='weather'>
      <div className='first-section'>
        {(data?.weather[0].icon === '01d' || data?.weather[0].icon === '01n') && <Icon icon='clear-sky' size='64' color='#fff' />}
        {(data?.weather[0].icon === '02d' || data?.weather[0].icon === '02n') && <Icon icon='few-clouds' size='64' color='#fff' />}
        {(data?.weather[0].icon === '03d' || data?.weather[0].icon === '03n') && <Icon icon='scattered-clouds' size='64' color='#fff' />}
        {(data?.weather[0].icon === '04d' || data?.weather[0].icon === '04n') && <Icon icon='broken-clouds' size='64' color='#fff' />}
        {(data?.weather[0].icon === '09d' || data?.weather[0].icon === '09n') && <Icon icon='shower-rain' size='64' color='#fff' />}
        {(data?.weather[0].icon === '10d' || data?.weather[0].icon === '10n') && <Icon icon='rain' size='64' color='#fff' />}
        {(data?.weather[0].icon === '11d' || data?.weather[0].icon === '11n') && <Icon icon='thunderstorm' size='64' color='#fff' />}
        {(data?.weather[0].icon === '13d' || data?.weather[0].icon === '13n') && <Icon icon='snow' size='64' color='#fff' />}
        {(data?.weather[0].icon === '50d' || data?.weather[0].icon === '50n') && <Icon icon='mist' size='64' color='#fff' />}

        <p className="weather-description">{data?.weather[0].description}</p>
      </div>

      <div className="second-section">
        <div className="left-side">
          <p className='date'>{date.toLocaleDateString(undefined, options)}</p>
          <p className="location">
            <Icon className='location-icon' size='10' icon='location' color='#c5c5c5' />
            {data?.name}, {data?.sys.country}
          </p>
        </div>

        <div className="right-side">
          <p className="temperature">{Math.round(data?.main.temp)}°C</p>
        </div>
      </div>

      <hr className='horizontal-rule' />

      <div className="third-section">
        <div className="forecast">
          <p className="forecast-date">Bugün</p>

          {(forecastData?.list[4].weather[0].icon === '01d') && <Icon icon='clear-sky' size='32' color='#fff' />}
          {(forecastData?.list[4].weather[0].icon === '02d') && <Icon icon='few-clouds' size='32' color='#fff' />}
          {(forecastData?.list[4].weather[0].icon === '03d') && <Icon icon='scattered-clouds' size='32' color='#fff' />}
          {(forecastData?.list[4].weather[0].icon === '04d') && <Icon icon='broken-clouds' size='32' color='#fff' />}
          {(forecastData?.list[4].weather[0].icon === '09d') && <Icon icon='shower-rain' size='32' color='#fff' />}
          {(forecastData?.list[4].weather[0].icon === '10d') && <Icon icon='rain' size='32' color='#fff' />}
          {(forecastData?.list[4].weather[0].icon === '11d') && <Icon icon='thunderstorm' size='32' color='#fff' />}
          {(forecastData?.list[4].weather[0].icon === '13d') && <Icon icon='snow' size='32' color='#fff' />}
          {(forecastData?.list[4].weather[0].icon === '50d') && <Icon icon='mist' size='32' color='#fff' />}

          <p className="forecast-temp">
            {`${Math.round(forecastData?.list[4].main.temp)}°C/${Math.round(forecastData?.list[0].main.temp)}°C`}
          </p>
        </div>

        <div className="forecast">
          <p className="forecast-date">Yarın</p>

          {(forecastData?.list[12].weather[0].icon === '01d') && <Icon icon='clear-sky' size='32' color='#fff' />}
          {(forecastData?.list[12].weather[0].icon === '02d') && <Icon icon='few-clouds' size='32' color='#fff' />}
          {(forecastData?.list[12].weather[0].icon === '03d') && <Icon icon='scattered-clouds' size='32' color='#fff' />}
          {(forecastData?.list[12].weather[0].icon === '04d') && <Icon icon='broken-clouds' size='32' color='#fff' />}
          {(forecastData?.list[12].weather[0].icon === '09d') && <Icon icon='shower-rain' size='32' color='#fff' />}
          {(forecastData?.list[12].weather[0].icon === '10d') && <Icon icon='rain' size='32' color='#fff' />}
          {(forecastData?.list[12].weather[0].icon === '11d') && <Icon icon='thunderstorm' size='32' color='#fff' />}
          {(forecastData?.list[12].weather[0].icon === '13d') && <Icon icon='snow' size='32' color='#fff' />}
          {(forecastData?.list[12].weather[0].icon === '50d') && <Icon icon='mist' size='32' color='#fff' />}

          <p className="forecast-temp">
            {`${Math.round(forecastData?.list[12].main.temp)}°C/${Math.round(forecastData?.list[8].main.temp)}°C`}
          </p>
        </div>

        <div className="forecast">
          <p className="forecast-date">{`${date.getDate() + 2}/${date.getMonth() + 1}`}</p>

          {(forecastData?.list[20].weather[0].icon === '01d') && <Icon icon='clear-sky' size='32' color='#fff' />}
          {(forecastData?.list[20].weather[0].icon === '02d') && <Icon icon='few-clouds' size='32' color='#fff' />}
          {(forecastData?.list[20].weather[0].icon === '03d') && <Icon icon='scattered-clouds' size='32' color='#fff' />}
          {(forecastData?.list[20].weather[0].icon === '04d') && <Icon icon='broken-clouds' size='32' color='#fff' />}
          {(forecastData?.list[20].weather[0].icon === '09d') && <Icon icon='shower-rain' size='32' color='#fff' />}
          {(forecastData?.list[20].weather[0].icon === '10d') && <Icon icon='rain' size='32' color='#fff' />}
          {(forecastData?.list[20].weather[0].icon === '11d') && <Icon icon='thunderstorm' size='32' color='#fff' />}
          {(forecastData?.list[20].weather[0].icon === '13d') && <Icon icon='snow' size='32' color='#fff' />}
          {(forecastData?.list[20].weather[0].icon === '50d') && <Icon icon='mist' size='32' color='#fff' />}

          <p className="forecast-temp">
            {`${Math.round(forecastData?.list[20].main.temp)}°C/${Math.round(forecastData?.list[16].main.temp)}°C`}
          </p>
        </div>

        <div className="forecast">
          <p className="forecast-date">{`${date.getDate() + 3}/${date.getMonth() + 1}`}</p>

          {(forecastData?.list[28].weather[0].icon === '01d') && <Icon icon='clear-sky' size='32' color='#fff' />}
          {(forecastData?.list[28].weather[0].icon === '02d') && <Icon icon='few-clouds' size='32' color='#fff' />}
          {(forecastData?.list[28].weather[0].icon === '03d') && <Icon icon='scattered-clouds' size='32' color='#fff' />}
          {(forecastData?.list[28].weather[0].icon === '04d') && <Icon icon='broken-clouds' size='32' color='#fff' />}
          {(forecastData?.list[28].weather[0].icon === '09d') && <Icon icon='shower-rain' size='32' color='#fff' />}
          {(forecastData?.list[28].weather[0].icon === '10d') && <Icon icon='rain' size='32' color='#fff' />}
          {(forecastData?.list[28].weather[0].icon === '11d') && <Icon icon='thunderstorm' size='32' color='#fff' />}
          {(forecastData?.list[28].weather[0].icon === '13d') && <Icon icon='snow' size='32' color='#fff' />}
          {(forecastData?.list[28].weather[0].icon === '50d') && <Icon icon='mist' size='32' color='#fff' />}

          <p className="forecast-temp">
            {`${Math.round(forecastData?.list[28].main.temp)}°C/${Math.round(forecastData?.list[24].main.temp)}°C`}
          </p>
        </div>

        <div className="forecast">
          <p className="forecast-date">{`${date.getDate() + 4}/${date.getMonth() + 1}`}</p>

          {(forecastData?.list[36].weather[0].icon === '01d') && <Icon icon='clear-sky' size='32' color='#fff' />}
          {(forecastData?.list[36].weather[0].icon === '02d') && <Icon icon='few-clouds' size='32' color='#fff' />}
          {(forecastData?.list[36].weather[0].icon === '03d') && <Icon icon='scattered-clouds' size='32' color='#fff' />}
          {(forecastData?.list[36].weather[0].icon === '04d') && <Icon icon='broken-clouds' size='32' color='#fff' />}
          {(forecastData?.list[36].weather[0].icon === '09d') && <Icon icon='shower-rain' size='32' color='#fff' />}
          {(forecastData?.list[36].weather[0].icon === '10d') && <Icon icon='rain' size='32' color='#fff' />}
          {(forecastData?.list[36].weather[0].icon === '11d') && <Icon icon='thunderstorm' size='32' color='#fff' />}
          {(forecastData?.list[36].weather[0].icon === '13d') && <Icon icon='snow' size='32' color='#fff' />}
          {(forecastData?.list[36].weather[0].icon === '50d') && <Icon icon='mist' size='32' color='#fff' />}

          <p className="forecast-temp">
            {`${Math.round(forecastData?.list[36].main.temp)}°C/${Math.round(forecastData?.list[32].main.temp)}°C`}
          </p>
        </div>
      </div>

      <hr className='horizontal-rule' />
    </div>
  )
}

export default Weather
