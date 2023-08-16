import { useState, useRef, useEffect } from 'react';
import WeatherService from './API/WeatherService';
import FirstPage from './components/FirstPage';
import WeatherActiveApp from './components/WeatherActiveApp';
import { IApi } from '@types';

function App() {
  const [appIsActive, setAppIsActive] = useState(false);

  const [cityInput, setCityInput] = useState('');
  const [city, setCity] = useState('');

  const [weatherData, setWeatherData] = useState<IApi>();

  const isFirstRender = useRef(true);
  const isFirstSubmit = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    async function fetchData() {
      try {
        console.log('request');
        const data = await WeatherService.getDataGeneral(city);
        setWeatherData(data);
      } catch (e) {
        console.log('error');
      }
    }

    fetchData();
  }, [city]);

  const handleCity = (e: React.FormEvent<HTMLFormElement>) => {
    if (isFirstSubmit) {
      setAppIsActive(true);
      isFirstSubmit.current = false;
    }

    e.preventDefault();
    setCity(cityInput.split('-').join(' '));
    setCityInput('');
  };

  return (
    <div className="App">
      <div className="wrapper">
        {appIsActive && weatherData !== undefined ? (
          <WeatherActiveApp
            weatherData={weatherData}
            city={city}
            cityInput={cityInput}
            setCityInput={setCityInput}
            handleCity={handleCity}
          />
        ) : (
          <FirstPage cityInput={cityInput} setCityInput={setCityInput} handleCity={handleCity} />
        )}
      </div>
    </div>
  );
}

export default App;
