import React from 'react';
import WeatherInput from './WeatherInput';

const FirstPage: React.FC = () => {
  return (
    <div className="firstPage__block">
      <h1 className="firstPage__title">WHEATHER APP</h1>
      <WeatherInput width={500} />
    </div>
  );
};

export default FirstPage;
