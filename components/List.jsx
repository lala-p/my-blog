import styled from 'styled-components'

export const RowList = styled.ul`
	display: flex;
	flex-direction: row;

	> li {
		&:not(:first-child) {
			margin-left: ${({ between }) => between ?? '0'};
		}
	}
`

export const ColumnList = styled.ul`
	display: flex;
	flex-direction: column;

	> li {
		&:not(:first-child) {
			margin-top: ${({ between }) => between ?? '0'};
		}
	}
`
