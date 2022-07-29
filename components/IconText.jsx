import styled from 'styled-components'
import Image from 'next/image'

import Box from './Box'

export const IconTextBox = styled(Box)`
	display: -webkit-box;
	width: 100%;

	/* display: flex;
	flex-direction: row; */

	/* ${({ cursorPoint }) => (cursorPoint === true ? 'cursor: pointer;' : null)} */
`
const ImageBox = styled(Box)`
	position: relative;
	top: ${({ top }) => top ?? '0'};

	width: ${({ width }) => width ?? '1rem'};
	height: ${({ height }) => height ?? '1rem'};

	/* margin-right: ${({ between }) => between ?? '0.625rem'}; */
`

export const IconImage = (props) => {
	return (
		<ImageBox width={props.width} height={props.height} top={props.top} selectNone>
			<Image src={props.img} layout="fill" objectFit="cover" />
		</ImageBox>
	)
}

export const TextContent = styled.div`
	width: 100%;
	padding-top: ${({ textTop }) => textTop ?? '0'};
	padding-left: ${({ between }) => between ?? '0'};
`

// const IconText = (props) => {
// 	return (
// 		<ContainerBox title={props.title ?? null} onClick={props.onClick ?? null} cursorPoint={props.cursorPoint}>
// 			<ImageBox width={props.width} height={props.height} top={props.top} between={props.between} selectNone>
// 				<Image src={props.img} layout="fill" objectFit="cover" />
// 			</ImageBox>
// 			<TextContent top={props.textTop} left={props.between}>
// 				{props.children}
// 			</TextContent>
// 		</ContainerBox>
// 	)
// }

// export default IconText
