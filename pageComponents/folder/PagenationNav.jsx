import styled from 'styled-components'

import Box from '@components/Box'

export const PageInput = styled.input`
	width: 3rem;

	text-align: center;
`

export const ArrowBox = styled(Box)`
	display: flex;
	align-items: center;
	justify-content: center;

	width: 1.5rem;
	border-radius: 0.25rem;
	background-color: gray;
`

export const PagenationNav = styled.div`
	display: flex;
	flex-direction: row;

	height: 2rem;
	line-height: 2rem;
`
