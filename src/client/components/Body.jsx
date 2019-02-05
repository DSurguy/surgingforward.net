import React from 'react';
import styled from 'styled-components'
import SocialLink from './SocialLink.jsx'

import facePicSrc from '../assets/face.jpg'
import mailIconSrc from '../assets/mail.svg'
import githubIconSrc from '../assets/github.svg'
import linkedInIconSrc from '../assets/linkedin.svg'

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
  padding: 90px;
  
  @media (max-width: 700px) {
    padding: 50px;
  }
`

const IntroFlex = styled.div`
  display: flex;
  flex-direction: row-reverse;
  @media (max-width: 700px) {
    display: block;
    width: 100%;
  }
`

const IntroFlexLeft = styled.div`
  padding: 0 32px 50px 0;
  width: 550px;

  @media (max-width: 700px) {
    width: 100%;
    padding-right: 0;
  }
`

const IntroFlexRight = styled.div`
  width: 230px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 700px) {
    width: 100%;
    height: 160px;
    margin-bottom: 20px;
  }
`

const IntroParagraph = styled.p`
  display: block;
  width: 95%;
  margin: 0 auto 30px auto;
  font-weight: 300;
  font-size: 18px;  

  @media (max-width: 700px) {
    margin: 0 0 30px 0;
  }
`

const FacePic = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 100px;
  box-shadow: 0 0 10px 3px rgba(0,0,0,0.16);

  @media (max-width: 700px) {
    width: 160px;
    height: 160px;
    border-radius: 80px;
  }
`

const Divider = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 640px;
  height: 10px;
  background-color: #EFEFEF;
`

const ConnnectParagraph = styled.p`
  font-size: 24px;
  color: #777;
  font-weight: 300;
  text-align: center;
  padding 0 0 20px 0;
`

const StyledSocialLink = styled(SocialLink)`
  margin-top: 20px;
`

export default class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return <BodyContainer>
      <IntroFlex>
        <IntroFlexRight>
          <FacePic src={facePicSrc} alt="Photo of Derek Surguy" />
        </IntroFlexRight>
        <IntroFlexLeft>
          <IntroParagraph>
            Hi! I'm Derek Surguy. I'm a front-end software engineer in Dallas, Texas. I use React, NodeJs and related modern technology to create innovative, intuitive and performant applications.
          </IntroParagraph>
          <IntroParagraph>
            I have a passion for helping others realize their goals, and strive to enable my clients and users to be more efficient and discover new ways to use their technology.
          </IntroParagraph>
          <IntroParagraph>
            If you're looking to represent yourself in the digital space, create a website for your business or just wondering how technology can help you achieve your goals, reach out! I'd love to help you succeed!
          </IntroParagraph>
        </IntroFlexLeft>
      </IntroFlex>
      <Divider />
      <ConnnectParagraph>
        Connect with me on any of these services
      </ConnnectParagraph>
      <StyledSocialLink icon={mailIconSrc} href="Surguy.Derek@gmail.com" linkPrefix={'mailto:'} />
      <StyledSocialLink icon={githubIconSrc} href="https://github.com/DSurguy" />
      <StyledSocialLink icon={linkedInIconSrc} href="https://linkedin.com/DSurguy" />
    </BodyContainer>
  }
}