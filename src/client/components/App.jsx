import React from 'react'
import Hero from './Hero.jsx'
import Body from './Body.jsx'

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
  }

  render(){
    return <React.Fragment>
      <Hero />
      <Body />
    </React.Fragment>
  }
}