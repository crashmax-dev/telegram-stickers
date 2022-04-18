import React from 'react'
import Head from 'next/head'
import styled from '@emotion/styled'
import { Header } from './Header'
import { LoadingIcon } from './Icons'
import { GithubCorner } from './GithubCorner'

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
      </Head>
      {loading ?
        <LoadingIcon style={{ width: '46px', height: '46px' }} /> :
        <React.Fragment>
          <GithubCorner />
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
