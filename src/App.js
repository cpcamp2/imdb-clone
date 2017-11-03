import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js'
import SearchResult from './components/SearchResult.js'

class App extends Component {
  constructor(){
    super()
    this.state = {result:[]}
    this.updateResult = this.updateResult.bind(this);
  }

  updateResult(newResult){
    this.setState({result: newResult})
  }

  render() {
    return (
      <div className="App">
        <Header onUpdate={this.updateResult}/>
        <SearchResult data={this.state.result} />
      </div>
    );
  }
}

export default App;
