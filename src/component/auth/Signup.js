import React from 'react'
import axios from 'axios'
import InputSignup from './InputSignup'
import { withRouter } from 'react-router'

class Signup extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      confirm: '',
      error: ''
    }
    this.getInfo = this.getInfo.bind(this)
  }

  getInfo (name, value) {
    console.log('getinfo', name, value)
    this.setState({ [name]: value })
  }

  handleRequest () {
    if (this.state.password === this.state.confirm) {
      axios.post('https://api.paywith.click/auth/signup/', {
        email: this.state.email,
        password: this.state.password
      })
        .then((response) => {
          console.log('data', response.data)
          window.localStorage.setItem('token', response.data.token)
          this.props.history.push('/Messenger/')
        })
        .catch(function (error) {
          console.log(error)
        })
    } else {
      this.setState({ error: 'Confirm password does not match' })
    }
  }

  render () {
    console.log('this', this.state)
    return (
      <div className='body'>
        <div className='container'>
          <div className='forming'>
            <div className='form'>
              <div className='title'>SIGN UP</div>
              <div className='email-icon'>
                <i className='material-icons'>email</i>
                <InputSignup name='email'
                  placeholder=' email'
                  className='email'
                  type='text'
                  getInfo={this.getInfo}
                />
              </div>
              <div className='pass-icon'>
                <i className='material-icons'>&#xe88d;</i>
                <InputSignup name='password'
                  placeholder=' password'
                  className='password'
                  type='password'
                  getInfo={this.getInfo}
                />
              </div>
              <span className='errors'>{this.state.error}</span>
              <div className='pass-icon'>
                <i className='material-icons'>&#xe88d;</i>
                <InputSignup name='confirm'
                  placeholder=' confirm password'
                  className='password'
                  type='password'
                  getInfo={this.getInfo}
                />
              </div>
              <button className='signing' onClick={() => this.handleRequest()} >Signup</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default withRouter(Signup)
