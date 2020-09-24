import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import {
  Event, OuterE
} from '../pageListAsync';

class Outer extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/event" component={Event} />
        <Route exact path="/eventO" component={OuterE} />
      </Switch>
    );
  }
}

export default Outer;