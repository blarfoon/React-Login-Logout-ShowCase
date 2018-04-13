import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import './LoginPage.css';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      redirectToReferrer: false,
      loading: false,
      users: [{ username: 'davide', password: 'davide' }, { username: 'fabio', password: 'fabio' }]

    };
    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeUsername(event) {
    this.setState({ username: event.target.value });
  }

  handleChangePassword(event) {
    this.setState({ password: event.target.value });
  }

  handleSubmit(event) {
    this.setState({ loading: true });

    if (this.state.users.find((user) => user.username === this.state.username && user.password === this.state.password)) {
      this.props.fakeAuth.authenticate(() => {
        this.setState(() => ({
          redirectToReferrer: true,
          loading: false
        }));
      });
    } else {
      alert('Username or Password not correct');
      this.setState({ loading: false });
    }
  }

  render() {
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer === true) {
      return <Redirect to='/user' />;
    }
    return (
      <div>
        <div className="form-style-8">
          <h2>Login to your account</h2>
          <form>
            <input type="text" name="field1" placeholder="Username" value={this.state.username} onChange={this.handleChangeUsername} />
            <input type="password" name="field2" placeholder="Password" value={this.state.password} onChange={this.handleChangePassword} />
          </form>
          <button onClick={this.handleSubmit}>{this.state.loading ? 'Loading...' : 'Log-In'}</button>
        </div>
      </div>
    );
  }
}

export default LoginPage;
