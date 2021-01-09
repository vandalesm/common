import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { colors, dim, font } from '../constants'
import Block from '../block'
import { MdOpenInBrowser } from 'react-icons/md'

InputFile.propTypes = {
    label: PropTypes.string,
    width: PropTypes.number,
    onChange: PropTypes.func,
}
InputFile.defaultProps = {
    label: 'Select a file ...',
    width: 200,
}
function InputFile(props) {
    const [event, setEvent] = useState({})
    const getLabel = () => {
        const files = (event && event.target) ? event.target.files : undefined
        const fileCount = files ? files.length : 0
        if (fileCount > 1)
            return files.length + ' files selected'
        else if (fileCount === 1)
            return files[0].name
        else
            return props.label
    }
    const handleOnChange = (e) => {
        if(e && e.target && e.target.files.length > 0) {
            setEvent(e)
        }
    }
    useEffect(() => {
        props.onChange && event && event.target && props.onChange(event)
    }, [event, props])
    return (
        <Block>
            <StyledLabel htmlFor='file' width={props.width}>
                <MdOpenInBrowser style={{ fontSize: '1.5rem', paddingRight: '5px', minWidth: '25px' }} />
                <StyledSpan>{getLabel()}</StyledSpan>
            </StyledLabel>
            <StyledInput type='file' name='file' id='file' {...props} onChange={(e) => handleOnChange(e)} />
        </Block>
    )
}

export default InputFile

const StyledInput = styled.input`
width: 0.1px;
height: 0.1px;
opacity: 0;
overflow: hidden;
position: absolute;
z-index: -1;
`

const StyledLabel = styled.label`
border: none;
background-color: ${colors.bgColorTransparent1};
color: ${colors.textColorTransparent1};
border-radius: ${dim.radius}px;
width: ${p => p.width}px;
max-width: ${p => p.width}px;
min-height: ${dim.height}px;
max-height: ${dim.height}px;
overflow: hidden;
display: flex;
align-items: center;
white-space: nowrap;
padding: 5px 15px;
box-sizing: border-box;
cursor: pointer;
&:hover {
    color: ${colors.textColorOpaque};
    background-color: ${colors.bgColorTransparent2};
}
`

const StyledSpan = styled.span`
overflow: hidden;
display: inline-block;
text-overflow: ellipsis;
white-space: nowrap;
font-size: ${font.controlSize};
font-family: ${font.code};
`