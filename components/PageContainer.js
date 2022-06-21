import { useEffect } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'

import { menuActions } from '../reducers/menuSlice' 

import MenuTab from './MenuTab'



const PageContent = styled.div`

    padding-left: 65px;


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
        <div>
            <MenuTab />

            <PageContent>
                
                
                <div style={{paddingTop: '100px'}}>
                    {props.children}
                </div>
            </PageContent>
                        
        </div>
    )

}



export default PageContainer
