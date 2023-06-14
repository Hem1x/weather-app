import { useEffect, useState, useRef } from "react";
import WeatherService from "./API/WeatherService";
import WeatherBlock from "./components/WeatherBlock";

function App() {
  const [cityInput, setCityInput] = useState('')
  const [city, setCity] = useState('');
  const [metric, setMetric] = useState(true);
  const [weatherData, setWeatherData] = useState({});
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    async function fetchData() {
      const data = metric ? await WeatherService.getDataGeneral(city) : await WeatherService.getDataUS(city);
      setWeatherData(data);
    }

    fetchData()
  }, [city, metric]);

  const handleCity = (e) => {
    e.preventDefault()
    setCity(cityInput)
  }

  console.log(city)
  console.log(weatherData)

  return (
    <div className="App">      
      <form onSubmit={(e) => handleCity(e)}>
        <input type="text" value={cityInput} onChange={(e) => setCityInput(e.target.value)}/>
      </form>

      {Object.keys(weatherData).length !== 0 && (<WeatherBlock city={city} weatherData={weatherData} />)}
    </div>
  );
}

export default App;
