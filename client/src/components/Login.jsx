import React, { Component } from 'react';
import { IndexLink, Link } from 'react-router';

class Login extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container">
        <div className="row">
            <div className="col-md-4 col-md-offset-4 text-center">
                <div className="login-panel panel panel-default">
                    <div className="panel-heading">
                        <h1 className="panel-title">Sign in</h1>
                    </div>
                    <div className="panel-body">
                        <form role="form" id="login-form" onSubmit={this.props.login}>
                            <fieldset>
                                <div className="form-group">
                                    <input name="email" className="form-control" placeholder="E-mail" autoFocus />
                                </div>
                                <div className="form-group">
                                    <input name="password" className="form-control" placeholder="Password" />
                                </div>
                                <button type="submit" className="btn btn-lg btn-primary btn-block">Enter</button>
                            </fieldset>
                        </form>
                    </div>
                </div>
                <Link to='/signup' className="text-right">Signup</Link>
            </div>
        </div>
    </div>
    );
  }
}

export default Login;
