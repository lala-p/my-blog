import React from 'react'
import '../styles/globals.css'
import wrapper from '../wrapper'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default wrapper.withRedux(MyApp)
