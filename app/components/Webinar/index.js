import React, { Component, Fragment } from 'react';
import About from './About'
import Contact from './Contact';
import Footer from './Footer';
import Header from './Header';
import Intro from './Intro';
import BuyTicket from './BuyTicket';

import {
  Link,
  Element,
  Events,
  scroller
} from "react-scroll";
import Faq from './Faq';

class index extends Component {
  componentDidMount() {
    Events.scrollEvent.register("begin", function () {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register("end", function () {
      console.log("end", arguments);
    });
  }
  scrollTo(offset) {
    scroller.scrollTo("scroll-to-element", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
      offset: offset
    });
  }
  scrollToWithContainer() {
    let goToContainer = new Promise((resolve, reject) => {
      Events.scrollEvent.register("end", () => {
        resolve();
        Events.scrollEvent.remove("end");
      });

      scroller.scrollTo("scroll-container", {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart"
      });
    });

    goToContainer.then(() =>
      scroller.scrollTo("scroll-container-second-element", {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
        containerId: "scroll-container",
        offset: 50
      })
    );
  }
  componentWillUnmount() {
    Events.scrollEvent.remove("begin");
    Events.scrollEvent.remove("end");
  }

  render() {
    return (
      // <div>
      //   {/* <Header />
      //   <Intro />
      //   <About />
      //   <Contact />
      //   <Footer /> */}
      // </div>
      <Fragment>
        {
          /* ======= Header ======= */
        }
        <header id="header">
          <div className="container">
            <div id="logo" className="pull-left">
              {/* Uncomment below if you prefer to use a text logo */}
              {/* <h1><a href="#intro">The<span>Event</span></a></h1>*/}
              <a href="index.html" className="scrollto">
                <img src="assets/img/logo.png" alt="" title="logo" />
              </a>
            </div>
            <nav id="nav-menu-container">
              <ul className="nav-menu">
                <li className="menu-active">
                  <Link
                    activeClass="active"
                    className="home"
                    to="home"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={50}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    className="about"
                    to="about"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-55}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    className="topic"
                    to="topic"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    Topic
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    className="contact"
                    to="contact"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    className="hireby"
                    to="hireby"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    Hired By
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    className="hotels"
                    to="hotels"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    Buy Tickets
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        {
          /* ======= Header End======= */
        }
        <div>
          <Element name="home" className="element" >
            <Intro />
          </Element>
        </div>
        <main id="main">
          <Element name="about" className="element">
            <About />
          </Element>
          <Element name="topic" className="element">
            <Faq />
          </Element>
          <Element name="contact" className="element">
            <Contact />
          </Element>
          <Element name="hireby" className="element">
            {
              /* ======= Supporters Section ======= */
            }
            <section id="supporters" className="section-with-bg">
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
          </Element>
          <BuyTicket />
        </main>
        <Footer />
      </Fragment>
    );
  }
}

export default index;