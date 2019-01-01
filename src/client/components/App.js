import React from 'react'
import { ThemeProvider } from 'mineral-ui/themes';
import Text from 'mineral-ui/Text';

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
  }

  render(){
    return <ThemeProvider>
      <Text element="h1">Hello!</Text>
    </ThemeProvider>
  }
}