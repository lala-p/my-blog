import styled from 'styled-components'

import { MainContainer } from '../common'

export const WrapBox = styled.div`
	display: flex;
	flex-wrap: wrap;
`

export const FolderContainer = styled(MainContainer)``

export const LinkFolderContainer = styled(MainContainer)`
	/* padding-bottom: 2rem;

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
	} */
`

export const IndexMainContainer = styled(MainContainer)``

export const FolderInfo = styled.div`
	> * {
		&:first-child {
		}

		&:last-child {
		}
	}
`
