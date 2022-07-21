import Image from 'next/image'
import styled from 'styled-components'

export const Text = styled.div`
	color: ${({ color, theme }) => (theme.color?.[color] !== undefined ? theme.color[color] : theme.color.text)};
	font-size: ${({ size }) => size || '1rem'};
	${({ bold }) => (bold ? 'font-weight: bold;' : null)}
`

export const EllipsisText = styled(Text)`
	width: ${({ width }) => width || '100%'};

	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;

	${({ line }) => 'display: -webkit-box; -webkit-line-clamp: ' + line + '; -webkit-box-orient: vertical;' || null}
`
