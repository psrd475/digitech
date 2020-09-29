import React, { Component, Fragment } from 'react';

import GrabNow from '../Modal/GrabNow'
import Link from 'react-router-dom';
import { Alert, Modal, Button, Row, Col, Form } from 'react-bootstrap';

class AlertBox extends Component {
  constructor() {
    super();
    this.state = {
      show: true,
      toggle: true,
      isShowing: false,
      otp: false
    }
  }

  openModalHandler = () => {
    this.setState({
      isShowing: true
    });
  }

  closeModalHandler = () => {
    this.setState({
      isShowing: false
    });
  }
  openModalOTP = () => {
    this.setState({
      otp: true
    });
  }
  closeModalOTP = () => {
    this.setState({
      otp: false
    });
  }

  render() {
    const { show, isShowing, otp } = this.state;
    return (
      <Fragment>
        {show ?
          <Alert onClose={() => this.setState({ show: false })} dismissible style={{ marginBottom: '0rem', background: "#ec9704", color: 'white' }}>
            <Alert.Heading style={{ color: 'white' }}>COVID-19 Lockdown Offer - Upto
              <strong style={{ color: "#303956" }}> 20% </strong>
              Off &nbsp; | &nbsp;
              <span > OFFER ENDING IN : </span>
              <span style={{ background: "#e27b27", padding: '3px' }}>
                01
            </span>
              <span className="days_ref text"> D </span>
              <span style={{ background: "#e27b27", padding: '3px' }}>
                10
            </span>
              <span className="days_ref text"> H </span>
              <span style={{ background: "#e27b27", padding: '3px' }}>
                10
            </span>
              <span className="days_ref text"> M </span>
              <a onClick={() => { this.openModalHandler() }} style={{ color: "#303956", padding: '3px' }}> GRAB NOW </a></Alert.Heading>
          </Alert>
          : ''
        }

        {isShowing ?
          <Modal show={isShowing} onHide={this.closeModalHandler}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Body className="show-grid" >
              <Row>
                <Col xs={12} md={6} style={{ alignItems: 'center' }}>
                  <div style={{
                    backgroundImage: 'linear-gradient(to left,#fad961,#f76b1c)', padding: '55px'
                  }}>
                    <div><h2> OFFER ENDING IN : </h2></div>
                    <h2>
                      <span style={{ background: "#e27b27", padding: '3px' }}>01</span>
                      <span className="days_ref text"> D </span>
                      <span style={{ background: "#e27b27", padding: '3px' }}> 10 </span>
                      <span className="days_ref text"> H </span>
                      <span style={{ background: "#e27b27", padding: '3px' }}> 10 </span>
                      <span className="days_ref text"> M </span>
                    </h2>

                  </div>
                </Col>
                <Col xs={12} md={6} style={{ padding: '20px' }}>
                  <button type="button" className="close" onClick={this.closeModalHandler}><span aria-hidden="true">×</span><span className="sr-only">Close</span></button>
                  <Form>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                      <Form.Control type="text" placeholder="Contact Number" />
                    </Form.Group>

                    <Button type="submit" onClick={() => { this.openModalOTP() }} style={{
                      backgroundImage: 'linear-gradient(to left,#fad961,#f76b1c)'
                    }}>
                      Available Offer Now
                      </Button>
                  </Form>
                </Col>
              </Row>
            </Modal.Body>

          </Modal> : ''}
        {otp ?
          <Modal show={otp} onHide={this.closeModalOTP}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Body className="show-grid" >
              <Row>
                <Col xs={12} md={6} style={{ alignItems: 'center' }}>
                  <div style={{
                    backgroundImage: 'linear-gradient(to left,#fad961,#f76b1c)', padding: '55px'
                  }}>
                    <div><h2> OFFER ENDING IN : </h2></div>
                    <h2>
                      <span style={{ background: "#e27b27", padding: '3px' }}>01</span>
                      <span className="days_ref text"> D </span>
                      <span style={{ background: "#e27b27", padding: '3px' }}> 10 </span>
                      <span className="days_ref text"> H </span>
                      <span style={{ background: "#e27b27", padding: '3px' }}> 10 </span>
                      <span className="days_ref text"> M </span>
                    </h2>
                  </div>
                </Col>
                <Col xs={12} md={6} style={{ padding: '20px' }}>
                  <button type="button" className="close" onClick={this.closeModalOTP}><span aria-hidden="true">×</span><span className="sr-only">Close</span></button>
                  <Form>
                    <p>Coupon code can be applied on any course during checkout process</p>
                    <Form.Group controlId="formBasicPassword">
                      <Form.Control type="text" placeholder="Contact Number" />
                    </Form.Group>
                    <div class="copy_cuponcode_bx ">
                      <div class="form-group">
                        <span id="generic_offer_code">OFF08</span>
                        <button class="cpy_txt_generic">Copy Code</button>
                      </div>
                    </div>

                    <Button type="submit" style={{
                      backgroundImage: 'linear-gradient(to left,#fad961,#f76b1c)'
                    }}>
                      Available Offer Now
                      </Button>
                  </Form>
                </Col>
              </Row>
            </Modal.Body>
          </Modal> : ''}
      </Fragment>
    );
  }
}

export default AlertBox;