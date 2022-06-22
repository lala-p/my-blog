import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'

import { postActions } from '../reducers/postSlice'

import PostTab from './PostTab'
import SelectNone from './SelectNone'


const MenuIconBox = props => {
    const Box = styled.div`
        position: relative;    
        width: 24px;
        height: 24px;
        cursor: pointer;
    `
    return (
        <Box>
            <Image src={props.img} layout='fill' objectFit='cover' />
        </Box>
    )
}

const MenuIconLinkBox = props => {
    return (
        <Link href={props.link}>
            <SelectNone>
                <MenuIconBox img={props.active ? props.activeImg : props.img} />
            </SelectNone>
        </Link>
    )
}

const PostIconLinkBox = props => {

    const router = useRouter()
    const dispatch = useDispatch()

    const EventHandler = () => {
        if (props.active) {
            dispatch(postActions.switchPostTabOpen())
        } else {
            router.push(props.link)
        }
    }

    return (
        <SelectNone onClick={EventHandler}>
            <MenuIconBox img={props.active ? props.activeImg : props.img} />
        </SelectNone>
    )
}


const Container = styled.div`
    position: fixed;
    
    width: 65px;
    height: 100vh;

    padding-top: 45px;
    background-color: ${ props => props.theme.color1 };
`

const MenuContainer = styled.ul`
    display: flex;
    flex-direction: column;    
    align-items: center;
    justify-content: space-between;
    height: 245px;
`

const MenuTab = () => {

    const currentMenu = useSelector((state) => state.menu.currentMenu)


    return (
        <Container>
            <MenuContainer>
                <li><MenuIconLinkBox link='/' img='/image/menu_home.png' activeImg='/image/menu_home_active.png' active={currentMenu == 'home'} /></li>
                <li><PostIconLinkBox link='/post' img='/image/menu_post.png' activeImg='/image/menu_post_active.png' active={currentMenu == 'post'} /></li>
                <li><MenuIconLinkBox link='/search' img='/image/menu_search.png' activeImg='/image/menu_search_active.png' active={currentMenu == 'search'} /></li>
                <li><MenuIconLinkBox link='/notice' img='/image/menu_notice.png' activeImg='/image/menu_notice_active.png' active={currentMenu == 'notice'} /></li>
                <li><MenuIconLinkBox link='/profile' img='/image/menu_profile.png' activeImg='/image/menu_profile_active.png' active={currentMenu == 'profile'} /></li>
            </MenuContainer>

        </Container>
    )
}


export default MenuTab