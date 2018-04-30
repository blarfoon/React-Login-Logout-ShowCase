import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import { login } from '../actions/auth';
import App from './App/App';
import Login from './Login/Login';
import Protected from './Protected/Protected';
import Header from '../components/Header/Header';

let isLogged = true;

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    isLogged
      ? <Component {...props} />
      : <Redirect to='/login' />
  )} />
);

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/user" component={Protected} />
            <Route path="/" component={App} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

function mapStateToProps(state) {
  isLogged = state.userState.logged;
  return {
    isLogged: state.userState.logged
  }
}
export default connect(mapStateToProps, { login })(Routes);
