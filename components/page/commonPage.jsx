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
