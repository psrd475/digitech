import React, { Component, Fragment } from 'react';
import {
  Carousel
} from 'react-bootstrap';

class Banner extends Component {
  render() {
    return (
      <Fragment>
        <section className="home_slick_slide ">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/images/dm.jpg"
                alt=" slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/images/AIML.jpeg"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/images/AIML2.jpeg"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/images/DL.jpeg"
                alt="Third slide"
              />

            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/images/AIDS.jpeg"
                alt="Forth slide"
              />
            </Carousel.Item>
          </Carousel>
        </section>
      </Fragment>
    );
  }
}

export default Banner;