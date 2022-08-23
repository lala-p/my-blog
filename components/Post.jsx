import Image from 'next/image'
import styled from 'styled-components'

import { DateBox3 } from './DateBox'
import Text, { EllipsisText, EllipsisH4 } from './Text'
import Box from './Box'
import { TagContainer, TagType2 } from './Tag'

const ContainerBox = styled(Box)`
	display: flex;
	flex-direction: row;
`

const PostInfoContainer = styled.div`
	width: 30rem;
	margin-left: 2rem;

	> * {
		&:first-child {
			margin-bottom: 1rem;
		}
		&:nth-child(2) {
			margin-bottom: 0.5rem;
		}
		&:nth-child(3) {
			height: 1.5rem;
			overflow: hidden;
		}
		&:last-child {
			/* margin-bottom: 1rem; */
		}
	}
`
const ThumbnailContainer = styled(Box)`
	position: relative;
	width: 13rem;
`

const Post = (props) => {
	return (
		<ContainerBox>
			<ThumbnailContainer selectNone>
				<Image src={props.thumbnail} layout="fill" objectFit="cover" />
			</ThumbnailContainer>
			<PostInfoContainer>
				<EllipsisH4>{props.title}</EllipsisH4>
				<EllipsisText color="sub" line="2" width="30rem">
					{props.subTitle === undefined ? null : props.subTitle}
				</EllipsisText>
				<TagContainer horizontalGap="0.625rem" verticalGap="0.625rem">
					{(props.tagList ?? new Array()).map((tag) => (
						<TagType2 key={tag}>{tag}</TagType2>
					))}
				</TagContainer>
				<DateBox3>
					<Text>{props.createdDate}</Text>
					{props.updatedDate !== undefined ? <Text>{props.updatedDate}</Text> : null}
				</DateBox3>
			</PostInfoContainer>
		</ContainerBox>
	)
}

export default Post
