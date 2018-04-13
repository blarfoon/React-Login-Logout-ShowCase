import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './NavBar.css';

class NavBar extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            {/* Non so come mai il prop non viene passato quindi la scritta risulta sempre 'login' */ }
            <Link to="/user">{this.props.isLoggedIn ? 'Your Profile' : 'Login'}</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default NavBar;
