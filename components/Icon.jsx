import styled from 'styled-components'

import useTheme from '../hooks/useTheme'

export const IconClock = (props) => {
	const [getColor] = useTheme()

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			version="1.1"
			width="10rem"
			height="10rem"
			viewBox="0 0 24 24"
			xmlSpace="preserve"
		>
			<g>
				<path
					xmlns="http://www.w3.org/2000/svg"
					d="M12,24C5.383,24,0,18.617,0,12S5.383,0,12,0s12,5.383,12,12-5.383,12-12,12Zm0-22C6.486,2,2,6.486,2,12s4.486,10,10,10,10-4.486,10-10S17.514,2,12,2Zm5,10c0-.553-.447-1-1-1h-3V6c0-.553-.448-1-1-1s-1,.447-1,1v6c0,.553,.448,1,1,1h4c.553,0,1-.447,1-1Z"
					fill={getColor(props.color) ?? '#ffffff'}
					data-original="#000000"
				/>
			</g>
		</svg>
	)
}
