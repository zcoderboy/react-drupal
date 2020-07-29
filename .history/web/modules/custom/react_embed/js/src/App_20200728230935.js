import React from 'react'

const App = () =>{
  const drupalData = drupalSettings.drupalData
  return(
    <h1>Hello world from React {drupalData.field_step}</h1>
  )
}

export default App