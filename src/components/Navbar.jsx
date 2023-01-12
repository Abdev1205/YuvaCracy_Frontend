import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

function Navbar() {
    const [classMenuOn,setclassMenuOn]=useState('nav-lists');
    

    const menuOpen = () =>{
        setclassMenuOn('nav-lists-open')
        
    }
    const menuClose = () =>{
        setclassMenuOn('nav-lists')
        
    }



    return (
        <>
            <nav>
                <div className="nav-header">
                <img src="https://i.postimg.cc/9M9Kzd2b/yuvacracy.jpg" alt="" srcset="" />
                    <h1>YuvaCracy</h1>
                </div>
                <div onClick={menuClose}  className={classMenuOn}>
                <i onClick={menuClose} class="fa-solid fa-xmark"></i>
                    <NavLink onClick={menuClose} to='/'  className="nav-links">Home</NavLink>
                    <NavLink onClick={menuClose} to='/about' className="nav-links">About</NavLink>
                    <NavLink onClick={menuClose} to='/events' className="nav-links">Events</NavLink>
                    <NavLink onClick={menuClose} to='/articles' className="nav-links">Articles</NavLink>
                    <NavLink onClick={menuClose} to='/teams' className="nav-links">Teams</NavLink>
                    <NavLink onClick={menuClose} to='/contact' className="nav-links">Contact</NavLink>
                </div>
                <i onClick={menuOpen} class="fa-solid fa-bars"></i>
            </nav>
        </>
    )
}

export default Navbar
