import React, { Component } from 'react';
import { IndexLink, Link } from 'react-router';

class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='navbar navbar-inverse navbar-static-top'>
          <div className='container'>
            <div className='navbar-header'>
              <Link className='navbar-brand' to='/'>Quiz Generator</Link>
            </div>

            {this.props.loggedIn ? (
              <ul className='nav navbar-nav navbar-right'>
                <li><Link to='/quizzes'>Quizzes</Link></li>
                <li><Link to='/quizzes/new'>Create new quiz</Link></li>
                <li><Link to="/logout">Log out</Link></li>
              </ul>)
            : (
              <ul className='nav navbar-nav navbar-right'>
                <li><Link to="/login">Sign in</Link></li>
              </ul>
            )}

          </div>
        </div>
    )
  }
};

export default Navbar;
