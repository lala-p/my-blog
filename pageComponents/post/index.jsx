import styled from 'styled-components'

import Text from '@components/Text'
import { IconText, IconBox, Icon_Pencil } from '@components/Icon'
import { Content } from '../common'

export const MainContainer = styled.div`
	display: flex;
	flex-direction: row;

	justify-content: center;

	padding-top: 45px;
`

export const PostContainer = styled.div`
	width: 52rem;

	@media (max-width: ${({ subTabOpen }) => (subTabOpen ? '1450px' : '1250px')}) {
		margin: auto;
	}

	@media (max-width: 860px) {
		padding: 0 15px 0 15px;
		width: 100%;
	}
`

export const PostHead = styled.div`
	margin-top: 2rem;

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

export const PostBody = styled(Content)`
	margin-top: 1.5rem;
`

export const PostFoot = styled.div`
	margin-top: 3.25;
`

export const SideContainer = styled.div`
	width: 250px;

	background-color: yellow;
	margin-left: 30px;
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
