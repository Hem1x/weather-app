import { useEffect, useState, useRef } from "react";
import WeatherService from "./API/WeatherService";
import WeatherBlock from "./components/WeatherBlock";
import FirstPage from "./components/FirstPage";

function App() {
  const [appIsActive, setAppIsActive] = useState(false)
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
      try {
        const data = metric ? await WeatherService.getDataGeneral(city) : await WeatherService.getDataUS(city);
        setWeatherData(data);
      } catch (e) {
        console.log('error')
      }

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
      <div className="container">
        {appIsActive ? <div>active</div> : <FirstPage setAppIsActive={setAppIsActive}/>}
      </div>

      {/* <form onSubmit={(e) => handleCity(e)}>
        <input type="text" value={cityInput} onChange={(e) => setCityInput(e.target.value)}/>
      </form>

      {Object.keys(weatherData).length === 0 ? <div>Not found</div> : <WeatherBlock city={city} weatherData={weatherData} />} */}
    </div>
  );
}

export default App;
