import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'

import SelectNone from './SelectNone'


const Container = styled.div`
    display: flex;
    flex-direction: row;

`

const ImageBox = styled.div`
    @media( max-width: 512px ) {
        display: none;
    }

    @media( max-width: 735px ) {
        min-width: 30px;
        min-height: 30px;

        max-width: 30px;
        max-height: 30px;

        margin-top: 14px;
        margin-right: 20px;
    }

    position:relative;

    min-width: 40px;
    min-height: 40px;

    max-width: 40px;
    max-height: 40px;

    margin-top: 10px;
    margin-right: 25px;

`

const TitleText = styled.span`
    @media( max-width: 735px ) {
        font-size: 30px;
        padding-top: 7px;
    }

    font-size: 40px;
    font-weight: 600;
    color: #FFFFFF;
    word-break: break-all;
    width: 100%;
    margin-right: 20px;
    
`



const NoticeTitle = props => {
    return (
        <Container>
            <ImageBox>
                <SelectNone>
                    <Image src='/image/megaphone.png' layout='fill' objectFit='cover' alt='megaphone' />
                </SelectNone>
            </ImageBox>            
            <TitleText>{props.children}</TitleText>
        </Container>
    )
}


export default NoticeTitle