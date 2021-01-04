import React from 'react'
import Block from './components/block'
import Button from './components/button'
import ButtonGroup from './components/button-group'
import InputText from './components/input-text'
import InputFile from './components/input-file'
import Header from './components/header'
import Logo from './components/logo'
import SearchBox from './components/search-box'
import logo192png from './components/logo/logo192.png'

function App() {
  return (
    <Block column withHeader>
      <Header>
        <Logo image={logo192png} label='dots' />
        <SearchBox onSearch={(k) => console.log(k)} />
      </Header>
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
        <Block style={{ border: '1px solid black', minHeight: '900px' }}></Block>
      </Block>
    </Block>
  )
}

export default App
