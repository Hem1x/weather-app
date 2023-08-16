import { useState, useRef, useEffect } from 'react';
import WeatherService from './API/WeatherService';
import FirstPage from './components/FirstPage';
import WeatherActiveApp from './components/WeatherActiveApp';

function App() {
  const [appIsActive, setAppIsActive] = useState(false);

  const [cityInput, setCityInput] = useState('');
  const [city, setCity] = useState('');
  const [metric, setMetric] = useState(true);

  const [weatherData, setWeatherData] = useState({});

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
        const data = metric
          ? await WeatherService.getDataGeneral(city)
          : await WeatherService.getDataUS(city);
        setWeatherData(data);
      } catch (e) {
        console.log('error');
        setWeatherData({});
      }
    }

    fetchData();
  }, [city, metric]);

  const handleCity = (e) => {
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
        {appIsActive ? (
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
