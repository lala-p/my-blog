import styled from 'styled-components'

const Box = styled.div`
	margin-right: 10px;
	margin-bottom: 10px;
	padding: 5px 15px 5px 15px;

	background-color: ${(props) => props.theme.color.background1};
	color: ${(props) => props.theme.color.text1};

	border-radius: 15px;
	cursor: pointer;
`

const Tag = (props) => {
	return (
		<Box
			onClick={() => {
				alert('afafasdf')
			}}
		>
			{props.children}
		</Box>
	)
}

const List = styled.ul`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
`

export const TagList = (props) => {
	return (
		<List>
			{props.list.map((data) => (
				<li key={data}>
					<Tag>{data}</Tag>
				</li>
			))}
		</List>
	)
}

export default Tag
