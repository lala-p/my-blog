import { useEffect, useState } from 'react'
import styled from 'styled-components'
import Link from 'next/link'

import useKeyPressState from '../hooks/useKeyPressEvent'

import SwitchLink from '../components/SwitchLink'

const Example1 = styled.div`
	color: yellowgreen;
`

const Test = () => {
	const ctrlPress = useKeyPressState('Control')

	// useEffect(() => {
	// document.addEventListener('keydown', function (e) {
	// 	console.log(e.key)
	// })
	// })

	return (
		<div>
			<h1>ctrl</h1>
			<a href="/">asjkdlfa;skdfj;lskdjf;alksdjf</a>
			<br />
			{ctrlPress ? 'ctrl' : 'no'}
			<br />
			<Link href="/" passHref={false}>
				<a>
					<Example1>zxczxczxczxczxczxczxc</Example1>
				</a>
			</Link>
			<SwitchLink href="/" state={ctrlPress}>
				<Example1>zxczxczxczxczxczxczxc</Example1>
			</SwitchLink>
			<br />
			<br />
			<br />
			<br />
			<br />
			<SwitchLink href="/" state={ctrlPress} passHref>
				<Example1>zxczxczxczxczxczxczxc</Example1>
			</SwitchLink>
		</div>
	)
}

export default Test
