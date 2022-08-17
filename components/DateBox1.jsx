import styled from 'styled-components'

const DateText = styled.div`
	font-size: 1rem;
	color: ${({ theme }) => theme.color.sub};
`

const UpdatedText = styled(DateText)`
	::before {
		content: '·';
		margin-left: 0.5rem;
		margin-right: 0.5rem;
		color: ${({ theme }) => theme.color.sub};
	}
`
export const PostedDate = (props) => {
	return <DateText>posted&nbsp;{props.children}</DateText>
}

export const UpdatedDate = (props) => {
	return <UpdatedText>updated&nbsp;{props.children}</UpdatedText>
}

export const DateBox = styled.div`
	display: inline-flex;
	flex-direction: row;
`
