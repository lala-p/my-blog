import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'

import { menuActions } from '../reducers/menuSlice'

import MenuTab from './MenuTab'


const Container = styled.div`
    display: flex;
    height: 100vh;
    background-color: #323232;
    overflow: auto;
    
`

const ChildrenContainer = styled.div`
    @media( max-width: 600px ) {
        margin-left: 0px;
    }    

    width: 100%;
    margin-left: 55px;
    
`

const PageContainer = props => {
    
    const dispatch = useDispatch()

    const currentMenu = useSelector((state) => state.menu.currentMenu)


    useEffect(() => {
        if (currentMenu != props.menu) {
            dispatch(menuActions.setCurrentMenu(props.menu))
        }

    }, [])
    

    return (
        <Container>
            <MenuTab />
            <ChildrenContainer>
                {props.children}
            </ChildrenContainer>
        </Container>
    )
}

export default PageContainer