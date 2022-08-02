import styled from 'styled-components'

import Box from './Box'

import useTheme from '../hooks/useTheme'

export const IconBox = styled(Box)`
	${({ absolute }) => (absolute ? 'position: absolute; display: inline-block;' : null)}

	width: ${({ width }) => width ?? '3rem'};
	height: ${({ height }) => height ?? '3rem'};
`

export const IconText = styled(Box)`
	display: flex;
	flex-direction: row;

	align-items: center;
	line-height: ${({ lineHeight }) => lineHeight ?? '1rem'};
`

//=============================================================

export const Icon_Home = (props) => {
	const [getColor] = useTheme()

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			version="1.1"
			width={props.width ?? '100%'}
			height={props.height ?? '100%'}
			viewBox="0 0 24 24"
			preserveAspectRatio="none"
		>
			<g>
				<path
					d="M23.121,9.069,15.536,1.483a5.008,5.008,0,0,0-7.072,0L.879,9.069A2.978,2.978,0,0,0,0,11.19v9.817a3,3,0,0,0,3,3H21a3,3,0,0,0,3-3V11.19A2.978,2.978,0,0,0,23.121,9.069ZM15,22.007H9V18.073a3,3,0,0,1,6,0Zm7-1a1,1,0,0,1-1,1H17V18.073a5,5,0,0,0-10,0v3.934H3a1,1,0,0,1-1-1V11.19a1.008,1.008,0,0,1,.293-.707L9.878,2.9a3.008,3.008,0,0,1,4.244,0l7.585,7.586A1.008,1.008,0,0,1,22,11.19Z"
					fill={getColor(props.color) ?? getColor('text')}
				/>
			</g>
		</svg>
	)
}

export const Icon_File = (props) => {
	const [getColor] = useTheme()

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			version="1.1"
			width={props.width ?? '100%'}
			height={props.height ?? '100%'}
			viewBox="0 0 24 24"
			preserveAspectRatio="none"
		>
			<g>
				<path
					d="m7 12h10v2h-10zm0 6h7v-2h-7zm15-10.414v16.414h-20v-21a3 3 0 0 1 3-3h9.414zm-7-.586h3.586l-3.586-3.586zm5 15v-13h-7v-7h-8a1 1 0 0 0 -1 1v19z"
					fill={getColor(props.color) ?? getColor('text')}
				/>
			</g>
		</svg>
	)
}

export const Icon_Search = (props) => {
	const [getColor] = useTheme()

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			version="1.1"
			width={props.width ?? '100%'}
			height={props.height ?? '100%'}
			viewBox="0 0 24 24"
			preserveAspectRatio="none"
		>
			<g>
				<path
					d="M23.707,22.293l-5.969-5.969a10.016,10.016,0,1,0-1.414,1.414l5.969,5.969a1,1,0,0,0,1.414-1.414ZM10,18a8,8,0,1,1,8-8A8.009,8.009,0,0,1,10,18Z"
					fill={getColor(props.color) ?? getColor('text')}
				/>
			</g>
		</svg>
	)
}

export const Icon_Megaphone = (props) => {
	const [getColor] = useTheme()

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			version="1.1"
			width={props.width ?? '100%'}
			height={props.height ?? '100%'}
			viewBox="0 0 24 24"
			preserveAspectRatio="none"
		>
			<g>
				<path
					d="m17 0a1 1 0 0 0 -1 1c0 2.949-2.583 4-5 4h-7a4 4 0 0 0 -4 4v2a3.979 3.979 0 0 0 1.514 3.109l3.572 7.972a3.233 3.233 0 0 0 2.953 1.919 2.982 2.982 0 0 0 2.72-4.2l-2.2-4.8h2.441c2.417 0 5 1.051 5 4a1 1 0 0 0 2 0v-18a1 1 0 0 0 -1-1zm-8.063 20.619a.983.983 0 0 1 -.898 1.381 1.232 1.232 0 0 1 -1.126-.734l-2.808-6.266h2.254zm7.063-6.019a7.723 7.723 0 0 0 -5-1.6h-7a2 2 0 0 1 -2-2v-2a2 2 0 0 1 2-2h7a7.723 7.723 0 0 0 5-1.595zm7.9.852a1 1 0 0 1 -1.342.448l-2-1a1 1 0 0 1 .894-1.79l2 1a1 1 0 0 1 .448 1.337zm-3.79-9a1 1 0 0 1 .448-1.342l2-1a1 1 0 1 1 .894 1.79l-2 1a1 1 0 0 1 -1.342-.448zm-.11 3.548a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1 -1-1z"
					fill={getColor(props.color) ?? getColor('text')}
				/>
			</g>
		</svg>
	)
}

export const Icon_User = (props) => {
	const [getColor] = useTheme()
	const fillColor = getColor(props.color) ?? getColor('text')

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			version="1.1"
			width={props.width ?? '100%'}
			height={props.height ?? '100%'}
			viewBox="0 0 24 24"
			preserveAspectRatio="none"
		>
			<g>
				<path
					d="M12,12A6,6,0,1,0,6,6,6.006,6.006,0,0,0,12,12ZM12,2A4,4,0,1,1,8,6,4,4,0,0,1,12,2Z"
					fill={fillColor}
				/>
				<path
					d="M12,14a9.01,9.01,0,0,0-9,9,1,1,0,0,0,2,0,7,7,0,0,1,14,0,1,1,0,0,0,2,0A9.01,9.01,0,0,0,12,14Z"
					fill={fillColor}
				/>
			</g>
		</svg>
	)
}

export const Icon_Clock = (props) => {
	const [getColor] = useTheme()

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			version="1.1"
			width={props.width ?? '100%'}
			height={props.height ?? '100%'}
			viewBox="0 0 24 24"
			preserveAspectRatio="none"
		>
			<g>
				<path
					d="M12,24C5.383,24,0,18.617,0,12S5.383,0,12,0s12,5.383,12,12-5.383,12-12,12Zm0-22C6.486,2,2,6.486,2,12s4.486,10,10,10,10-4.486,10-10S17.514,2,12,2Zm5,10c0-.553-.447-1-1-1h-3V6c0-.553-.448-1-1-1s-1,.447-1,1v6c0,.553,.448,1,1,1h4c.553,0,1-.447,1-1Z"
					fill={getColor(props.color) ?? getColor('text')}
				/>
			</g>
		</svg>
	)
}

export const Icon_Refresh = (props) => {
	const [getColor] = useTheme()
	const fillColor = getColor(props.color) ?? getColor('text')

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			version="1.1"
			width={props.width ?? '100%'}
			height={props.height ?? '100%'}
			viewBox="0 0 24 24"
			preserveAspectRatio="none"
		>
			<g>
				<path
					d="M12,2a10.032,10.032,0,0,1,7.122,3H16a1,1,0,0,0-1,1h0a1,1,0,0,0,1,1h4.143A1.858,1.858,0,0,0,22,5.143V1a1,1,0,0,0-1-1h0a1,1,0,0,0-1,1V3.078A11.981,11.981,0,0,0,.05,10.9a1.007,1.007,0,0,0,1,1.1h0a.982.982,0,0,0,.989-.878A10.014,10.014,0,0,1,12,2Z"
					fill={fillColor}
				/>
				<path
					d="M22.951,12a.982.982,0,0,0-.989.878A9.986,9.986,0,0,1,4.878,19H8a1,1,0,0,0,1-1H9a1,1,0,0,0-1-1H3.857A1.856,1.856,0,0,0,2,18.857V23a1,1,0,0,0,1,1H3a1,1,0,0,0,1-1V20.922A11.981,11.981,0,0,0,23.95,13.1a1.007,1.007,0,0,0-1-1.1Z"
					fill={fillColor}
				/>
			</g>
		</svg>
	)
}

export const Icon_Pencil = (props) => {
	const [getColor] = useTheme()

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			version="1.1"
			width={props.width ?? '100%'}
			height={props.height ?? '100%'}
			viewBox="0 0 24 24"
			preserveAspectRatio="none"
		>
			<g>
				<path
					d="M22.853,1.148a3.626,3.626,0,0,0-5.124,0L1.465,17.412A4.968,4.968,0,0,0,0,20.947V23a1,1,0,0,0,1,1H3.053a4.966,4.966,0,0,0,3.535-1.464L22.853,6.271A3.626,3.626,0,0,0,22.853,1.148ZM5.174,21.122A3.022,3.022,0,0,1,3.053,22H2V20.947a2.98,2.98,0,0,1,.879-2.121L15.222,6.483l2.3,2.3ZM21.438,4.857,18.932,7.364l-2.3-2.295,2.507-2.507a1.623,1.623,0,1,1,2.295,2.3Z"
					fill={getColor(props.color) ?? getColor('text')}
				/>
			</g>
		</svg>
	)
}

export const Icon_Left = (props) => {
	const [getColor] = useTheme()

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			version="1.1"
			width={props.width ?? '100%'}
			height={props.height ?? '100%'}
			viewBox="0 0 24 24"
			preserveAspectRatio="none"
		>
			<g>
				<path
					d="M17.17,24a1,1,0,0,1-.71-.29L8.29,15.54a5,5,0,0,1,0-7.08L16.46.29a1,1,0,1,1,1.42,1.42L9.71,9.88a3,3,0,0,0,0,4.24l8.17,8.17a1,1,0,0,1,0,1.42A1,1,0,0,1,17.17,24Z"
					fill={getColor(props.color) ?? getColor('text')}
				/>
			</g>
		</svg>
	)
}

export const Icon_Right = (props) => {
	const [getColor] = useTheme()

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			version="1.1"
			width={props.width ?? '100%'}
			height={props.height ?? '100%'}
			viewBox="0 0 24 24"
			preserveAspectRatio="none"
		>
			<g>
				<path
					d="M7,24a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.42l8.17-8.17a3,3,0,0,0,0-4.24L6.29,1.71A1,1,0,0,1,7.71.29l8.17,8.17a5,5,0,0,1,0,7.08L7.71,23.71A1,1,0,0,1,7,24Z"
					fill={getColor(props.color) ?? getColor('text')}
				/>
			</g>
		</svg>
	)
}

export const Icon_DoubleLeft = (props) => {
	const [getColor] = useTheme()
	const fillColor = getColor(props.color) ?? getColor('text')

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			version="1.1"
			width={props.width ?? '100%'}
			height={props.height ?? '100%'}
			viewBox="0 0 24 24"
			preserveAspectRatio="none"
		>
			<g>
				<path
					d="M12,24a1,1,0,0,1-.71-.29L3.12,15.54a5,5,0,0,1,0-7.08L11.29.29a1,1,0,1,1,1.42,1.42L4.54,9.88a3,3,0,0,0,0,4.24l8.17,8.17a1,1,0,0,1,0,1.42A1,1,0,0,1,12,24Z"
					fill={fillColor}
				/>
				<path
					d="M22,24a1,1,0,0,1-.71-.29l-9.58-9.59a3,3,0,0,1,0-4.24L21.29.29a1,1,0,1,1,1.42,1.42l-9.59,9.58a1,1,0,0,0,0,1.42l9.59,9.58a1,1,0,0,1,0,1.42A1,1,0,0,1,22,24Z"
					fill={fillColor}
				/>
			</g>
		</svg>
	)
}

export const Icon_DoubleRight = (props) => {
	const [getColor] = useTheme()
	const fillColor = getColor(props.color) ?? getColor('text')

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			version="1.1"
			width={props.width ?? '100%'}
			height={props.height ?? '100%'}
			viewBox="0 0 24 24"
			preserveAspectRatio="none"
		>
			<g>
				<path
					d="M11.83,24a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.42l8.17-8.17a3,3,0,0,0,0-4.24L11.12,1.71A1,1,0,1,1,12.54.29l8.17,8.17a5,5,0,0,1,0,7.08l-8.17,8.17A1,1,0,0,1,11.83,24Z"
					fill={fillColor}
				/>
				<path
					d="M1.83,24a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.42l9.59-9.58a1,1,0,0,0,0-1.42L1.12,1.71A1,1,0,0,1,2.54.29l9.58,9.59a3,3,0,0,1,0,4.24L2.54,23.71A1,1,0,0,1,1.83,24Z"
					fill={fillColor}
				/>
			</g>
		</svg>
	)
}
