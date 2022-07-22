import styled from 'styled-components'
import Image from 'next/image'

import SelectNone from './SelectNone'
import Box from './Box'

const ImageBox = styled(Box)`
	position: relative;

	width: ${({ width }) => width ?? '100px'};
	height: ${({ height }) => height ?? '100px'};

	/* ${(props) => (props.cursorPoint === true ? 'cursor: pointer;' : null)} */
`

const IconBox = (props) => {
	return (
		<ImageBox width={props.width} height={props.height} selectNone>
			<Image src={props.img} layout="fill" objectFit="cover" />
		</ImageBox>
	)
}

// export const SelectIconBox = (props) => {
// 	return (
// 		<ImageBox width={props.width} height={props.height} cursorPoint={props.cursorPoint}>
// 			<Image src={props.img} layout="fill" objectFit="cover" />
// 		</ImageBox>
// 	)
// }

export default IconBox
