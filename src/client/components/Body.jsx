import React from 'react';
import styled from 'styled-components'
import facePicSrc from '../assets/face.jpg'

const BodyContainer = styled.div`
  z-index: 2;
  position: relative;
  margin-top: -110px;
  margin-left: auto;
  margin-right: auto;
  max-width: 960px;
  min-height: 400px;
  background-color: #fff;
  margin-bottom: 200px;
`

const IntroFlex = styled.div`
  display: flex;
`

const IntroFlexLeft = styled.div`
  padding: 90px 45px 50px 55px;
  width: 640px;
`

const IntroParagraph = styled.p`
  display: block;
  width: 95%;
  margin: 0 auto 30px auto;
  font-weight: 300;
  font-size: 18px;
`

const IntroFlexRight = styled.div`
  width: 320px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const FacePic = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 100px;
  margin-top: 50px;
  box-shadow: 0 0 10px 3px rgba(0,0,0,0.16)
`

export default class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return <BodyContainer>
      <IntroFlex>
        <IntroFlexLeft>
          <IntroParagraph>
            Hi! I'm Derek Surguy. I'm a front-end software engineer in Dallas, Texas. I use React, NodeJs and related modern technology to create innovative, intuitive and performant applications.
          </IntroParagraph>
          <IntroParagraph>
            I have a passion for helping other realize their goals, and strive to enable my clients and users to be more efficient and discover new ways to use their technology.
          </IntroParagraph>
          <IntroParagraph>
            If you're looking to represent yourself in the digital space, create a website for your business or just wondering how technology can help you achieve your goals, reach out! I'd love to help you succeed!
          </IntroParagraph>
        </IntroFlexLeft>
        <IntroFlexRight>
          <FacePic src={facePicSrc} alt="Photo of Derek Surguy" />
        </IntroFlexRight>
      </IntroFlex>
    </BodyContainer>
  }
}