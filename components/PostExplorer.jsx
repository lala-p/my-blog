import styled from 'styled-components'
import Link from 'next/link'

import { EllipsisText } from './Text'
import { IconText, IconBox, Icon_Left } from './Icon'

import { postData } from '@data'

const Container = styled.div`
	width: 11rem;
	padding: 2.75rem 0 0 1rem;
`

const List = styled.ul`
	display: flex;
	flex-direction: column;

	margin-left: 0.75rem;

	line-height: 1.25rem;
`

const FolderName = styled(EllipsisText)`
	margin-bottom: 0.75rem;
`

const PostExplorer = (props) => {
	const currentPostCode = props.currentPostCode
	const fileListData = postData.getFileListData(currentPostCode)
	const parentFolderName = postData.getParentFolderName(currentPostCode)

	return (
		<Container>
			<FolderName title={parentFolderName}>{parentFolderName}</FolderName>
			<List>
				{fileListData.map((data, index) => {
					const stateColor = currentPostCode !== data.postCode ? 'sub' : undefined

					return (
						<li key={index}>
							<Link href={'/post/' + data.postCode}>
								<IconText title={data.title} lineHeight="1.25rem" between="1.5rem" cursorPointer>
									<IconBox width="1rem" height="1rem" absolute selectNone>
										<Icon_Left color={stateColor} />
									</IconBox>
									<EllipsisText color={stateColor}>{data.title}</EllipsisText>
								</IconText>
							</Link>
						</li>
					)
				})}
			</List>
		</Container>
	)
}

export default PostExplorer
