import { Meteor } from 'meteor/meteor';

import React from 'react';
import { Link } from 'react-router-dom';

export default class NavBar extends React.Component {
  onLogout(){
    Accounts.logout();
  }

  render() {
    if (Meteor.userId()) {
      return (
        <div>

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="/">Navbar</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to='/group'>Groups</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/calendar'>Calendar</Link>
              </li>
              <li className="nav-item">
                <span className="nav-link" onClick={this.onLogout.bind(this)}>Logout</span>
              </li>
            </ul>
          </div>
        </nav>
        </div>
      );
    } else {
      return (
        <div>

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="/">Navbar</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to='/signup'>Signup</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/login'>Login</Link>
              </li>
            </ul>
          </div>
        </nav>
        </div>
      );
    }
  }
}
