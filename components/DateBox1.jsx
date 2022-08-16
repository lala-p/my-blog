import styled from 'styled-components'

export const PostedDate = styled.div`
	font-size: 1rem;
	color: ${({ theme }) => theme.color.sub};

	::before {
		content: 'posted ';
		/* margin-left: 0.75rem;
		margin-right: 0.75rem; */
	}
`

export const UpdatedDate = styled.div`
	font-size: 1rem;
	color: ${({ theme }) => theme.color.sub};

	::before {
		content: '· updated ';
		/* margin-left: 0.5rem; */
		/* margin-right: 0.75rem; */
	}
`

export const DateBox = styled.div`
	display: inline-flex;
	flex-direction: row;

	> * {
		&:nth-child(2) {
			margin-left: 0.5rem;
		}
	}
`
