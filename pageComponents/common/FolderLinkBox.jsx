import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'

import Box from '@components/Box'

const ThumbnailBox = styled(Box)`
	position: relative;
	height: 7.5rem;
`

const Point = styled.div`
	position: absolute;
	bottom: 0;
	left: -0.5rem;
	width: 5rem;
	height: 1rem;
	transform: skew(30deg);
	background-color: ${({ theme }) => theme.color.background1};
	border-radius: 0 0.7rem 0 0;
`

const FolderInfo = styled.div`
	height: 9rem;

	background-color: ${({ theme }) => theme.color.background1};
`

const FolderName = styled.h4`
	font-size: 1.5rem;
	line-height: 1.25;

	margin-top: 1.25rem;
	padding: 0 1rem;

	word-break: break-word;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
`

const Container = styled(Box)`
	display: flex;
	flex-direction: column;
	width: 17rem;
	border-radius: 0.5rem;

	overflow: hidden;

	margin-left: 3rem;
`

const FolderLinkBox = (props) => {
	return (
		<Container onClick={() => props.click()} cursorPointer>
			<ThumbnailBox selectNone>
				<Image src={props.data.thumbnail} layout="fill" objectFit="cover" alt="thumbnail" priority />
				<Point />
			</ThumbnailBox>
			<FolderInfo>
				<FolderName title={props.data.name}>{props.data.name}</FolderName>
			</FolderInfo>
		</Container>
	)
}

export default FolderLinkBox
