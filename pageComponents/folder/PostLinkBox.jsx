import styled from 'styled-components'

import Box from '@components/Box'

export const PostLinkBox = styled(Box)`
	display: flex;
	flex-direction: row;
	justify-content: space-between;

	width: 52rem;
`

export const ThumbnailBox = styled(Box)`
	position: relative;
	width: 13rem;
`

export const PostInfo = styled.div`
	width: 37rem;

	> * {
		&:nth-child(2) {
			height: 2rem;
			margin-top: 0.75rem;
		}
		&:nth-child(3) {
			height: 1.5rem;
			margin-top: 1.5rem;
			overflow: hidden;
		}
		&:last-child {
			margin-top: 0.5rem;
		}
	}
`
