import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import {
  Event, OuterE, AI
} from '../pageListAsync';

class Outer extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/event" component={Event} />
        <Route exact path="/eventO" component={OuterE} />
        <Route exact path="/ai" component={AI} />
      </Switch>
    );
  }
}

export default Outer;