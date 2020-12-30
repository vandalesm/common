import styled from 'styled-components'

const Button = styled.button`
border: none;
background-color: rgba(15, 15, 15, 0.9);
color: white;
font-size: 0.9rem;
text-transform: uppercase;
padding: 10px;
border-radius: 3px;
width: 100px;
font-family: monospace;
${p => p.xsmall && 'width: 70px;'}
${p => p.small && 'width: 100px;'}
${p => p.xmedium && 'width: 170px;'}
${p => p.medium && 'width: 200px;'}
${p => p.large && 'width: 300px;'}
${p => p.autoWidth && 'width: auto;'}
&:hover {
    cursor: pointer;
    background-color: rgba(15, 15, 15, 0.85);
}
&:focus {
    outline: none;
}
&:active {
    font-size: 0.89rem;
}
`

export default Button