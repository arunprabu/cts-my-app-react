import React, { Component } from 'react'

class About extends Component {

  constructor(){
    super();
    console.log('------- Inside Constructor ----------');
    this.state = {
      featureName: 'About us!'
    }
  }

  componentDidMount(){
    // will be called when the comp comes into the view after render
    // ideal place for you to exec -- REST API calls
    // changing the state from here will call the render method
    console.log('------- Inside componentDidMount ----------');
  }

  handleChangeText = () => {
    // setState will call render method -- to update UI
    this.setState( {
      featureName: 'About Us............'
    });
  }

  componentWillUnmount(){
    // when the comp goes out of the view -- this method will be called
    console.log('------- Inside componentWillUnmount ----------');
  }

  render() {
    console.log('------- Inside Render ----------');
    return (
      <div>
        <h1>{this.state.featureName}</h1>

        <button onClick={this.handleChangeText}>Change Page Text</button>
      </div>
    )
  }
}

export default About;