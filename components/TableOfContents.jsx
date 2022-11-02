import styled from 'styled-components'
import { useEffect, useState } from 'react'

const Container = styled.div`
	position: sticky;
	top: 100px;

	width: 200px;
	height: 300px;
`

const Heading = styled.div`
	margin: 0.25rem 0;
	cursor: pointer;

	color: ${({ active, theme }) => (active ? theme.color.text : theme.color.sub)};
	${({ sub }) => (sub ? 'padding-left: 1rem;' : null)}
`

const TableOfContents = (props) => {
	const [activeIndex, setActiveIndex] = useState()

	useEffect(() => {
		let scrollData = new Array()

		for (let index = 0; index < props.data.length; index++) {
			scrollData.push(document.getElementById(props.data[index].id).offsetTop - 45)
		}

		const activeHandle = () => {
			let newActiveIndex = -1

			for (let index = 0; index < scrollData.length; index++) {
				if (scrollData[0] > document.scrollingElement.scrollTop) {
					newActiveIndex = -1
					break
				} else if (
					(scrollData[index] <= document.scrollingElement.scrollTop && scrollData[index + 1] >= document.scrollingElement.scrollTop) ||
					index == scrollData.length - 1
				) {
					newActiveIndex = index
					break
				}
			}

			setActiveIndex(newActiveIndex)
		}

		window.addEventListener('scroll', activeHandle)

		return () => {
			window.removeEventListener('scroll', activeHandle)
			console.log('remove')
		}
	}, [])

	return (
		<Container>
			{props.data.map((data, index) => {
				return (
					<Heading
						key={data.id}
						sub={data.sub}
						active={activeIndex === index}
						onClick={() => {
							window.scrollTo({ top: document.getElementById(data.id).offsetTop - 40 })
						}}
					>
						{data.heading}
					</Heading>
				)
			})}
		</Container>
	)
}

export default TableOfContents
