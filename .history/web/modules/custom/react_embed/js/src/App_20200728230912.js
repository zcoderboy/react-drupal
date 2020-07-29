import React from 'react'

const App = () =>{
  const drupalData = drupalSetting.drupalData
  return(
    <h1>Hello world from React {drupalData.field}</h1>
  )
}

export default App