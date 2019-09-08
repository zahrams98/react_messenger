import React from 'react'
import axios from 'axios'

export default class Typing extends React.Component {
  constructor () {
    super()
    this.state = {
      token: window.localStorage.getItem('token'),
      newMessage: ''
    }
  }

  handleMessage () {
    const fdata = new FormData()
    fdata.append('token', this.state.token)
    fdata.append('text', this.state.newMessage)
    fdata.append('conversation_id', this.props.id)

    axios.post('https://api.paywith.click/conversation/create/', fdata)
      .then((response) => {
        console.log('typingggg:', response.data.data.messages)
        this.setState({ newMessage: '' })
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  render () {
    return (
      <div className='typing'>
        <input placeholder='message ...'
          value={this.state.newMassage}
          className='type'
          name='newMassage'
          onChange={(e) => this.setState({ newMessage: e.target.value })}
        />
        <button className='send'
          onClick={() => this.handleMessage()}
          style={{ fontSize: '13px',
            border: 'none',
            borderRadius: '50%',
            backgroundColor: 'coral',
            outline: 'none',
            marginTop: '20px',
            marginRight: '5px'
          }}>
          <i className='material-icons'>send</i>
        </button>
      </div>
    )
  }
}
