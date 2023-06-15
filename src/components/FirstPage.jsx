import React from 'react'

const FirstPage = ({setAppIsActive}) => {
  return (
    <div className="firstPage__block">
        <h1 className="firstPage__title">WHEATHER APP</h1>

        <form className="firstPage__form" onClick={() => setAppIsActive(true)}>
            <label className="form__label">
                <input type="text" className="form__input" placeholder="Enter the city"/>
            </label>
        </form>
    </div>
  )
}

export default FirstPage