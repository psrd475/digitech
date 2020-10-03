import React, { Component, Fragment } from 'react';

class ContactForm extends Component {
  render() {
    return (
      <Fragment>
        <form id="contactForm" >
          {/* <input
                    type="hidden"
                    name="csrfmiddlewaretoken"
                    defaultValue=""
                  /> */}
          <div className="form-group">
            <div className="col-12 col-md-12">
              <div className="row">
                <input
                  className="col-12 col-md-5 form-control shadow-sm mb-2"
                  id="username"
                  placeholder="Name*"
                  name="name"
                  type="username"
                  required
                />
                <div className="col-12 col-md-2" />
                <input
                  className="col-12 col-md-5 form-control shadow-sm mb-2"
                  id="email"
                  placeholder="Email-Id*"
                  name="email"
                  type="email"
                  required
                />
              </div>
            </div>
          </div>
          <div className="form-group">
            <input
              className="col-12 col-md-12 form-control shadow-sm mb-2"
              id="subject"
              placeholder="Subject*"
              name="subject"
              type="text"
              required
            />
          </div>
          <div className="form-group">
            <textarea
              className="col-12 col-md-12 form-control shadow-sm mb-2"
              id="message"
              name="message"
              placeholder="Message*"
              required
              defaultValue=""
            />
          </div>
          <div className="col-12 col-md-12 pl-0">
            <button
              type="submit"
              className="button"
              style={{ width: 200, height: 50 }}
            >
              SUBMIT
            </button>
          </div>
          <div className="col-12 col-md-12 pl-0">
            <span className="" style={{ color: "green" }} />
          </div>
        </form>

      </Fragment>
    );
  }
}

export default ContactForm;