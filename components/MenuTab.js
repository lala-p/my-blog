import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'


const VerticalTabs = styled.div`
    display: none;
    @media( min-width: 300px ) {
        display: flex;
        flex-direction: column;
        width: 55px;
        height: 100vh;
        padding-top: 10px;
        background-color: #2B2B2B;    
    }
`

const MenuIconBox =  styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 48px;
`

const MenuIconLinkBox = props => {

    const router = useRouter()

    const currentMenu = useSelector((state) => state.menu.currentMenu)

    const linkHandler = () => {
        router.push(props.link)
    }

    const img_style = { 
        width: '26px', 
        height: '26px', 

    }

    return (
        <MenuIconBox onClick={linkHandler}>
            
        { currentMenu != props.menu ? 
            <img src={props.img} style={img_style} /> :
            <img src={props.active_img} style={img_style} />
        }

        </MenuIconBox>
    ) 
}

// const PostIconLinkBox = props => {

//     const router = useRouter()

//     const currnetMode = useSelector((state) => state.post.currentMode)
//     const currentPostCode = useSelector((state) => state.post.currentPostCode)

//     const postLinkHandler = () => {
//         if (currnetPostMode === 'home') {
//             router.push('/post')
//         } else if (currnetPostMode === 'detail') {
//             router.push(`/post/${currentPostCode}`)
//         } 
//     }


//     return (        
//         <stMenuIconBox onClick={postLinkHandler}>
//             <img src={props.img} />
//         </stMenuIconBox>
//     ) 
// }

const NoticeIconLinkBox = props => {

    const currnetMode = useSelector((state) => state.notice.currentMode)
    const currentNoticeCode = useSelector((state) => state.notice.currentNoticeCode)

    const noticeLink = () => {
        let link = '/'
        
        if (currnetMode === 'home') {
            link = '/notice'
        } else if (currnetMode === 'detail') {
            link = '/notice/' + currentNoticeCode
        } 

        return link
    }
    

    return (
        <MenuIconLinkBox menu='notice' link={noticeLink()} img={props.img} active_img={props.active_img} title='notice' />
    )
}

const MenuTab = () => {

    const currentNoticeMode = useSelector((state) => state.notice.currentMode)

    return (
        <VerticalTabs>
            <MenuIconLinkBox menu='home' link='/' img='/image/menu_home.png' active_img='/image/menu_home_active.png' title='home' />
            <MenuIconLinkBox menu='profile' link='/profile' img='/image/menu_profile.png' active_img='/image/menu_profile_active.png' title='profile' />
            <MenuIconLinkBox menu='search' link='/search' img='/image/menu_search.png' active_img='/image/menu_search_active.png' title='search' />
            <NoticeIconLinkBox img='/image/menu_notice.png' active_img='/image/menu_notice_active.png' />       
            {/* <PostIconLinkBox title='post' img='/image/' /> */}
            {currentNoticeMode}
        </VerticalTabs>
    )
}


export default MenuTab