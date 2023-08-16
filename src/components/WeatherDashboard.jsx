import React from 'react';
import { getCurrentDate } from '../utils/getCurrentDate';
import { getValidTemperature } from '../utils/getValidTemperature';
import { getWindDirectionName } from '../utils/getWindDirectionName';
import { getValidTime } from '../utils/getValidTime';
import humidity from '../assets/humidity.svg';
import pressure from '../assets/pressure.svg';
import wind from '../assets/wind.svg';
import sunset from '../assets/sunset.svg';
import sunrise from '../assets/sunrise.svg';

const WeatherDashboard = ({ city, weatherData }) => {
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
      description: weatherData.weather[0].description,
      icon: `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`,
    },
    sunState: {
      sunrise: getValidTime(weatherData.sys.sunrise),
      sunset: getValidTime(weatherData.sys.sunset),
    },
    rain: weatherData.rain ? 'rain...' : '',
  };

  return (
    <div className="dasboard-block">
      {/* Блок с температурой */}
      <div className="dasboard-block__temp">
        {/* Локация, Время запроса */}
        <div className="localInfo">
          <h1>{data.city}</h1>
          <p>{data.dateString}</p>
        </div>

        {/* Температура */}
        <div className="tempInfo">
          <h2>
            <span className="min">{data.temp.tempMin}</span> /{' '}
            <span className="max">{data.temp.tempMax}</span>
          </h2>
          <h1>{data.temp.tempCurrent}</h1>
          <p>Feels like {data.temp.feelsLike}</p>
        </div>
      </div>

      {/* Блок метеопараметров */}
      <div className="dasboard-block__meteoParams">
        {/* Влажность */}
        <div className="meteoParams__item">
          <img src={humidity} alt="" />
          <h1>{data.meteoParams.humidity}%</h1>
        </div>

        {/* Ветер */}
        <div className="meteoParams__item">
          <img src={wind} alt="" />
          <h1>
            {data.meteoParams.windSpeed} MPS {data.meteoParams.windDirection}
          </h1>
        </div>

        {/* Давление */}
        <div className="meteoParams__item">
          <img src={pressure} alt="" />
          <h1>{data.meteoParams.pressure} mm Hg</h1>
        </div>
      </div>

      {/* Графическая информация */}
      <div className="dasboard-block__icon">
        <h1>{data.graficInfo.description}</h1>
        <img src={`${data.graficInfo.icon}`} alt="" />
        <h1>{data.rain}</h1>
      </div>

      {/* Закат и Рассвет */}
      <div className="dasboard-block__sunState">
        <div className="sunState__item">
          <h1>Sunrise</h1>
          <img src={sunrise} alt="" />
          <h1>{data.sunState.sunrise}</h1>
        </div>

        <div className="sunState__item">
          <h1>Sunset</h1>
          <img src={sunset} alt="" />
          <h1>{data.sunState.sunset}</h1>
        </div>
      </div>
    </div>
  );
};

export default WeatherDashboard;
