import React from 'react'
import styled from 'styled-components'
import AssessmentScore from './AssessmentScore'
import logo from '../../assets/logo192.png'

export default function AssessmentHeader(props) {
  return (
    <AssessmentHeader>
      <AssessmentLogo>
        <AssessmentLogoImg src={logo} alt="logo" />
      </AssessmentLogo>
      <AssessmentLogoHeading>Assessment Score</AssessmentLogoHeading>
      <AssessmentScore assessment={props.assessment} />
    </AssessmentHeader>
  )
}

const AssessmentHeader = styled.div`
  position: fixed;
  width: 100%;
  background-color: #fff;
`

const AssessmentLogo = styled.div`
  background-color: #2d72da;
`

const AssessmentLogoImg = styled.img`
  width: 1rem;
  padding: 0.8rem 1.6rem;
  display: block;
`

const AssessmentLogoHeading = styled.h1`
  color: #1b2c4b;
  background-color: #fff;
  border-bottom: 1px solid #ccc;
  padding: 1rem 0;
  margin: 0 1.6rem;
  font-size: 0.8rem;
`
