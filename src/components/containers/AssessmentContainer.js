import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { setValue, submitForm } from '../../actions'
import AssessmentForm from '../views/AssessmentForm'
import AssessmentHeader from '../views/AssessmentHeader'

function AssessmentContainer(props) {
  const handleChange = e => {
    props.setValue(e.target.name, e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    const responseValues = Object.values(props.responses)
    if (isFilledOut(responseValues)) {
      props.submitForm(responseValues)
    }
  }

  const isFilledOut = values =>
    values.reduce((isFilled, element) => {
      return isFilled && element >= 0
    }, true)

  return (
    <AssessmentWrapper>
      <AssessmentHeader assessment={props.assessment} />

      <AssessmentForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        responses={props.responses}
        submitted={props.submitted}
      />
    </AssessmentWrapper>
  )
}

const mapStateToProps = state => ({
  assessment: state.assessment,
  responses: state.responses,
})

const mapDispatchToProps = dispatch => ({
  setValue: (name, value) => dispatch(setValue(name, value)),
  submitForm: responseValues => dispatch(submitForm(responseValues)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AssessmentContainer)

const AssessmentWrapper = styled.div`
  padding: 0 0 1.5rem;
  font-family: 'Lato', sans-serif;
  color: #1b2c4b;
`
