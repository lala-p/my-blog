import styled from 'styled-components'
import { useEffect, useState } from 'react'

import FolderLinkBox from '../pageComponents/common/FolderLinkBox'

const Point2 = styled.div`
	position: absolute;
	bottom: 10rem;
	left: 5rem;
	width: 5rem;
	height: 3rem;
	border-radius: 0 5rem 0 0;
	/* backgroun: 40px solid rgba(0, 0, 0, 0); */
	/* border-bottom: 5rem solid ${({ theme }) => theme.color.background1}; */
	background-color: ${({ theme }) => theme.color.background1};
`

const Test = () => {
	const [value, setValue] = useState(123)

	useEffect(() => {
		console.log(typeof value)
	})

	return (
		<div>
			{/* <input onChange={(e) => setValue(Number(e.target.value))} /> */}
			<br />
			<br />
			<br />
			<FolderLinkBox data={{ thumbnail: '/image/thumbnail/thumbnailTest.jpg', name: 'my-blog 토이 프로젝트' }} />
			<Point2></Point2>

			<br />
			<br />
		</div>
	)
}

export default Test
