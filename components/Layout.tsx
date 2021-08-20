import Head from 'next/head'
import { css } from 'linaria'
import { styled } from 'linaria/react'

interface LayoutProps {
  title?: string
  justifyContent: string
}

export const Layout: React.FC<LayoutProps> = ({ title, justifyContent, children }) => {
  return (
    <Main justifyContent={justifyContent}>
      <Head>
        <title>{title}</title>
        {GlobalStyles}
      </Head>
      {children}
    </Main>
  )
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

Layout.defaultProps = {
  title: 'Telegram Stickers'
}