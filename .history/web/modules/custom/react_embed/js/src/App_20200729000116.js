/** @jsx jsx */

import React from 'react'
import {css, jsx} from '@emotion/core'

const App = ({drupalData}) =>{
  return(
    <>
      <img src={drupalData.videoBlock.field_image}/>
      <h1>{drupalData.field_step}</h1>
    </>
  )
}

export default App