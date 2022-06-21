import React from 'react'
import { ThemeProvider } from 'styled-components'

import wrapper from '../wrapper'
import { lightTheme, nightTheme } from '../styles/theme'
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {

  return (
    <ThemeProvider theme={nightTheme}>
      <Component {...pageProps} />  
    </ThemeProvider>
  ) 
}

export default wrapper.withRedux(MyApp)
