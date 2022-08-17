import styled from 'styled-components'

import Text from '@components/Text'
import { IconText, IconBox, Icon_Calendar, Icon_Refresh } from '@components/Icon'

export const PostedDate = (props) => {
	return (
		<IconText title="posted_date" lineHeight="1.125rem" between="0.625rem">
			<IconBox width="1rem" height="1rem" selectNone>
				<Icon_Calendar />
			</IconBox>
			<Text>{props.children}</Text>
		</IconText>
	)
}

export const UpdatedDate = (props) => {
	return (
		<IconText title="updated_date" lineHeight="1.125rem" between="0.625rem">
			<IconBox width="1rem" height="1rem" selectNone>
				<Icon_Refresh />
			</IconBox>
			<Text>{props.children}</Text>
		</IconText>
	)
}

export const DateBox = styled.div`
	display: inline-flex;
	flex-direction: row;

	> * {
		&:nth-child(2) {
			::before {
				content: '·';
				font-weight: bold;
				margin-left: 0.75rem;
				margin-right: 0.75rem;
			}
		}
	}
`