import React from 'react';
import WeatherInput from './WeatherInput';
import { handleCityType, setCityInputType } from '@types';

interface FirstPageProps {
  cityInput: string;
  setCityInput: setCityInputType;
  handleCity: handleCityType;
}

const FirstPage: React.FC<FirstPageProps> = ({ cityInput, setCityInput, handleCity }) => {
  return (
    <div className="firstPage__block">
      <h1 className="firstPage__title">WHEATHER APP</h1>
      <WeatherInput width={500} />
    </div>
  );
};

export default FirstPage;
