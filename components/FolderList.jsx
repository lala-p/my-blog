import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import Link from 'next/link'

import { folderActions } from '../reducers/folderSlice'

import IconText from './IconText'

const OpenFolderBox = (props) => {
	return (
		<IconText
			img="/image/icon/clock_color3.svg"
			width="18px"
			height="18px"
			top="2px"
			between="10px"
			fontSize="16px"
			cursorPoint={false}
		>
			{props.children}
		</IconText>
	)
}

const CloseFolderBox = (props) => {
	return (
		<IconText
			img="/image/icon/clock_color3.svg"
			width="18px"
			height="18px"
			top="2px"
			between="10px"
			fontSize="16px"
			cursorPoint={false}
		>
			{props.children}
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

const FolderList = () => {
	const dispatch = useDispatch()

	const openFolderList = useSelector((state) => state.folder.openFolderList)

	const Folder = (props) => {
		return (
			<li>
				{openFolderList.includes(props.name) ? (
					<div
						className="folderNameBox"
						onClick={() => {
							dispatch(folderActions.folderClose(props.name))
						}}
					>
						<OpenFolderBox>{props.name}^^OPEN</OpenFolderBox>
					</div>
				) : (
					<div
						className="folderNameBox"
						onClick={() => {
							dispatch(folderActions.folderOpen(props.name))
						}}
					>
						<CloseFolderBox>{props.name}</CloseFolderBox>
					</div>
				)}

				<FolderContent parentOpen={openFolderList.includes(props.name)}>{props.children}</FolderContent>
			</li>
		)
	}

	const LinkFolder = (props) => {
		return (
			<li>
				<Link href={'/folder/' + props.name}>
					<a>
						{openFolderList.includes(props.name) ? (
							<OpenFolderBox>{props.name}^^OPEN</OpenFolderBox>
						) : (
							<CloseFolderBox>{props.name}</CloseFolderBox>
						)}
					</a>
				</Link>
			</li>
		)
	}

	return (
		<Container>
			<ul className="folderListBox">
				<Folder name="root">
					<Folder name="FolderExample">
						<LinkFolder name="FolderExample2" />
					</Folder>
					{/* <Folder name='FolderExample3' /> */}
				</Folder>
			</ul>
		</Container>
	)
}

export default FolderList
