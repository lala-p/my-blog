import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import Link from 'next/link'

import { folderActions } from '../reducers/folderSlice'

import IconText from './IconText'
import { Text } from './Text'

import { getFolderNameByCode } from '../commonFun/folder'

const OpenFolderBox = (props) => {
	return (
		<IconText
			img="/image/icon/clock_color3.svg"
			width="1.125rem"
			height="1.125rem"
			top="0.125rem"
			between="0.625rem"
			cursorPoint={false}
		>
			<Text>{props.children}</Text>
		</IconText>
	)
}

const CloseFolderBox = (props) => {
	return (
		<IconText
			img="/image/icon/clock_color3.svg"
			width="1.125rem"
			height="1.125rem"
			top="0.125rem"
			between="0.625rem"
			cursorPoint={false}
		>
			<Text color={2}>{props.children}</Text>
		</IconText>
	)
}

const Container = styled.div`
	padding: 50px 0 0 10px;
`

const FolderContent = styled.ul`
	${(props) => (props.parentOpen ? null : 'display: none;')}

	margin-left: 10px;
`

const FolderList = (props) => {
	const dispatch = useDispatch()

	const openFolderList = useSelector((state) => state.folder.openFolderList)
	const currentFolderCode = props.currentFolderCode

	const Folder = (props) => {
		const code = props.code
		const name = getFolderNameByCode(code)

		return (
			<li>
				{openFolderList.includes(code) ? (
					<div
						className="folderNameBox"
						onClick={() => {
							dispatch(folderActions.folderClose(code))
						}}
					>
						<OpenFolderBox>{name}^^OPEN</OpenFolderBox>
					</div>
				) : (
					<div
						className="folderNameBox"
						onClick={() => {
							dispatch(folderActions.folderOpen(code))
						}}
					>
						<CloseFolderBox>{name}</CloseFolderBox>
					</div>
				)}

				<FolderContent parentOpen={openFolderList.includes(code)}>{props.children}</FolderContent>
			</li>
		)
	}

	const LinkFolder = (props) => {
		const code = props.code
		const name = getFolderNameByCode(code)

		return (
			<li>
				<Link href={'/folder/' + code}>
					<a>
						{openFolderList.includes(code) /*currentFolderCode == code*/ ? (
							<OpenFolderBox>{name}^^OPEN</OpenFolderBox>
						) : (
							<CloseFolderBox>{name}</CloseFolderBox>
						)}
					</a>
				</Link>
			</li>
		)
	}

	return (
		<Container>
			<ul className="folderListBox">
				<Folder code="root">
					<Folder code="FolderExample">
						<LinkFolder code="FolderExample2" />
					</Folder>
				</Folder>
			</ul>
		</Container>
	)
}

export default FolderList
