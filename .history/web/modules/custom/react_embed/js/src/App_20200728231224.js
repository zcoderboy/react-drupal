import React from 'react'
import {css} from '@emotion/core'
const App = () =>{
  const drupalData = drupalSettings.drupalData
  return(
    <h1>{drupalData.field_step}</h1>
  )
}

export default App