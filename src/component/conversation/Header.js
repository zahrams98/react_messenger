import React from 'react'

export default class Header extends React.Component {
  render () {
    return (
      <div className='header'>
        <span className='headername'>
          {this.props.email}
        </span>
      </div>
    )
  }
}
