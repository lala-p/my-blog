import styled from 'styled-components'

export const NoticeContainer = styled.div`
	width: 52rem;
`
export const NoticeHead = styled.div`
	margin-top: 2rem;

	> * {
		/* &:first-child {
			margin-top: 1rem;
		} */
		&:nth-child(2) {
			margin-top: 1.5rem;
		}
		&:last-child {
			margin-top: 0.5rem;
		}
	}
`

export const NoticeBody = styled.div`
	margin-top: 1.5rem;
`
