import styled from 'styled-components'
import PropTypes from 'prop-types'
import { colors } from '../constants'

const Block = styled.div`
display: flex;
flex: 1 1 auto;
${p => p.noGrow && 'flex: 0 0 auto;'}
${p => p.baseWidth && 'flex-basis: ' + p.baseWidth + ';'}
${p => p.baseWidth && 'width: ' + p.baseWidth + ';'}
${p => p.withWrap && 'flex-wrap: wrap;'}
${p => p.withClip && 'overflow: hidden;'}
flex-direction: ${p => p.column ? 'column' : 'row'};
justify-content: ${p => p.justifyCenter ? 'center' :
        p.justifyStart ? 'flex-start' :
            p.justifyEnd ? 'flex-end' :
                p.justifyAround ? 'space-around' :
                    p.justifyBetween ? 'space-between' : 'inherit'
    };
align-items: ${p => p.alignItemsCenter ? 'center' :
        p.alignItemsStart ? 'flex-start' :
            p.alignItemsEnd ? 'flex-end' :
                p.alignItemsStretch ? 'stretch' :
                    p.alignItemsBaseline ? 'baseline' : 'inherit'
    };
align-self: ${p => p.alignSelfCenter ? 'center' :
        p.alignSelfStart ? 'flex-start' :
            p.alignSelfEnd ? 'flex-end' :
                p.alignSelfStretch ? 'stretch' :
                    p.alignSelfBaseline ? 'baseline' : 'auto'
    };
${p => p.withMargin && 'margin: 10px;'}
${p => p.withPadding && 'padding: 10px;'}
${p => p.withBorder && 'border: 1px solid ' + colors.bgColorTransparent1 + ';'}
`

Block.propTypes = {
    noGrow: PropTypes.any,
    baseWidth: PropTypes.string,
    withWrap: PropTypes.any,
    withClip: PropTypes.any,
    direction: PropTypes.oneOf(['column', 'row']),
    justifyCenter: PropTypes.any,
    justifyStart: PropTypes.any,
    justifyEnd: PropTypes.any,
    justifyAround: PropTypes.any,
    justifyBetween: PropTypes.any,
    alignItemsCenter: PropTypes.any,
    alignItemsStart: PropTypes.any,
    alignItemsEnd: PropTypes.any,
    alignItemsStretch: PropTypes.any,
    alignItemsBaseline: PropTypes.any,
    alignSelfCenter: PropTypes.any,
    alignSelfStart: PropTypes.any,
    alignSelfEnd: PropTypes.any,
    alignSelfStretch: PropTypes.any,
    alignSelfBaseline: PropTypes.any,
    withMargin: PropTypes.any,
    withPadding: PropTypes.any,
    withBorder: PropTypes.any,
}
Block.defaultProps = {

}

export default Block
