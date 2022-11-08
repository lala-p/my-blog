import { useRouter } from 'next/router'
import styled from 'styled-components'
import { CodeBlock, dracula } from 'react-code-blocks'

const code = `import { useState } from 'react'

const Test = (props) => {

	const [value, setValue] = useState('hello')


	return (
		<div>
			<h1>Test</h1>
		
		</div>
	)
}


export default Test
`

const Container = styled.div`
	width: 50rem;
`

const Span1 = styled.span`
	display: block;
`

const Span2 = styled.span`
	display: inline-block;
`

const Test = (props) => {
	const router = useRouter()

	return (
		<div>
			<h1>{router.query.page}</h1>
			<div>
				<Span1>asdadasd</Span1>
			</div>
			<div>
				<Span2>asdadasd</Span2>
			</div>

			{/* <Container>
				<CodeBlock text={code} language={'jsx'} showLineNumbers={true} theme={dracula} />
			</Container> */}
		</div>
	)
}

export default Test
