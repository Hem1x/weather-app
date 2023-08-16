import React, { useContext } from 'react';
import { getCurrentDate } from '../utils/getCurrentDate';
import { getValidTemperature } from '../utils/getValidTemperature';
import { getWindDirectionName } from '../utils/getWindDirectionName';
import { getValidTime } from '../utils/getValidTime';

import { WeatherDataContext } from 'App';
import { ICustomApiData } from '@types';
import DashbardData from './DashbardData';
import NotFoundBlock from './NotFoundBlock';

const WeatherDashboard: React.FC = () => {
  const weatherData = useContext(WeatherDataContext);
  let data: ICustomApiData | undefined;

  if (weatherData) {
    data = {
      dateString: getCurrentDate(),
      city: weatherData.name.toUpperCase(),
      temp: {
        tempCurrent: getValidTemperature(Number(weatherData.main.temp.toFixed(0))),
        feelsLike: getValidTemperature(Number(weatherData.main.feels_like.toFixed(0))),
        tempMax: getValidTemperature(Number(weatherData.main.temp_max.toFixed(0))),
        tempMin: getValidTemperature(Number(weatherData.main.temp_min.toFixed(0))),
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
  }

  return <>{data ? <DashbardData data={data!} /> : <NotFoundBlock />}</>;
};

export default WeatherDashboard;
