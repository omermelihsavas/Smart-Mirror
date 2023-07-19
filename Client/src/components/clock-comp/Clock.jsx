import React from 'react'
import { useState, useEffect } from 'react'
import './Clock.css'

function Clock() {
  const date = new Date();
  
  const [time, setTime] = useState();
    setInterval(() => {
        const date = new Date();
        setTime(date.toLocaleTimeString());
    }, 1000);

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      const hour = date.getHours();
      const minute = date.getMinutes();
      const second = date.getSeconds();
      
      const secToDeg = second * 6;
      const minToDeg = minute * 6; 
      const hrToDeg = hour * 30 + minute / 2;
      
      document.querySelector('#clockSecond').style.transform = `rotate(${secToDeg}deg)`;
      document.querySelector('#clockMinute').style.transform = `rotate(${minToDeg}deg)`;
      document.querySelector('#clockHour').style.transform = `rotate(${hrToDeg}deg)`;
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='clock' >
      <label className='number-one'><span className='one'>1</span></label>
      <label className='number-two'><span className='two'>2</span></label>
      <label className='number-three'><span className='three'>3</span></label>
      <label className='number-four'><span className='four'>4</span></label>
      <label className='number-five'><span className='five'>5</span></label>
      <label className='number-six'><span className='six'>6</span></label>
      <label className='number-seven'><span className='seven'>7</span></label>
      <label className='number-eight'><span className='eight'>8</span></label>
      <label className='number-nine'><span className='nine'>9</span></label>
      <label className='number-ten'><span className='ten'>10</span></label>
      <label className='number-eleven'><span className='eleven'>11</span></label>
      <label className='number-twelve'><span className='twelve'>12</span></label>

      <div className="indicator">
        <span id='clockHour' className="hand hour"></span>
        <span id='clockMinute' className="hand minute"></span>
        <span id='clockSecond' className="hand second"></span>
      </div>

      <div className="date">
        {date.getDate()}
      </div>

      <div className="digital-clock">
        {time}
      </div>
    </div>
  )
}

export default Clock
