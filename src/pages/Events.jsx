import React from 'react'
import Navbar from '../components/Navbar'
import Under_development from '../components/Under_development'
function Events() {
  return (
    <>
        <Navbar/>
        <div className="event">
          <Under_development/>
          <h1>Hello from Events Page</h1>
        </div>
    </>
  )
}

export default Events
