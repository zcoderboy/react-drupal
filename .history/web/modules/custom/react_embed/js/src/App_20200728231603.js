/** @jsx jsx */

import React from 'react'
import {css, jsx} from '@emotion/core'

const App = {}) =>{
  const drupalData = drupalSettings.drupalData
  return(
    <h1 css={css`
      color: #ff7900;
    `}>{drupalData.field_step}</h1>
  )
}

export default App