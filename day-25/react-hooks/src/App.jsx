import React, { Component } from 'react'
// import Counter2 from './components/Counter2';
import Counter3 from './components/Counter3';
import RouterConfig from './components/config/router.config';

export default class App extends Component {

  constructor(){
    super();
    this.state={
      count:0
    }
  }
  componentDidMount(){
    console.log("component: when render first time.")
  }

  componentWillUnmount(){
    console.log("component unmounted / removed")
  }

  increment(){
    this.setState({count: this.state.count+1})
  }
  render() {
    return (
     <>
      <div>
        {/* <h1>{this.state.count}</h1> */}
        {/* <Counter2 number={this.state.count}/> */}
        <Counter3 number={this.state.count}/>
        <button onClick={this.increment.bind(this)}>click me</button>
      </div>

      <RouterConfig/>
     </>
    )
  }
}
