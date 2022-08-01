import styled from 'styled-components'

const TagBox = styled.div`
	margin-right: 10px;
	margin-bottom: 10px;
	padding: 5px 15px 5px 15px;

	background-color: ${({ theme }) => theme.color.background1};
	color: ${({ theme }) => theme.color.accent1};

	border-radius: 15px;
	cursor: pointer;
`

const Tag = (props) => {
	return (
		<TagBox
			onClick={() => {
				alert('afafasdf')
			}}
		>
			{props.children}
		</TagBox>
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
