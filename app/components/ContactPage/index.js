import React, { Component, Fragment } from 'react';
import ContactBounce from './ContactBounce'
import ContactForm from './ContactForm';
import ContactDetails from './ContactDetails';
import PageSeperator from '../Home/PageSeperator';

class index extends Component {
  render() {
    return (
      <Fragment>
        <div className='banner text-center'>
          <ContactBounce />
        </div>
        <div className="page-section container page__container">
          <PageSeperator name="Get in touch" />
          <div className="row">

            <div className="col-12 col-md-8">
              <div className="col-12 col-md-12 py-3">
                <ContactForm />
              </div>
            </div>
            <div className="col-12 col-md-4" >
              <div className="col-12 col-md-12 py-3">
                <ContactDetails />
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default index;