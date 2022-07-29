import { useEffect, useState, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'

import IconText from '../components/IconText'
import Text, { EllipsisText } from '../components/Text'
import { ColumnList } from '../components/List'
import Box, { PaddingBox } from '../components/Box'
import { IconClock } from '../components/Icon'

import { getFolderNameByCode } from '../commonFun/folder'

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

const TextBox = styled(Box)`
	width: 100%;
	display: -webkit-box;
`

const ImageBox = styled.div`
	position: relative;
	top: 0;

	width: 1rem;
	height: 1rem;

	/* margin-right: 0.625rem; */
`

const FolderText = (props) => {
	return (
		<>
			<ImageBox>
				<Image src="/image/icon/clock_color3.svg" layout="fill" objectFit="cover" />
			</ImageBox>
			<PaddingBox left=" 0.625rem">
				<EllipsisText>{props.children}</EllipsisText>
			</PaddingBox>
		</>
	)
}

const RootList = styled(ColumnList)`
	width: 160px;
`

const ContentList = styled(ColumnList)`
	width: 100%;
`

const Folder = (props) => {
	const code = props.code
	const name = getFolderNameByCode(code)

	return (
		<li>
			<TextBox title={name} cursorPointer>
				<FolderText>{name}</FolderText>
			</TextBox>
			<FolderContent>
				<ContentList>{props.children}</ContentList>
			</FolderContent>
		</li>
	)
}

const LinkFolder = (props) => {
	const code = props.code
	const name = getFolderNameByCode(code)

	return (
		<li>
			<Link href={'/folder/' + code}>
				<TextBox title={name} cursorPointer>
					<FolderText>{name}</FolderText>
				</TextBox>
			</Link>
		</li>
	)
}

const FolderContent = styled.div`
	padding-left: 16px;
`

const Test = () => {
	useEffect(() => {}, [])

	return (
		<div>
			<IconClock color="background1" />
			{/* <RootList>
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
			</RootList> */}
		</div>
	)
}

export default Test
