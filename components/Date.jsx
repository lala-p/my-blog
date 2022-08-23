import Text from '@components/Text'
import { IconText, IconBox, Icon_Clock, Icon_Refresh, Icon_Calendar } from '@components/Icon'

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

export const CreatedDate1 = (props) => {
	return (
		<IconText title="created_date" lineHeight="1.125rem" between="0.625rem">
			<IconBox width="1.125rem" height="1.125rem" selectNone>
				<Icon_Clock />
			</IconBox>
			<Text>{props.children}</Text>
		</IconText>
	)
}

export const UpdatedDate1 = (props) => {
	return (
		<IconText title="updated_date" lineHeight="1.125rem" between="0.625rem">
			<IconBox width="1rem" height="1rem" selectNone>
				<Icon_Refresh />
			</IconBox>
			<Text>{props.children}</Text>
		</IconText>
	)
}

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

export const CreatedDate2 = (props) => {
	return (
		<IconText title="created_date" lineHeight="1.125rem" between="0.625rem">
			<IconBox width="1.125rem" height="1.125rem" selectNone>
				<Icon_Clock color="sub" />
			</IconBox>
			<Text color="sub">{props.children}</Text>
		</IconText>
	)
}

export const UpdatedDate2 = (props) => {
	return (
		<IconText title="updated_date" lineHeight="1.125rem" between="0.625rem">
			<IconBox width="1rem" height="1rem" selectNone>
				<Icon_Refresh color="sub" />
			</IconBox>
			<Text color="sub">{props.children}</Text>
		</IconText>
	)
}

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

export const CreatedDate3 = (props) => {
	return (
		<IconText title="posted_date" lineHeight="1.125rem" between="0.625rem">
			<IconBox width="1rem" height="1rem" selectNone>
				<Icon_Calendar />
			</IconBox>
			<Text>{props.children}</Text>
		</IconText>
	)
}

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
