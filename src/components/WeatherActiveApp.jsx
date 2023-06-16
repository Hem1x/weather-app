import React from 'react'
import WeatherInput from './WeatherInput'
import WeatherDashboard from './WeatherDashboard'

const WeatherActiveApp = ({weatherData, city, cityInput, setCityInput, handleCity}) => {
  return (
    <>
      <WeatherInput 
        cityInput={cityInput} 
        setCityInput={setCityInput} 
        handleCity={handleCity}
        width={'100%'}
      />

      {
        Object.keys(weatherData).length === 0 ? 
          <div style={{
            color: "white",
            fontSize: '2vw',
            textAlign: 'center',
            marginTop: '5vw'
          }}>
              *Maybe you made a mistake*
          </div> 
          : 
          <WeatherDashboard weatherData={weatherData} />
      }
    </>
  )
}

export default WeatherActiveApp