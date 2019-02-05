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
`

const Icon = styled.img`
  width: 48px;
  height: 48px;

  @media (max-width: 700px) {
    width: 32px;
    height: 32px;
    margin-top: 8px;
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
    font-size: 22px;
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
  margin-top: 12px;
  margin: 0 10px;
`

const LinkCopyText = styled.div`
  color: #fff;
  font-size: 24px;
`

const HiddenInput = styled.input`
  width: 1px;
  height 1px;
  position: absolute;
  left: -9999px;
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
        <HiddenInput ref={this.setLinkRef} type="text" value={this.props.href} />
      </LinkBackground>
      <LinkCopyButton onClick={this.copyLink}>
        <LinkCopyIcon src={copyIconSrc} />
        <LinkCopyText>Copy</LinkCopyText>
      </LinkCopyButton>
    </LinkContainer>
  }

  copyLink(){
    this.linkRef.select()
    document.execCommand("copy")
    cogoToast.success(`Copied to clipboard: "${this.linkRef.value}"`);
  }
}