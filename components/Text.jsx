import Image from 'next/image'
import styled from 'styled-components'

export const Text = styled.div`
	color: ${({ color, theme }) => {
		if (color === undefined) {
			return theme.color.text
		} else if (typeof color === 'number') {
			switch (color) {
				case 1:
					return theme.color.text1
				case 2:
					return theme.color.text2
				default:
					return theme.color.text
			}
		} else {
			return color
		}
	}};
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
