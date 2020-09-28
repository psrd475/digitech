import React, { Component, Fragment } from 'react';

import { Alert } from 'react-bootstrap';
import GrabNow from '../Modal/GrabNow'
import Link from 'react-router-dom';

class AlertBox extends Component {
  constructor() {
    super();
    this.state = {
      show: true
    }
  }

  render() {
    const { show } = this.state;
    // const { openModalHandler } = this.props;
    return (
      <Fragment>
        {show ?
          <Alert onClose={() => this.setState({ show: false })} dismissible style={{ marginBottom: '0rem', background: "#ec9704", color: 'white' }}>
            {/* //    /* background-image: linear-gradient(to left,#fad961,#f76b1c); */}
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
              <a onClick={() => { this.props.openModalHandler() }} style={{ color: "#303956", padding: '3px' }}> GRAB NOW </a></Alert.Heading>
          </Alert>
          : ''
        }
      </Fragment>
    );
  }
}

export default AlertBox;