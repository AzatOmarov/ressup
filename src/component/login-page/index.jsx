import React from 'react';
import { Redirect } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {
      userName: '',
      password: '',
      authenticated: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  onSubmit = (event) => {
    event.preventDefault();
    const { userName, password } = this.state;
  }

  isAuthenticated = () => {
    const { userName, password } = this.state;
    if (userName && userName === 'admin' && password && password === 'admin') {
      return true;
    }
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    const { userName, password } = this.state;
    const isAuthenticatedUser = this.isAuthenticated();
    return (
      isAuthenticatedUser ? <Redirect to={{ pathname: '/about' }} /> : (
        <div className="container">
          <div className="nfp">
            <input
              type="name"
              name="userName"
              value={userName}
              placeholder="Enter your user name"
              onChange={this.handleChange}
            />
            <input
              type="password"
              name="password"
              value={password}
              placeholder="Enter your password"
              onChange={this.handleChange}
            />
            <button
              type="submit"
              label="submit"
              onClick={this.onSubmit}
            >
                submit
            </button>
          </div>
        </div>
      )
    );
  }
}
export default LoginForm;
