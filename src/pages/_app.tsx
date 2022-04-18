import createCache from '@emotion/cache'
import { css } from '@emotion/react'
import { CacheProvider, Global } from '@emotion/react'
import type { AppProps } from 'next/app'

const cache = createCache({ key: 'next' })

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CacheProvider value={cache}>
      <Global styles={globalStyles} />
      <Component {...pageProps} />
    </CacheProvider>
  )
}

const globalStyles = css`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@600&display=swap');

  * {
    margin: 0;
    border: 0 solid;
    box-sizing: border-box;
  }

  ::selection {
    color: #0E1621;
    background-color: #FFF;
  }

  #__next {
    height: inherit;
  }

  html, body {
    height: 100%;
    display: flex;
    flex-direction: column;
    font-family: 'Inter', sans-serif;
  }

  a {
    color: #429BDB;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`
