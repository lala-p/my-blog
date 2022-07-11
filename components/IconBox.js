import styled from 'styled-components'
import Image from 'next/image'

import SelectNone from './SelectNone'

// base components
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

const ContainerBox = styled.div`
    display: inline-flex;
    align-items: center;
    justify-content: center;

    width: ${ props => props.width || '100%' };
    height: ${ props => props.height || '100%' };
`

const ImageBox = styled.div`
    position: relative; 

    width: ${ props => props.width || '16px' };
    height: ${ props => props.height || '16px' };

`

const IconBox = props => {
    return (
        <ContainerBox width={ props.width } height={ props.height }>
            <ImageBox width={ props.imageWidth } height={ props.imageHeight }>
                <SelectNone>
                    <Image src={ props.image } layout='fill' objectFit='cover' />
                </SelectNone>
            </ImageBox>
        </ContainerBox>
    )
}

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-


export const LeftIconBox = props => {
    return (
        <IconBox image='' width='' height='' imageWidth='' imageHeight='' />
    )
}

export const RightIconBox = props => {
    return (

    )
}

export const DoubleLeftIconBox = props => {
    return (

    )
}

export const DoubleRightIconBox = props => {
    return (
        
    )
}



