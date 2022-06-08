import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'

import { menuActions } from '../reducers/menuSlice'

import MenuTab from './MenuTab'


const Container = styled.div`
    display: flex;
    
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
            {props.children}
        </Container>
    )
}

export default PageContainer