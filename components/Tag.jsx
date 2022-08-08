import styled from 'styled-components'

const TagBox = styled.div`
	margin-right: 0.625rem;
	margin-bottom: 0.625rem;
	padding: 0.4rem 1rem 0.4rem 1rem;

	font-size: 1rem;

	background-color: ${({ theme }) => theme.color.background1};
	color: ${({ theme }) => theme.color.accent1};

	border-radius: 1rem;
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
