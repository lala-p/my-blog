import { useEffect } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'

import { menuActions } from '../reducers/menuSlice' 

import MenuTab from './MenuTab'
import PostTab from './PostTab'
import HeadTab from './HeadTab'


const Container = styled.div`
    display: flex;
    flex-direction: row;

`

const PageContent = styled.div`

    width: 100%;
    padding-left: ${props => props.postTabOpen ? '295px' : '65px' };
    // background-color: red;

    
`

const PageContainer = props => {
    
    const dispatch = useDispatch() 
    
    const currentMenu = useSelector((state) => state.menu.currentMenu)
    const postTabOpen = useSelector((state) => state.post.postTabOpen)

    useEffect(() => {
        
        if (currentMenu != props.menu) {
            dispatch(menuActions.setCurrentMenu(props.menu))    
        }
        


    }, [])
    

    return (
        <Container>
            <div>
                <MenuTab />
                { currentMenu == 'post' && postTabOpen ? <PostTab /> : null }
            </div>
            <PageContent postTabOpen={currentMenu == 'post' && postTabOpen}>
                <HeadTab />
                <div style={{paddingTop: '45px'}}>
                    {props.children}
                </div>
            </PageContent>
                        
        </Container>
    )

}



export default PageContainer
