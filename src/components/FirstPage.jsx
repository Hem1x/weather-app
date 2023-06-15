import React from 'react'
import WeatherInput from './WeatherInput'

const FirstPage = ({cityInput, setCityInput, handleCity}) => {
  return (
    <div className="firstPage__block">
        <h1 className="firstPage__title">WHEATHER APP</h1>
        <WeatherInput 
        cityInput={cityInput} 
        setCityInput={setCityInput} 
        handleCity={handleCity}
        />
    </div>
  )
}

export default FirstPage