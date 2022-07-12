import styled from 'styled-components'
import Image from 'next/image'

import SelectNone from './SelectNone'


const ImageBox = styled.div`
    position: relative;    
    
    width: ${ props => props.width || '100px' };
    height: ${ props => props.height || '100px' };
    
    ${ props => props.cursorPoint === true ? 'cursor: pointer;' : null }

`

const IconBox = props => {
    return (
        <SelectNone>
            <ImageBox width={ props.width } height={ props.height } cursorPoint={ props.cursorPoint }>
                <Image src={ props.img } layout='fill' objectFit='cover' />
            </ImageBox>
        </SelectNone>
    )
}


export const SelectIconBox = props => {
    return (
        <ImageBox width={ props.width } height={ props.height } cursorPoint={ props.cursorPoint }>
            <Image src={ props.img } layout='fill' objectFit='cover' />
        </ImageBox>
    )
}

export default IconBox