import React from 'react'
 
 export default class Login extends React.Component  {
  constructor () {
    super()

 this.state = {
  fileds:{
    email: '',
    password: '',
  }  
 }
}
 
  handlePassword(event ) { 
    this.setState({ password: event.target.value })
  }
  handleEmail (event){
    this.setState({ ...this.state,fileds: {...this.state.fileds, email:event.target.value}})
  }
  
  render(){
      console.log('this',this)
      console.log('this', this.state)
      return (
        <div className='body'>
          <div className='container'>
            <form className='forming'> 
              <div className='form'>
                  <div className='title'>LOG IN</div>
                  <div className='user-icon'>
                      <i className='material-icons'>&#xe7fd;</i>
                      <input 
                      className='username' 
                      type='text' 
                      placeholder='username' />
                  </div>
                  <div className='pass-icon' >
                      <i className='material-icons'>&#xe88d;</i>
                      <input 
                        className='password' 
                        type='password' 
                        placeholder='password' />
                  </div>
                  <div className='rememberme'> 
                    <input  type='checkbox' />Remember me 
                  </div>
                  <div className='logindiv'>
                    <a
                      className='login' href='https://www.google.com/'>Login</a>
                  </div> 
                  <div className='no-account'> 
                    <a
                      className='sign-up' 
                      href='https://www.google.com/'>Don't have an account?
                    </a>
                  </div>
              </div>
            </form>
          </div>
        </div>

    )
  }
}

