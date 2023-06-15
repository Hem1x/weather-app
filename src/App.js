import {useState, useRef, useEffect} from 'react'
import WeatherInput from './components/WeatherInput'
import WeatherService from './API/WeatherService'
import WeatherBlock from './components/WeatherBlock'
import FirstPage from './components/FirstPage'

function App() {
  const [appIsActive, setAppIsActive] = useState(false)

  const [cityInput, setCityInput] = useState('')
  const [city, setCity] = useState('');
  const [metric, setMetric] = useState(true);

  const [weatherData, setWeatherData] = useState({});

  const isFirstRender = useRef(true);
  const isFirstSubmit = useRef(true)

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
    if (isFirstSubmit) {
      setAppIsActive(true)
      isFirstSubmit.current = false;
    }

    e.preventDefault()
    setCity(cityInput)
    setCityInput('')
  }

  return (
    <div className="App">
      <div className="container">

        {appIsActive ? (
          <WeatherInput 
            cityInput={cityInput} 
            setCityInput={setCityInput} 
            handleCity={handleCity}
          />
        ) : (
          <FirstPage 
            cityInput={cityInput} 
            setCityInput={setCityInput} 
            handleCity={handleCity}
          />
        )}

        {Object.keys(weatherData).length === 0 ? <div>Not found</div> : <WeatherBlock city={city} weatherData={weatherData} />}
      </div>
    </div>
  );
}

export default App;
