import React from 'react'

const WeatherBlock = ({city, weatherData}) => {
  return (
    <div>
        {city}
        <img style={{
          display: 'block'
        }} src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}/>
    </div>
  )
}

export default WeatherBlock