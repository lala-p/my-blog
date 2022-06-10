import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'

import SelectNone from './SelectNone'
import Text from './Text'

 
export const ReturnIconTextLink = props => {

    const Container = styled.span`
        display: flex;
        flex-direction: row;
        align-items: center;
        cursor: pointer;

    `
    const ImageBox = styled.span`
        padding-top: 5px;
        margin-right: 7px;
    `

    return (
        <Container>
            <Link href={props.link}>
                <SelectNone>
                    <ImageBox>
                            <Image src='/image/return24.png' width={16} height={16} alt='return24' />
                    </ImageBox>                
                        <Text>{props.children}</Text>
                </SelectNone>                
            </Link>
        </Container>
    )
}   


export const TextLeftIconLink = props => {
    const Container = styled.span`
        display: flex;
        flex-direction: row;
        align-items: center;
        cursor: pointer;

    `

    const ImageBox = styled.span`


    `
    
    return (
        <Container>
            
        </Container>
    )
}

export const RightIconTextLink = props => {
    
    const Container = styled.span`
        display: flex;
        flex-direction: row;
        align-items: center;
        cursor: pointer;

    `

    const ImageBox = styled.span`

    
    `

    return (
        <Container>

        </Container>
    )
}