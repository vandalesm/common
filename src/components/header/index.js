import React from 'react'
import styled from 'styled-components'
import Block from '../block'
import { colors, dim } from '../constants'

function Header(props) {
    return (
        <Container justifyBetween alignItemsCenter>
            {props.children}
        </Container>
    )
}

export default Header

const Container = styled(Block)`
min-height: ${dim.headerHeight}px;
max-height: ${dim.headerHeight}px;
border-bottom: 1px solid white;
padding: 5px 10px;
position: fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;
z-index: 999;
background-color: ${colors.headerColor};
box-shadow: 0 8px 12px -5px ${colors.bgColorTransparent4};
`