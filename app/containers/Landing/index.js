import React, { Fragment } from 'react';
import {
  Banner, Header, Review, PageSeperator, Card, Paths, CardGroup, Feedback, Footer, AlertBox
} from 'Components';


class Landing extends React.Component {
  constructor() {
    super();
    this.state = {
      toggle: true
    }
  }
  render() {
    return (
      <Fragment>
        <AlertBox />
        <Header />

        <Banner />
        <Review />
        <div className="page-section border-bottom-2">
          <div className="container page__container">
            <PageSeperator name="TRENDING COURSES" />
            <Card />

            <div className="posts-cards border-bottom-2">
              <div className="card posts-card mb-0">
                <div className="posts-card__content d-flex align-items-center flex-wrap">
                  <img src="/images/path/access.png" className="avatar-img rounded" alt="Post" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="page-section border-bottom-2">
          <div className="container page__container">
            <div className="page-section ">
              <div className="container page__container">
                <PageSeperator name="UPCOMING COURSE" />
                <Paths />
              </div>
            </div>
          </div>
        </div>

        <div className="page-section border-bottom-2">
          <div className="container page__container">
            <div className="page-section ">
              <div className="container page__container">
                <PageSeperator name="EVENT, NEWS & HACKATHON" />
                <CardGroup />
              </div>
            </div>
          </div>
        </div>

        <div className="page-section border-bottom-2">
          <div className="container page__container">
            <div className="page-section">
              <div className="container page__container">
                <div className="page-headline text-center">
                  <h2>Our students have been Hired by</h2>
                </div>
                <div className="card posts-card mb-0">
                  <div className="posts-card__content d-flex align-items-center flex-wrap">
                    <img src="/images/path/hiring.png" className="avatar-img rounded" alt="Post" />
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div >


        <div className="page-section border-bottom-2">
          <div className="container page__container">
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

        <div>
          {
            this.state.toggle ? <div className="form-popup" >
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
