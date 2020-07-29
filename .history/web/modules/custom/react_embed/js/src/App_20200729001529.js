/** @jsx jsx */

import React from 'react'
import {css, jsx} from '@emotion/core'

const App = ({data}) =>{
  const {videoBlock} = {...drupalData}
  return(
    <>
      <img src={videoBlock.fieldImage}/>
      <h1>{videoBlock.fieldStep}</h1>
    </>
  )
}

export default App