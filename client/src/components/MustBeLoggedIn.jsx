import React, { Component } from 'react';
import { Router, IndexRoute, Route, browserHistory } from 'react-router';

class MustBeLoggedIn extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // const { dispatch, currentURL } = this.props

    if (!this.props.loggedIn) {
      // set the current url/path for future redirection (we use a Redux action)
      // then redirect (we use a React Router method)
    //   dispatch(setRedirectUrl(currentURL))
      browserHistory.replace('/login');
    }
  }

  render() {
    if (this.props.loggedIn) {
      return React.cloneElement(this.props.children, {
          quizzes: this.props.quizzes,
          loggedIn: this.props.loggedIn,
          updateState: this.props.updateState,
          getState: this.props.getState,
          login: this.props.login,
          createQuiz: this.props.createQuiz,
      })
    } else {
      return null;
    }
  }
}

export default MustBeLoggedIn;
