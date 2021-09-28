import React, { KeyboardEvent, useRef } from 'react'
import styles from './timeInput.module.css'
import Time from '../time/time'

const TimeInput: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null)

  const handleClick = () => {
    if (inputRef.current) {
      //현재값이 없을 수도 있기 때문에 조건문을 써줘야한다.
      console.log(inputRef.current.value)
    }
  }

  function onkeyPress(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      handleClick()
      console.log('11')
    }
  }

  return (
    <div className={styles.box}>
      <input
        ref={inputRef}
        className={styles.seconds}
        type="text"
        placeholder="Search"
        onKeyPress={onkeyPress}
      />
      <button className={styles.button} onClick={handleClick}>
        <i className="fas fa-search"></i>
      </button>
      <Time />
    </div>
  )
}

export default TimeInput
