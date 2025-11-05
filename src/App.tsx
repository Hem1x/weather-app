import { IApi, handleCityType, setCityInputType } from '@types';
import { createContext, useEffect, useRef, useState } from 'react';
import WeatherService from './API/WeatherService';

export const WeatherDataContext = createContext<IApi | undefined>(undefined);

export interface IMyContext {
  cityInput: string;
  handleCity: handleCityType;
  setCityInput: setCityInputType;
}

export const MyContext = createContext<IMyContext | null>(null);

function App() {
  const [appIsActive, setAppIsActive] = useState(false);

  const [cityInput, setCityInput] = useState('');
  const [city, setCity] = useState('');

  const [weatherData, setWeatherData] = useState<IApi>();

  const isFirstRender = useRef(true);
  const isFirstSubmit = useRef(true);

  const handleCity = (e: React.FormEvent<HTMLFormElement>) => {
    if (isFirstSubmit) {
      setAppIsActive(true);
      isFirstSubmit.current = false;
    }

    e.preventDefault();
    setCity(cityInput.split('-').join(' '));
    setCityInput('');
  };

  const fetchData = async () => {
    try {
      const data = await WeatherService.getDataGeneral(city);
      setWeatherData(data);
    } catch (e) {
      console.log((e as Error).message);
    }
  };

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    fetchData();
  }, [city]);

  const value = {
    cityInput: cityInput,
    handleCity: handleCity,
    setCityInput: setCityInput,
  };

  return (
    <MyContext.Provider value={value}>
      <WeatherDataContext.Provider value={weatherData}>
        <div className="App">
          <img
            src="https://img.dmclk.ru/s1200x800q80/vitrina/owner/c9/39/c939d90028f84229ab8181842595105e.jpg"
            alt=""
          />
        </div>
      </WeatherDataContext.Provider>
    </MyContext.Provider>
  );
}

export default App;
