import styled from 'styled-components'

import IconText from './IconText'
import { BoldText } from './Text'
import SelectNone from './SelectNone'

const CreatedDateBox = (props) => {
	return (
		<IconText
			img="/image/icon/clock_color3.svg"
			width="18px"
			height="18px"
			top="2px"
			between="10px"
			fontSize="16px"
			cursorPoint={false}
		>
			{props.children}
		</IconText>
	)
}

const UpdatedDateBox = (props) => {
	return (
		<IconText
			img="/image/icon/refresh_color3.svg"
			width="15px"
			height="15px"
			top="4px"
			between="10px"
			fontSize="16px"
			cursorPoint={false}
		>
			{props.children}
		</IconText>
	)
}

const ContainerBox = styled.div`
	display: inline-flex;
	flex-direction: row;
`

const DateBox = (props) => {
	return (
		<ContainerBox>
			<CreatedDateBox>{props.createdDate}</CreatedDateBox>

			{props.updatedDate != false ? (
				<SelectNone>
					<BoldText size="16px">&nbsp;&nbsp;·&nbsp;&nbsp;</BoldText>
				</SelectNone>
			) : null}
			{props.updatedDate != false ? <UpdatedDateBox>{props.updatedDate}</UpdatedDateBox> : null}
		</ContainerBox>
	)
}

export default DateBox
