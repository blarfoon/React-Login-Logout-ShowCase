import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../actions/auth';
import './Protected.css';

class Protected extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectToReferrer: false,
      login_loading: false
    };
    this.onClickBtnClick = this.onClickBtnClick.bind(this);
  }

  onClickBtnClick() {
    this.setState({ login_loading: true });
    this.props.login(() => {
      this.setState({ login_loading: false, redirectToUserPage: true });
    });
  }

  render() {
    const { redirectToReferrer } = this.state;

    if (!this.props.isLogged || redirectToReferrer) {
      return <Redirect to="/login" />;
    }

    return (
      <div className="App">
        PROTECTED
        <br/>
        <button
          type="button"
          className="btn btn-primary"
          onClick={this.onClickBtnClick}
          disabled={this.state.login_loading}
        >
          {this.state.login_loading ? "Loading..." : "Logout"}
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isLogged: state.userState.logged
  }
}
export default connect(mapStateToProps, { login })(Protected);
