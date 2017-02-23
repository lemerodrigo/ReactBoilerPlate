import React, { Component } from 'react';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.MIN_PASSWORD_LENGTH = 3;
    this.state = {
      feedback: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.email.length < this.MIN_PASSWORD_LENGTH || this.state.password.length < this.MIN_PASSWORD_LENGTH) {
        this.setState({feedback: `E-mail and password must have at least ${this.MIN_PASSWORD_LENGTH} chars!`});
        return;
    }
    if (this.state.password !== this.state.confirmPassword) {
        this.setState({feedback:'Passowrds don\'t match!'});
        return;
    }
    this.props.signUp(e);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
            <div className="col-md-4 col-md-offset-4 text-center">
                {this.state.feedback &&
                    <div className="alert alert-danger" role="alert">
                        <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                        <span className="sr-only">Error:</span>
                        {this.state.feedback}
                    </div>
                }
                <div className="login-panel panel panel-default">
                    <div className="panel-heading">
                        <h1 className="panel-title">Create account</h1>
                    </div>
                    <div className="panel-body">
                        <form role="form" id="login-form" onSubmit={this.handleSubmit}>
                            <fieldset>
                                <div className="form-group">
                                    <input name="email" className="form-control" placeholder="E-mail" autoFocus onChange={this.handleChange} />
                                </div>
                                <div className="form-group">
                                    <input name="password" className="form-control" placeholder="Password" onChange={this.handleChange} />
                                </div>
                                <div className="form-group">
                                    <input name="confirmPassword" className="form-control" placeholder="Confirm password" onChange={this.handleChange} />
                                </div>
                                <button type="submit" className="btn btn-lg btn-primary btn-block">Signup</button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
  }
}

export default Signup;
