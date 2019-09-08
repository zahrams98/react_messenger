import React from 'react'
import './App.css'
import Signup from './component/auth/Signup'
import Login from './component/auth/Login'
import Messenger from './component/conversation/Messenger'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import conversationbar from './reducer/ConversationBar'

const store = createStore(conversationbar)

export default class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <Router>
          <Route path='/' exact component={Login} />
          <Route path='/Signup/' component={Signup} />
          <Route path='/Messenger/' component={Messenger} />
        </Router>
      </Provider>
    )
  }
}
