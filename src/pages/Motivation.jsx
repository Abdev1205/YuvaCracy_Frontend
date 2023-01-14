import React, { PureComponent } from 'react'
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

export class Motivation extends PureComponent {
  render() {
    return (
      <div>
       <NavBar />
                <br /><br /><br /><br /><br /><br />

                <div className="container-xxl py-5">
                    <div className="container">
                        <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" >
                            <p className="d-inline-block border rounded text-dark fw-semi-bold py-1 px-3">Motivation</p>
                            <h1 className="display-5 mb-5">This is Motivation Page</h1>
                        </div>
                        <div className="row g-4">
                            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                This is Motivation Page
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
      </div>
    )
  }
}

export default Motivation