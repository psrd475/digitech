import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import {
  Event
} from '../pageListAsync';

class Outer extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/event" component={Event} />
      </Switch>
    );
  }
}

export default Outer;