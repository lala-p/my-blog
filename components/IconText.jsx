import styled from 'styled-components'
import Image from 'next/image'

import SelectNone from './SelectNone'
import { Text } from './Text'

const ContainerBox = styled.div`
	display: inline-flex;
	flex-direction: row;

	${(props) => (props.cursorPoint === true ? 'cursor: pointer;' : null)}
`
const ImageBox = styled.div`
	position: relative;
	top: ${(props) => props.top || '0'};

	width: ${(props) => props.width || '0.625rem'};
	height: ${(props) => props.height || '0.625rem'};

	margin-right: ${(props) => props.between || '0.625rem'};
`

const IconText = (props) => {
	return (
		<ContainerBox cursorPoint={props.cursorPoint}>
			<SelectNone>
				<ImageBox width={props.width} height={props.height} top={props.top} between={props.between}>
					<Image src={props.img} layout="fill" objectFit="cover" />
				</ImageBox>
			</SelectNone>
			{/* <Text size={props.fontSize} color={props.color}>
				{props.children}
			</Text> */}
			{props.children} {/* text components Text, h tag... */}
		</ContainerBox>
	)
}

export default IconText
