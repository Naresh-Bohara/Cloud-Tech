import React, { Component } from 'react'

export default class Counter2 extends Component {
    componentDidUpdate(prevprops, prevState){
        if(prevprops.number != this.props.number){
            console.log("component updated")
        }
    }
  render() {
    return (
      <div>
         <h1>{this.props.number}</h1>
      </div>
    )
  }
}
