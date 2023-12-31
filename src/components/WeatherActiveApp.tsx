import React from 'react';
import WeatherInput from './WeatherInput';
import WeatherDashboard from './WeatherDashboard';
import { IApi } from '@types';

interface WeatherActiveAppProps {
  weatherData: IApi;
}

const WeatherActiveApp: React.FC<WeatherActiveAppProps> = ({ weatherData }) => {
  return (
    <>
      {/* Компонент поиска города */}
      <WeatherInput width={'100%'} />

      {/* Проверка "Существует ли запрошенный город?" */}
      {Object.keys(weatherData).length === 0 ? (
        <div
          style={{
            color: 'white',
            fontSize: '2vw',
            textAlign: 'center',
            marginTop: '5vw',
          }}>
          *Maybe you made a mistake*
        </div>
      ) : (
        <WeatherDashboard />
      )}
    </>
  );
};

export default WeatherActiveApp;
