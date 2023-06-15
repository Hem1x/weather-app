import React from 'react'
import { getCurrentDate } from '../utils/getCurrentDate'
import { getValidTemperature } from '../utils/getValidTemperature'
import { getWindDirectionName } from '../utils/getWindDirectionName'
import { getValidTime } from '../utils/getValidTime'

const WeatherDashboard = ({city, weatherData}) => {
  const data = {
    dateString: getCurrentDate(),
    city: weatherData.name.toUpperCase(),
    temp: {
      tempCurrent: getValidTemperature(weatherData.main.temp.toFixed(0)),
      feelsLike: getValidTemperature(weatherData.main.feels_like.toFixed(0)),
      tempMax: getValidTemperature(weatherData.main.temp_max.toFixed(0)),
      tempMin: getValidTemperature(weatherData.main.temp_min.toFixed(0)),
    },
    meteoParams: {
      humidity: weatherData.main.humidity,
      pressure: weatherData.main.pressure,
      windSpeed: weatherData.wind.speed,
      windDirection: getWindDirectionName(weatherData.wind.deg),
    },
    graficInfo: {
      description: (weatherData.weather[0].description).toUpperCase(),
      icon: `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`
    },
    sunState: {
      sunrise: getValidTime(weatherData.sys.sunrise),
      sunset: getValidTime(weatherData.sys.sunset)
    },
    rain:  weatherData.rain ? 'rain...' : '',
  }


  return (
    <div>
        <div className="temp__block">
          <div className="info">
            <h1>{data.city}</h1>
            <h1>{data.dateString}</h1>
          </div>

          <div className="tempInfo">
            <h3>{data.temp.tempMax}/{data.temp.tempMin}</h3>
            <h1>{data.temp.tempCurrent}</h1>
            <p>Feels like {data.temp.feelsLike}</p>
          </div>
        </div>

        <div className="meteoParams__block">
          <h1>{data.meteoParams.humidity}%</h1>
          <h1>{data.meteoParams.windSpeed} MPS {data.meteoParams.windDirection}</h1>
          <h1>{data.meteoParams.pressure} mm Hg</h1>
        </div>

        <div className="extraInfo__block">
          <div className="icon__block">
            <h1>{data.graficInfo.description}</h1>
            <img src={`${data.graficInfo.icon}`} alt="" />
            <h1>{data.rain}</h1>
          </div>

          <div className="sunState__block">
            <h1>Sunrise: {data.sunState.sunrise}</h1>
            <h1>Sunset: {data.sunState.sunset}</h1>
          </div>
        </div>
    </div>
  )
}

export default WeatherDashboard