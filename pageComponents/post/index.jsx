import styled from 'styled-components'

import IconText from '../../components/IconText'

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

export const WriterBox = (props) => {
	return (
		<IconText
			img="/image/icon/pencil_color3.svg"
			width="1rem"
			height="1rem"
			top="0.063rem"
			between="0.625rem"
			fontSize="1.12rem"
			cursorPoint={false}
		>
			{props.children}
		</IconText>
	)
}
