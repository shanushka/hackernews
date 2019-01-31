import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    };
  }

  handleSubmit = evt => {
    evt.preventDefault();

    const storageData = window.localStorage.getItem('userData');
    const userData = JSON.parse(storageData);

    userData.forEach(data => {
      if (
        data.username === this.state.username &&
        data.password === this.state.password
      ) {
        alert('Logged in');
        window.localStorage.setItem('currentUser', JSON.stringify(data));
        this.props.history.push({ pathname: '/', state: data.username });
      }
    });
  };

  handleChange = evt => {
    const { name, value } = evt.target;

    switch (name) {
      case 'username':
        this.setState({
          username: value
        });
        break;
      case 'password':
        this.setState({
          password: value
        });
        break;
      default:
        break;
    }
  };

  handleClick = () =>{
    this.props.history.push('/');
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
      <div class ="title-bar clearfix">
        <button type='button' onClick= {this.handleClick} className='cancelbtn' />
      </div>
        <div className='login-container'>
          <h2>Login</h2>
          <label htmlFor='uname'>
            <b>Username</b>
          </label>
          <input
            type='text'
            placeholder='Enter Username'
            onChange={this.handleChange}
            name='username'
            className='uname'
            required
          />
          <label htmlFor='psw'>
            <b>Password</b>
          </label>
          <input
            type='password'
            placeholder='Enter Password'
            className='psw'
            onChange={this.handleChange}
            name='password'
            required
          />
          <button type='submit' className='login-btn'>
            Login
          </button>
          <label className='remember'>Remember me</label>
          <input type='checkbox' name='remember' />
          <div class='register-row'>
            <span>Don't Have an account</span>
            <Link to='/register'>Register</Link>
          </div>
        </div>
      </form>
    );
  }
}

export default Login;
