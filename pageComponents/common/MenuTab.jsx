import { useRouter } from 'next/router'
import Link from 'next/link'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import { menuActions } from '@reducers/menuSlice'
import { noticeActions } from '@reducers/noticeSlice'

import useKeyPressState from '@hooks/useKeyPressEvent'

import { ColumnList } from '@components/List'
import { Icon_Home, Icon_File, Icon_Search, Icon_Megaphone, Icon_User } from '@components/Icon'
import SwitchLink from '../../components/SwitchLink'

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

const Line = styled.hr`
	${({ hide }) => (hide ? 'display: none;' : null)}

	position: relative;
	top: 0.25rem;
	height: 0.1rem;
	background-color: ${({ theme }) => theme.color.accent1};
	border: 0;
`

const MenuTab = (props) => {
	const router = useRouter()
	const dispatch = useDispatch()

	const activeMenu = props.activeMenu

	const isCtrlPress = useKeyPressState('Control')

	const getActiveColor = (menu) => {
		return activeMenu == menu ? 'accent2' : 'sub'
	}

	return (
		<Container>
			<MenuList between="2rem">
				<li>
					<Link href="/" passHref>
						<a>
							<MenuBox title="home">
								<Icon_Home color={getActiveColor('home')} />
							</MenuBox>
						</a>
					</Link>
				</li>

				<li>
					<SwitchLink href="/post" state={activeMenu != 'post' || (activeMenu == 'post' && isCtrlPress)} offEvent={() => dispatch(menuActions.subTabSwitch())} passHref>
						<MenuBox title="post">
							<Icon_File color={activeMenu == 'post' && isCtrlPress ? 'accent1' : getActiveColor('post')} />
							<Line hide={activeMenu != 'post' || !isCtrlPress} />
						</MenuBox>
					</SwitchLink>
				</li>
				<li>
					<Link href="/search" passHref>
						<a>
							<MenuBox title="search">
								<Icon_Search color={getActiveColor('search')} />
							</MenuBox>
						</a>
					</Link>
				</li>
				<li>
					<SwitchLink href="/notice" state={true} onEvent={() => dispatch(noticeActions.setCurrentPage(1))} passHref>
						<MenuBox title="notice">
							<Icon_Megaphone color={getActiveColor('notice')} />
						</MenuBox>
					</SwitchLink>
				</li>
				<li>
					<Link href="/profile" passHref>
						<a>
							<MenuBox title="profile">
								<Icon_User color={getActiveColor('profile')} />
							</MenuBox>
						</a>
					</Link>
				</li>
			</MenuList>
		</Container>
	)
}
export default MenuTab
