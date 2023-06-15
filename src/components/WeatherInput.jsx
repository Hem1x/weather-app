import React from 'react'

const WeatherInput = ({cityInput, setCityInput, handleCity, width}) => {
  return (
    <form 
        className="form" 
        onSubmit={(e) => handleCity(e)}
        style={{width: width}}
    >
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