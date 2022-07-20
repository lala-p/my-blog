import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'

const SubTab = styled.div`
	${(props) => (props.open ? null : 'display: none;')}

	position: fixed;

	left: 65px;

	width: 230px;
	height: 100vh;

	background-color: ${(props) => props.theme.color1};
`

export default SubTab
