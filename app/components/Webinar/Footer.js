import React, { Component, Fragment } from 'react';

class Footer extends Component {
  render() {
    return (
      <Fragment>
        <div>
          {/* ======= Footer ======= */}
          <footer id="footer">
            <div className="footer-top">
              <div className="container">
                <div className="row">
                  <div className="col-lg-3 col-md-6 footer-info">
                    <img src="assets/img/logo.png" alt="TheEvenet" />
                    <p>
                      In alias aperiam. Placeat tempore facere. Officiis voluptate ipsam
                      vel eveniet est dolor et totam porro. Perspiciatis ad omnis fugit
                      molestiae recusandae possimus. Aut consectetur id quis. In
                      inventore consequatur ad voluptate cupiditate debitis accusamus
                      repellat cumque.
            </p>
                  </div>
                  <div className="col-lg-3 col-md-6 footer-links">
                    <h4>Useful Links</h4>
                    <ul>
                      <li>
                        <i className="fa fa-angle-right" /> <a href="#!">Home</a>
                      </li>
                      <li>
                        <i className="fa fa-angle-right" /> <a href="#!">About us</a>
                      </li>
                      <li>
                        <i className="fa fa-angle-right" /> <a href="#!">Services</a>
                      </li>
                      <li>
                        <i className="fa fa-angle-right" />{" "}
                        <a href="#!">Terms of service</a>
                      </li>
                      <li>
                        <i className="fa fa-angle-right" />{" "}
                        <a href="#!">Privacy policy</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-3 col-md-6 footer-links">
                    <h4>Useful Links</h4>
                    <ul>
                      <li>
                        <i className="fa fa-angle-right" /> <a href="#!">Home</a>
                      </li>
                      <li>
                        <i className="fa fa-angle-right" /> <a href="#!">About us</a>
                      </li>
                      <li>
                        <i className="fa fa-angle-right" /> <a href="#!">Services</a>
                      </li>
                      <li>
                        <i className="fa fa-angle-right" />{" "}
                        <a href="#!">Terms of service</a>
                      </li>
                      <li>
                        <i className="fa fa-angle-right" />{" "}
                        <a href="#!">Privacy policy</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-3 col-md-6 footer-contact">
                    <h4>Contact Us</h4>
                    <p>
                      E4, Mohan Estate,<br />
              New Delhi 110044
              <br />
              207, Maharana Pratap Nagar,
              <br />Jaipur, Rajasthan 302012 <br />
              India<br />
                      <strong>Phone:</strong> +91 9934-699-512
              <br />
                      <strong>Email:</strong> info@digitechvidya.com
              <br />
                    </p>
                    <div className="social-links">
                      <a href="#!" className="twitter">
                        <i className="fa fa-twitter" />
                      </a>
                      <a href="#!" className="facebook">
                        <i className="fa fa-facebook" />
                      </a>
                      <a href="#!" className="instagram">
                        <i className="fa fa-instagram" />
                      </a>
                      <a href="#!" className="google-plus">
                        <i className="fa fa-google-plus" />
                      </a>
                      <a href="#!" className="linkedin">
                        <i className="fa fa-linkedin" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="copyright">
                © Copyright <strong>TheEvent</strong>. All Rights Reserved
      </div>
              <div className="credits">
                {/*
  All the links in the footer should remain intact.
  You can delete the links only if you purchased the pro version.
  Licensing information: https://bootstrapmade.com/license/
  Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/buy/?theme=TheEvent
*/}
        Designed by <a href="https://digitechvidya.com/">DANZO TECHNOLOGY</a>
              </div>
            </div>
          </footer>
          {/* End  Footer */}
          <a href="#!" className="back-to-top">
            <i className="fa fa-angle-up" />
          </a>
        </div>

      </Fragment>
    );
  }
}

export default Footer;