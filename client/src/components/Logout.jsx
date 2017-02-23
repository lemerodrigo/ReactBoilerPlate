import React, { Component } from 'react';

class Logout extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.logout();
  }

  render() {
    return (
      <div className="container">
        <p>You are now logged out.</p>
      </div>
    )
  }
}

export default Logout;
