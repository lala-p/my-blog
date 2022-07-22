import styled from 'styled-components'

export const RowList = styled.ul`
	display: flex;
	flex-direction: row;

	> li {
		&:first-child {
			margin-right: ${({ between }) => between ?? '0'};
		}

		&:not(first-child),
		&:not(last-child) {
			margin-left: ${({ between }) => between ?? '0'};
			margin-right: ${({ between }) => between ?? '0'};
		}

		&:last-child {
			margin-left: ${({ between }) => between ?? '0'};
		}
	}
`

export const ColumnList = styled.ul`
	display: flex;
	flex-direction: column;

	> li {
		&:first-child {
			margin-bottom: ${({ between }) => between ?? '0'};
		}

		&:not(first-child),
		&:not(last-child) {
			margin-top: ${({ between }) => between ?? '0'};
			margin-botton: ${({ between }) => between ?? '0'};
		}

		&:last-child {
			margin-top: ${({ between }) => between ?? '0'};
		}
	}
`
