import styled from 'styled-components'

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
	padding-left: ${(props) => (props.subTabOpen ? '295px' : '65px')};

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

export const Box = styled.div`
	margin-top: ${(props) => props.top || '0'};
	margin-bottom: ${(props) => props.bottom || '0'};
`

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
		color: ${(props) => props.theme.color.text1};
	}
	ol {
	}

	ul {
	}
`
