import React, { Component, Fragment } from 'react';

import {
  Link,
  Element,
  Events,
  scroller
} from "react-scroll";

class AIHeader extends Component {
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
      <Fragment>
        {
          /* ======= Header ======= */
        }
        <header id="header">
          <div className="container">

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
                    Upcoming Batches
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
                    Curriculum
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
                    Course Details
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
                    Certification
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
                    Reviews
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
                    Project
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
                    Features
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
                    FAQs
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        {
          /* ======= Header End======= */
        }

      </Fragment>
    );
  }
}

export default AIHeader;