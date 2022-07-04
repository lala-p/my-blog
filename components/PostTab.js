import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'



const Container = styled.div`

    ${ props => props.postTabOpen ? null : 'display: none;' }
    
    position: fixed;

    left: 65px;

    width: 230px;
    height: 100vh;

    background-color: ${ props => props.theme.color1 };

`

const PostTab = props => {
    
    const currentMenu = useSelector((state) => state.menu.currentMenu)
    const postTabOpen = useSelector((state) => state.post.postTabOpen)

    return (
        <Container postTabOpen={currentMenu == 'post' && postTabOpen}>



        </Container>
    )
}

export default PostTab