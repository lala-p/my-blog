import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'

import Text from './Text'
import SelectNone from './SelectNone'

import { dateFormat } from '../commonFun/date'


const Container = styled.span`
    display: inline-flex;
    align-items: center;
    // background-color: blue;

`

const ImageBox = styled.span`
    @media( max-width: 735px ) {
        width: 14px;
        padding-top: 3px;
    }

    padding-top: 5px;
    margin-right: 7px;

`

const DynamicText = styled(Text)`
    @media( max-width: 735px ) {
        font-size: 14px;
        
    }

`

const DateBox = props => {
    return (
        <Container title='created date'>
            <ImageBox>
                <SelectNone>
                    <Image src='/image/clock24.png' width={16} height={16} alt='clock24' />
                </SelectNone>
            </ImageBox>
            <DynamicText color='#D5D5D5'>{dateFormat(props.date, 0)}</DynamicText>
        </Container>
    )
}


export const UpdateDateBox = props => {
    return (
        <Container title='last update'>
            <ImageBox>
                <SelectNone>
                    <Image src='/image/update24.png' width={16} height={16} alt='update24' />
                </SelectNone>
            </ImageBox>
            <DynamicText color='#D5D5D5'>{dateFormat(props.date, 0)}</DynamicText>
        </Container>
    )
}


export default DateBox