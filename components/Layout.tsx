import React from 'react'
import Head from 'next/head'
import { css } from 'linaria'
import { styled } from 'linaria/react'
import { Header } from './Header'
import { LoadingIcon } from './Icons'

interface LayoutProps {
  title?: string
  loading?: boolean
  justifyContent: string
}

export const Layout: React.FC<LayoutProps> = ({ title, justifyContent, loading, children }) => {
  return (
    <Main justifyContent={justifyContent}>
      <Head>
        <title>{title}</title>
        {GlobalStyles}
      </Head>
      {loading ?
        <LoadingIcon width="46px" height="46px" /> :
        <React.Fragment>
          <Header title={title} />
          {children}
        </React.Fragment>
      }
    </Main>
  )
}

Layout.defaultProps = {
  title: 'Telegram Stickers',
  loading: false
}

const GlobalStyles = css`
  :global() {
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@600&display=swap');

    * {
      margin: 0;
      border: 0 solid;
      box-sizing: border-box;
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
  }
`

const Main = styled.main<LayoutProps>`
  height: inherit;
  color: white;
  background: #0E1621;
  flex: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: ${(props) => props.justifyContent};
  padding: 1rem;
`