import React, { Component, Fragment } from 'react';

class AICertificate extends Component {
  render() {
    return (
      <Fragment>
        <div
          className="mdk-box  js-mdk-box mb-0"
          data-effects="blend-background"
          style={{
            backgroundImage: 'linear-gradient(to left, rgb(174, 189, 218), rgb(4, 2, 38))'
            // backgroundImage: 'url("/images/AIDS.jpeg")'
          }}
        >
          <div className="container page__container ">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12  box_heading_section ">
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 ">
                           <div className="mdk-box__content">
                  <div className="hero py-64pt text-center text-sm-left">
                    <div className="container page__container">
                      <h2 className="text-white"> DevOps Engineer Certification</h2>
                      <p className="lead text-white-50 measure-hero-lead mt-4 font-italic">
                        DigiTech DevOps Engineer Certificate Holders work at 1000s of companies like
        </p>
                      <div className="d-flex flex-column flex-sm-row align-items-center justify-content-start ">
                        <a
                          href="fixed-student-lesson.html"
                          className="btn btn-white mb-16pt mb-sm-0 mr-sm-16pt"
                        >
                          GET IN TOUCH
          
                        </a>
                        <a href="fixed-pricing.html" className="btn btn-outline-white  ">
                          GET SAMPLE CERTIFICATE
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 ">
                <div className="mdk-box__content">
                  <div className="hero py-64pt text-center text-sm-left">
                    <div className="container page__container">
                      <img src="/images/certificate.png"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </Fragment>
    );
  }
}

export default AICertificate;