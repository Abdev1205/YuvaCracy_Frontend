import React from 'react'
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom'

function navBar() {
    return (
        <div>
             <div className="container-fluid fixed-top px-0 wow fadeIn" data-wow-delay="0.1s">
            <div className="top-bar row gx-0 align-items-center d-none d-lg-flex">
                <div className="col-lg-6 px-5 text-start">
                    {/* <small><i className="fa fa-map-marker-alt text-dark me-2"></i>Patna, Bihar, India</small>
                    <small className="ms-4"><i className="fa fa-clock text-dark me-2"></i>10:00 am - 6:00 pm</small> */}
                </div>
                <div className="col-lg-6 px-5 text-end">
                    {/* <small><i className="fa fa-envelope text-dark me-2"></i>yuvacracymail@gmail.com</small>
                    <small className="ms-4"><i className="fa fa-phone-alt text-dark me-2"></i>+91 89874 76709</small> */}
                </div>
            </div>

       <nav className="navbar navbar-expand-lg navbar-light py-lg-0 px-lg-5 wow fadeIn" data-wow-delay="0.1s">
            <a to="/" className="navbar-brand ms-4 ms-lg-0">
                <h1 className="display-5 text-yuvacracy m-0"><img src="img/yuvacracy.jpg" width="50" height="50" />&nbsp;YUVACRACY</h1>
            </a>
            <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse"
                data-bs-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav ms-auto p-4 p-lg-0">
                    <NavLink to="/" className="nav-item nav-link active">Home</NavLink>
                    <NavLink to="/about" className="nav-item nav-link">About</NavLink>
                    <NavLink to="/motivation" className="nav-item nav-link">Motivation</NavLink>
                    <NavLink to="/teams" className="nav-item nav-link">Teams</NavLink>
                    <NavLink to="/article" className="nav-item nav-link">Article</NavLink>
                    <NavLink to="/events" className="nav-item nav-link">Events</NavLink>
                    <NavLink to="/contact" className="nav-item nav-link">Contact</NavLink>
                </div>
                {/* <div className="d-none d-lg-flex ms-2">
                    <a className="btn btn-light btn-sm-square rounded-circle ms-3" href="">
                        <small className="fab fa-facebook-f text-dark"></small>
                    </a>
                    <a className="btn btn-light btn-sm-square rounded-circle ms-3" href="">
                        <small className="fab fa-twitter text-dark"></small>
                    </a>
                    <a className="btn btn-light btn-sm-square rounded-circle ms-3" href="">
                        <small className="fab fa-linkedin-in text-dark"></small>
                    </a>
                    <a className="btn btn-light btn-sm-square rounded-circle ms-3" href="">
                        <small className="fab fa-youtube text-dark"></small>
                    </a>
                    <a className="btn btn-light btn-sm-square rounded-circle ms-3" href="">
                        <small className="fab fa-instagram text-dark"></small>
                    </a>
                </div> */}
            </div>
        </nav>
        </div>
        </div>


    )
}

export default navBar