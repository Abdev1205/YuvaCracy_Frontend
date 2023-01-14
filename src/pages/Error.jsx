import React, { PureComponent } from 'react'
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { NavLink } from 'react-router-dom';

export class Error extends PureComponent {
    render() {
        return (
            <div>
                <NavBar />
                <br /><br /><br /><br /><br /><br />

                <div className="container-xxl py-5">
                    <div className="container">
                        <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" >
                            <NavLink exact to="/" >

                                <button className="btn btn-dark py-3 px-5 animated slideInDown">Go Back To Home</button>
                            </NavLink>
                            <h1 className="display-5 mb-5"><img src="https://i.postimg.cc/8cPG3Vq0/ezgif-com-gif-maker-9.gif" alt="" srcset="" />
                            </h1>
                        </div>
                        <div className="row g-4">
                            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">

                            </div>


                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Error