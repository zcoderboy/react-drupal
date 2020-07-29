import React from 'react'
import {css} from '@emotion/core'
const App = () =>{
  const drupalData = drupalSettings.drupalData
  return(
    <h1 css={css}>{drupalData.field_step}</h1>
  )
}

export default App