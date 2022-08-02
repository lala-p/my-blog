import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import Link from 'next/link'

import { folderActions } from '../reducers/folderSlice'

import { ColumnList } from './List'
import { EllipsisText } from './Text'
import { IconText, IconBox, Icon_Home, Icon_Clock } from './Icon'

import { getFolderNameByCode } from '../commonFun/folder'

const Container = styled.div`
	padding: 50px 0 0 10px;
`

const RootList = styled.ul`
	width: 10rem;
`

const FolderName = styled(EllipsisText)`
	padding-left: 2rem;
	font-size: 1.125rem;
`

const FolderContentList = styled.ul`
	display: flex;
	flex-direction: column;

	padding-left: 1.125rem;
	margin-top: 0.25rem;

	${({ parentOpen }) => (parentOpen ? null : 'display: none;')}
`

const FolderList = (props) => {
	const dispatch = useDispatch()

	const openFolderList = useSelector((state) => state.folder.openFolderList)
	const currentFolderCode = props.currentFolderCode

	const folderClick = (folderCode) => {
		if (openFolderList.includes(folderCode)) {
			dispatch(folderActions.folderClose(folderCode))
		} else {
			dispatch(folderActions.folderOpen(new Array(folderCode)))
		}
	}

	const Folder = (props) => {
		const code = props.code
		const name = getFolderNameByCode(code)
		const open = openFolderList.includes(code)

		return (
			<li>
				<IconText title={name} onClick={() => folderClick(code)} lineHeight="1.25rem" cursorPointer>
					<IconBox width="1rem" height="1rem" absolute>
						{open ? <Icon_Home /> : <Icon_Clock color="sub" />}
					</IconBox>
					<FolderName color={open ? null : 'sub'}>{name}</FolderName>
				</IconText>
				<FolderContentList parentOpen={open}>{props.children}</FolderContentList>
			</li>
		)
	}

	const LinkFolder = (props) => {
		const code = props.code
		const name = getFolderNameByCode(code)
		const open = currentFolderCode == code

		return (
			<li>
				<Link href={'/folder/' + code}>
					<IconText title={name} lineHeight="1.25rem" cursorPointer>
						<IconBox width="1rem" height="1rem" absolute>
							{open ? <Icon_Home /> : <Icon_Clock color="sub" />}
						</IconBox>
						<FolderName color={open ? null : 'sub'}>{name}</FolderName>
					</IconText>
				</Link>
			</li>
		)
	}

	return (
		<Container>
			<RootList>
				<Folder code="root">
					<Folder code="FolderExample">
						<LinkFolder code="example1" />
						<LinkFolder code="example2" />
						<LinkFolder code="example3" />
					</Folder>
				</Folder>
			</RootList>
		</Container>
	)
}

export default FolderList
