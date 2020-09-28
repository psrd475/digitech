import React, { Component, Fragment } from 'react';

class AIHeader extends Component {
  render() {
    return (
      <Fragment>
        <div id="page" className="site page">
          {/* <a class="skip-link screen-reader-text" href="#primary">Skip to content</a> */}
          {/*header start*/}
          <header id="masthead" className="header ttm-header-style-classicinfo">
            {/* ttm-fbar-main-w */}
            {/* ttm-fbar-main-w end */}
            {/* ttm-topbar-wrapper */}
            <div className="ttm-topbar-wrapper ttm-bgcolor-darkgrey ttm-textcolor-white clearfix">
              <div className="container">
                <div className="ttm-topbar-content">
                  <ul className="top-contact text-left ttm-hide">
                    <li>New Delhi - INDIA</li>
                  </ul>
                  <div className="topbar-right text-right">
                    <div className="ttm-social-links-wrapper list-inline">
                      <ul className="social-icons">
                        <li>
                          <a href="https://www.facebook.com/digitechvidya/">
                            <i className="fa fa-facebook" />
                          </a>
                        </li>
                        <li>
                          <a href="https://www.instagram.com/digitechvidyaa/">
                            <i className="fa fa-instagram" />
                          </a>
                        </li>
                        <li>
                          <a href="https://www.twitter.com/digitechvidya/">
                            <i className="fa fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="https://www.linkedin.com/digitechvidya">
                            <i className="fa fa-linkedin" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <a
                      className="ttm-btn ttm-btn-size-md ttm-btn-shape-square ttm-btn-style-fill ttm-btn-color-skincolor"
                      href="#downloadbrochure"
                    >
                      Enrol Now!
            </a>
                  </div>
                </div>
              </div>
              {/* ttm-header-wrap */}
              <div className="ttm-header-wrap">
                {/* ttm-stickable-header-w */}
                <div
                  id="ttm-stickable-header-w"
                  className="ttm-stickable-header-w ttm-bgcolor-white clearfix"
                >
                  <div id="site-header-menu" className="site-header-menu">
                    <div className="site-header-menu-inner ttm-stickable-header">
                      <div className="container">
                        {/* site-branding */}
                        <div className="site-branding">
                          <img alt src="{% static 'images/test.png' %}" />
                        </div>
                        {/* site-branding end */}
                        {/*site-navigation */}
                        <div id="site-navigation" className="site-navigation">
                          <nav id="menu" className="menu">
                            <ul id="primary-menu" className="dropdown">
                              <li
                                id="menu-item-100"
                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-100"
                              >
                                <a href="https://digitechvidya.com/">Home</a>
                              </li>
                              <li
                                id="menu-item-647"
                                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-647"
                              >
                                <a href="https://digitechvidya.com/contact/">
                                  Contact Us
                        </a>
                              </li>
                            </ul>
                          </nav>
                        </div>
                        {/* site-navigation end*/}
                      </div>
                    </div>
                  </div>
                </div>
                {/* ttm-stickable-header-w end*/}
              </div>
              {/*ttm-header-wrap end */}
            </div>
          </header>
          {/*header end*/}
        </div>
      </Fragment >
    );
  }
}

export default AIHeader;