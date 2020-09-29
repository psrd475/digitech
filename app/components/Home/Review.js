import React, { Component, Fragment } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const review = [
  {
    icon: '/images/google.png',
    title: '580+ Reviews',
    subtitle: '⭐⭐⭐'
  },
  {
    icon: '/images/fb1.png',
    title: '8,800+ Reviews',
    subtitle: '⭐⭐⭐⭐⭐'
  },
  {
    icon: '/images/linkedin.jpeg',
    title: '1,937+ Reviews',
    subtitle: '⭐⭐⭐⭐'
  }
]
class Review extends Component {
  componentDidMount() {
    AOS.init();
  }
  render() {
    const rev = review.map((item, index) => {
      return (
        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-6 card_light_box ga_job_role_card" key={index}>
          <a > <div className="d-flex col-md align-items-center border-bottom border-md-0 mb-16pt mb-md-0 pb-16pt pb-md-0" >
            {/* <div className="rounded-circle bg-primary1 w-64 h-64 d-inline-flex align-items-center justify-content-center mr-16pt">
              <i className="material-icons text-white">{item.icon}</i>
            </div> */}
            <img
              src={item.icon}
              alt=""
              width="40px"
              height="40px"
              style={{ marginRight: '5px' }}
            />
            <div className="flex">
              <span className="text" data-position={1}>{item.title}</span>
              <span className="text" data-position={1}>{item.subtitle}</span>
              {/* <div className="card-title mb-4pt">{item.title}</div>
              <p className="card-subtitle text-black-70">
                {item.subtitle}
              </p> */}
            </div>
          </div>
          </a></div>
      )
    })
    return (
      <Fragment>
        <section className="container-fluid1 few_info_below_banner">
          <div className="container1">
            <div className="row">
              {rev}
            </div>
          </div>
        </section >
      </Fragment >
    );
  }
}

export default Review;