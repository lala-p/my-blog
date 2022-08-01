import { useRouter } from 'next/router'
import Link from 'next/link'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import { menuActions } from '../../reducers/menuSlice'

import { ColumnList } from '../../components/List'
import { IconBox, Icon_Home, Icon_File, Icon_Search, Icon_Megaphone, Icon_User } from '../../components/Icon'

import useTheme from '../../hooks/useTheme'

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

const MenuTab = (props) => {
	const router = useRouter()
	const dispatch = useDispatch()
	const [getColor] = useTheme()

	const activeMenu = props.activeMenu

	const menuIconSize = {
		width: '1.5rem',
		height: '1.5rem',
	}

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

	return (
		<Container>
			<MenuList between="2rem">
				<li>
					<Link href="/">
						<IconBox title="home" width={menuIconSize.width} height={menuIconSize.height} cursorPointer>
							<Icon_Home color={getActiveColor('home')} />
						</IconBox>
					</Link>
				</li>
				<li>
					<IconBox title="post" width="1.5rem" height="1.5rem" onClick={postMenuClick} cursorPointer>
						<Icon_File color={getActiveColor('post')} />
					</IconBox>
				</li>
				<li>
					<Link href="/search">
						<IconBox title="search" width={menuIconSize.width} height={menuIconSize.height} cursorPointer>
							<Icon_Search color={getActiveColor('search')} />
						</IconBox>
					</Link>
				</li>
				<li>
					<Link href="/notice">
						<IconBox title="notice" width={menuIconSize.width} height={menuIconSize.height} cursorPointer>
							<Icon_Megaphone color={getActiveColor('notice')} />
						</IconBox>
					</Link>
				</li>
				<li>
					<Link href="/profile">
						<IconBox title="profile" width={menuIconSize.width} height={menuIconSize.height} cursorPointer>
							<Icon_User color={getActiveColor('profile')} />
						</IconBox>
					</Link>
				</li>
			</MenuList>
		</Container>
	)
}
export default MenuTab
