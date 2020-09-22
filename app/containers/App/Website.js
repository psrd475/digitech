import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Header, Footer, AlertBox } from 'Components';
import {
  Contact
} from '../pageListAsync';

class Website extends Component {
  render() {
    return (
      <Fragment>
        <AlertBox />
        <Header />
        <Switch>
          <Route exact path="/website/contact" component={Contact} />
        </Switch>
        <Footer />
      </Fragment>
    );
  }
}

export default Website;