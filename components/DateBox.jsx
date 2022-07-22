import styled from 'styled-components'

import IconText from './IconText'
import Text from './Text'
import SelectNone from './SelectNone'

const CreatedDateBox = (props) => {
	return (
		<IconText
			img="/image/icon/clock_color3.svg"
			width="1.125rem"
			height="1.125rem"
			textTop="0.063rem"
			between="0.625em"
		>
			<Text>{props.children}</Text>
		</IconText>
	)
}

const UpdatedDateBox = (props) => {
	return (
		<IconText img="/image/icon/refresh_color3.svg" width="1rem" height="1rem" textTop="0.063rem" between="0.625em">
			<Text>{props.children}</Text>
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
				<Text className="" bold>
					&nbsp;&nbsp;·&nbsp;&nbsp;
				</Text>
			) : null}
			{props.updatedDate != false ? <UpdatedDateBox>{props.updatedDate}</UpdatedDateBox> : null}
		</ContainerBox>
	)
}

export default DateBox
