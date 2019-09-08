import React from 'react'

export default class InputSignup extends React.Component {
  render () {
    return (
      <input
        type={this.props.type}
        placeholder={this.props.placeholder}
        name={this.props.name}
        className={this.props.className}
        onChange={(e) => this.props.getInfo(e.target.name, e.target.value)}
      />
    )
  }
}
