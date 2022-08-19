import styled from 'styled-components'

import Text from '@components/Text'
import { IconText, IconBox, Icon_Clock, Icon_Refresh } from '@components/Icon'

const color = 'sub'

export const CreatedDate = (props) => {
	return (
		<IconText title="created_date" lineHeight="1.125rem" between="0.625rem">
			<IconBox width="1.125rem" height="1.125rem" selectNone>
				<Icon_Clock color={color} />
			</IconBox>
			<Text color={color}>{props.children}</Text>
		</IconText>
	)
}

export const UpdatedDate = (props) => {
	return (
		<IconText title="updated_date" lineHeight="1.125rem" between="0.625rem">
			<IconBox width="1rem" height="1rem" selectNone>
				<Icon_Refresh color={color} />
			</IconBox>
			<Text color={color}>{props.children}</Text>
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

				margin-left: 0.75rem;
				margin-right: 0.75rem;

				font-weight: bold;
				color: ${({ theme }) => theme.color.sub};
			}
		}
	}
`
