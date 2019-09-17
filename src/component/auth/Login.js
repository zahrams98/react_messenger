import React from 'react'
import validate from '../../validation/ValidateFunction'
import CheckboxLabels from '../materialcomponent/Checkboxes'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { withRouter } from 'react-router'

class Login extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      fields: {
        email: '',
        password: ''
      },
      errors: {
        email: '',
        password: ''
      }
    }
  }

  handleChange (event) {
    const name = event.target.name
    const changeFields = this.state.fields
    changeFields[name] = event.target.value
    this.setState({ fields: changeFields })
  }

  handleError () {
    let valid = true
    const errors = {
      email: validate('email', this.state.fields.email),
      password: validate('password', this.state.fields.password)
    }
    console.log('errorrr', errors)
    this.setState({ errors },
      () => {
        Object.values(this.state.errors).map((item) => {
          if (item !== null) {
            valid = false
          }
        })
        if (valid) {
          this.handleRequest()
        }
      }
    )
  }

  handleRequest () {
    axios.post('https://api.paywith.click/auth/signin/', {
      email: this.state.fields.email,
      password: this.state.fields.password
    })
      .then((response) => {
        window.localStorage.setItem('token', response.data.data.token)
        window.localStorage.setItem('id', response.data.data.profile.id)
        this.props.history.push('/Messenger/')
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  render () {
    return (
      <div className='body'>
        <div className='container'>
          <div className='forming'>
            <div className='form'>
              <div className='title'>LOG IN</div>
              <div className='user-icon'>
                <i className='material-icons'>&#xe7fd;</i>
                <input type='text' placeholder='email'
                  name='email'
                  className='username'
                  onChange={(event) => this.handleChange(event)}
                />
              </div>
              <span className='errors'>{this.state.errors.email}</span>
              <div className='pass-icon' >
                <i className='material-icons'>&#xe88d;</i>
                <input type='password' placeholder='password'
                  name='password'
                  className='password'
                  onChange={(event) => this.handleChange(event)}
                />
              </div>
              <span className='errors'>{this.state.errors.password}</span>
              <div className='rememberme'>
                <CheckboxLabels />
              </div>
              <div className='logindiv'>
                <button
                  onClick={() => this.handleError()}
                  className='login'>Login
                </button >
              </div>
              <div className='no-account'>
                <Link className='sign-up'
                  to='/Signup/' >Don't have an account?</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}
export default withRouter(Login)
