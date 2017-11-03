import React, { Component } from 'react';

export default class Search extends Component {
  constructor(){
    super();
    this.state = {value: ''}

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({value: event.target.value});
  }

  handleSubmit(event){
    event.preventDefault();
    let url = `https://api.themoviedb.org/3/search/multi?include_adult=false&page=1&query=${this.state.value}&language=en-US&api_key=4766eb5fc8f6a89e0522da25f0a94b54`

    fetch(url)
    .then(
      function(response){
        if (response.status !== 200) {
          console.log('Error. Status code: ' + response.status);
          return;
        }

        response.json().then(function(data){
          this.props.onUpdate(data.results);
        }.bind(this))
      }.bind(this)
    )
    .catch(function(err){
      console.log('Fetch Error :-S', err);
    });
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Search Here" value={this.state.value} onChange={this.handleChange} />
        <input type="submit" value="Submit" />
      </form>
    )
  }
}
