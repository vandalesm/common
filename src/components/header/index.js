import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import Block from '../block'
import { colors, dim } from '../../constants'

function Header(props) {
    const [raised, setRaised] = useState(false)
    const raisedRef = useRef(raised)
    const setRaisedRef = value => {
        raisedRef.current = value
        setRaised(value)
    }
    const handleScroll = (e) => {
        let scrollTop = e.srcElement.body.scrollTop
        const isCSS1Compat = ((document.compatMode || '') === 'CSS1Compat')
        scrollTop = window.pageXOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop
        if (scrollTop > 0) {
            if (!raisedRef.current) {
                setRaisedRef(true)
            }
        } else {
            if (raisedRef.current) {
                setRaisedRef(false)
            }
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    })

    return (
        <Container justifyBetween alignItemsCenter isRaised={raised}>
            {props.children}
        </Container>
    )
}

export default Header

const Container = styled(Block)`
min-height: ${dim.headerHeight}px;
max-height: ${dim.headerHeight}px;
padding: 5px 10px;
position: fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;
z-index: 999;
background-color: ${colors.headerColor};
${p => p.isRaised ?
        `box-shadow: 0 1px 2px 0 ${colors.bgColorTransparent4}, 0 2px 6px 2px ${colors.bgColorTransparent5};`
        :
        `border-bottom: 1px solid ${colors.bgColorTransparent4};`
    }
`