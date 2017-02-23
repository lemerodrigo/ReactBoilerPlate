import React from 'react';
import ReactDOM from 'react-dom';
import { Router, IndexRoute, Route, browserHistory } from 'react-router';

import App from './components/App.jsx';
import MustBeLoggedIn from './components/MustBeLoggedIn.jsx';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
import Home from './components/Home.jsx';
import Quizzes from './components/Quizzes.jsx';
import NewQuiz from './components/NewQuiz.jsx';
import ShowQuiz from './components/ShowQuiz.jsx';
import NotFound from './components/NotFound.jsx';
import Logout from './components/Logout.jsx';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path='/' component={App} >
      <IndexRoute component={Home} />
      <Route path='login' component={Login} />
      <Route path='signup' component={Signup} />
      <Route path='logout' component={Logout} />
      <Route component={MustBeLoggedIn}>
        <Route path='quizzes'>
          <IndexRoute component={Quizzes} />
          <Route path='new' component={NewQuiz} />
          <Route path=':id' component={ShowQuiz} />
        </Route>
      </Route>
      <Route path='*' component={NotFound} />
    </Route>
  </Router>
), document.getElementById('root'));

