import styled from 'styled-components'

export const Text = styled.div`
	color: ${({ color, theme }) => (theme.color?.[color] !== undefined ? theme.color[color] : theme.color.text)};
	font-size: ${({ size }) => size ?? '1rem'};
	${({ bold }) => (bold ? 'font-weight: bold;' : null)}
	${({ lineHeight }) => (lineHeight ? `line-height: ${lineHeight};` : null)}
	${({ underline }) => (underline ? 'text-decoration: underline;' : null)}
`

export const SelectNoneText = styled(Text)`
	-ms-user-select: none;
	-moz-user-select: -moz-none;
	-khml-user-select: none;
	-webkit-user-select: none;
	user-select: none;
`

export const EllipsisText = styled(Text)`
	width: ${({ width }) => width ?? '100%'};

	text-overflow: ellipsis;
	overflow: hidden;

	${({ line }) =>
		line
			? `
				word-break: break-word; 
				display: -webkit-box; 
				-webkit-line-clamp: ${line}; 
				-webkit-box-orient: vertical;
			`
			: 'white-space: nowrap;'}
`

export const EllipsisH1 = styled.h1`
	color: ${({ color, theme }) => (theme.color?.[color] !== undefined ? theme.color[color] : theme.color.text)};
	${({ lineHeight }) => (lineHeight ? `line-height: ${lineHeight};` : null)}
	${({ underline }) => (underline ? 'text-decoration: underline;' : null)}

	width: ${({ width }) => width ?? '100%'};
	text-overflow: ellipsis;
	overflow: hidden;

	${({ line }) =>
		line
			? `
				word-break: break-word; 
				display: -webkit-box; 
				-webkit-line-clamp: ${line}; 
				-webkit-box-orient: vertical;
			`
			: 'white-space: nowrap;'}
`

export const EllipsisH2 = styled.h2`
	color: ${({ color, theme }) => (theme.color?.[color] !== undefined ? theme.color[color] : theme.color.text)};
	${({ lineHeight }) => (lineHeight ? `line-height: ${lineHeight};` : null)}
	${({ underline }) => (underline ? 'text-decoration: underline;' : null)}

	width: ${({ width }) => width ?? '100%'};
	text-overflow: ellipsis;
	overflow: hidden;

	${({ line }) =>
		line
			? `
				word-break: break-word; 
				display: -webkit-box; 
				-webkit-line-clamp: ${line}; 
				-webkit-box-orient: vertical;
			`
			: 'white-space: nowrap;'}
`

export const EllipsisH3 = styled.h3`
	color: ${({ color, theme }) => (theme.color?.[color] !== undefined ? theme.color[color] : theme.color.text)};
	${({ lineHeight }) => (lineHeight ? `line-height: ${lineHeight};` : null)}
	${({ underline }) => (underline ? 'text-decoration: underline;' : null)}


	width: ${({ width }) => width ?? '100%'};
	text-overflow: ellipsis;
	overflow: hidden;

	${({ line }) =>
		line
			? `
				word-break: break-word; 
				display: -webkit-box; 
				-webkit-line-clamp: ${line}; 
				-webkit-box-orient: vertical;
			`
			: 'white-space: nowrap;'}
`
export const EllipsisH4 = styled.h4`
	color: ${({ color, theme }) => (theme.color?.[color] !== undefined ? theme.color[color] : theme.color.text)};
	${({ lineHeight }) => (lineHeight ? `line-height: ${lineHeight};` : null)}
	${({ underline }) => (underline ? 'text-decoration: underline;' : null)}


	width: ${({ width }) => width ?? '100%'};
	text-overflow: ellipsis;
	overflow: hidden;

	${({ line }) =>
		line
			? `
				word-break: break-word; 
				display: -webkit-box; 
				-webkit-line-clamp: ${line}; 
				-webkit-box-orient: vertical;
			`
			: 'white-space: nowrap;'}
`

export const EllipsisH5 = styled.h5`
	color: ${({ color, theme }) => (theme.color?.[color] !== undefined ? theme.color[color] : theme.color.text)};
	${({ lineHeight }) => (lineHeight ? `line-height: ${lineHeight};` : null)}
	${({ underline }) => (underline ? 'text-decoration: underline;' : null)}

	width: ${({ width }) => width ?? '100%'};
	text-overflow: ellipsis;
	overflow: hidden;

	${({ line }) =>
		line
			? `
				word-break: break-word; 
				display: -webkit-box; 
				-webkit-line-clamp: ${line}; 
				-webkit-box-orient: vertical;
			`
			: 'white-space: nowrap;'}
`

export const EllipsisH6 = styled.h6`
	color: ${({ color, theme }) => (theme.color?.[color] !== undefined ? theme.color[color] : theme.color.text)};
	${({ lineHeight }) => (lineHeight ? `line-height: ${lineHeight};` : null)}
	${({ underline }) => (underline ? 'text-decoration: underline;' : null)}


	width: ${({ width }) => width ?? '100%'};
	text-overflow: ellipsis;
	overflow: hidden;

	${({ line }) =>
		line
			? `
				word-break: break-word; 
				display: -webkit-box; 
				-webkit-line-clamp: ${line}; 
				-webkit-box-orient: vertical;
			`
			: 'white-space: nowrap;'}
`

export default Text
