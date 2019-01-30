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
        alert('Logged in')
        window.localStorage.setItem('currentUser', JSON.stringify(data));
        this.props.history.push({pathname:'/', state:data.username});
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

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className='login-container'>
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
          <label>Remember me</label>
          <input type='checkbox' name='remember' />
          <div>
            <span>Don't Have an account</span>
            <Link to='/register'>Register</Link>
          </div>
        </div>
        <div className='login-container'>
          <button type='button' className='cancelbtn'>
            Cancel
          </button>
        </div>
      </form>
    );
  }
}

export default Login;
