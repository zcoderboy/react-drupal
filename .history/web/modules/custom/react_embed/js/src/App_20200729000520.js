/** @jsx jsx */

import React from 'react'
import {css, jsx} from '@emotion/core'

const App = ({drupalData}) =>{
  const {videoBlock} = {...drupalData}
  return(
    <>
      <img src={videoBlock.field_image}/>
      <h1>{videoBlock.field_step}</h1>
    </>
  )
}

export default App