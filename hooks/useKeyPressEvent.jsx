import { useEffect, useState, useCallback } from 'react'

const useKeyPressState = (key) => {
	const [isPress, setIsPress] = useState(false)

	const down = useCallback((e) => {
		if (e.key === key) {
			setIsPress(true)
		}
	}, [])

	const up = useCallback((e) => {
		if (e.key === key) {
			setIsPress(false)
		}
	}, [])

	useEffect(() => {
		document.addEventListener('keydown', down)
		document.addEventListener('keyup', up)

		return () => {
			document.removeEventListener('keydown', down)
			document.removeEventListener('keyup', up)
		}
	}, [])

	return isPress
}

export default useKeyPressState
