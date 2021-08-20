import { styled } from 'linaria/react'
import StringReplace from 'react-string-replace'

interface HeaderProps {
  title: string
}

export const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <Title>
      {StringReplace(title, /@(\w+)/g, (match, key) => (
        <a
          key={key}
          href={`https://t.me/${match}`}
          target="_blank"
          rel="noreferrer"
        >
          {match}
        </a>
      ))}
    </Title>
  )
}

const Title = styled.h1`
  text-align: center;
`