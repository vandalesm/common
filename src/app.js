import React from 'react'
import Block from './components/block'
import Button from './components/button'
import ButtonGroup from './components/button-group'
import InputText from './components/input-text'
import InputFile from './components/input-file'

function App() {
  return (
    <Block column withMargin style={{ maxWidth: '500px' }}>
      <InputFile onChange={(e) => console.log(e.target.files)} multiple />
      <br />
      <Block>
        <InputText onChange={(e) => console.log(e.target.value)} />
        <span>&nbsp;</span>
        <Button>Submit</Button>
      </Block>
      <br />
      <Button large onClick={() => console.log('clicked')}>Click Me here a long text label</Button>
      <br />
      <ButtonGroup
        orientation='row'
      />
      <br />
      <ButtonGroup />
    </Block>
  )
}

export default App
