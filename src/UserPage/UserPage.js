import React, { Component } from 'react';
import { Redirect } from "react-router-dom";

import './UserPage.css';

class UserPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    this.setState({ loading: true });
    this.props.fakeAuth.signout(() => {
      this.setState(() => ({
        redirectToReferrer: true,
        loading: false
      }));
    });
  }

  render() {
    const { redirectToReferrer } = this.state;

    if (!this.props.isLoggedIn || redirectToReferrer) {
      return <Redirect to="/login" />;
    }
    return (
      <div>
        Protected Page <button onClick={this.handleSubmit}>{this.state.loading ? 'Loading...' : 'Logout'}</button>
      </div>
    );
  }
}

export default UserPage;
