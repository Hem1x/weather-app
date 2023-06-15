import React from 'react'
import WeatherInput from './WeatherInput'
import WeatherBlock from './WeatherBlock'

const WeatherActiveApp = ({weatherData, city, cityInput, setCityInput, handleCity}) => {
  return (
    <>
      <WeatherInput 
        cityInput={cityInput} 
        setCityInput={setCityInput} 
        handleCity={handleCity}
        width={'100%'}
      />

      {Object.keys(weatherData).length === 0 ? <div>Not found</div> : <WeatherBlock city={city} weatherData={weatherData} />}
    </>
  )
}

export default WeatherActiveApp