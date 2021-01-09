import styled from 'styled-components'
import { colors, dim, font } from '../../constants'

const Button = styled.button`
border: none;
background-color: ${colors.bgColorTransparent1};
color: ${colors.textColorTransparent1};
font-size: ${font.controlSize};
text-transform: uppercase;
padding: 10px;
border-radius: ${dim.radius}px;
width: 100px
min-height: ${dim.height}px;
font-family: ${font.code};
${p => p.xsmall && 'width: 70px;'}
${p => p.small && 'width: 100px;'}
${p => p.xmedium && 'width: 170px;'}
${p => p.medium && 'width: 200px;'}
${p => p.large && 'width: 300px;'}
${p => p.autoWidth && 'width: auto;'}
&:hover {
    cursor: pointer;
    color: ${colors.textColorOpaque};
    background-color: ${colors.bgColorTransparent2};
}
&:focus {
    outline: none;
}
&:active {
    font-size: ${font.controlSizeLowered};
    color: ${colors.textColorOpaque};
}
`

export default Button