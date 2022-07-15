import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'

import { menuActions } from '../../reducers/menuSlice'

import SelectNone from '../SelectNone'
import IconBox, { SelectIconBox } from '../IconBox'

const MenuIconLinkBox = (props) => {
	return (
		<Link href={props.link}>
			<a>
				<IconBox img={props.active ? props.activeImg : props.img} width="24px" height="24px" cursorPoint={true} />
			</a>
		</Link>
	)
}

const PostIconLinkBox = (props) => {
	const router = useRouter()
	const dispatch = useDispatch()

	const EventHandler = () => {
		if (props.active) {
			dispatch(menuActions.subTabSwitch())
		} else {
			dispatch(menuActions.subTabOpen())
			router.push(props.link)
		}
	}

	return (
		<SelectNone onClick={EventHandler}>
			<SelectIconBox img={props.active ? props.activeImg : props.img} width="24px" height="24px" cursorPoint={true} />
		</SelectNone>
	)
}

const Container = styled.div`
	position: fixed;

	width: 65px;
	height: 100vh;

	padding-top: 45px;
	background-color: ${(props) => props.theme.color1};
`

const MenuContainer = styled.ul`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;

	height: 245px;
`

const MenuTab = (props) => {
	return (
		<Container>
			<MenuContainer>
				<li>
					<MenuIconLinkBox
						link="/"
						img="/image/icon/home_color6.svg"
						activeImg="/image/icon/home_color4.svg"
						active={props.activeMenu == 'home'}
					/>
				</li>
				<li>
					<PostIconLinkBox
						link="/post"
						img="/image/icon/document_color6.svg"
						activeImg="/image/icon/document_color4.svg"
						active={props.activeMenu == 'post'}
					/>
				</li>
				<li>
					<MenuIconLinkBox
						link="/search"
						img="/image/icon/search_color6.svg"
						activeImg="/image/icon/search_color4.svg"
						active={props.activeMenu == 'search'}
					/>
				</li>
				<li>
					<MenuIconLinkBox
						link="/notice"
						img="/image/icon/megaphone_color6.svg"
						activeImg="/image/icon/megaphone_color4.svg"
						active={props.activeMenu == 'notice'}
					/>
				</li>
				<li>
					<MenuIconLinkBox
						link="/profile"
						img="/image/icon/user_color6.svg"
						activeImg="/image/icon/user_color4.svg"
						active={props.activeMenu == 'profile'}
					/>
				</li>
			</MenuContainer>
		</Container>
	)
}

export default MenuTab
