import React from 'react'
import Navbar from '../components/Navbar'
import Under_development from '../components/Under_development'
function Article() {
  return (
    <>
        <Navbar/>
        <div className="article">
          <Under_development/>
          <h1>Hello from Article page</h1>
        </div>
    </>
  )
}

export default Article
