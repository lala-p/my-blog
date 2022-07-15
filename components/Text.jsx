import Image from 'next/image'
import styled from 'styled-components'

export const Text = styled.span`
	font-size: ${(props) => props.size || '1rem'};
	color: ${(props) => props.color || props.theme.color3};

	${(props) => (props.ellipsis ? 'white-space: nowrap; overflow: hidden; text-overflow: ellipsis;' : null)}
	${(props) => (props.wrap ? 'word-wrap: break-word;' : null)}
`

export const BoldText = styled(Text)`
	font-weight: ${(props) => props.weight || '600'};
`

export const PostParagraph = styled.div`
	width: 100%;
	// word-break: keep-all;

	word-wrap: break-word;
	line-height: 180%;
	margin-bottom: 20px;
`
