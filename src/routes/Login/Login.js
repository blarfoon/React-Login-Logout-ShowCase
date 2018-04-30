import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../../actions/auth';
import './Login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login_loading: false,
      redirectToUserPage: false,
      username: '',
      password: '',
    };
    this.onSubmitBtnClick = this.onSubmitBtnClick.bind(this);
    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }

  componentWillUpdate() {
    if (this.state.redirectToUserPage) {
      this.props.history.push('/user');
    }
  }

  onSubmitBtnClick(event) {
    event.preventDefault();
    this.setState({ login_loading: true });
    this.props.login({ user: this.state.username, pass: this.state.password }, () => {
      this.setState({ login_loading: false, redirectToUserPage: true });
    });
  }

  handleChangeUsername(event) {
    this.setState({ username: event.target.value });
  }

  handleChangePassword(event) {
    this.setState({ password: event.target.value });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitBtnClick} style={{ width: "50%", margin: 'auto' }}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="username" value={this.state.username} onChange={this.handleChangeUsername} className="form-control" placeholder="Enter Username" />
            <small id="emailHelp" className="form-text text-muted">Try using user: demo, pass: dev</small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" value={this.state.password} onChange={this.handleChangePassword} className="form-control" id="exampleInputPassword1" placeholder="Password" />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            disabled={this.state.login_loading}
          >
            {this.state.login_loading ? "Loading..." : "Login"}
          </button>
        </form>
        <br />
        <Link to="/" className={this.state.login_loading ? "disabled-link" : ""}>Home</Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isLogged: state.userState.logged
  }
}
export default connect(mapStateToProps, { login })(Login);
