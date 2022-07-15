import Link from 'next/link' 
import styled from 'styled-components'

import { Text } from './Text'


export const TextLink = props => {
    
    const Container = styled.span`
        cursor: pointer;
    `

    return (
        <Container>
            <Link href={props.link}>
                <Text color='#94FFF1'>{ props.children }</Text>
            </Link>
        </Container>
    )
}


