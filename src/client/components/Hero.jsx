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
  background-position: center;
`

const HeroContentPadding = styled.div`
  width: 400px;
  height: 240px;
  flex-grow: 0;
`

const HeroContent = styled.div`
  width: 400px;
  height: 200px;
  border: 4px solid var(--gray0);
`

const Divider = styled.div`
  width: 80%;
  height: 2px;
  margin: 10px auto;
  background-color: var(--gray0);
`

const TopHeader = styled.h1`
  text-align: center;
  color: var(--gray0);
`

const SubHeader = styled.h2`
  margin-top: 24px;
  font-size: 1.25em;
  font-weight: 400;
  text-align: center;
  color: var(--gray0);
`

export default class Hero extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( <HeroContainer>
      <HeroContentPadding>
        <HeroContent>
          <TopHeader>Derek Surguy</TopHeader>
          <Divider />
          <SubHeader>Custom Software, Websites &amp; Consulting</SubHeader>
        </HeroContent>
      </HeroContentPadding>
    </HeroContainer> )
  }
}