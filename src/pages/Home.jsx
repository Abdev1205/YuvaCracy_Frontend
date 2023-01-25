import React, { PureComponent } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

class home extends PureComponent {
    render() {
        return (
            <div>
                <NavBar />

                <div className="container-fluid p-0 mb-5 wow fadeIn" data-wow-delay="0.1s">
                    <div id="header-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img className="w-100" src="img/carousel-1.jpg" alt="Image" style={{objectFit:"contain",width: "100%"}}/>
                                <div className="carousel-caption">
                                    <div className="container">
                                        <div className="row justify-content-start">
                                            <div className="col-lg-8">
                                                
                                                <h6 className="display-1 mb-4 animated slideInDown">Youth Empowerment Is Our Goal
                                                </h6>
                                                <a href="" className="btn btn-dark py-3 px-5 animated slideInDown">Explore More</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="carousel-item">
                                <img className="w-100" src="img/carousel-2.jpg" alt="Image" />
                                <div className="carousel-caption">
                                    <div className="container">
                                        <div className="row justify-content-start">
                                            <div className="col-lg-7">
                                                
                                                <h6 className="display-1 mb-4 animated slideInDown">Empowering Young People</h6>
                                                <a href="" className="btn btn-dark py-3 px-5 animated slideInDown">Explore More</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                        {/* <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#header-carousel" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button> */}
                    </div>
                </div>

                <div className="container-xxl py-5">
                    <div className="container">
                        <div className="row g-4 align-items-end mb-4">
                            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                                <img className="img-fluid rounded" src="img/yuvacracy.jpg" width={"auto"} height={"auto"} style={{objectFit:"contain",width: "100%"}}/>
                            </div>
                            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                                <p className="d-inline-block border rounded text-dark fw-semi-bold py-1 px-3">About Us</p>
                                <h1 className="display-5 mb-4">We Help Young People To Reach Their Full Potential</h1>
                                <p className="mb-4">YuvaCracy is committed to providing an excellent approach in empowering youths to discover their full potential
                                </p>
                                <div className="border rounded p-4">
                                    <nav>
                                        <div className="nav nav-tabs mb-3" id="nav-tab" role="tablist">
                                            <button className="nav-link fw-semi-bold active text-dark" id="nav-story-tab" data-bs-toggle="tab"
                                                data-bs-target="#nav-story" type="button" role="tab" aria-controls="nav-story"
                                                aria-selected="true">Story</button>
                                            <button className="nav-link fw-semi-bold text-dark" id="nav-mission-tab" data-bs-toggle="tab"
                                                data-bs-target="#nav-mission" type="button" role="tab" aria-controls="nav-mission"
                                                aria-selected="false">Mission</button>
                                            <button className="nav-link fw-semi-bold text-dark" id="nav-vision-tab" data-bs-toggle="tab"
                                                data-bs-target="#nav-vision" type="button" role="tab" aria-controls="nav-vision"
                                                aria-selected="false">Vision</button>
                                        </div>
                                    </nav>
                                    <div className="tab-content" id="nav-tabContent">
                                        <div className="tab-pane fade show active" id="nav-story" role="tabpanel"
                                            aria-labelledby="nav-story-tab">
                                            <p>YuvaCracy is committed to providing an excellent approach in empowering youths to discover their full potential</p>

                                        </div>
                                        <div className="tab-pane fade" id="nav-mission" role="tabpanel"
                                            aria-labelledby="nav-mission-tab">
                                            <p>Mission Statement goes here.....</p>
                                        </div>
                                        <div className="tab-pane fade" id="nav-vision" role="tabpanel" aria-labelledby="nav-vision-tab">
                                            <p>Vision Statement goes here....</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="border rounded p-4 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="row g-4">
                                <div className="col-lg-4 wow fadeIn" data-wow-delay="0.1s">
                                    <div className="h-100">
                                        <div className="d-flex">
                                            <div className="flex-shrink-0 btn-lg-square rounded-circle bg-dark">
                                                <i className="fa fa-times text-white"></i>
                                            </div>
                                            <div className="ps-3">
                                                <h4>No Turn Down</h4>
                                                <span>YuvaCracy Statement...</span>
                                            </div>

                                        </div>
                                        <div className="border-bottom mt-4 d-block d-lg-none"></div>
                                    </div>
                                </div>
                                <div className="col-lg-4 wow fadeIn" data-wow-delay="0.3s">
                                    <div className="h-100">
                                        <div className="d-flex">
                                            <div className="flex-shrink-0 btn-lg-square rounded-circle bg-dark">
                                                <i className="fa fa-users text-white"></i>
                                            </div>
                                            <div className="ps-3">
                                                <h4>Dedicated Team</h4>
                                                <span>YuvaCracy Statement...</span>
                                            </div>

                                        </div>
                                        <div className="border-bottom mt-4 d-block d-lg-none"></div>
                                    </div>
                                </div>
                                <div className="col-lg-4 wow fadeIn" data-wow-delay="0.5s">
                                    <div className="h-100">
                                        <div className="d-flex">
                                            <div className="flex-shrink-0 btn-lg-square rounded-circle bg-dark">
                                                <i className="fa fa-phone text-white"></i>
                                            </div>
                                            <div className="ps-3">
                                                <h4>24/7 Available</h4>
                                                <span>YuvaCracy Statement...</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>

                <div className="container-fluid facts my-5 py-5">
                    <div className="container py-5">
                        <div className="row g-5">
                            <div className="col-sm-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.1s">
                                <i className="fa fa-users fa-3x text-white mb-3"></i>
                                <h1 className="display-4 text-white" data-toggle="counter-up">1234</h1>
                                <span className="fs-5 text-white">Empowered Youths</span>
                                <hr className="bg-white w-25 mx-auto mb-0" />
                            </div>
                            <div className="col-sm-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.3s">
                                <i className="fa fa-check fa-3x text-white mb-3"></i>
                                <h1 className="display-4 text-white" data-toggle="counter-up">1234</h1>
                                <span className="fs-5 text-white">Projects Completed</span>
                                <hr className="bg-white w-25 mx-auto mb-0" />
                            </div>
                            <div className="col-sm-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.5s">
                                <i className="fa fa-users-cog fa-3x text-white mb-3"></i>
                                <h1 className="display-4 text-white" data-toggle="counter-up">1234</h1>
                                <span className="fs-5 text-white">Dedicated Staff</span>
                                <hr className="bg-white w-25 mx-auto mb-0" />
                            </div>
                            <div className="col-sm-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.7s">
                                <i className="fa fa-award fa-3x text-white mb-3"></i>
                                <h1 className="display-4 text-white" data-toggle="counter-up">1234</h1>
                                <span className="fs-5 text-white">Awards Achieved</span>
                                <hr className="bg-white w-25 mx-auto mb-0" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-xxl feature py-5">
                    <div className="container">
                        <div className="row g-5 align-items-center">
                            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                                {/* <p className="d-inline-block border rounded text-dark fw-semi-bold py-1 px-3">Why Choosing Us!</p> */}
                                <h1 className="display-5 mb-4">Why YuvaCracy?</h1>
                                <p className="mb-4">YuvaCracy is committed to providing an excellent.....
                                </p>
                                <a className="btn btn-dark py-3 px-5" href="">Explore More</a>
                            </div>
                            <div className="col-lg-6">
                                <div className="row g-4 align-items-center">
                                    <div className="col-md-6">
                                        <div className="row g-4">
                                            <div className="col-12 wow fadeIn" data-wow-delay="0.3s">
                                                <div className="feature-box border rounded p-4">
                                                    <i className="fa fa-check fa-3x text-dark mb-3" style={{marginTop:-15}}></i>
                                                    <h4 className="mb-3">Fast Executions</h4>
                                                    <p className="mb-3">YuvaCracy Statement....<br />
                                                        also....</p>
                                                    <a className="fw-semi-bold text-dark" href="">Read More <i
                                                        className="fa fa-arrow-right ms-1"></i></a>
                                                </div>
                                            </div>
                                            <div className="col-12 wow fadeIn" data-wow-delay="0.5s">
                                                <div className="feature-box border rounded p-4">
                                                    <i className="fa fa-check fa-3x text-dark mb-3" style={{marginTop:-15}}></i>
                                                    <h4 className="mb-3">Guide & Support</h4>
                                                    <p className="mb-3">YuvaCracy Statement....<br />
                                                        also....</p>
                                                    <a className="fw-semi-bold text-dark" href="">Read More <i
                                                        className="fa fa-arrow-right ms-1"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 wow fadeIn" data-wow-delay="0.7s">
                                        <div className="feature-box border rounded p-4">
                                            <i className="fa fa-check fa-3x text-dark mb-3" style={{marginTop:-15}}></i>
                                            <h4 className="mb-3">Easy Procedure</h4>
                                            <p className="mb-3">YuvaCracy Statement.... <br />
                                                also....</p>
                                            <a className="fw-semi-bold text-dark" href="">Read More <i className="fa fa-arrow-right ms-1"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-xxl service py-5">
                    <div className="container">
                        <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" >
                            <p className="d-inline-block border rounded text-dark fw-semi-bold py-1 px-3">Our Services</p>
                            <h1 className="display-5 mb-5">Awesome Youth Empowerment</h1>
                        </div>
                        <div className="row g-4 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="col-lg-4">
                                <div className="nav nav-pills d-flex justify-content-between w-100 h-100 me-4">
                                    <button className="nav-link w-100 d-flex align-items-center text-start border p-4 mb-4 active"
                                        data-bs-toggle="pill" data-bs-target="#tab-pane-1" type="button">
                                        <h5 className="m-0"><i className="fa fa-bars text-dark me-3"></i>Youth Empowerment</h5>
                                    </button>
                                    <button className="nav-link w-100 d-flex align-items-center text-start border p-4 mb-4"
                                        data-bs-toggle="pill" data-bs-target="#tab-pane-2" type="button">
                                        <h5 className="m-0"><i className="fa fa-bars text-dark me-3"></i>Youth Empowerment 2</h5>
                                    </button>
                                    <button className="nav-link w-100 d-flex align-items-center text-start border p-4 mb-4"
                                        data-bs-toggle="pill" data-bs-target="#tab-pane-3" type="button">
                                        <h5 className="m-0"><i className="fa fa-bars text-dark me-3"></i>Youth Empowerment 3</h5>
                                    </button>
                                    <button className="nav-link w-100 d-flex align-items-center text-start border p-4 mb-0"
                                        data-bs-toggle="pill" data-bs-target="#tab-pane-4" type="button">
                                        <h5 className="m-0"><i className="fa fa-bars text-dark me-3"></i>Youth Empowerment 4</h5>
                                    </button>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="tab-content w-100">
                                    <div className="tab-pane fade show active" id="tab-pane-1">
                                        <div className="row g-4">
                                            <div className="col-md-6">
                                                <div className="position-relative h-100">
                                                    <img className="position-absolute rounded w-100 h-100" src="img/yuvacracy.jpg"
                                                        alt="" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <h3 className="mb-4">25 Years Of Experience In Youth Empowerment</h3>
                                                <p className="mb-4">YuvaCracy is dedicated to empowing youth and ...... <br />
                                                </p>
                                                <p><i className="fa fa-check text-dark me-3"></i>Youth Empowerment 1</p>
                                                <p><i className="fa fa-check text-dark me-3"></i>Youth Empowerment 2</p>
                                                <p><i className="fa fa-check text-dark me-3"></i>Youth Empowerment 3</p>
                                                <a href="" className="btn btn-dark py-3 px-5 mt-3">Read More</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="tab-pane-2">
                                        <div className="row g-4">
                                            <div className="col-md-6">
                                                <div className="position-relative h-100">
                                                    <img className="position-absolute rounded w-100 h-100" src="img/team-2.jpg"
                                                        alt="" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <h3 className="mb-4">25 Years Of Experience In Youth Empowerment</h3>
                                                <p className="mb-4">YuvaCracy is dedicated to empowing youth and ...... <br />
                                                </p>
                                                <p><i className="fa fa-check text-dark me-3"></i>Youth Empowerment 1</p>
                                                <p><i className="fa fa-check text-dark me-3"></i>Youth Empowerment 2</p>
                                                <p><i className="fa fa-check text-dark me-3"></i>Youth Empowerment 3</p>
                                                <a href="" className="btn btn-dark py-3 px-5 mt-3">Read More</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="tab-pane-3">
                                        <div className="row g-4">
                                            <div className="col-md-6">
                                                <div className="position-relative h-100">
                                                    <img className="position-absolute rounded w-100 h-100" src="img/team-3.jpg"
                                                        alt="" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <h3 className="mb-4">25 Years Of Experience In Youth Empowerment</h3>
                                                <p className="mb-4">YuvaCracy is dedicated to empowing youth and ...... <br />
                                                </p>
                                                <p><i className="fa fa-check text-dark me-3"></i>Youth Empowerment 1</p>
                                                <p><i className="fa fa-check text-dark me-3"></i>Youth Empowerment 2</p>
                                                <p><i className="fa fa-check text-dark me-3"></i>Youth Empowerment 3</p>
                                                <a href="" className="btn btn-dark py-3 px-5 mt-3">Read More</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="tab-pane-4">
                                        <div className="row g-4">
                                            <div className="col-md-6">
                                                <div className="position-relative h-100">
                                                    <img className="position-absolute rounded w-100 h-100" src="img/team-1.jpg"
                                                        alt="" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <h3 className="mb-4">25 Years Of Experience In Youth Empowerment</h3>
                                                <p className="mb-4">YuvaCracy is dedicated to empowing youth and ...... <br />
                                                </p>
                                                <p><i className="fa fa-check text-dark me-3"></i>Youth Empowerment 1</p>
                                                <p><i className="fa fa-check text-dark me-3"></i>Youth Empowerment 2</p>
                                                <p><i className="fa fa-check text-dark me-3"></i>Youth Empowerment 3</p>
                                                <a href="" className="btn btn-dark py-3 px-5 mt-3">Read More</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid callback my-5 pt-5" id ="sub">
                    <div className="container pt-5">
                        <div className="row justify-content-center">
                            <div className="col-lg-7">
                                <div className="bg-white border rounded p-4 p-sm-5 wow fadeInUp" data-wow-delay="0.5s">
                                    <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" >
                                        {/* <p className="d-inline-block border rounded text-dark fw-semi-bold py-1 px-3">Get In Touch
                                        </p> */}
                                        <h1 className="display-5 mb-5">Request A Call-Back</h1>
                                    </div>
                                    <div className="row g-3">
                                        <div className="col-sm-6">
                                            <div className="form-floating">
                                                <input type="text" className="form-control" id="name" placeholder="Your Name" />
                                                <label htmlFor="name">Your Name <span className='text-danger'>*</span></label>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-floating">
                                                <input type="email" className="form-control" id="mail" placeholder="Your Email" />
                                                <label htmlFor="mail">Your Email<span className='text-danger'>*</span></label>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-floating">
                                                <input type="text" className="form-control" id="mobile" placeholder="Your Mobile" />
                                                <label htmlFor="mobile">Your Mobile</label>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-floating">
                                                <input type="text" className="form-control" id="subject" placeholder="Subject" />
                                                <label htmlFor="subject">Subject<span className='text-danger'>*</span></label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <textarea className="form-control" placeholder="Leave a message here" id="message"
                                                ></textarea>
                                                <label htmlFor="message">Message<span className='text-danger'>*</span></label>
                                            </div>
                                        </div>
                                        <div className="col-12 text-center">
                                            <button className="btn btn-dark w-100 py-3" type="submit">Submit Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="container-xxl py-5">
                    <div className="container">
                        <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" >
                            <p className="d-inline-block border rounded text-dark fw-semi-bold py-1 px-3">Our Team</p>
                            <h1 className="display-5 mb-5">Recent Events</h1>
                        </div>
                        <div className="row g-4">
                            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                <div className="team-item">
                                    <img className="img-fluid rounded" src="img/team-1.jpg" alt="" />
                                    <div className="team-text">
                                        <h4 className="mb-0">YuvaCracy 1</h4>
                                        <div className="team-social d-flex">
                                            <a className="btn btn-square rounded-circle mx-1" href=""><i
                                                className="fab fa-facebook-f"></i></a>
                                            <a className="btn btn-square rounded-circle mx-1" href=""><i className="fab fa-twitter"></i></a>
                                            <a className="btn btn-square rounded-circle mx-1" href=""><i
                                                className="fab fa-instagram"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                                <div className="team-item">
                                    <img className="img-fluid rounded" src="img/team-2.jpg" alt="" />
                                    <div className="team-text">
                                        <h4 className="mb-0">YuvaCracy 2</h4>
                                        <div className="team-social d-flex">
                                            <a className="btn btn-square rounded-circle mx-1" href=""><i
                                                className="fab fa-facebook-f"></i></a>
                                            <a className="btn btn-square rounded-circle mx-1" href=""><i className="fab fa-twitter"></i></a>
                                            <a className="btn btn-square rounded-circle mx-1" href=""><i
                                                className="fab fa-instagram"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                                <div className="team-item">
                                    <img className="img-fluid rounded" src="img/team-3.jpg" alt="" />
                                    <div className="team-text">
                                        <h4 className="mb-0">YuvaCracy 3</h4>
                                        <div className="team-social d-flex">
                                            <a className="btn btn-square rounded-circle mx-1" href=""><i
                                                className="fab fa-facebook-f"></i></a>
                                            <a className="btn btn-square rounded-circle mx-1" href=""><i className="fab fa-twitter"></i></a>
                                            <a className="btn btn-square rounded-circle mx-1" href=""><i
                                                className="fab fa-instagram"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}

                <Footer />

            </div>

        )
    }
}

export default home