import React, { Component, Fragment } from 'react';
import AIUpcomingBatches from './AIUpcomingBatches';
import {
  Link,
  Element,
  Events,
  scroller
} from "react-scroll";
import AICurriculum from './AICurriculum';

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
                    className="upcomingbatches"
                    to="upcomingbatches"
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
                    className="curriculum"
                    to="curriculum"
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
                    className="coursedetails"
                    to="coursedetails"
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
                    className="certification"
                    to="certification"
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
        <div>
          <Element name="upcomingbatches" className="element" >
            <AIUpcomingBatches />
          </Element>
          <Element name="curriculum" className="element">
            <AICurriculum />
          </Element>
          <Element name="curriculum" className="element">
            <AICurriculum />
          </Element>
        </div>

      </Fragment>
    );
  }
}

export default AIHeader;