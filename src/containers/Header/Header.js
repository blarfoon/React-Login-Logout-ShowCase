import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Header.css';

class Header extends Component {

  render() {
    return (
      <div>
        <header className="App-header">
          <h1 className="App-title">Login Logout Showcase</h1>
          {!this.props.loggedIn && "Not"} Authenticated
                </header>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb container">
            <li className="breadcrumb-item active" aria-current="page">{this.props.location.pathname}</li>
          </ol>
        </nav>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    loggedIn: state.userState.logged
  }
}

export default connect(mapStateToProps)(Header);
