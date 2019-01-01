import React, { Component } from 'react'
import styled from 'styled-components'
import heroImageSrc from '../assets/hero.jpg'

const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 720px;
  background-image: url(${heroImageSrc});
  background-size: cover;
  background-position: bottom;
`

export default class Hero extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( <HeroContainer>

    </HeroContainer> )
  }
}