import styled from 'styled-components'
import Image from 'next/image'

const ImageBox = styled.div`
	text-align: center;
	font-size: 0;
	margin: 3rem 0;
`

const PostImage = (props) => {
	return (
		<ImageBox>
			<Image src={props.src} width={props.width} height={props.height} title={props.title} alt={props.alt} priority />
		</ImageBox>
	)
}

export default PostImage
