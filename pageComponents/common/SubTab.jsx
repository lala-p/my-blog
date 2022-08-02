import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'

const SubTab = styled.div`
	position: fixed;

	left: 65px;

	width: 230px;
	height: 100vh;

	background-color: ${({ theme }) => theme.color.background1};

	${({ open }) => (open ? null : 'display: none;')}
`

export default SubTab
