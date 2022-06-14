import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'

import SelectNone from './SelectNone'
import Text from './Text'


export const TextLink = props => {
    
    return (
        <Link href={props.link}>
                <Text>{props.children}</Text>
        </Link>
    )
}

export const ListIconTextBoxLink = props => {

    const Container = styled.span`
        display: inline-flex;
        flex-direction: row;
        align-items: center;

        padding: 10px 60px 10px 60px;
        border: 1px solid #FFFFFF;
        cursor: pointer;

    `
    const ImageBox = styled.span`
        position:relative;

        min-width: 20px;
        min-height: 20px;

        max-width: 20px;
        max-height: 20px;

        margin-right: 10px;
        
        
    `

    return (
        <Link href={props.link}>
            <Container>
                <ImageBox>
                    <SelectNone>
                        <Image src='/image/list24.png' layout='fill' objectFit='cover' alt='list24' />
                    </SelectNone>
                </ImageBox>
                <SelectNone>
                    <Text size='18px'>목록</Text>
                </SelectNone>             
            </Container>
        </Link>
    )
} 


// export const ReturnIconTextLink = props => {

//     const Container = styled.span`
//         display: flex;
//         flex-direction: row;
//         align-items: center;
//         cursor: pointer;

//     `
//     const ImageBox = styled.span`
//         padding-top: 5px;
//         margin-right: 7px;
//     `

//     return (
//         <Container>
//             <Link href={props.link}>
//                 <SelectNone>
//                     <ImageBox>
//                             <Image src='/image/return24.png' width={16} height={16} alt='return24' />
//                     </ImageBox>                
//                     <Text>{props.children}</Text>
//                 </SelectNone>                
//             </Link>
//         </Container>
//     )
// }   


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

