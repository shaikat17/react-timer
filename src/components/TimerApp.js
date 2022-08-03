import React from 'react'
import Timer from './Timer';

import './TimerApp.css'

const TimerApp = () => {

  const { days, hours, minutes, seconds } = Timer("2022-12-31T23:59:59");


  return (
    <div className='app'>
    <h1 className="header">Happy New Year in</h1>
    <div className="container">
    <div className="timer" role="timer">
      <div className="col-4">
        <div className="box">
          <p id="day">{days < 10 ? "0" + days : days}</p>
          <span className="text">Days</span>
        </div>
      </div>
      <div className="col-4">
        <div className="box">
          <p id="hour">{hours < 10 ? "0" + hours : hours}</p>
          <span className="text">Hours</span>
        </div>
      </div>
      <div className="col-4">
        <div className="box">
          <p id="minute">{minutes < 10 ? "0" + minutes : minutes}</p>
          <span className="text">Minutes</span>
        </div>
      </div>
      <div className="col-4">
        <div className="box">
          <p id="second">{seconds < 10 ? "0" + seconds : seconds}</p>
          <span className="text">Seconds</span>
        </div>
      </div>
    </div>
    </div>
    </div>
  )
}

export default TimerApp