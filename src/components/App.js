import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'
// import Login from './Login'
import Home from './Home'
import NotFound from './NotFound'
import 'typeface-roboto';

class App extends Component {
  render() {
    return (
      <Switch>
        {/* <PublicRoute exact path="/login" component={Login} /> */}
        <PublicRoute exact path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    );
  }
}

export default App;
