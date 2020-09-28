import React, { Component, Fragment } from 'react';
import {
  Carousel
} from 'react-bootstrap';

class Banner extends Component {
  render() {
    return (
      <Fragment>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/AIML.jpeg"
              alt="First slide"
            />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/AIML2.jpeg"
              alt="Second slide"
            />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/DL.jpeg"
              alt="Third slide"
            />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/AIDS.jpeg"
              alt="Forth slide"
            />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

      </Fragment>
    );
  }
}

export default Banner;