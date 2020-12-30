import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Block from '../block'

ButtonGroup.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        action: PropTypes.func
    })),
    orientation: PropTypes.oneOf(['row', 'column']),
    defaultSelectedId: PropTypes.string
}
ButtonGroup.defaultProps = {
    data: [
        { id: 'test1', name: 'Test One', action: () => console.log('test1') },
        { id: 'test2', name: 'Test Two', action: () => console.log('test2') },
        { id: 'test3', name: 'Test Three', action: () => console.log('test3') },
    ],
    orientation: 'column',
    defaultSelectedId: 'test2'
}

function ButtonGroup({ data, orientation, defaultSelectedId }) {
    const [item, setItem] = useState({})

    useEffect(() => {
        const item = data.find(f=>f.id === defaultSelectedId)
        setItem(item)
    }, [defaultSelectedId, data])

    useEffect(() => {
        item && item.action && item.action(item)
    }, [item])

    return (
        <Group length={data.length} orientation={orientation}>
            {data.map((v, i) =>
                <Button
                    key={i}
                    active={v.id === item.id}
                    onClick={() => setItem(v)}
                >{v.name}</Button>
            )}
        </Group>
    )
}

export default ButtonGroup

const Group = styled(Block)`
flex: 1 1 auto;
flex-direction: ${p => p.orientation};
background-color: rgba(15, 15, 15, 0.9);
border: 1px solid rgba(0, 0, 0, 0.1);
color: rgba(255, 255, 255, 0.75);
border-radius: 3px;
${p => p.orientation === 'column' ? `padding: 10px 0;` : `padding: 0 10px;`};
${p => p.orientation === 'column' ? `height: ${p.length * 35}px` : `min-height: 35px`};
`
const Button = styled(Block)`
justify-content: center;
align-items: center;
width: 100%;
height: 35px;
font-size: 1rem;
font-family: monospace;
${p => p.active && `
  background-color: rgba(15, 15, 15, 1);
  outline: 3.5px solid rgba(15, 15, 15, 1);
  color: white;
  font-size: 1.1rem;
  z-index: 1;
`}
&:hover {
  cursor: pointer;
  ${p => !p.active && 'background-color: rgba(255, 255, 255, 0.05)'};
}
`