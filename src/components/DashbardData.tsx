import { ICustomApiData } from '@types';
import React from 'react';
import humidity from '../assets/humidity.svg';
import pressure from '../assets/pressure.svg';
import wind from '../assets/wind.svg';
import sunset from '../assets/sunset.svg';
import sunrise from '../assets/sunrise.svg';

interface DashbardDataProps {
  data: ICustomApiData;
}

const DashbardData: React.FC<DashbardDataProps> = ({ data }) => {
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

export default DashbardData;
