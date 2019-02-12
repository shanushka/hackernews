import React from 'react';
import { Link } from 'react-router-dom';

const Initialstate = {
  name: '',
  email: '',
  username: '',
  password: '',
  confirmPassword: '',
  formErrors: {
    name: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: ''
  }
};

class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      username: '',
      password: '',
      confirmPassword: '',
      formErrors: {
        name: '',
        email: '',
        username: '',
        password: '',
        confirmPassword: ''
      }
    };
  }

  handleValidation = () => {
    let nameError = '';
    let emailError = '';
    let userNameError = '';
    let passwordError = '';
    let confirmPassword = '';

    const userData = JSON.parse(window.localStorage.getItem('userData'));

    userData && userData.forEach(data => {
      if (this.state.username === data.username) {
        userNameError = 'Username already exists';
      }
      if (this.state.email === data.email) {
        emailError = 'Email already exists';
      }
    });

    if (!this.state.name) {
      nameError = 'Please enter your name';
    }
    if (this.state.name.length < 3) {
      nameError = 'Minimum character of 3 required';
    }
    if (!this.state.password) {
      passwordError = 'Enter password';
    }
    if (!this.state.confirmPassword) {
      confirmPassword = 'Enter Confirm password';
    }
    if (!this.state.email.includes('@')) {
      emailError = 'Invalid email';
    }
    if (!this.state.username) {
      userNameError = 'Enter a username';
    }
    if (this.state.password !== this.state.confirmPassword) {
      confirmPassword = 'Did not match password';
    }
    if (
      nameError ||
      emailError ||
      userNameError ||
      confirmPassword ||
      passwordError
    ) {
      this.setState({
        formErrors: {
          name: nameError,
          email: emailError,
          username: userNameError,
          password: passwordError,
          confirmPassword: confirmPassword
        }
      });
      return false;
    }
    return true;
  };

  handleSubmit = evt => {
    var user = JSON.parse(localStorage.getItem('userData')) || [];
    evt.preventDefault();
    const isValid = this.handleValidation();
    if (isValid) {
      user.push({
        name: this.state.name,
        email: this.state.email,
        username: this.state.username,
        password: this.state.password
      });
      window.localStorage.setItem('userData', JSON.stringify(user));
      this.props.history.push('/login');
    }
  };

  handleChange = evt => {
    evt.preventDefault();
    const { name, value } = evt.target;
    switch (name) {
      case 'name':
        this.setState({
          name: value
        });
        break;
      case 'email':
        this.setState({
          email: value
        });
        break;
      case 'uname':
        this.setState({
          username: value
        });
        break;
      case 'psw':
        this.setState({
          password: value
        });
        break;
      case 'cpsw':
        this.setState({
          confirmPassword: value
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
      <form onSubmit={this.handleSubmit} noValidate>
        <div class='title-bar clearfix'>
          <button type='button' onClick= {this.handleClick} className='cancelbtn' />
        </div>
        <div className='login-container'>
          <h2>Register</h2>
          <label htmlFor='name'>
            <b>Your Name *</b>
          </label>
          <input
            type='text'
            placeholder='Enter your name'
            name='name'
            value={this.state.name}
            onChange={this.handleChange}
            noValidate
          />
          <div className='required'>{this.state.formErrors.name}</div>
          <label htmlFor='email'>
            <b>Your Email *</b>
          </label>
          <input
            type='email'
            placeholder='Enter your email'
            name='email'
            value={this.state.email}
            onChange={this.handleChange}
            noValidate
          />
          <div className='required'>{this.state.formErrors.email}</div>
          <label htmlFor='uname'>
            <b>Username *</b>
          </label>
          <input
            type='text'
            placeholder='Enter Username'
            name='uname'
            value={this.state.username}
            onChange={this.handleChange}
            noValidate
          />
          <div className='required'>{this.state.formErrors.username}</div>
          <label htmlFor='psw'>
            <b>Password *</b>
          </label>
          <input
            type='password'
            placeholder='Enter Password'
            name='psw'
            value={this.state.password}
            onChange={this.handleChange}
            noValidate
          />
          <div className='required'>{this.state.formErrors.password}</div>
          <label htmlFor='cpsw'>
            <b>Confirm Password *</b>
          </label>
          <input
            type='password'
            placeholder='Enter Password'
            name='cpsw'
            value={this.state.confirmPassword}
            onChange={this.handleChange}
            noValidate
          />
          <div className='required'>
            {this.state.formErrors.confirmPassword}
          </div>
          <button type='submit' className='login-btn'>
            Register
          </button>
          <div className='login-bottom'>
            <Link to='/login'>Login</Link>
          </div>
        </div>
      </form>
    );
  }
}

export default Register;
