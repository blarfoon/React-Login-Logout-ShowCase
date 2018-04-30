import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../../actions/auth';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <br />
        <Link to="/login">Login</Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isLogged: state.userState.logged
  }
}
export default connect(mapStateToProps, { login })(App);
