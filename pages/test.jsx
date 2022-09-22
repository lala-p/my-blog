import { useEffect, useState } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { useRouter } from 'next/router'

import useKeyPressState from '../hooks/useKeyPressEvent'

import SwitchLink from '../components/SwitchLink'

const Example1 = styled.div`
	color: yellowgreen;
`

const Test = () => {
	const ctrlPress = useKeyPressState('Control')

	const router = useRouter()

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
			<Link href="/" passHref>
				<a>
					<Example1>zxczxczxczxczxczxczxc</Example1>
				</a>
			</Link>

			{/* <SwitchLink href="/" state={ctrlPress}>
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
			<br />
			<br />
			<br />
			<h1
				onClick={() => {
					router.replace('/search?q=react').then(() => {
						router.push('/post/file5')
					})
				}}
			>
				zxczxczxczxczxc
			</h1> */}
		</div>
	)
}

export default Test
