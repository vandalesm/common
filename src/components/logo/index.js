import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import logo from './logo192.png'
import Block from '../block'
import { colors } from '../constants'

Logo.propTypes = {
    image: PropTypes.any,
    width: PropTypes.number,
    height: PropTypes.number,
    label: PropTypes.string,
    leftIndent: PropTypes.number,
}
Logo.defaultProps = {
    image: logo,
    width: 30,
    height: 30,
    leftIndent: 60,
    label: 'dots'
}
function Logo(props) {
    const el = useRef(null)
    const [containerWidth, setContainerWidth] = useState(50)
    useEffect(() => {
        if (el && el.current && el.current.getBoundingClientRect) {
            setContainerWidth(props.width + el.current.getBoundingClientRect().width)
        }
    }, [props.width])
    return (
        <Block style={{ marginLeft: props.leftIndent + 'px', maxWidth: containerWidth + 'px' }}>
            <img src={props.image} style={{ width: props.width + 'px', height: props.height + 'px' }} alt='' />
            <span ref={el}
                style={{
                    paddingLeft: '20px',
                    fontSize: '1.55rem',
                    fontFamily: 'monospace',
                    fontWeight: 'bold',
                    color: colors.bgColorTransparent2,
                }}>{props.label}</span>
        </Block>
    )
}

export default Logo