import styled from 'styled-components'

const Container = styled.div`
	position: fixed;

	width: 100vw;
	height: 45px;

	z-index: 1;
	background-color: blue;
	// background-color: ${(props) => props.theme.color1};
`

const HeadTab = () => {
	return <Container>sdfsdf</Container>
}

export default HeadTab
