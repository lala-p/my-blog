import useTheme from '../hooks/useTheme'

export const Icon_Home = (props) => {
	const [getColor] = useTheme()

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			version="1.1"
			width={props.width ?? '3rem'}
			height={props.height ?? '3rem'}
			viewBox="0 0 24 24"
		>
			<g>
				<path
					xmlns="http://www.w3.org/2000/svg"
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
			width={props.width ?? '3rem'}
			height={props.height ?? '3rem'}
			viewBox="0 0 24 24"
		>
			<g>
				<path
					xmlns="http://www.w3.org/2000/svg"
					d="m7 12h10v2h-10zm0 6h7v-2h-7zm15-10.414v16.414h-20v-21a3 3 0 0 1 3-3h9.414zm-7-.586h3.586l-3.586-3.586zm5 15v-13h-7v-7h-8a1 1 0 0 0 -1 1v19z"
					fill="#e8e1b3"
					data-original="#000000"
				/>
			</g>
		</svg>
	)
}

export const Icon_Search = (props) => {
	const [getColor] = useTheme()

	return <></>
}

export const Icon_MegaPhone = (props) => {
	const [getColor] = useTheme()

	return <></>
}

export const Icon_User = (props) => {
	const [getColor] = useTheme()

	return <></>
}

export const Icon_Clock = (props) => {
	const [getColor] = useTheme()

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			version="1.1"
			width={props.width ?? '3rem'}
			height={props.height ?? '3rem'}
			viewBox="0 0 24 24"
		>
			<g>
				<path
					xmlns="http://www.w3.org/2000/svg"
					d="M12,24C5.383,24,0,18.617,0,12S5.383,0,12,0s12,5.383,12,12-5.383,12-12,12Zm0-22C6.486,2,2,6.486,2,12s4.486,10,10,10,10-4.486,10-10S17.514,2,12,2Zm5,10c0-.553-.447-1-1-1h-3V6c0-.553-.448-1-1-1s-1,.447-1,1v6c0,.553,.448,1,1,1h4c.553,0,1-.447,1-1Z"
					fill={getColor(props.color) ?? getColor('text')}
				/>
			</g>
		</svg>
	)
}

export const Icon_Refresh = (props) => {
	const [getColor] = useTheme()

	return <></>
}

export const Icon_Pencil = (props) => {
	const [getColor] = useTheme()

	return <></>
}

export const Icon_Left = (props) => {
	const [getColor] = useTheme()

	return <></>
}

export const Icon_Right = (props) => {
	const [getColor] = useTheme()

	return <></>
}

export const Icon_DoubleLeft = (props) => {
	const [getColor] = useTheme()

	return <></>
}

export const Icon_DoubleRight = (props) => {
	const [getColor] = useTheme()

	return <></>
}
