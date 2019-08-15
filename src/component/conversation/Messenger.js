 import React from 'react'
 import ConversationList from './ConversationList'
 import ChatScreen from './ChatScreen'


 export default class Messenger extends React.Component{
     render(){
         return(
            <div className='chat-body'>
                <div className='chat'>
                  <ConversationList />
                  <ChatScreen />
                </div>
            </div>

         )
     }
 }
 