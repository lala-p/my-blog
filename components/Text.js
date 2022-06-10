import styled from 'styled-components'


const Text = styled.span`

    font-size: ${props => props.size || '16px;'};
    font-weight: ${props => props.weight || '400'};
    color: ${props => props.color || '#FFFFFF'};
    word-breack: keep-all;
    line-height: 180%;

`

export const EllipsisText = styled(Text)`

    display: block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

` 


export default Text