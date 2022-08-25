import styled from 'styled-components'

import { MainContainer, Content } from '../common'
import Text from '@components/Text'

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
	min-height: 25rem;
	margin-top: 5rem;
`

export const NoticeFoot = styled.div`
	margin-top: 5rem;
`

export const Notice = styled(Text)`
	font-size: 3.75rem;

	@media (max-width: 768px) {
		font-size: 2.75rem;
	}
`

export const IndexMainContainer = styled(MainContainer)`
	padding-bottom: 2rem;

	> * {
		&:first-child {
			margin-top: 8rem;
			margin-left: 2rem;
		}
		&:nth-child(2) {
			margin-top: 10rem;
		}
		&:last-child {
			display: flex;
			flex-direction: row;

			margin-top: 5rem;
		}
	}
`

export const DetailMainContainer = styled(MainContainer)`
	padding-bottom: 5rem;
`
