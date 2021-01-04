import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { dim } from '../constants'
import Block from '../block'
import { MdSearch } from 'react-icons/md'

SearchBox.propTypes = {
    width: PropTypes.number,
    placeholder: PropTypes.string,
    onSearch: PropTypes.func,
}
SearchBox.defaultProps = {
    width: 200,
    placeholder: 'Search',
}
function SearchBox(props) {
    const [keyword, setKeyword] = useState('')
    const handleOnKeyDown = (e) => {
        if (e.keyCode === 13) {
            props.onSearch && keyword && props.onSearch(keyword)
        }
    }
    return (
        <Container justifyStart alignItemsCenter width={props.width}>
            <MdSearch style={{ minWidth: '25px', fontSize: '1.2rem', color: 'rgba(155, 155, 155, 1)' }} />
            <StyledInput type='text' width={props.width} placeholder={props.placeholder}
                onChange={(e) => setKeyword(e.target.value)}
                onKeyDown={(e) => handleOnKeyDown(e)}
            />
        </Container>
    )
}

export default SearchBox

const Container = styled(Block)`
border: 1px solid rgba(155, 155, 155, 0.2);
background-color: rgba(155, 155, 155, 0.1);
border-radius: ${dim.height / 2}px;
max-width: ${p => p.width}px;
padding: 0 5px;
overflow: hidden;
`

const StyledInput = styled.input`
background-color: transparent;
border: none;
width: ${p => p.width - 30}px;
max-width: ${p => p.width - 30}px;
font-size: 0.9rem;
padding: 5px 0;
&:focus {
    outline: none;
    border: none;
}
`