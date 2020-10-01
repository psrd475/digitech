import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Header, Footer, AlertBox } from 'Components';
import {
  Contact, AI, Event
} from '../pageListAsync';

class Website extends Component {
  render() {
    return (
      <Fragment>
        <AlertBox />
        <Header />
        <Switch>
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/ai" component={AI} />
        </Switch>
        <Footer />
      </Fragment>
    );
  }
}

export default Website;