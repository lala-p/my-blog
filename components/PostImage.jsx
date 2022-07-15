import styled from 'styled-components'
import Image from 'next/image'

const ImageBox = styled.div`
	display: flex;
	justify-content: center;

	width: 100%;
`

const PostImage = (props) => {
	return (
		<ImageBox>
			<Image src={props.img} layout="intrinsic" width={props.width} height={props.height} alt="asd" />
		</ImageBox>
	)
}

export default PostImage
