import styled from 'styled-components'

import useKeyPressState from '@hooks/useKeyPressEvent'

import { EllipsisText } from './Text'
import { IconText, IconBox, Icon_Left } from './Icon'
import SwitchLink from './SwitchLink'

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

	${({ cursorPointer }) => (cursorPointer ? 'cursor: pointer;' : null)}
`

const PostExplorer = (props) => {
	const currentPostCode = props.currentPostCode

	const fileListData = postData.getFileListData(currentPostCode)
	const parentCode = postData.getParentCode(currentPostCode)
	const parentFolderName = postData.getParentFolderName(currentPostCode)

	const isCtrlPress = useKeyPressState('Control')

	return (
		<Container>
			<SwitchLink href={'/folder/' + parentCode} state={isCtrlPress} passHref>
				<FolderName title={parentFolderName} color={isCtrlPress ? 'accent1' : undefined} underline={isCtrlPress} cursorPointer={isCtrlPress}>
					{parentFolderName}
				</FolderName>
			</SwitchLink>
			<List>
				{fileListData.map((data, index) => {
					const color = isCtrlPress || currentPostCode !== data.postCode ? 'sub' : undefined

					return (
						<li key={index}>
							<SwitchLink href={'/post/' + data.postCode} state={!isCtrlPress} passHref>
								<IconText title={data.title} lineHeight="1.25rem" between="1.5rem" underline={isCtrlPress} cursorPointer>
									<IconBox width="1rem" height="1rem" absolute selectNone>
										<Icon_Left color={color} />
									</IconBox>
									<EllipsisText color={color}>{data.title}</EllipsisText>
								</IconText>
							</SwitchLink>
						</li>
					)
				})}
			</List>
		</Container>
	)
}

export default PostExplorer
