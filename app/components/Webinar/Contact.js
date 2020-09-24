import React, { Component, Fragment } from 'react';

class Contact extends Component {
  render() {
    return (
      <Fragment>
        {
          /* ======= Contact Section ======= */
        }
        <section id="contact" className="section-bg">
          <div className="container" data-aos="fade-up">
            <div className="section-header">
              <h2>Contact Us</h2>
              <p>Nihil officia ut sint molestiae tenetur.</p>
            </div>
            <div className="row contact-info">
              <div className="col-md-4">
                <div className="contact-address">
                  <i className="ion-ios-location-outline" />
                  <h3>Address</h3>
                  <address>E4, Mohan Estate,New Delhi 110044</address>
                  <address> 207, Maharana Pratap Nagar,Jaipur, Rajasthan 302012</address>
                </div>
              </div>
              <div className="col-md-4">
                <div className="contact-phone">
                  <i className="ion-ios-telephone-outline" />
                  <h3>Phone Number</h3>
                  <p>
                    <a href="tel:+91 9934-699-512"> +91 9934-699-512</a>
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="contact-email">
                  <i className="ion-ios-email-outline" />
                  <h3>Email</h3>
                  <p>
                    <a href="mailto:info@digitechvidya.com">info@digitechvidya.com</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="form">
              <form className="php-email-form"
              >
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                      data-rule="minlen:4"
                      data-msg="Please enter at least 4 chars"
                    />
                    <div className="validate" />
                  </div>
                  <div className="form-group col-md-6">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      data-rule="email"
                      data-msg="Please enter a valid email"
                    />
                    <div className="validate" />
                  </div>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    data-rule="minlen:4"
                    data-msg="Please enter at least 8 chars of subject"
                  />
                  <div className="validate" />
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control"
                    name="message"
                    rows={5}
                    data-rule="required"
                    data-msg="Please write something for us"
                    placeholder="Message"
                    defaultValue={""}
                  />
                  <div className="validate" />
                </div>
                <div className="mb-3">
                  <div className="loading">Loading</div>
                  <div className="error-message" />
                  <div className="sent-message">
                    Your message has been sent. Thank you!
          </div>
                </div>
                <div className="text-center">
                  <button type="submit">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default Contact;