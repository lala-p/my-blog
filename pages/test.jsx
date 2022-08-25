import { useEffect, useState } from 'react'

const Test = () => {
	const [value, setValue] = useState(123)

	useEffect(() => {
		console.log(typeof value)
	})

	return (
		<div>
			<input onChange={(e) => setValue(Number(e.target.value))} />
		</div>
	)
}

export default Test
