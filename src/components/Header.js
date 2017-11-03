import React, { Component } from 'react';
import Search from './Search.js'

export default class Header extends Component {
  render(){
    return (
      <header className="App-header">
        <Search onUpdate={this.props.onUpdate} />
      </header>
    )
  }
}
