import React from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import Link from 'next/link'

const ATag = styled.a`
	pointer-events: ${({ event }) => (event ? 'auto' : 'none')};
`

const SwitchLink = (props) => {
	const router = useRouter()

	const isSetOnEvent = typeof props.onEvent === 'function'
	const isSetOffEvent = typeof props.offEvent === 'function'

	return (
		<Link href={props.href} passHref={props.state && typeof props.passHref === 'boolean' && props.passHref}>
			<ATag
				onClick={(e) => {
					e.preventDefault()
					if (props.state) {
						if (isSetOnEvent) {
							props.onEvent()
						}
						router.push(props.href)
					} else if (isSetOffEvent) {
						props.offEvent()
					}
				}}
				event={props.state || isSetOffEvent}
			>
				{props.children}
			</ATag>
		</Link>
	)
}

export default SwitchLink
