import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'

import { menuActions } from '../../reducers/menuSlice'

import SelectNone from '../../components/SelectNone'
import IconBox from '../../components/IconBox'
import Box from '../../components/Box'

const Container = styled.div`
	position: fixed;

	width: 65px;
	height: 100vh;

	padding-top: 45px;
	background-color: ${({ theme }) => theme.color1};
`

const MenuContainer = styled.ul`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;

	height: 245px;
`

const MenuTab = (props) => {
	const activeMenu = props.activeMenu

	const MenuIconLinkBox = (props) => {
		return (
			<Link href={props.link}>
				<Box title={props.menu} cursorPointer>
					<IconBox img={activeMenu === props.menu ? props.activeImg : props.img} width="24px" height="24px" />
				</Box>
			</Link>
		)
	}

	const PostIconLinkBox = (props) => {
		const router = useRouter()
		const dispatch = useDispatch()

		const EventHandler = () => {
			if (activeMenu === props.menu) {
				dispatch(menuActions.subTabSwitch())
			} else {
				dispatch(menuActions.subTabOpen())
				router.push(props.link)
			}
		}

		return (
			<Box title={props.menu} onClick={EventHandler} cursorPointer>
				<IconBox img={activeMenu === props.menu ? props.activeImg : props.img} width="24px" height="24px" />
			</Box>
		)
	}

	return (
		<Container>
			<MenuContainer>
				<li>
					<MenuIconLinkBox
						menu="home"
						link="/"
						img="/image/icon/home_color6.svg"
						activeImg="/image/icon/home_color4.svg"
					/>
				</li>
				<li>
					<PostIconLinkBox
						menu="post"
						link="/post"
						img="/image/icon/document_color6.svg"
						activeImg="/image/icon/document_color4.svg"
					/>
				</li>
				<li>
					<MenuIconLinkBox
						menu="search"
						link="/search"
						img="/image/icon/search_color6.svg"
						activeImg="/image/icon/search_color4.svg"
					/>
				</li>
				<li>
					<MenuIconLinkBox
						menu="notice"
						link="/notice"
						img="/image/icon/megaphone_color6.svg"
						activeImg="/image/icon/megaphone_color4.svg"
					/>
				</li>
				<li>
					<MenuIconLinkBox
						menu="profile"
						link="/profile"
						img="/image/icon/user_color6.svg"
						activeImg="/image/icon/user_color4.svg"
					/>
				</li>
			</MenuContainer>
		</Container>
	)
}

export default MenuTab
