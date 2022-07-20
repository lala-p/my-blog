import { useEffect, useState, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'

const TestBox1 = styled.div`
	color: blue;
	padding: 10px;
`

const TestBox2 = styled.div`
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
			<TestBox1 class="">
				<TestBox3></TestBox3>
			</TestBox1>
		</div>
	)
}

export default Test
