import Image from 'next/image'
import styled from 'styled-components'

export const Text = styled.div`
	color: ${({ color, theme }) => (theme.color?.[color] !== undefined ? theme.color[color] : theme.color.text)};
	font-size: ${({ size }) => size ?? '1rem'};
	${({ bold }) => (bold ? 'font-weight: bold;' : null)}
	${({ lineHeight }) => (lineHeight ? `line-height: ${lineHeight};` : null)}
`

export const EllipsisText = styled(Text)`
	width: ${({ width }) => width ?? '100%'};

	text-overflow: ellipsis;
	overflow: hidden;

	${({ line }) =>
		line
			? 'word-break: break-word; display: -webkit-box; -webkit-line-clamp: ' +
			  line +
			  '; -webkit-box-orient: vertical;'
			: 'white-space: nowrap;'}
`

export const EllipsisH1 = styled.h1`
	width: ${({ width }) => width ?? '100%'};

	text-overflow: ellipsis;
	overflow: hidden;

	${({ line }) =>
		line
			? 'word-break: break-word; display: -webkit-box; -webkit-line-clamp: ' +
			  line +
			  '; -webkit-box-orient: vertical;'
			: 'white-space: nowrap;'}
`

export const EllipsisH2 = styled.h2`
	width: ${({ width }) => width ?? '100%'};

	text-overflow: ellipsis;
	overflow: hidden;

	${({ line }) =>
		line
			? 'word-break: break-word; display: -webkit-box; -webkit-line-clamp: ' +
			  line +
			  '; -webkit-box-orient: vertical;'
			: 'white-space: nowrap;'}
`

export const EllipsisH3 = styled.h3`
	width: ${({ width }) => width ?? '100%'};

	text-overflow: ellipsis;
	overflow: hidden;

	${({ line }) =>
		line
			? 'word-break: break-word; display: -webkit-box; -webkit-line-clamp: ' +
			  line +
			  '; -webkit-box-orient: vertical;'
			: 'white-space: nowrap;'}
`

export const EllipsisH4 = styled.h4`
	width: ${({ width }) => width ?? '100%'};

	text-overflow: ellipsis;
	overflow: hidden;

	${({ line }) =>
		line
			? 'word-break: break-word; display: -webkit-box; -webkit-line-clamp: ' +
			  line +
			  '; -webkit-box-orient: vertical;'
			: 'white-space: nowrap;'}
`

export const EllipsisH5 = styled.h5`
	width: ${({ width }) => width ?? '100%'};

	text-overflow: ellipsis;
	overflow: hidden;

	${({ line }) =>
		line
			? 'word-break: break-word; display: -webkit-box; -webkit-line-clamp: ' +
			  line +
			  '; -webkit-box-orient: vertical;'
			: 'white-space: nowrap;'}
`

export const EllipsisH6 = styled.h6`
	width: ${({ width }) => width ?? '100%'};

	text-overflow: ellipsis;
	overflow: hidden;

	${({ line }) =>
		line
			? 'word-break: break-word; display: -webkit-box; -webkit-line-clamp: ' +
			  line +
			  '; -webkit-box-orient: vertical;'
			: 'white-space: nowrap;'}
`

export default Text
