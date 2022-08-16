import styled from 'styled-components'

import Text from '@components/Text'
import Box, { PaddingBox, MarginBox } from '@components/Box'
import { IconText, IconBox, Icon_Clock, Icon_Refresh } from '@components/Icon'

export const PostedDate = (props) => {
	return (
		<IconText title="posted_date" lineHeight="1.125rem" between="0.625rem">
			<IconBox width="1.125rem" height="1.125rem" selectNone>
				<Icon_Clock />
			</IconBox>
			<Text>{props.children}</Text>
		</IconText>
	)
}

export const UpdatedIconText = styled(IconText)`
	::before {
		content: '·';
		font-weight: bold;
		margin-left: 0.75rem;
		margin-right: 0.75rem;
	}
`

export const UpdatedDate = (props) => {
	return (
		<UpdatedIconText title="updated_date" lineHeight="1.125rem" between="0.625rem">
			<IconBox width="1rem" height="1rem" selectNone>
				<Icon_Refresh />
			</IconBox>
			<Text>{props.children}</Text>
		</UpdatedIconText>
	)
}

export const DateBox = styled.div`
	display: inline-flex;
	flex-direction: row;
`
