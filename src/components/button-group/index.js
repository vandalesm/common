import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Block from '../block'
import { colors, dim, font } from '../../constants'

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
background-color: ${colors.bgColorTransparent1};
color: ${colors.textColorTransparent1};
border-radius: ${dim.radius}px;
${p => p.orientation === 'column' ? `padding: 10px 0;` : `padding: 0 10px;`};
${p => p.orientation === 'column' ? `height: ${p.length * dim.height}px` : `min-height: ${dim.height}px`};
`
const Button = styled(Block)`
justify-content: center;
align-items: center;
width: 100%;
height: ${dim.height}px;
font-size: ${font.controlSize};
font-family: ${font.code};
position: relative;
${p => p.active && `
  background-color: ${colors.bgColorOpaque};
  color: ${colors.textColorOpaque};
  font-size: ${font.controlSizeRaised};
  z-index: 1;
  &:before {
      content: '';
      position: absolute;
      top: -3px;
      bottom: -3px;
      left: -3px;
      right: -3px;
      border-radius: ${dim.radius}px;
      border: 5px solid ${colors.bgColorOpaque};
  }
`}
&:hover {
  cursor: pointer;
  color: ${colors.textColorOpaque};
  ${p => !p.active && 'background-color: ' + colors.bgColorHighlight};
}
`