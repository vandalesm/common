import React, { useState } from 'react'
import Block from './components/block'
import Button from './components/button'
import ButtonGroup from './components/button-group'

function App() {
  return (
    <Block column withMargin style={{maxWidth: '500px'}}>
      <Button large onClick={() => console.log('clicked')}>Click Me here a long text label</Button>
      <br/>
      <ButtonGroup
        orientation='row'
      />
      <br/>
      <ButtonGroup />
    </Block>
  )
}

export default App
