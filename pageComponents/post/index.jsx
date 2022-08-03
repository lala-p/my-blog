import styled from 'styled-components'

import Text from '@components/Text'
import { IconText, IconBox, Icon_Pencil } from '@components/Icon'

export const PostContainer = styled.div`
	display: block;
	width: 830px;

	margin-right: 30px;

	@media (max-width: ${({ subTabOpen }) => (subTabOpen ? '1450px' : '1250px')}) {
		margin: auto;
	}

	@media (max-width: 860px) {
		padding: 0 15px 0 15px;
		width: 100%;
	}
`

export const PostHead = styled.div`
	margin-top: 30px;

	> * {
		&:first-child {
			margin-bottom: 1rem;
		}
		&:nth-child(2) {
			margin-bottom: 0.5rem;
		}
		&:nth-child(3) {
			margin-bottom: 1rem;
		}
		&:last-child {
			margin-bottom: 1rem;
		}
	}
`

export const PostBody = styled.div`
	margin-top: 20px;
`

export const PostFoot = styled.div`
	margin-top: 50px;
`

export const SideContainer = styled.div`
	width: 250px;

	background-color: yellow;

	@media (max-width: ${({ subTabOpen }) => (subTabOpen ? '1450px' : '1250px')}) {
		display: none;
	}
`

export const PostTitle = styled.h1`
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
