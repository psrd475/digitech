import React, { Component, Fragment } from 'react';
import { AIBanner, AIHeader } from 'Components';

class AI extends Component {
  render() {
    return (
      <Fragment>
        <div className="mdk-header-layout__content page-content ">
          <AIBanner />
        </div>
        <AIHeader />
      </Fragment>
    );
  }
}

export default AI;