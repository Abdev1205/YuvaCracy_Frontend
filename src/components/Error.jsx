import React from 'react'
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar'
function Error() {
  return (
    <>
    <Navbar/>
    <div className="error">
        <img src="https://i.postimg.cc/8cPG3Vq0/ezgif-com-gif-maker-9.gif" alt="" srcset="" />
        <NavLink  exact to="/" >

            <button>Home</button>
            </NavLink>

    </div>
    </>
  )
}

export default Error
