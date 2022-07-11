import { useEffect } from 'react'
import styled from 'styled-components'
import Image from 'next/image'

import SelectNone from '../components/SelectNone'


import NoticePagenationNav from '../components/NoticePagenationNav'


const ContainerBox = styled.div`
    display: inline-flex;
    flex-direction: row;
    align-items: center;

`

const ImageBox = styled.div`
    position: relative; 
    top: ${ props => props.top || '0px' };

    width: ${ props => props.width || '16px' };
    height: ${ props => props.height || '16px' };

    margin-right: ${ props => props.right || '0px' };

`

const Text = styled.span`
    font-size: ${ props => props.size || '16px' };
    color: ${ props => props.color || props.theme.color3 };

`

const IconText = props => {
    return (
        <ContainerBox>
            <ImageBox width={ props.width } height={ props.height } top={ props.top } right={ props.right }>
                <SelectNone>
                    <Image src={ props.image } layout='fill' objectFit='cover' />
                </SelectNone>
            </ImageBox>
            <Text>{ props.children }</Text>
        </ContainerBox>
    )
}


const Test = () => {

    useEffect(() => {
        
    }, [])

    return (
        <div>
            {/* <NoticePagenationNav /> */}
            <IconText image='/image/icon/iconTest.svg' width='16px' height='16px' top='0px' right='10px'></IconText>

        </div>
    )

}

export default Test