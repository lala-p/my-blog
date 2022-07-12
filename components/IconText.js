import styled from 'styled-components'
import Image from 'next/image'

import SelectNone from './SelectNone'



const ContainerBox = styled.div`
    display: inline-flex;
    flex-direction: row;
    
    ${ props => props.cursorPoint === true ? 'cursor: pointer;' : null }

`
const ImageBox = styled.div`
    position: relative;    
    top: ${ props => props.top || '0px' };

    width: ${ props => props.width || '10px' };
    height: ${ props => props.height || '10px' };

    margin-right: ${ props => props.between || '10px' };
        
`

const Text = styled.div`
    font-size: ${ props => props.size || '16px' };
    color: ${ props => props.color || props.theme.color3 };

`

const IconText = props => {
    return (
        <ContainerBox cursorPoint={ props.cursorPoint }>
            <SelectNone>
                <ImageBox width={ props.width } height={ props.height } top={ props.top } between={ props.between }>
                    <Image src={ props.img } layout='fill' objectFit='cover' />
                </ImageBox>
            </SelectNone>
            <Text size={ props.fontSize }>{ props.children }</Text>
        </ContainerBox>
    )
}


export default IconText