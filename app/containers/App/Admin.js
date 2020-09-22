import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Header, Footer } from 'Components';
import {
  Contact
} from '../pageListAsync';

class Admin extends Component {
  render() {
    return (
      <Fragment>
        Admin
        <Header />
        <Switch>
          <Route exact path="/admin/contact" component={Contact} />
          {/* <Route exact path="/contact" component={Contact} /> */}
        </Switch>
        <Footer />
      </Fragment>
    );
  }
}

export default Admin;