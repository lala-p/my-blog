import styled from 'styled-components'

import Box, { PaddingBox, MarginBox } from './Box'
import { IconText, IconBox, Icon_Clock, Icon_Refresh } from './Icon'

const DateContent = styled.div`
	white-space: nowrap;
	margin-left: 0.625rem;
`

const CreatedDate = (props) => {
	return (
		<IconText title="created_date" lineHeight="1.125rem">
			<IconBox width="1.125rem" height="1.125rem" selectNone>
				<Icon_Clock />
			</IconBox>
			<DateContent>{props.children}</DateContent>
		</IconText>
	)
}

const UpdatedIconText = styled(IconText)`
	::before {
		content: '·';
		font-weight: bold;
		margin-left: 0.75rem;
		margin-right: 0.75rem;
	}
`

const UpdatedDate = (props) => {
	return (
		<UpdatedIconText title="updated_date" lineHeight="1.125rem">
			<IconBox width="1rem" height="1rem" selectNone>
				<Icon_Refresh />
			</IconBox>
			<DateContent>{props.children}</DateContent>
		</UpdatedIconText>
	)
}

const ContainerBox = styled.div`
	display: inline-flex;
	flex-direction: row;
`

const DateBox = (props) => {
	return (
		<ContainerBox>
			<CreatedDate>{props.createdDate}</CreatedDate>
			{props.updatedDate != false ? <UpdatedDate>{props.updatedDate}</UpdatedDate> : null}
		</ContainerBox>
	)
}

export default DateBox
