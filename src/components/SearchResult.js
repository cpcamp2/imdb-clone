import React, { Component } from 'react';

export default class SearchResult extends Component{
  render(){
    let data = this.props.data
    console.log(this.props.data)
    return(
      <div id="SearchResult">
        {data.map(function(obj){
          return <p>{obj.title}<br/> {obj.overview}</p>
        })}
      </div>
    )
  }
}
