import { IMyContext, MyContext } from 'App';
import React, { useContext } from 'react';
import NotFoundBlock from './NotFoundBlock';

interface WeatherInputProps {
  width: string | number;
}

const WeatherInput: React.FC<WeatherInputProps> = ({ width }) => {
  const myContext = useContext<IMyContext | null>(MyContext);

  if (!myContext) {
    return <NotFoundBlock />;
  }

  const { cityInput, handleCity, setCityInput } = myContext!;

  return (
    <form className="form" onSubmit={(e) => handleCity(e)} style={{ width: width }}>
      <label className="form__label">
        <input
          type="text"
          className="form__input"
          placeholder="Enter the city"
          value={cityInput}
          onChange={(e) => setCityInput(e.target.value)}
        />
      </label>
    </form>
  );
};

export default WeatherInput;
