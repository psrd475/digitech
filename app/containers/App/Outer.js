import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import {
  Event, OuterE, AI
} from '../pageListAsync';

class Outer extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/webinar/event" component={Event} />
        <Route exact path="/webinar/eventO" component={OuterE} />
        <Route exact path="/webinar/ai" component={AI} />
      </Switch>
    );
  }
}

export default Outer;