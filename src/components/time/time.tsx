import React, { useState, useEffect } from 'react'

import styles from './time.module.css'

const Time = () => {
  const [hours, setHours] = useState(1),
    [minutes, setMinutes] = useState(0),
    [seconds, setSeconds] = useState(10)

  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1)
      }
      if (seconds === 0 && minutes === 0 && hours === 0) {
        clearInterval(myInterval)
      } else if (seconds === 0 && minutes === 0) {
        setHours(hours - 1)
        setMinutes(59)
      } else if (seconds === 0) {
        setMinutes(minutes - 1)
        setSeconds(59)
      }
    }, 1000)
    return () => {
      clearInterval(myInterval)
    }
  })
  return (
    <div>
      <section className={styles.timerBox}>
        <div className={styles.time}>
          {minutes === 0 && seconds === 0 ? null : (
            <h1>
              {hours < 10 ? `0${hours}` : hours}:
              {minutes < 10 ? `0${minutes}` : minutes}:
              {seconds < 10 ? `0${seconds}` : seconds}
            </h1>
          )}
        </div>
      </section>

      <button className={styles.btnBox}>
        <i className="fas fa-play" id={styles.play}></i>
      </button>
    </div>
  )
}

export default Time
