import styled from 'styled-components'

import { MainContainer, Content } from '../common'

export const NoticeHead = styled.div`
	padding-bottom: 0.75rem;
	margin-top: 2rem;

	border-bottom: 0.063rem solid ${({ theme }) => theme.color.text};

	> * {
		&:nth-child(2) {
			margin-top: 2rem;
		}
		&:last-child {
			margin-top: 0.5rem;
		}
	}
`

export const NoticeBody = styled(Content)`
	margin-top: 5rem;
`

export const NoticeFoot = styled.div``

export const IndexMainContainer = styled(MainContainer)`
	> * {
		&:first-child {
			margin-top: 5rem;
			margin-left: 2rem;
		}
		&:nth-child(2) {
			margin-top: 8rem;
		}
		&:last-child {
			margin: auto;
			margin-top: 5rem;
		}
	}
`

export const DetailMainContainer = styled(MainContainer)``
