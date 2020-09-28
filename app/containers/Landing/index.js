import React, { Fragment } from 'react';
import {
  Banner, Header, Review, PageSeperator, Card, Paths, CardGroup, Feedback, Footer, AlertBox, GrabNow
} from 'Components';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Alert, Modal, Button, Container, Row, Col, Form } from 'react-bootstrap';


class Landing extends React.Component {
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
  componentDidMount() {
    AOS.init();
  }
  render() {
    const { show, isShowing, otp } = this.state;
    return (
      <Fragment >
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
              <a onClick={() => { this.openModalHandler() }} style={{ color: "#303956", padding: '3px' }}> GRAB NOW </a></Alert.Heading>
          </Alert>
          : ''
        }

        {/* <AlertBox openModalHandler={this.openModalHandler} /> */}
        <Header />

        {isShowing ?
          <Modal show={isShowing} onHide={this.closeModalHandler}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >

            {/* <Modal.Header closeButton>

            </Modal.Header> */}
            <Modal.Body className="show-grid" >
              {/* <Container> */}
              <Row>
                <Col xs={12} md={6} style={{ alignItems: 'center' }}>
                  <div style={{
                    backgroundImage: 'linear-gradient(to left,#fad961,#f76b1c)', padding: '55px'
                  }}>
                    <div><h2> OFFER ENDING IN : </h2></div>
                    <h2>              <span style={{ background: "#e27b27", padding: '3px' }}>
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
                      <span className="days_ref text"> M </span></h2>

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
                    {/* <Button variant="primary" type="submit" onClick={this.closeModalHandler}>Close</Button> */}
                  </Form>
                </Col>

              </Row>
              {/* </Container> */}
            </Modal.Body>

          </Modal> : ''}
        {otp ?
          <Modal show={otp} onHide={this.closeModalOTP}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >

            {/* <Modal.Header closeButton>

            </Modal.Header> */}
            <Modal.Body className="show-grid" >
              {/* <Container> */}
              <Row>
                <Col xs={12} md={6} style={{ alignItems: 'center' }}>
                  <div style={{
                    backgroundImage: 'linear-gradient(to left,#fad961,#f76b1c)', padding: '55px'
                  }}>
                    <div><h2> OFFER ENDING IN : </h2></div>
                    <h2>              <span style={{ background: "#e27b27", padding: '3px' }}>
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
                      <span className="days_ref text"> M </span></h2>

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
              {/* </Container> */}
            </Modal.Body>

          </Modal> : ''}

        {/* <GrabNow className="modal"
          show={this.state.isShowing}
          close={this.closeModalHandler} /> */}

        <Banner />
        <Review />
        <div className="page-section border-bottom-2">
          <div className="container page__container" data-aos="fade-up">
            <PageSeperator name="TRENDING COURSES" />
            <Card />

            <div className="posts-cards border-bottom-2">
              <div className="card posts-card mb-0">
                <div className="posts-card__content d-flex align-items-center flex-wrap">
                  <img src="/images/path/access.png" className="avatar-img rounded" alt="Post" data-aos="zoom-in"
                    data-aos-delay={100} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="page-section border-bottom-2">
          <div className="container page__container" data-aos="fade-up">
            <div className="page-section ">
              <div className="container page__container">
                <PageSeperator name="UPCOMING COURSE" />
                <Paths />
              </div>
            </div>
          </div>
        </div>

        <div className="page-section border-bottom-2">
          <div className="container page__container" data-aos="fade-up">
            <div className="page-section ">
              <div className="container page__container">
                <PageSeperator name="EVENT, NEWS & HACKATHON" />
                <CardGroup />
              </div>
            </div>
          </div>
        </div>

        <div className="page-section border-bottom-2">
          <div className="container page__container" data-aos="fade-up">
            <div className="page-section">
              <div className="container page__container">
                <div className="page-headline text-center">
                  <h2>Our students have been Hired by</h2>
                </div>
                <div className="card posts-card mb-0">
                  <div className="posts-card__content d-flex align-items-center flex-wrap">
                    <img src="/images/path/hiring.png" className="avatar-img rounded" alt="Post" data-aos="zoom-in"
                      data-aos-delay={100} />
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div >


        <div className="page-section border-bottom-2">
          <div className="container page__container" data-aos="fade-up">
            <div className="page-section">
              <div className="container page__container">
                <div className="page-headline text-center">
                  <h2>Feedback</h2>
                  <p className="lead measure-lead mx-auto text-black-70">
                    What other students turned professionals have to say about us after
                    learning with us and reaching their goals.
                  </p>
                </div>
                <Feedback />
              </div>
            </div>
          </div>
        </div >

        <div >
          {
            this.state.toggle ? <div className="form-popup" data-aos="zoom-in"
              data-aos-delay={800}>
              <form className="form-container">
                <span className="open-button1">Drop us a Query</span>

                <input type="text" placeholder="Contact Number" name="contact_no" required />
                <input type="password" placeholder="Email" name="email" required />
                <input type="text" placeholder="Query" name="query" required />
                <button type="submit" className="btn">
                  Submit Query
                </button>
                <span className="close" onClick={() => { this.setState({ toggle: !this.state.toggle }) }}>
                  &times;
                </span>
              </form>
            </div>
              : null
          }
          <button onClick={() => { this.setState({ toggle: !this.state.toggle }) }} className="open-button">Drop Us a Query</button>
        </div>


        <Footer />
      </Fragment>
      // <Fragment>
      //   <Header />
      //   <div className="wrapper">
      //     <UmrahSearch />
      //     <Features />
      //     <ProgramPackages title=" برامج اقتصادية" />
      //     <ProgramPackages title=" قريب من الحرمين" />
      //     <ProgramPackages title=" رفاهية اعلى " />
      //     <Newsletter />
      //   </div>
      // </Fragment>
    );
  }
}

export default Landing;
