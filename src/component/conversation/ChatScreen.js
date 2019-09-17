import React from 'react'
import HeaderContainer from '../../container/HeaderContainer'
import BubbleContainer from '../../container/BubbleContainer'
import TypingContainer from '../../container/TypingContainer'

export default class ChatScreen extends React.Component {
  render () {
    return (
      <div className='chat-screen'>
        <HeaderContainer />
        <BubbleContainer />
        <TypingContainer />
      </div>
    )
  }
}
