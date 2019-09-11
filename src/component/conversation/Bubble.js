import React from 'react'

export default class Bubble extends React.Component {
  constructor () {
    super()
    this.state = {
      id: window.localStorage.getItem('id')
    }
  }

  render () {
    console.log('pp', this.props.messagesList)
    return (
      <div className='bubble'>
        {
          this.props.messagesList.map((message, index) => {
            if (message.sender.id == this.state.id) {
              return (
                <div key={index} className='sender'>
                  <span>{message.text}</span> </div>
              )
            } else {
              return (
                <div key={index}
                  className='reciever'>
                  <span>{message.text}</span> </div>
              )
            }
          })
        }
      </div>

    )
  }
}
