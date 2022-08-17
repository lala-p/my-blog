import styled from 'styled-components'

import Text from '@components/Text'
import { IconText, IconBox, Icon_Pencil } from '@components/Icon'

export const PageContainer = styled.div`
	display: flex;
	flex-direction: row;
`

export const Left = styled.div`
	@media (max-width: 1180px) {
		display: none;
	}
`

export const Center = styled.div`
	width: 100%;
	padding-left: ${({ subTabOpen }) => (subTabOpen ? '295px' : '65px')};

	@media (max-width: 1180px) {
		padding-left: 0;
	}
`

export const MainContainer = styled.div`
	display: flex;
	flex-direction: row;

	justify-content: center;

	padding-top: 45px;
`

export const Title = styled.h1`
	font-size: 3rem;
	line-height: 1.5;
	word-break: keep-all;
	overflow-wrap: break-word;
`

export const Writer = (props) => {
	return (
		<IconText title="writer" between="0.75rem">
			<IconBox width="1rem" height="1rem" selectNone>
				<Icon_Pencil />
			</IconBox>
			<Text>{props.children}</Text>
		</IconText>
	)
}

export const Content = styled.div`
	width: 100%;

	color: ${({ theme }) => theme.color.text};
	font-size: 1.125rem;
	line-height: 1.8;

	word-break: keep-all;
	overflow-wrap: break-word;

	h1 {
		font-size: 3rem;
	}

	h2 {
		font-size: 2.5rem;
	}

	h3 {
		font-size: 2rem;
	}

	h4 {
		font-size: 1.5rem;
	}

	a {
		color: ${({ theme }) => theme.color.accent1};
	}
	ol {
	}

	ul {
	}
`
