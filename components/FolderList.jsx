import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import Link from 'next/link'

import { folderActions } from '../reducers/folderSlice'

import IconText from './IconText'
import Text, { EllipsisText } from './Text'

import { getFolderNameByCode } from '../commonFun/folder'

const OpenFolderBox = (props) => {
	return (
		<IconText
			title={props.title}
			img="/image/icon/clock_color3.svg"
			width="1.125rem"
			height="1.125rem"
			top="0.125rem"
			between="0.625rem"
			onClick={props.onClick}
			cursorPoint={false}
		>
			<EllipsisText>{props.children}</EllipsisText>
		</IconText>
	)
}

const CloseFolderBox = (props) => {
	return (
		<IconText
			title={props.title}
			img="/image/icon/clock_color3.svg"
			width="1.125rem"
			height="1.125rem"
			top="0.125rem"
			between="0.625rem"
			onClick={props.onClick}
			cursorPoint={false}
		>
			<EllipsisText color="text2">{props.children}</EllipsisText>
		</IconText>
	)
}

const Container = styled.div`
	padding: 50px 0 0 10px;
`

const List = styled.ul`
	${EllipsisText} {
		width: 100px;
	}
`

const FolderContent = styled.ul`
	${({ parentOpen }) => (parentOpen ? null : 'display: none;')}

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
					<OpenFolderBox
						title={name}
						onClick={() => {
							dispatch(folderActions.folderClose(code))
						}}
					>
						{name}
					</OpenFolderBox>
				) : (
					<CloseFolderBox
						title={name}
						onClick={() => {
							dispatch(folderActions.folderOpen(new Array(code)))
						}}
					>
						{name}
					</CloseFolderBox>
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
					<div title={name}>
						{currentFolderCode == code ? (
							<OpenFolderBox>{name}</OpenFolderBox>
						) : (
							<CloseFolderBox>{name}</CloseFolderBox>
						)}
					</div>
				</Link>
			</li>
		)
	}

	return (
		<Container>
			<List>
				<Folder code="root">
					<Folder code="FolderExample">
						<LinkFolder code="example1" />
						<LinkFolder code="example2" />
						<LinkFolder code="example3" />
					</Folder>
				</Folder>
			</List>
		</Container>
	)
}

export default FolderList
