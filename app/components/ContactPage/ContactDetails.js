import React, { Component, Fragment } from 'react';

class ContactDetails extends Component {
  render() {
    return (
      <Fragment>
        <div className="row pb-5">
          <div className="col-12 col-md-12 p-0">
            <i
              className="fa fa-phone-alt"
              aria-hidden="true"
              style={{ fontSize: '18', color: '#303956' }}
            />
            <span className="pl-2">
              Phone
                    </span>
            <ul className="p-0" style={{ listStyle: "none", color: "#7C848A" }}>
              <li className="col-12 col-md-12 pt-1 pb-1 pl-4 pr-0">
                <img
                  src="/images/path/whatsapp.jpeg"
                  style={{ height: 20, width: 20 }}
                  alt=""
                />
                <a
                  data-toggle="tooltip"
                  data-placement="right"
                  title="Contact us on WhatsApp"
                  href="https://api.whatsapp.com/send?phone=9934699512"
                  style={{ color: "#7C848A", fontSize: 14 }}
                >

                  +91 9934-699-512
                </a>
                <br />
                <img
                  src="/images/path/whatsapp.jpeg"
                  style={{ height: 20, width: 20 }}
                  alt=""
                />
                <a
                  data-toggle="tooltip"
                  data-placement="right"
                  title="Contact us on WhatsApp"
                  href="https://api.whatsapp.com/send?phone=917023653566"
                  style={{ color: "#7C848A", fontSize: 14 }}
                >
                  +91 7023-653-566
                </a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-12 p-0">
            <i
              className="fa fa-envelope"
              aria-hidden="true"
              style={{ fontSize: 18 }}
            />
            <span className="pl-2">
              <b>Email</b>
            </span>
            <ul className="p-0" style={{ listStyle: "none", color: "#7C848A" }}>
              <li className="col-12 col-md-12 pt-1 pb-1 pl-4 pr-0">
                <a
                  href="mailto:info@digitechvidya.com"
                  style={{ color: "#7C848A", fontSize: 14 }}
                >
                  info@digitechvidya.com
                </a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-12 p-0">
            <i
              className="fa fa-map-marker"
              aria-hidden="true"
              style={{ fontSize: 18 }}
            />
            <span className="pl-2">
              <b>Address</b>
            </span>
            <ul className="p-0" style={{ listStyle: "none", color: "#7C848A" }}>
              <li
                className="col-12 col-md-12 pt-1 pb-1 pl-4 pr-0"
                style={{ color: "#7C848A", fontSize: 14 }}
              >
                E4, Mohan Estate, <br /> New Delhi 110044
              </li>
              <li
                className="col-12 col-md-12 pt-1 pb-1 pl-4 pr-0"
                style={{ color: "#7C848A", fontSize: 14 }}
              >
                207, Maharana Pratap Nagar, <br /> Jaipur, Rajasthan 302012
              </li>
            </ul>
          </div>
        </div>

      </Fragment>
    );
  }
}

export default ContactDetails;