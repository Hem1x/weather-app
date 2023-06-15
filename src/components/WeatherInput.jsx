import React from 'react'

const WeatherInput = ({cityInput, setCityInput, handleCity}) => {
  return (
    <form className="firstPage__form form" onSubmit={(e) => handleCity(e)}>
        <label className="form__label">
            <input 
                type="text" 
                className="form__input" 
                placeholder="Enter the city" 
                value={cityInput} 
                onChange={(e) => setCityInput(e.target.value)}
            />
        </label>
    </form>
  )
}

export default WeatherInput