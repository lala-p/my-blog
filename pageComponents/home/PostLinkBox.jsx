import Link from 'next/link'
import Image from 'next/image'
import styled from 'styled-components'

import Box from '@components/Box'
import { EllipsisText } from '@components/Text'

const ContainerBox = styled.div``

const ThumbnailBox = styled(Box)`
	position: relative;
	height: 7.5rem;
`

const PostInfo = styled.div``

const PostLinkBox = (props) => {
	return (
		<Link href={'/post/' + props.data.postCode} passHref>
			<a>
				<ContainerBox>
					<ThumbnailBox selectNone>
						<Image src={props.data.thumbnail} layout="fill" objectFit="cover" alt="thumbnail" priority />
					</ThumbnailBox>
					<PostInfo>
						<h3>{props.data.title}</h3>
						<EllipsisText line="3">{props.data.subTitle}</EllipsisText>
						{/* dateBox createdDate만  */}
					</PostInfo>
				</ContainerBox>
			</a>
		</Link>
	)
}

export default PostLinkBox
