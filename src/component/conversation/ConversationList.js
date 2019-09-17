import React from 'react'
import ConversationBarContainer from '../../container/ConversationBarContainer'
import axios from 'axios'
import { listedConversation } from '../../action/ConversationBar'

export default class ConversationList extends React.Component {
  constructor () {
    super()

    this.state = {
      token: window.localStorage.getItem('token'),
      id: window.localStorage.getItem('id'),
      suggestionUsers: []
    }
  }

  handleSearch (e) {
    const fdata = new FormData()
    fdata.append('token', this.state.token)
    fdata.append('query', e.target.value)
    fdata.append('size', 2)

    axios.post('https://api.paywith.click/explore/search/contacts/', fdata)
      .then((response) => {
        console.log('suggestss', response.data)
        this.setState({ suggestionUsers: response.data.data.users })
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  componentDidMount () {
    axios.get('https://api.paywith.click/conversation/', {
      params: { token: this.state.token }
    })

      .then((response) => {
        console.log('handle succcess get', response.data)
        this.props.dispatch(listedConversation(response.data.data.conversation_details))
      })
      .catch((error) => {
        console.log('handle error', error)
      })
  }

  openChat (id) {
    const fdata = new FormData()
    fdata.append('token', this.state.token)
    fdata.append('user_id', id)
    axios.post('https://api.paywith.click/conversation/', fdata)
      .then((response) => {
        console.log('data:', response.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  render () {
    console.log('propz', this.state.suggestionUsers)
    return (
      <div className='conversation-list'>
        <div className='searching'>
          <input type='text' placeholder='Search..'
            className='search-input'
            onChange={(e) => this.handleSearch(e)}
          />
        </div>
        {this.state.suggestionUsers.map((user) => {
          return (
            <p  className='search-done' key={user.id}
              onClick={() => this.openChat(user.id)}
            >
              {user.email}
            </p>
          )
        })}

        { this.props.conversationList.map((item, index) => {
          return (
            item.users.map((user) => {
              if (user.id != this.state.id) {
                return (
                  <ConversationBarContainer
                    key={index}
                    email={user.email}
                    latestMessage={item.latest_message}
                    latestMessageDate={item.latest_message_date}
                    unseenMessage={item.unseen_messages}
                    conversation_id={item.id}
                    user_id={user.id}
                  />
                )
              } else return null
            })
          )
        })}
      </div>
    )
  }
}
