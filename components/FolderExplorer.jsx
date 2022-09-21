import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'

import useKeyPressState from '@hooks/useKeyPressEvent'

import { folderActions } from '@reducers/folderSlice'

import { EllipsisText } from './Text'
import { IconText, IconBox, Icon_Home, Icon_Clock } from './Icon'
import SwitchLink from './SwitchLink'

import { folderData } from '@data'

const Container = styled.div`
	width: 11rem;
	padding: 2.75rem 0 0 1rem;
`

const RootList = styled.ul`
	line-height: 1.25rem;
`

const FolderContentList = styled.ul`
	display: flex;
	flex-direction: column;

	padding-left: 1.125rem;
	margin-top: 0.25rem;

	${({ parentOpen }) => (parentOpen ? null : 'display: none;')}
`

const FolderExplorer = (props) => {
	const dispatch = useDispatch()

	const openFolderList = useSelector((state) => state.folder.openFolderList)
	const currentFolderCode = props.currentFolderCode

	const isCtrlPress = useKeyPressState('Control')

	const folderOpenSwitch = (folderCode) => {
		if (openFolderList.includes(folderCode)) {
			dispatch(folderActions.folderClose(folderCode))
		} else {
			dispatch(folderActions.folderOpen(new Array(folderCode)))
		}
	}

	const Folder = (props) => {
		const code = props.code
		const name = folderData.getFolderName(code)
		const open = openFolderList.includes(code)

		return (
			<li>
				<SwitchLink href={'/folder/' + code} state={isCtrlPress} offEvent={() => folderOpenSwitch(code)} passHref>
					<IconText title={name} lineHeight="1.25rem" between="2rem" cursorPointer>
						<IconBox width="1rem" height="1rem" absolute selectNone>
							{open ? <Icon_Home color={isCtrlPress ? 'accent1' : null} /> : <Icon_Clock color={isCtrlPress ? 'accent1' : 'sub'} />}
						</IconBox>
						<EllipsisText color={isCtrlPress ? 'accent1' : open ? undefined : 'sub'} underline={isCtrlPress}>
							{name}
						</EllipsisText>
					</IconText>
				</SwitchLink>
				<FolderContentList parentOpen={open}>{props.children}</FolderContentList>
			</li>
		)
	}

	const PostFolder = (props) => {
		const code = props.code
		const name = folderData.getFolderName(code)
		const open = currentFolderCode == code

		return (
			<li>
				<SwitchLink href={'/folder/' + code} state={!isCtrlPress} passHref>
					<IconText title={name} lineHeight="1.25rem" between="2rem" cursorPointer>
						<IconBox width="1rem" height="1rem" absolute selectNone>
							{open && !isCtrlPress ? <Icon_Home /> : <Icon_Clock color="sub" />}
						</IconBox>
						<EllipsisText color={open && !isCtrlPress ? undefined : 'sub'}>{name}</EllipsisText>
					</IconText>
				</SwitchLink>
			</li>
		)
	}

	return (
		<Container>
			<RootList>
				<Folder code="root">
					<Folder code="FolderExample">
						<PostFolder code="example1" />
						<PostFolder code="example2" />
					</Folder>
				</Folder>
			</RootList>
		</Container>
	)
}

export default FolderExplorer
