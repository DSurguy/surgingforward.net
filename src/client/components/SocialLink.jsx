import React from 'react'
import styled from 'styled-components'
import copyIconSrc from '../assets/copy.svg'
import cogoToast from 'cogo-toast';

const LinkContainer = styled.div`
  box-shadow: 0 0 6px rgba(0,0,0,0.16);
  height: 80px;
  margin-bottom: 32px;
  display: flex;

  @media (max-width: 700px) {
    margin-left: -32px;
    margin-right: -32px;
    height: 144px;
    flex-wrap: wrap;
  }

  @media (max-width: 420px) {
    position: relative;
  }
`

const IconContainer = styled.div`
  display: flex;
  width: 78px;
  height: 100%;
  justify-content: center;
  align-items: center;

  @media (max-width: 700px) {
    width: 64px;
    min-width: 64px;
    height: 68px;
  }

  @media (max-width: 420px) {
    width: 32px;
    min-width: 0;
    height: 32px;
    position: absolute;
    top: -10px;
    left: -10px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 0 10px 3px rgba(0,0,0,0.16);
  }
`

const Icon = styled.img`
  width: 48px;
  height: 48px;

  @media (max-width: 700px) {
    width: 32px;
    height: 32px;
    margin-top: 8px;
  }

  @media (max-width: 420px) {
    width: 28px;
    height: 28px;
    margin-top: 0;
  }
`

const LinkBackground = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: center;
  background-color: #f5f5f5;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  margin-top: 12px;
  height: 56px;

  @media (max-width: 700px) {
    border-radius: 8px;
    margin-right: 16px;
    justify-content: center;
  }

  @media (max-width: 420px) {
    margin-left: 16px;
  }
`

const Link = styled.a`
  font-size: 24px;
  font-weight: 300;
  margin-left: 16px;
  color: #000;

  &:active,
  &:hover,
  &:visited {
    color: #000;
  }

  @media (max-width: 700px) {
    margin-left: 0;
    font-size: 22px;
  }

  @media (max-width: 420px) {
    font-size: 20px;
  }
`

const LinkCopyButton = styled.div`
  display: flex;
  width: 120px;
  height: 56px;
  margin-right: 12px;
  background-color: #0099FF;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  margin-top: 12px;
  align-items: center;
  cursor: pointer;
  user-select: none;

  &:active {
    background-color: #007BCE;
  }

  @media (max-width: 700px) {
    width: calc(100% - 32px);
    border-radius: 8px;
    margin: 0 auto;
    justify-content: center;
  }
`

const LinkCopyIcon = styled.img`
  height: 32px;
  width: 32px;
  margin: 0 10px 0 10px;

  @media (max-width: 700px) {
    height: 24px;
    width: 24px;
    margin: 0 10px 0 0;
  }
`

const LinkCopyText = styled.div`
  color: #fff;
  font-size: 24px;

  @media (max-width: 700px) {
    font-size: 22px;
  }

  @media (max-width: 420px) {
    font-size: 20px;
  }
`

const HiddenDiv = styled.div`
  position: absolute;
  display: block;
  width: 1px;
  height: 1px;
  left: -9999px;
  overflow: hidden;
`

export default class SocialLink extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }

    this.setLinkRef = link => {
      this.linkRef = link
    }

    this.copyLink = this.copyLink.bind(this)
  }
  render() { 
    return <LinkContainer>
      <IconContainer>
        <Icon src={this.props.icon} />
      </IconContainer>
      <LinkBackground>
        <Link href={`${this.props.linkPrefix||''}${this.props.href}`} >{this.props.href}</Link>
        <HiddenDiv ref={this.setLinkRef}>{this.props.href}</HiddenDiv>
      </LinkBackground>
      <LinkCopyButton onClick={this.copyLink}>
        <LinkCopyIcon src={copyIconSrc} />
        <LinkCopyText>Copy</LinkCopyText>
      </LinkCopyButton>
    </LinkContainer>
  }

  copyLink(){
    window.getSelection().removeAllRanges();
    let range = document.createRange()
    range.selectNode(this.linkRef)
    window.getSelection().addRange(range);
    document.execCommand('copy')

    cogoToast.success(`Copied to clipboard: "${this.props.href}"`);
  }
}