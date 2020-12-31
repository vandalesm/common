import styled from 'styled-components'
import { colors, dim } from '../constants'

function InputText(props) {
    return (
        <StyledInput type='text' {...props} />
    )
}

export default InputText

const StyledInput = styled.input`
border: 1px solid ${colors.bgColorOpaque};
border-radius: ${dim.radius}px;
max-height: ${dim.height}px;
padding: 5px;
margin: 0;
font-size: 0.9rem;
&:focus {
    outline: none;
    box-shadow: 0 0 3px 0px ${colors.bgColorTransparent3}; 
}
`