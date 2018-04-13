import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import './App.css';
import HomePage from '../HomePage/HomePage';
import LoginPage from '../LoginPage/LoginPage';
import UserPage from '../UserPage/UserPage';
import NavBar from '../NavBar/NavBar';

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true
    setTimeout(cb, Math.floor(Math.random() * 2000) + 1000)
  },
  signout(cb) {
    this.isAuthenticated = false
    setTimeout(cb, Math.floor(Math.random() * 2000) + 1000)
  }
};

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    fakeAuth.isAuthenticated === true
      ? <Component {...props} />
      : <Redirect to='/login' />
  )} />
);

class App extends Component {

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <NavBar isLoggedIn={fakeAuth.isAuthenticated} />

            <hr />

            <Route exact path="/" component={HomePage} />
            <Route path="/login" component={() => <LoginPage fakeAuth={fakeAuth} />} />
            <PrivateRoute path="/user" component={() => <UserPage isLoggedIn={fakeAuth.isAuthenticated} fakeAuth={fakeAuth} />} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
