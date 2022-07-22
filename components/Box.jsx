import styled from 'styled-components'

const Box = styled.div`
	${({ cursorPointer }) => (cursorPointer ? 'cursor: pointer;' : null)}
	${({ selectNone }) =>
		selectNone
			? '-ms-user-select: none;' +
			  '-moz-user-select: -moz-none;' +
			  '-khml-user-select: none;' +
			  '-webkit-user-select: none;' +
			  'user-select: none;'
			: null}
`

export const MarginBox = styled.div`
	${({ margin }) => {
		if (typeof margin === 'string') {
			return `${margin};`
		} else if (typeof margin === 'object') {
			return `
                ${margin?.top ? 'margin-top: ' + margin.top + ';' : null}
                ${margin?.right ? 'margin-right: ' + margin.right + ';' : null}
                ${margin?.bottom ? 'margin-bottom: ' + margin.bottom + ';' : null}
                ${margin?.left ? 'margin-left: ' + margin.left + ';' : null}
            `
		} else {
			return null
		}
	}}

	${({ top }) => (top ? `margin-top: ${top};` : null)}
	${({ right }) => (right ? `margin-right: ${right};` : null)}
    ${({ bottom }) => (bottom ? `margin-bottom: ${bottom};` : null)}
    ${({ left }) => (left ? `margin-left: ${left};` : null)}
`

export const PaddingBox = styled.div`
	${({ padding }) => {
		if (typeof padding === 'string') {
			return `${padding};`
		} else if (typeof padding === 'object') {
			return `
                ${padding?.top ? 'padding-top: ' + padding.top + ';' : null}
                ${padding?.right ? 'padding-right: ' + padding.right + ';' : null}
                ${padding?.bottom ? 'padding-bottom: ' + padding.bottom + ';' : null}
                ${padding?.left ? 'padding-left: ' + padding.left + ';' : null}
            `
		} else {
			return null
		}
	}}

	${({ top }) => (top ? `padding-top: ${top};` : null)}
	${({ right }) => (right ? `padding-right: ${right};` : null)}
    ${({ bottom }) => (bottom ? `padding-bottom: ${bottom};` : null)}
    ${({ left }) => (left ? `padding-left: ${left};` : null)}
`

export const BetweenBox = styled.div`
	> * {
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

export default Box
