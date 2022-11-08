import styled from 'styled-components'
import { CodeBlock, dracula, androidstudio } from 'react-code-blocks'

const Container = styled.div`
	margin: 3rem 0;
`

const PostCodeBlock = (props) => {
	return (
		<Container>
			<CodeBlock text={props.text} language={props.language} showLineNumbers={true} theme={androidstudio} />
		</Container>
	)
}

export default PostCodeBlock
