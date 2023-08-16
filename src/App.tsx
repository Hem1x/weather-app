import { useState, useRef, useEffect, createContext } from 'react';
import WeatherService from './API/WeatherService';
import FirstPage from './components/FirstPage';
import WeatherActiveApp from './components/WeatherActiveApp';
import { IApi, handleCityType, setCityInputType } from '@types';

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

  const value = { cityInput: cityInput, handleCity: handleCity, setCityInput: setCityInput };

  return (
    <MyContext.Provider value={value}>
      <WeatherDataContext.Provider value={weatherData}>
        <div className="App">
          <div className="wrapper">
            {appIsActive && weatherData !== undefined ? (
              <WeatherActiveApp weatherData={weatherData} />
            ) : (
              <FirstPage />
            )}
          </div>
        </div>
      </WeatherDataContext.Provider>
    </MyContext.Provider>
  );
}

export default App;
