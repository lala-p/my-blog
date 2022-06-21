import Image from 'next/image'
import Link from 'next/link'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'

import PostTab from './PostTab'

const MenuIconBox = props => {
    const Box = styled.div`

    `

    return (
        <Box>
            <Image src={props.img} layout='fixed' width={35} height={35} />
        </Box>
    )
}

const MenuIconLinkBox = props => {
    const Box = styled.div`
    
    
    `

    return (
        <Box>

        </Box>
    )
}

const PostIconLinkBox = props => {
    const Box = styled.div`
    
    
    `

    return (
        <Box>

        </Box>
    )
}

const NoticeIconLinkBox = props => {
    const Box = styled.div`
    
    
    `

    return (
        <Box>

        </Box>
    )
}


const Container = styled.div`
    position: fixed;
    width: 65px;
    height: 100vh;
    
    padding: 45px 0 0 0;

    background-color: ${ props => props.theme.color1 };
    text-align: center;

`

const MenuContainer = styled.ul`
    

`

const MenuTab = () => {

    const currentMenu = useSelector((state) => state.menu.currentMenu)

    
    return (
        <Container>
            <MenuIconBox img='/image/menu_home.png' active_img='' />


        </Container>
    )
}


export default MenuTab