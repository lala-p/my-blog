import Link from 'next/link'
import Image from 'next/image'
import styled from 'styled-components'

import Box from '@components/Box'
import { Text, EllipsisH3, EllipsisText } from '@components/Text'
import { dateFormat1 } from '@commonFun/date'

const ContainerBox = styled.div`
	display: flex;
	flex-direction: column;
	width: 20rem;

	margin-left: 3rem;
	background-color: ${({ theme }) => theme.color.background1};
	border-radius: 0.5rem;
	overflow: hidden;
`

const ThumbnailBox = styled(Box)`
	position: relative;
	height: 10rem;
`

const PostInfo = styled.div`
	padding: 1.2rem 0.75rem 1.5rem;

	> * {
		&:first-child {
			font-size: 1.5rem;
		}

		&:nth-child(2) {
			height: 2.6rem;
			margin-top: 0.75rem;
		}

		&:last-child {
			margin-top: 1rem;
		}
	}
`

const PostLinkBox = (props) => {
	return (
		<Link href={'/post/' + props.data.postCode} passHref>
			<a>
				<ContainerBox>
					<ThumbnailBox selectNone>
						<Image src={props.data.thumbnail} layout="fill" objectFit="cover" alt="thumbnail" priority />
					</ThumbnailBox>
					<PostInfo>
						<EllipsisH3 lineHeight="1.3">{props.data.title}</EllipsisH3>
						<EllipsisText size="0.95rem" line="2" lineHeight="1.3">
							{props.data.subTitle}
						</EllipsisText>
						<Text size="0.9rem" color="sub">
							posted {dateFormat1(props.data.createdDate)}
						</Text>
					</PostInfo>
				</ContainerBox>
			</a>
		</Link>
	)
}

export default PostLinkBox
