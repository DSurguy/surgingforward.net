import React, { Component } from 'react'
import styled from 'styled-components'
import heroImageSrc from '../assets/hero.jpg'

const HeroContainer = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 720px;
  background-image: url(${heroImageSrc});
  background-size: cover;
  background-position: center;
`

const HeroGradient = styled.div`
  position: absolute;
  bottom: -100px;
  height: 200px;
  width: 100%;
  background: rgb(12,26,29);
  background: -moz-linear-gradient(180deg, rgba(12,26,29,0) 0%, rgba(12,26,29,1) 50%, rgba(12,26,29,1) 100%);
  background: -webkit-linear-gradient(180deg, rgba(12,26,29,0) 0%, rgba(12,26,29,1) 50%, rgba(12,26,29,1) 100%);
  background: linear-gradient(180deg, rgba(12,26,29,0) 0%, rgba(12,26,29,1) 50%, rgba(12,26,29,1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#0c1a1d",endColorstr="#0c1a1d",GradientType=1);
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
      <HeroGradient />
    </HeroContainer> )
  }
}