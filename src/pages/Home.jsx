import React from 'react'
import Navbar from '../components/Navbar'
import Under_development from '../components/Under_development'
function Home() {
  return (
    <>
      <Navbar/>
      <div className="home">
        <Under_development/>
        <h1>Hello from Home page</h1>
      </div>
    </>
  )
}

export default Home
