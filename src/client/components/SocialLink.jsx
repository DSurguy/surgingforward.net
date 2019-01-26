import React from 'react'
import styled from 'styled-components'
import copyIconSrc from '../assets/copy.svg'

const LinkContainer = styled.div`
  box-shadow: 0 0 6px rgba(0,0,0,0.16);
  height: 80px;
  margin-bottom: 32px;
  display: flex;
`

const IconContainer = styled.div`
  display: flex;
  width: 78px;
  height: 100%;
  justify-content: center;
  align-items: center;
`

const Icon = styled.img`
  width: 48px;
  height: 48px;
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
  }
}