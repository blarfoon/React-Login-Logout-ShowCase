import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../actions/auth';
import './Protected.css';

class Protected extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectToReferrer: false
    };
  }

  render() {
    const { redirectToReferrer } = this.state;

    if (!this.props.isLogged) {
      return <Redirect to="/login" />;
    }

    return (
      <div className="App">
        PROTECTED
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
