import React, { Component, Fragment } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

class Intro extends Component {
  componentDidMount() {
    AOS.init();
  }
  render() {
    return (
      <Fragment>
        {/* ======= Intro Section ======= */}
        <section id="intro">
          <div className="intro-container" data-aos="zoom-in" data-aos-delay={100}>
            <h1 className="mb-4 pb-0">
              The Annual
        <br />
              <span>Marketing</span> Conference
      </h1>
            <p className="mb-4 pb-0">
              10-12 December, Downtown Conference Center, New York
      </p>
            <a
              href="https://www.youtube.com/watch?v=jDDaplaOz7Q"
              className="venobox play-btn mb-4"
              data-vbtype="video"
              data-autoplay="true"
            />
            <a href="#about" className="about-btn scrollto">
              About The Event
      </a>
          </div>
        </section>
        {/* End Intro Section */}

      </Fragment>
    );
  }
}

export default Intro;