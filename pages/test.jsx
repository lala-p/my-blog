import { useEffect, useState, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'

import { PageContainer, Left, Center, MainContainer, Box, Content } from '../pageComponents/common'

const TestBox1 = styled.div`
	color: blue;
	padding: 10px;

	${({ cursorPointer }) => (cursorPointer ? 'cursor: pointer;' : null)}
	${({ selectNone }) =>
		selectNone
			? '-ms-user-select: none;' +
			  '-moz-user-select: -moz-none;' +
			  '-khml-user-select: none;' +
			  '-webkit-user-select: none;' +
			  'user-select: none;'
			: null}

	${({ test }) => {
		return null
	}}
`

const TestBox2 = styled(TestBox1)`
	color: yellow;
`

const TestBox3 = () => (
	<div>
		<TestBox2>asdasdsadasd</TestBox2>
		<div>asdasdasd</div>
		<div>assd</div>
	</div>
)

const Test = () => {
	const currentPage = useSelector((state) => state.notice.currentPage)
	const limit = useSelector((state) => state.notice.limit)

	const [keyword, setKeyword] = useState('')

	useEffect(() => {}, [])

	return (
		<div>
			<TestBox1 title={''} onClick={() => console.log('sadsds')}>
				asdasdasd
				<TestBox2 cursorPointer selectNone>
					asdsadasdadsadsad
				</TestBox2>
			</TestBox1>
		</div>
	)
}

export default Test
