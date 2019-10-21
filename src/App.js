import React from 'react'
import AssessmentContainer from './components/containers/AssessmentContainer'
import { createGlobalStyle } from 'styled-components'

function App() {
  return (
    <div className="App">
      <AssessmentContainer />
      <GlobalStyle />
    </div>
  )
}

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Lato&display=swap');

  body {
    margin: 0;
    font-family: -apple-system, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, "Courier New", monospace;
  }
`

export default App
