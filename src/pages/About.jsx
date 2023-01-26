import React, { PureComponent } from 'react'
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

export class About extends PureComponent {
    render() {
        return (
            <div>
                <NavBar />
                <br /><br /><br /><br /><br /><br />
                <header className="App-headerAbout">
                    <div className="AppAbout"><h1>About Us</h1></div>
                    <div className="App3"><h3>Yuvacracy act as a forum for young people to network and socialize!!</h3></div>
                    <div className="App4"><h1> Educate. Engage. Empower</h1></div>
                    <header className='header'>

                        <div className="container-xxl py-5">
                            <div className="container">
                                <div className="row g-4 align-items-end mb-4">
                                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">

                                        <div className="App1 mb-3" style={{ objectFit: "contain", margin:30}}>
                                            <div className="head"><h2>Our Vision</h2></div>
                                            <h5>Our vision is to drive the evolution of youth to meet today's challenges.</h5>
                                            <p style={{margin:10}}>The youth of a nation shapes and molds its presentand paves the way for its future.</p>


                                        </div>

                                    </div>
                                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                                        <div className="App2 mb-3" style={{ objectFit: "contain" }}>

                                            <div className="head"><h2>Our Mission</h2></div>
                                            <h5>Our mission is to empower society though youth enagagements.</h5>

                                            <p style={{margin:10}}>We aim to do this by galvanizing  young leaders as well as bridging the gap between the youth and experts.

                                            </p>


                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </header>
                </header>
                <Footer />
            </div>
        )
    }
}

export default About