import { useRouter } from 'next/router'
import Link from 'next/link'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import { menuActions } from '@reducers/menuSlice'
import { noticeActions } from '@reducers/noticeSlice'

import { ColumnList } from '@components/List'
import { Icon_Home, Icon_File, Icon_Search, Icon_Megaphone, Icon_User } from '@components/Icon'

import useTheme from '@hooks/useTheme'

const Container = styled.div`
	position: fixed;

	width: 65px;
	height: 100vh;

	padding-top: 45px;
	background-color: ${({ theme }) => theme.color.background1};
`

const MenuList = styled(ColumnList)`
	align-items: center;
`

const MenuBox = styled.div`
	width: 1.5rem;
	height: 1.5rem;

	cursor: pointer;
`

const MenuTab = (props) => {
	const router = useRouter()
	const dispatch = useDispatch()

	const activeMenu = props.activeMenu

	const getActiveColor = (menu) => {
		return activeMenu == menu ? 'accent2' : 'sub'
	}

	const postMenuClick = () => {
		if (activeMenu == 'post') {
			dispatch(menuActions.subTabSwitch())
		} else {
			router.push('/post')
		}
	}

	const noticeMenuClick = () => {
		dispatch(noticeActions.setCurrentPage(1))
		router.push('/notice')
	}

	return (
		<Container>
			<MenuList between="2rem">
				<li>
					<Link href="/">
						<MenuBox title="home">
							<Icon_Home color={getActiveColor('home')} />
						</MenuBox>
					</Link>
				</li>
				<li>
					<MenuBox title="post" onClick={postMenuClick}>
						<Icon_File color={getActiveColor('post')} />
					</MenuBox>
				</li>
				<li>
					<Link href="/search">
						<MenuBox title="search">
							<Icon_Search color={getActiveColor('search')} />
						</MenuBox>
					</Link>
				</li>
				<li>
					<MenuBox title="notice" onClick={noticeMenuClick}>
						<Icon_Megaphone color={getActiveColor('notice')} />
					</MenuBox>
				</li>
				<li>
					<Link href="/profile">
						<MenuBox title="profile">
							<Icon_User color={getActiveColor('profile')} />
						</MenuBox>
					</Link>
				</li>
			</MenuList>
		</Container>
	)
}
export default MenuTab
