import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'

import { DateBox, PostedDate, UpdatedDate } from './DateBox1'
import { EllipsisText, EllipsisH4 } from './Text'
import Box from './Box'
import { ColumnList } from './List'
import { TagContainer, TagType2 } from './Tag'

const ContainerBox = styled(Box)`
	display: inline-flex;
	flex-direction: row;
	justify-content: space-between;

	padding: 1rem 1rem 1rem 0;
`

const ImageBox = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
`

// const PostSubTitle = styled(EllipsisText)`
// 	${({ displayNone }) => (displayNone ? 'display: none;' : null)}
// `

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
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	width: 13rem;
`

const Post = (props) => {
	return (
		<ContainerBox>
			<ThumbnailContainer selectNone>
				<ImageBox>
					<Image src={props.thumbnail} layout="fill" objectFit="cover" />
				</ImageBox>
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
				<DateBox>
					<PostedDate>{props.createdDate}</PostedDate>
					{props.updatedDate !== undefined ? <UpdatedDate>{props.updatedDate}</UpdatedDate> : null}
				</DateBox>
			</PostInfoContainer>
		</ContainerBox>
	)
}

export const PostList = (props) => {
	return (
		<ColumnList>
			{props.listData.map((data, index) => (
				<li key={index}>
					<Link href={'/post/' + data.code}>
						<Post
							thumbnail={data.thumbnail}
							title={data.title}
							subTitle={data.subTitle}
							tagList={data.tagList}
							createdDate={data.createdDate}
							updatedDate={data.updatedDate}
						/>
					</Link>
				</li>
			))}
		</ColumnList>
	)
}

export default Post
