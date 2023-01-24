import React, { PureComponent } from 'react'

export class footer extends PureComponent {
  render() {
    return (
      <div>
        <div className="container-fluid bg-dark text-light footer mt-5 py-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container py-5">
            <div className="row g-5">
                <div className="col-lg-3 col-md-6">
                    <h4 className="text-white mb-4">Our Office</h4>
                    <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i><a className="text-white" href="#">Mumbai, India</a></p>
                    <p className="mb-2"><i className="fa fa-phone-alt me-3"></i><a className="text-white" href="tel:+91 89874 76709">+91 89874 76709</a></p>
                    <p className="mb-2"><i className="fa fa-envelope me-3"></i><a className="text-white" href="mailto:yuvacracymail@gmail.com"> yuvacracymail@gmail.com</a></p>
                    <div className="d-flex pt-2">
                        <a className="btn btn-square btn-outline-light rounded-circle me-2" href=""><i
                                className="fab fa-twitter"></i></a>
                        <a className="btn btn-square btn-outline-light rounded-circle me-2" href=""><i
                                className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-square btn-outline-light rounded-circle me-2" href=""><i
                                className="fab fa-youtube"></i></a>
                        <a className="btn btn-square btn-outline-light rounded-circle me-2" href=""><i
                                className="fab fa-linkedin-in"></i></a>
                         <a className="btn btn-square btn-outline-light rounded-circle me-2" href=""><i
                                className="fab fa-instagram"></i></a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h4 className="text-white mb-4">Services</h4>
                    <a className="btn btn-link" href="">Youth Empowerment 1</a>
                    <a className="btn btn-link" href="">Youth Empowerment 2</a>
                    <a className="btn btn-link" href="">Youth Empowerment 3</a>
                    <a className="btn btn-link" href="">Youth Empowerment 4</a>
                    <a className="btn btn-link" href="">Youth Empowerment 5</a>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h4 className="text-white mb-4">Quick Links</h4>
                    <a className="btn btn-link" href="">About Us</a>
                    <a className="btn btn-link" href="">Contact Us</a>
                    <a className="btn btn-link" href="">Our Services</a>
                    <a className="btn btn-link" href="">Terms & Condition</a>
                    <a className="btn btn-link" href="">Support</a>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h4 className="text-white mb-4">Newsletter</h4>
                    <p />Enter your email address to subscribe to our Newsletter
                    <div className="position-relative w-100">
                        <input className="form-control bg-white border-0 w-100 py-3 ps-4 pe-5" type="text"
                            placeholder="Your email" />
                        <button type="button"
                            className="btn btn-dark py-2 position-absolute top-0 end-0 mt-2 me-2"><a href="/#sub" className='text-white'>Subscribe</a></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container-fluid copyright py-4">
        <div class="container">
            <div class="row">
                <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                    &copy; <a class="border-bottom" href="#">YuvaCracy Foundation 2023</a>, All Right Reserved.
                </div>
                <div class="col-md-6 text-center text-md-end">
                    Designed By <a class="border-bottom" href="#">Tech Team</a>
                </div>
            </div>
        </div>
    </div>
      </div>
    )
  }
}

export default footer