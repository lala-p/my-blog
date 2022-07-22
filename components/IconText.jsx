import styled from 'styled-components'
import Image from 'next/image'

// import SelectNone from './SelectNone'
import Text from './Text'
import Box, { PaddingBox } from './Box'

const ContainerBox = styled.div`
	display: flex;
	flex-direction: row;

	${({ cursorPoint }) => (cursorPoint === true ? 'cursor: pointer;' : null)}
`
const ImageBox = styled.div`
	position: relative;
	top: ${({ top }) => top ?? '0'};

	width: ${({ width }) => width ?? '1rem'};
	height: ${({ height }) => height ?? '1rem'};

	margin-right: ${({ between }) => between ?? '0.625rem'};
`

const IconText = (props) => {
	return (
		<ContainerBox title={props.title ?? null} onClick={props.onClick ?? null} cursorPoint={props.cursorPoint}>
			<ImageBox width={props.width} height={props.height} top={props.top} between={props.between} selectNone>
				<Image src={props.img} layout="fill" objectFit="cover" />
			</ImageBox>
			<PaddingBox top={props.textTop}>{props.children}</PaddingBox>
		</ContainerBox>
	)
}

export default IconText
