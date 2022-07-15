import React from 'react'
import { ThemeProvider } from 'styled-components'

import wrapper from '../wrapper'
import { lightTheme, nightTheme } from '../styles/theme'
import GlobalStyle from '../styles/GlobalStyle'

function MyApp({ Component, pageProps }) {
	return (
		<ThemeProvider theme={nightTheme}>
			<GlobalStyle />
			<Component {...pageProps} />
		</ThemeProvider>
	)
}

export default wrapper.withRedux(MyApp)
