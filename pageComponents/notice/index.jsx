import styled from 'styled-components'

import { MainContainer } from '../common'

export const NoticeHead = styled.div`
	margin-top: 2rem;

	> * {
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
