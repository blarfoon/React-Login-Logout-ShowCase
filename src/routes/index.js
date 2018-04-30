import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import App from './App/App';
import Login from './Login/Login';
import Protected from './Protected/Protected';
import Header from '../containers/Header/Header';

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route path="" component={Header} />
          <div className="container">
            <Switch className="container">
              <Route path="/login" component={Login} />
              <Route path="/user" component={Protected} />
              <Route path="/" component={App} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default Routes;
