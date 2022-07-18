import { useEffect, useState, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import IconText from '../components/IconText'
import Content from '../components/Content'

const CreatedDateBox = (props) => {
	return (
		<IconText
			img="/image/icon/clock_color3.svg"
			width="1.125rem"
			height="1.125rem"
			top="0.125rem"
			between="0.625em"
			fontSize="1rem"
			cursorPoint={false}
		>
			{props.children}
		</IconText>
	)
}

const UpdatedDateBox = (props) => {
	return (
		<IconText
			img="/image/icon/refresh_color3.svg"
			width="1rem"
			height="1rem"
			top="0.25rem"
			between="0.625em"
			fontSize="1rem"
			cursorPoint={false}
		>
			{props.children}
		</IconText>
	)
}

const Test = () => {
	const currentPage = useSelector((state) => state.notice.currentPage)
	const limit = useSelector((state) => state.notice.limit)

	const [keyword, setKeyword] = useState('')

	useEffect(() => {}, [])

	return (
		<div>
			<CreatedDateBox>2022년 7월 18일</CreatedDateBox>
			<br />
			<UpdatedDateBox>2022년 7월 19일</UpdatedDateBox>
			<Content>
				<h1>제목1</h1>
				<h2>제목2</h2>
				<h3>제목3</h3>
				<h4>제목4</h4>
				<h5>제목5</h5>
				<h6>제목6</h6>
				<p>
					그리고 <strong>아무도</strong> 없었다. <br />
					무서운 야익기기기기기ㅣㄱ기기기 <br />
					hello world!
				</p>
			</Content>
		</div>
	)
}

export default Test
