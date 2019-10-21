import React from 'react'
import styled from 'styled-components'
import RadioFieldset from './AssessmentRadioFieldset'
import formValues from '../../data/formValues.js'

export default function AssessmentForm(props) {
  return (
    <AssessmentForm onSubmit={props.handleSubmit}>
      {Object.keys(formValues).map(key => (
        <RadioFieldset
          fieldsetName={key}
          fieldsetValues={formValues[key]}
          selectedValue={props.responses[key]}
          handleChange={props.handleChange}
          key={key}
        />
      ))}
      <div>
        <AssessmentButton type="submit" submitted={props.submitted}>
          {props.submitted ? 'Reset the Calculation' : 'Calculate the Score'}
        </AssessmentButton>
      </div>
    </AssessmentForm>
  )
}

const AssessmentForm = styled.form`
  padding: 6rem 1.6rem 0;
`

const AssessmentButton = styled.button`
  background-color: ${props => (props.submitted ? '#ffffff' : '#2d72da')};
  color: ${props => (props.submitted ? '#2d72da' : '#ffffff')};
  margin: 1.4rem 0 0;
  text-align: center;
  font-size: 0.8rem;
  font-weight: bold;
  padding: 0.4rem 0;
  border: 1px solid #2d72da;
  border-radius: 0.25rem;
  width: 84vw;
  max-width: 20.25rem;
  cursor: pointer;
`
