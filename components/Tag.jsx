import styled from 'styled-components'

export const TagContainer = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;

	width: ${({ width }) => width ?? '100%'};

	> * {
		margin-right: ${({ horizontalGap }) => horizontalGap ?? '0'};
		margin-bottom: ${({ verticalGap }) => verticalGap ?? '0'};
	}
`

export const TagType1 = styled.span`
	padding: 0.4rem 1rem;

	background-color: ${({ theme }) => theme.color.background1};
	color: ${({ theme }) => theme.color.accent1};

	border-radius: 1rem;
	${({ cursorPointer }) => (cursorPointer ? 'cursor: pointer;' : null)}
`

export const TagType2 = styled.span`
	padding: 0.25rem 0.5rem;

	background-color: ${({ theme }) => theme.color.sub2};
	color: ${({ theme }) => theme.color.text1};

	border-radius: 0.5rem;
	${({ cursorPointer }) => (cursorPointer ? 'cursor: pointer;' : null)}
`
