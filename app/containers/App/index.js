import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import { NotifMessage } from 'Components';
import Outer from './Outer';
import Website from './Website';
import { Landing } from '../pageListAsync';

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route
            path="/webinar"
            render={() => <Outer />}
          />
          <Route component={Website} />
        </Switch>
        <NotifMessage />
      </Fragment>
    );
  }
}

export default App;


{/* <Route
            path="/agency"
            render={() => <Agency />}
          /> */}
{/* <Route
            path="/user"
            render={() => <User />}
          />*/}
