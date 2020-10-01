import React, { Component, Fragment } from 'react';

class AIBanner extends Component {
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
          <div className="mdk-box__content">
            <div className="hero py-64pt text-center text-sm-left">
              <div className="container page__container">
                <h1 className="text-white">Global Certificate In Master in Applied AI</h1>
                <p className="lead text-white-50 measure-hero-lead">
                  UPGRADE YOUR SKILLSET WITH DIGITECH VIDYA’S GLOBAL CERTIFICATE
                  IN APPLIED AI COURSE AND BOOST YOUR CAREER IN JUST 5 MONTHS
        </p>
                <div className="d-flex flex-column flex-sm-row align-items-center justify-content-start">
                  <a
                    href="fixed-student-lesson.html"
                    className="btn btn-outline-white mb-16pt mb-sm-0 mr-sm-16pt"
                  >
                    Watch trailer
                    <i className="material-icons icon--right">play_circle_outline</i>
                  </a>
                  <a href="fixed-pricing.html" className="btn btn-white">
                    Book your Demo
          </a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </Fragment>
    );
  }
}

export default AIBanner;