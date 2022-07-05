import { useEffect } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'

import { menuActions } from '../reducers/menuSlice' 

import MenuTab from './MenuTab'
import SubTab from './SubTab'
import HeadTab from './HeadTab'


const Container = styled.div`
    display: flex;
    flex-direction: row;

`

const LeftContent = styled.div`

    @media( max-width: 1160px ) {
        display: none;
    }


`

const CenterContent = styled.div`

    width: 100%;
    padding-left: ${props => props.subTabOpen ? '295px' : '65px' };
    // background-color: red;

    @media( max-width: 1160px ) {
        padding-left: 0;
    }
    
`

const PageContainer = props => {
    
    const dispatch = useDispatch() 
    
    const currentMenu = useSelector((state) => state.menu.currentMenu)
    const subTabOpen = useSelector((state) => state.menu.subTabOpen)

    useEffect(() => {
        
        if (currentMenu != props.menu) {
            dispatch(menuActions.setCurrentMenu(props.menu))    
        }
        


    }, [])
    

    return (
        <Container>
            <LeftContent>
                <MenuTab />
                <SubTab />
            </LeftContent>            
            <CenterContent subTabOpen={currentMenu == 'post' && subTabOpen}>
                <HeadTab />
                <div style={{paddingTop: '45px'}}>
                    {props.children}
                </div>
            </CenterContent>
                        
        </Container>
    )

}



export default PageContainer
