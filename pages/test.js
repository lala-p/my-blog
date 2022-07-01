import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    width: 75vw;
    max-width: 880px;
    margin-top: 30px;
    margin: auto;
    background-color: red;
    
`

const Box1 = styled.div`
    width: 100%;
    height: 500px;
    margin: auto;
    background-color: orange;
    
`
const Box2 = styled.div`
    position: fixed;

    width: 250px;
    height: 500px;

    margin-left: 940px;

    background-color: yellow;

    @media( max-width: 1550px ) {
        margin-left: 900px;

    }

    @media( max-width: 1450px ) {
        display: none;

    }

`

const Test = () => {

    return (
        <Container>
            <Box1></Box1>
            <Box2></Box2>
        </Container>

    )

}

export default Test