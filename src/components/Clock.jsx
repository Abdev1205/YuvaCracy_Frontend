import React, {useState, useEffect} from 'react'

const Clock = () => {
    const [days, setDays] = useState(0)
    const [hours, setHours] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)
    const [isLoading, setIsLoading] = useState(true)
  
    useEffect(() => {
      const countdown = () => {
        const endDate = new Date("January 26, 2023 00:00:00").getTime()
        const today = new Date().getTime()
  
        const timeDiff = endDate - today
  
        const seconds = 1000
        const minutes = seconds * 60
        const hours = minutes * 60
        const days = hours * 24
  
        let timeDays = Math.floor(timeDiff / days)
        let timeHours = Math.floor((timeDiff % days) / hours)
        let timeMinutes = Math.floor((timeDiff % hours) / minutes)
        let timeSeconds = Math.floor((timeDiff % minutes) / seconds)
  
        timeHours = timeHours < 10 ? "0" + timeHours : timeHours
        timeMinutes = timeMinutes < 10 ? "0" + timeMinutes : timeMinutes
        timeSeconds = timeSeconds < 10 ? "0" + timeSeconds : timeSeconds
  
        setDays(timeDays)
        setHours(timeHours)
        setMinutes(timeMinutes)
        setSeconds(timeSeconds)
        setIsLoading(false)
      }
  
      setInterval(countdown, 1000)
    }, [])
  
    return (
      <>
            <div className="timer">
                 <span className="timer-content">
                   <h1>{days}</h1>
                   <p>days</p>
                   <h2>:</h2>
                 </span>
                 <span className="timer-content">
                   <h1>{hours}</h1>
                   <p>hours</p>
                   <h2>:</h2>
                 </span>
                 <span className="timer-content">
                   <h1>{minutes}</h1>
                   <p>minutes</p>
                   <h2>:</h2>
                 </span>
                 <span className="timer-content">
                   <h1>{seconds}</h1>
                   <p>seconds</p>
                 </span>
               </div>
      </>
    )
  }
export default Clock