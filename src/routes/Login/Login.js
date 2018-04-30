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
      redirectToUserPage: false
    };
    this.onLoginBtnClick = this.onLoginBtnClick.bind(this);
  }

  componentWillUpdate() {
    if (this.state.redirectToUserPage) {
      this.props.history.push('/user');
    }
  }

  onLoginBtnClick(event) {
    this.setState({ login_loading: true });
    this.props.login(() => {
      this.setState({ login_loading: false, redirectToUserPage: true });
    });
  }

  render() {
    return (
      <div>
        Logged in: {this.props.isLogged ? "true" : "false"}
        <button onClick={this.onLoginBtnClick} disabled={ this.state.login_loading }>{this.state.login_loading ? "Loading..." : "Login"}</button>
        <br />
        <Link to="/" className={ this.state.login_loading && "disabled-link" }>Home</Link>
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
