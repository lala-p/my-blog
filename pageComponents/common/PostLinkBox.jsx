import Link from 'next/link'
import Image from 'next/image'
import styled from 'styled-components'

import Box from '@components/Box'
import Text, { EllipsisText, EllipsisH4 } from '@components/Text'
import { DateBox3 } from '@components/DateBox'
import { TagContainer, TagType2 } from '@components/Tag'

import { dateFormat1 } from '@commonFun/date'

const ThumbnailBox = styled(Box)`
	position: relative;
	width: 13rem;
`

const PostInfo = styled.div`
	width: 37rem;

	> * {
		&:nth-child(2) {
			height: 2rem;
			margin-top: 0.75rem;
		}
		&:nth-child(3) {
			height: 1.5rem;
			margin-top: 1.5rem;
			overflow: hidden;
		}
		&:last-child {
			margin-top: 0.5rem;
		}
	}
`
const Container = styled(Box)`
	display: flex;
	flex-direction: row;
	justify-content: space-between;

	width: 52rem;
`

const PostLinkBox = (props) => {
	return (
		<Link href={'/post/' + props.data.postCode}>
			<Container cursorPointer>
				<ThumbnailBox selectNone>
					<Image src={props.data.thumbnail} layout="fill" objectFit="cover" alt="thumbnail" priority />
				</ThumbnailBox>
				<PostInfo>
					<EllipsisH4 title={props.data.title}>{props.data.title}</EllipsisH4>
					<EllipsisText title={props.data.subTitle} color="sub" line="2">
						{props.data.subTitle}
					</EllipsisText>
					<TagContainer horizontalGap="0.625rem" verticalGap="0.625rem">
						{props.data.tagList.map((tag) => (
							<TagType2 key={tag}>{tag}</TagType2>
						))}
					</TagContainer>
					<DateBox3>
						<Text color="sub">{dateFormat1(props.data.createdDate)}</Text>
						{props.data.updatedDate !== undefined ? <Text color="sub">{dateFormat1(props.data.updatedDate)}</Text> : null}
					</DateBox3>
				</PostInfo>
			</Container>
		</Link>
	)
}

export default PostLinkBox
