import * as React from 'react'
import styled from 'styled-components'

export default function AssessmentScore(props) {
  if (!props.assessment) return ''
  return <AssessmentScore>{props.assessment} points</AssessmentScore>
}

const AssessmentScore = styled.div`
  padding: 0.5rem 1rem;
  font-weight: bold;
  border: 1px solid #999;
  border-radius: 0.25rem;
  position: absolute;
  right: 1.75rem;
  top: 3.45rem;
  font-size: 0.8rem;
`
