import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import Link from 'next/link'

import { folderActions } from '@reducers/folderSlice'

import { EllipsisText } from './Text'
import { IconText, IconBox, Icon_Home, Icon_Clock } from './Icon'

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

const FolderName = styled(EllipsisText)`
	${({ underline }) => (underline ? 'text-decoration: underline;' : null)}
`

const FolderExplorer = (props) => {
	const dispatch = useDispatch()

	const openFolderList = useSelector((state) => state.folder.openFolderList)
	const currentFolderCode = props.currentFolderCode

	const [isCtrlPress, setIsCtrlPress] = useState(false)

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
				{isCtrlPress ? (
					<Link href={'/folder/' + code}>
						<IconText title={name} lineHeight="1.25rem" between="2rem" cursorPointer>
							<IconBox width="1rem" height="1rem" absolute selectNone>
								{open ? <Icon_Home color="accent1" /> : <Icon_Clock color="accent1" />}
							</IconBox>
							<FolderName color="accent1" underline>
								{name}
							</FolderName>
						</IconText>
					</Link>
				) : (
					<IconText title={name} onClick={() => folderOpenSwitch(code)} lineHeight="1.25rem" between="2rem" cursorPointer>
						<IconBox width="1rem" height="1rem" absolute selectNone>
							{open ? <Icon_Home /> : <Icon_Clock color="sub" />}
						</IconBox>
						<FolderName color={open ? null : 'sub'}>{name}</FolderName>
					</IconText>
				)}
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
				{isCtrlPress ? (
					<IconText title={name} lineHeight="1.25rem" between="2rem">
						<IconBox width="1rem" height="1rem" absolute selectNone>
							{open ? <Icon_Home color="sub" /> : <Icon_Clock color="sub" />}
						</IconBox>
						<EllipsisText color="sub">{name}</EllipsisText>
					</IconText>
				) : (
					<Link href={'/folder/' + code}>
						<IconText title={name} lineHeight="1.25rem" between="2rem" cursorPointer>
							<IconBox width="1rem" height="1rem" absolute selectNone>
								{open ? <Icon_Home /> : <Icon_Clock color="sub" />}
							</IconBox>
							<EllipsisText color={open ? null : 'sub'}>{name}</EllipsisText>
						</IconText>
					</Link>
				)}
			</li>
		)
	}

	useEffect(() => {
		window.addEventListener('keydown', function (e) {
			if (e.key === 'Control') {
				setIsCtrlPress(true)
			}
		})

		window.addEventListener('keyup', function (e) {
			if (e.key === 'Control') {
				setIsCtrlPress(false)
			}
		})
	}, [])

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
