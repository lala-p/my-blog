import { useSelector } from 'react-redux'
import theme from '@styles/theme'

const useTheme = () => {
	const currentTheme = useSelector((state) => state.theme.currentTheme)

	const getColor = (colorName) => {
		return theme[currentTheme].color[colorName]
	}

	return [getColor]
}

export default useTheme
