import React from 'react'
import ChatScreen from './ChatScreen'
import ConversationListContainer from '../../container/ConversationListContainer'

export default class Messenger extends React.Component {
  render () {
    return (
      <>
        <div className='chat-body'>
          <div className='chat'>
            <ConversationListContainer />
            <ChatScreen />
          </div>
        </div>
      </>

    )
  }
}
