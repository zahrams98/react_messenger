import React from 'react'
import './App.css'
import Messenger from './component/conversation/Messenger'
/*import Login from './component/auth/Login'*/
/*import Signup from './component/auth/Signup'*/

export default class App extends React.Component{
  render() {
    return(
      <Messenger />
    )
  }
}