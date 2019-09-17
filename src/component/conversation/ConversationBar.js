import React from 'react'
import axios from 'axios'
import { getUserName, getPms } from '../../action/ConversationBar'
export default class ConversationBar extends React.Component {
  constructor () {
    super()

    this.state = {
      token: window.localStorage.getItem('token'),
      id: window.localStorage.getItem('id')
    }
  }

  getChats () {
    this.props.dispatch(getUserName(this.props.email, this.props.conversation_id))
    const fdata = new FormData()
    fdata.append('token', this.state.token)
    fdata.append('conversation_id', this.props.conversation_id)
    fdata.append('date', (new Date().getTime() / 1000).toFixed(0))
    fdata.append('size', 10)
    axios.post('https://api.paywith.click/conversation/details/', fdata)
      .then((response) => {
        console.log('datadetailamon:', response.data)
        this.props.dispatch(getPms(response.data.data.messages))
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  render () {
    console.log('propsha', this.props.conversation_id)
    console.log('wwww', this.props.email)
    return (
      <div className='conversation-bar' onClick={() => this.getChats()}>
        <div>
          <div className='name-date'>
            <span> {this.props.email}</span>
            <span> {this.props.latestMessageDate.slice(11,16)}
            </span>
          </div>
          <div className='name-date'>
            <span>{this.props.latestMessege}</span>
            <span className='unseen'>{this.props.unseenMessage[this.state.id]} </span>
          </div>
        </div>
      </div>
    )
  }
}
