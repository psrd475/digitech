import React, { Component, Fragment } from 'react';
import {
  Container, Row, Col
} from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  Nav, Navbar, Button
} from 'react-bootstrap'

class OuterEvent extends Component {
  componentDidMount() {
    AOS.init();
  }
  render() {
    return (
      <Fragment>
        <Navbar sticky="top" bg="dark">
          <Navbar.Brand href="#home">
            <img
              src="/images/Digitech Vidya_logo_1.png"
              className="logo"
              alt="Digitech Vidhya"
            /></Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Button variant="outline-light" className="order nav-item"
              type="button"
              data-toggle="modal"
              data-target="#buy-ticket-modal"
              data-ticket-type="standard-access"
            >Register Now</Button>
          </Navbar.Collapse>
        </Navbar>


        <section id="buy-tickets" className="section-with-bg">
          <Container data-aos="fade-up">
            <Row >
              <Col xs={12} md={8}>
                <iframe src='https://www.youtube.com/embed/E7wJTI-1dvQ'
                  frameBorder='0'
                  allow='autoplay; encrypted-media'
                  allowFullScreen
                  title='video'
                  style={{
                    width: '96%',
                    height: '45vh',
                  }}
                />
              </Col>
              <Col xs={12} md={4}>
                <div data-aos="zoom-in" data-aos-delay={100} >
                  <h2 className="mb-4 pb-0" style={{ margin: '10px' }}>
                    - Free -
                    <br />
                    <span style={{ color: '#e27b14' }}>Machine Learning with python Code</span> Walkthrough.
                  </h2>
                </div>

                <h4 style={{ margin: '20px' }}>We Will Show You The Expert Methods - <span style={{ color: '#e27b14' }}>Absolutely FREE!</span></h4>
                <Button variant="outline-light" className="order nav-item"
                  type="button"
                  // className="btn"
                  data-toggle="modal"
                  data-target="#buy-ticket-modal"
                  data-ticket-type="standard-access"
                >Register Now</Button><br /><br /><br /><br />
                <h6>** LIMITED AVAILABILITY - 100 SEATS WILL FILL FAST! **</h6>
              </Col>
            </Row>
          </Container>
          {/* </div> */}
        </section>
        <section id="buy-tickets" className="section-with-bg">
          <div className="container" data-aos="fade-up" data-aos-delay={100} >
            <div className="section-header">
              <h2>About</h2>
              <p>Machine Learning with python Code
      </p>
            </div>
            <Container>
              <Row>
                <Col xs={12} md={7} data-aos="fade-up" data-aos-delay={200}>
                  <p style={{ fontSize: '1rem', textAlign: "justify" }}>
                    Delighted to invite you to attend the "Artificial intelligence and Robotics" is one of its remarkable Webinar.
                    Is emphasizing on recent areas of more optimized research techniques in Quantum Computing, Healthcare, Autonomous Vehicles,
                    cloud computing, Internet of Things, Robotics, AI, ML and Big Data Analytics
          </p>
                  <p style={{ fontSize: '1rem', textAlign: "justify" }}>
                    Artificial Intelligence 2020 Webinar will focus on the latest and exciting innovations in all areas of Artificial
                    Intelligence and Machine Learning research which offers a unique opportunity for the participants across the globe to meet,
                    network, and perceive new scientific innovations.
                </p>
                  <h3>When</h3>
                  <p>
                    Monday to Wednesday
            <br />
            10-12 December
          </p>
                </Col>
                <Col xs={6} md={3} data-aos="fade-up" data-aos-delay={200}>
                  <img src='images/ai.jpeg' style={{ margin: '0px 10px', width: '300px' }} />
                </Col>
              </Row>
            </Container>

          </div>
        </section>
        {
          /* ======= Buy Ticket Section ======= */
        }
        <section id="buy-tickets" className="section-with-bg">
          <div className="container" data-aos="fade-up">
            <div className="section-header">
              <h2>Topic</h2>
              <p>Machine Learning with python Code
      </p>
            </div>
            <div className="row">
              <div className="col-lg-4" data-aos="fade-up" data-aos-delay={100}>
                <div className="card mb-5 mb-lg-0">
                  <div className="card-body">
                    <h5 className="card-title text-muted text-uppercase text-center">
                      Session-1:
            </h5>
                    <h6 className="card-price text-center"> Artificial Intelligence</h6>
                    <hr />
                    <ul className="fa-ul">
                      <li>
                        <span className="fa-li">
                          <i className="fa fa-check" />
                        </span>
                Artificial intelligence (AI),
              </li>
                      <li>
                        <span className="fa-li">
                          <i className="fa fa-check" />
                        </span>
                Deep learning
              </li>
                      <li>
                        <span className="fa-li">
                          <i className="fa fa-check" />
                        </span>
                Machine learning
              </li>
                      <li >
                        <span className="fa-li">
                          <i className="fa fa-check" />
                        </span>
                Neural networks
              </li>
                      <li >
                        <span className="fa-li">
                          <i className="fa fa-check" />
                        </span>
                AI techniques
              </li>
                    </ul>
                    <hr />
                    <div className="text-center">
                      <button
                        type="button"
                        className="btn"
                        data-toggle="modal"
                        data-target="#buy-ticket-modal"
                        data-ticket-type="standard-access"
                      >
                        Book Now
              </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4" data-aos="fade-up" data-aos-delay={200}>
                <div className="card mb-5 mb-lg-0">
                  <div className="card-body">
                    <h5 className="card-title text-muted text-uppercase text-center">
                      Session-2:
            </h5>
                    <h6 className="card-price text-center"> Machine Learning</h6>
                    <hr />
                    <ul className="fa-ul">
                      <li>
                        <span className="fa-li">
                          <i className="fa fa-check" />
                        </span>
                ML ALGO.
              </li>
                      <li>
                        <span className="fa-li">
                          <i className="fa fa-check" />
                        </span>
                Statistical Models
              </li>
                      <li>
                        <span className="fa-li">
                          <i className="fa fa-check" />
                        </span>
                Subset of AI
              </li>
                      <li>
                        <span className="fa-li">
                          <i className="fa fa-check" />
                        </span>
                Mathematical Model
              </li>
                      <li >
                        <span className="fa-li">
                          <i className="fa fa-check" />
                        </span>
                TRAINING DATA
              </li>
                    </ul>
                    <hr />
                    <div className="text-center">
                      <button
                        type="button"
                        className="btn"
                        data-toggle="modal"
                        data-target="#buy-ticket-modal"
                        data-ticket-type="pro-access"
                      >
                        Book Now
              </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* Pro Tier */}
              <div className="col-lg-4" data-aos="fade-up" data-aos-delay={300}>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title text-muted text-uppercase text-center">
                      Session-3:
            </h5>
                    <h6 className="card-price text-center">Robotics</h6>
                    <hr />
                    <ul className="fa-ul">
                      <li>
                        <span className="fa-li">
                          <i className="fa fa-check" />
                        </span>
                Humanoid Robots
              </li>
                      <li>
                        <span className="fa-li">
                          <i className="fa fa-check" />
                        </span>
                Nano Robots
              </li>
                      <li>
                        <span className="fa-li">
                          <i className="fa fa-check" />
                        </span>
                Medical Robotics
              </li>
                      <li>
                        <span className="fa-li">
                          <i className="fa fa-check" />
                        </span>
                Robotic Locomotion
              </li>
                      <li>
                        <span className="fa-li">
                          <i className="fa fa-check" />
                        </span>
                Cloud Robotics
              </li>
                      <li>
                        <span className="fa-li">
                          <i className="fa fa-check" />
                        </span>
                Swarm Robotics
              </li>
                      <li>
                        <span className="fa-li">
                          <i className="fa fa-check" />
                        </span>
                Underwater Robotics
              </li>
                    </ul>
                    <hr />
                    <div className="text-center">
                      <button
                        type="button"
                        className="btn"
                        data-toggle="modal"
                        data-target="#buy-ticket-modal"
                        data-ticket-type="premium-access"
                      >
                        Book Now
              </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Modal Order Form */}
          <div id="buy-ticket-modal" className="modal fade">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title">Register Now</h4>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <form method="POST" action="#">
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
                    <div className="text-center">
                      <button type="submit" className="btn">
                        Register
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="buy-tickets" className="section-with-bg">
          <div className="container" data-aos="fade-up">
            <div className="section-header">
              <h2>Our students have been Hired by</h2>
            </div>
            <div
              className="row no-gutters supporters-wrap clearfix"
              data-aos="zoom-in"
              data-aos-delay={100}
            >
              <img src="/images/path/hiring.png" className="avatar-img rounded" alt="Post" />
            </div>
          </div>
        </section>
        <div id="btn-wa-container"> <a data-toggle="tooltip" data-placement="right" title="Contact us on WhatsApp" href="https://api.whatsapp.com/send?phone=917023653566" style={{ color: "#7C848A", fontSize: 14 }} > <img id="btn-wa" src="/images/path/whatsapp.jpeg" alt="" style={{ opacity: '1', width: '60px', height: '60px', border: 'none', cursor: 'pointer', opacity: '0.8', position: 'fixed', bottom: '23px', right: '28px', }} /> </a> </div>


        <footer className="text-white  text-lg-left">
          <div className="js-fix-footer2 bg-dark ">
            <div className="container page__container page-section d-flex flex-column">
              <p className="brand mb-10pt mb-1 text-white">
                <img className="brand-icon" src="/images/Digitech Vidya_fevicon_32 x 32 pixel.png" width="30" alt="" /> <span style={{ fontSize: '18px', fontFamily: 'Georgia' }} className="text-white">Digitech Vidya</span>
                {/* <!-- Button trigger modal --> */}
              </p>
              <p className="text-white small mt-n1 mb-0 "> © 2020 DANZO TECHNOLOGY LLP All rights Reserved.</p>
            </div>
          </div>
        </footer>
      </Fragment >
    );
  }
}

export default OuterEvent;