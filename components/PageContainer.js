import { useEffect } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'

import { menuActions } from '../reducers/menuSlice' 

import MenuTab from './MenuTab'


const Container = styled.div`
    

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
        </Container>
    )

}



export default PageContainer
