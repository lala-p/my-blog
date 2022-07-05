import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'

import FolderModeContent from './FolderModeContent'
import FileModeContent from './FileModeContent'



const Container = styled.div`

    ${ props => props.subTabOpen ? null : 'display: none;' }
    
    position: fixed;

    left: 65px;

    width: 230px;
    height: 100vh;

    background-color: ${ props => props.theme.color1 };

`

const SubTab = props => {
    
    const currentMenu = useSelector((state) => state.menu.currentMenu)
    const subTabOpen = useSelector((state) => state.menu.subTabOpen)
    const currentSubTabMode = useSelector((state) => state.menu.currentSubTabMode)

    return (
        <Container subTabOpen={currentMenu == 'post' && subTabOpen}>
        { currentSubTabMode == 'file' ?
            <FileModeContent />   
        :
            null
        }

        </Container>
    )
}

export default SubTab