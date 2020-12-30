import React, { useState, useEffect } from 'react'
import Block from './components/block'
import Button from './components/button'
import ButtonGroup from './components/button-group'

function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    //document.title = `You clicked ${count} times`
  })
  return (
    <Block column withMargin>
      <div>You clicked {count} times</div>
      <Button large onClick={() => setCount(count + 1)}>Click Me here a long text label</Button>
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
