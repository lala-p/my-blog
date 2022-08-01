import { useEffect, useState, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'

// import IconText from '../components/IconText'
import Text, { EllipsisText } from '../components/Text'
import { ColumnList } from '../components/List'
import Box, { PaddingBox } from '../components/Box'
import { Icon_Clock } from '../components/Icon'

import { getFolderNameByCode } from '../commonFun/folder'

const RootList = styled(ColumnList)`
	width: 13rem;
`

const FolderContentList = styled(ColumnList)`
	padding-left: 1.125rem;
	margin-top: 0.25rem;
`

const FolderName = styled(EllipsisText)`
	padding-left: 2rem;
	font-size: 1.125rem;
`

const IconText = styled(Box)`
	display: flex;
	flex-direction: row;

	align-items: center;
	line-height: 1.5rem;
`

const IconBox = styled.div`
	position: absolute;
	width: 1.5rem;
	height: 1.5rem;
`

const Test = () => {
	useEffect(() => {}, [])

	const Folder = (props) => {
		const code = props.code
		const name = getFolderNameByCode(code)

		return (
			<li>
				<IconText title={name} cursorPointer>
					<IconBox>
						<Icon_Clock width="100%" height="100%" />
					</IconBox>
					<FolderName>그리고아무도없었따그리고아무도없었따</FolderName>
				</IconText>
				<FolderContentList between="0.5rem">{props.children}</FolderContentList>
			</li>
		)
	}

	const LinkFolder = (props) => {
		const code = props.code
		const name = getFolderNameByCode(code)

		return (
			<li>
				<Link href={'/folder/' + code}>
					<IconText title={name} cursorPointer>
						<IconBox>
							<Icon_Clock width="100%" height="100%" />
						</IconBox>
						<FolderName>그리고아무도없었따그리고아무도없었따</FolderName>
					</IconText>
				</Link>
			</li>
		)
	}

	return (
		<div>
			<RootList>
				<Folder code="root">
					<Folder code="FolderExample">
						<Folder code="FolderExample">
							<Folder code="FolderExample">
								<Folder code="FolderExample">
									<LinkFolder code="example1" />
									<LinkFolder code="example2" />
									<LinkFolder code="example3" />
								</Folder>
							</Folder>
						</Folder>
					</Folder>
				</Folder>
			</RootList>
		</div>
	)
}

export default Test
